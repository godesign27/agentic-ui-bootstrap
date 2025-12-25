(function() {
  let uiKitData = null;
  let activeCategory = 'all';
  let activeComponent = null;
  let activeView = 'components';
  let searchQuery = '';

  const elements = {
    categoriesList: null,
    componentGrid: null,
    searchInput: null,
    searchContainer: null,
    detailPanel: null,
    resultsInfo: null,
    content: null,
    sidebar: null,
    overlay: null,
    mobileToggle: null,
    viewTabs: null,
    componentsView: null,
    colorsView: null,
    colorsScales: null,
    pageTitle: null,
    pageSubtitle: null
  };

  async function init() {
    cacheElements();
    bindEvents();
    await loadData();
    renderCategories();
    renderComponents();
    renderBootstrapColors();
    renderBrandSwatches();
  }

  function cacheElements() {
    elements.categoriesList = document.getElementById('categories-list');
    elements.componentGrid = document.getElementById('component-grid');
    elements.searchInput = document.getElementById('search-input');
    elements.searchContainer = document.getElementById('search-container');
    elements.detailPanel = document.getElementById('detail-panel');
    elements.resultsInfo = document.getElementById('results-info');
    elements.content = document.getElementById('main-content');
    elements.sidebar = document.getElementById('sidebar');
    elements.overlay = document.getElementById('sidebar-overlay');
    elements.mobileToggle = document.getElementById('mobile-toggle');
    elements.viewTabs = document.getElementById('view-tabs');
    elements.componentsView = document.getElementById('components-view');
    elements.colorsView = document.getElementById('colors-view');
    elements.colorsScales = document.getElementById('colors-scales');
    elements.pageTitle = document.getElementById('page-title');
    elements.pageSubtitle = document.getElementById('page-subtitle');
  }

  function bindEvents() {
    elements.searchInput.addEventListener('input', handleSearch);
    document.getElementById('detail-close').addEventListener('click', closeDetail);

    if (elements.mobileToggle) {
      elements.mobileToggle.addEventListener('click', toggleSidebar);
    }
    if (elements.overlay) {
      elements.overlay.addEventListener('click', closeSidebar);
    }

    elements.viewTabs.querySelectorAll('.uikit-view-tab').forEach(tab => {
      tab.addEventListener('click', () => switchView(tab.dataset.view));
    });

    document.querySelectorAll('.uikit-brand-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => toggleBrandTheme(btn.dataset.theme));
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && activeComponent) {
        closeDetail();
      }
    });
  }

  async function loadData() {
    try {
      const response = await fetch('/ui-kit/UI_KIT_INDEX.json');
      if (!response.ok) throw new Error('Failed to load UI Kit data');
      uiKitData = await response.json();
      if (document.getElementById('bootstrap-version')) {
        document.getElementById('bootstrap-version').textContent = 'Bootstrap 5.3.8';
      }
    } catch (error) {
      console.error('Error loading UI Kit data:', error);
      elements.componentGrid.innerHTML = `
        <div class="uikit-empty">
          <div class="uikit-empty-icon">!</div>
          <h3 class="uikit-empty-title">Failed to load components</h3>
          <p class="uikit-empty-desc">Please check your connection and try again.</p>
        </div>
      `;
    }
  }

  function switchView(view) {
    activeView = view;

    elements.viewTabs.querySelectorAll('.uikit-view-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.view === view);
    });

    if (view === 'components') {
      elements.colorsView.style.display = 'none';
      elements.categoriesList.style.display = 'block';
      elements.searchContainer.style.display = 'block';
      elements.pageTitle.textContent = 'Component Library';
      elements.pageSubtitle.textContent = 'Browse, preview, and copy Bootstrap 5.3 components for your project';
      closeDetail();
    } else {
      elements.componentsView.style.display = 'none';
      elements.colorsView.style.display = 'block';
      elements.searchContainer.style.display = 'none';
      elements.categoriesList.style.display = 'none';
      elements.pageTitle.textContent = 'Colors';
      elements.pageSubtitle.textContent = 'Bootstrap theme colors and custom brand color scales';
      closeDetail();
    }

    closeSidebar();
  }

  function toggleBrandTheme(theme) {
    document.querySelectorAll('.uikit-brand-toggle-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });

    if (theme === 'dark') {
      elements.colorsScales.classList.add('dark-preview');
    } else {
      elements.colorsScales.classList.remove('dark-preview');
    }
  }

  function renderBootstrapColors() {
    const themeColors = [
      { name: 'Primary', token: '--bs-primary', color: '#0d6efd' },
      { name: 'Secondary', token: '--bs-secondary', color: '#6c757d' },
      { name: 'Success', token: '--bs-success', color: '#198754' },
      { name: 'Danger', token: '--bs-danger', color: '#dc3545' },
      { name: 'Warning', token: '--bs-warning', color: '#ffc107' },
      { name: 'Info', token: '--bs-info', color: '#0dcaf0' },
      { name: 'Light', token: '--bs-light', color: '#f8f9fa' },
      { name: 'Dark', token: '--bs-dark', color: '#212529' }
    ];

    const grays = [
      { name: 'White', token: '--bs-white', color: '#ffffff' },
      { name: 'Gray 100', token: '--bs-gray-100', color: '#f8f9fa' },
      { name: 'Gray 200', token: '--bs-gray-200', color: '#e9ecef' },
      { name: 'Gray 300', token: '--bs-gray-300', color: '#dee2e6' },
      { name: 'Gray 400', token: '--bs-gray-400', color: '#ced4da' },
      { name: 'Gray 500', token: '--bs-gray-500', color: '#adb5bd' },
      { name: 'Gray 600', token: '--bs-gray-600', color: '#6c757d' },
      { name: 'Gray 700', token: '--bs-gray-700', color: '#495057' },
      { name: 'Gray 800', token: '--bs-gray-800', color: '#343a40' },
      { name: 'Gray 900', token: '--bs-gray-900', color: '#212529' },
      { name: 'Black', token: '--bs-black', color: '#000000' }
    ];

    const themeGrid = document.getElementById('bootstrap-theme-colors');
    const graysGrid = document.getElementById('bootstrap-grays');

    if (themeGrid) {
      themeGrid.innerHTML = '';
      themeColors.forEach(item => {
        const swatch = createColorSwatch(item.name, item.token, item.color);
        themeGrid.appendChild(swatch);
      });
    }

    if (graysGrid) {
      graysGrid.innerHTML = '';
      grays.forEach(item => {
        const swatch = createColorSwatch(item.name, item.token, item.color);
        graysGrid.appendChild(swatch);
      });
    }
  }

  function createColorSwatch(name, token, color) {
    const swatch = document.createElement('div');
    swatch.className = 'uikit-brand-swatch';

    const colorDiv = document.createElement('div');
    colorDiv.className = 'uikit-brand-swatch-color';
    colorDiv.style.background = color;
    colorDiv.addEventListener('click', () => copyToken(token, colorDiv));

    const infoDiv = document.createElement('div');
    infoDiv.className = 'uikit-brand-swatch-info';
    infoDiv.innerHTML = `
      <div class="uikit-brand-swatch-label">${name}</div>
      <div class="uikit-brand-swatch-token">${token}</div>
    `;

    swatch.appendChild(colorDiv);
    swatch.appendChild(infoDiv);
    return swatch;
  }

  function renderBrandSwatches() {
    const scales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    const brandScales = ['brand-1', 'brand-2', 'brand-3', 'brand-4'];

    brandScales.forEach(scale => {
      const grid = document.querySelector(`[data-scale="${scale}"]`);
      if (!grid) return;

      grid.innerHTML = '';

      // Get base color for display
      const baseToken = `--${scale}`;
      const baseValue = getComputedStyle(document.documentElement)
        .getPropertyValue(baseToken)
        .trim();
      
      const baseEl = document.getElementById(`${scale}-base`);
      if (baseEl) {
        baseEl.textContent = baseValue || 'Not set';
      }

      scales.forEach(step => {
        const tokenName = `--${scale}-${step}`;
        const tokenValue = getComputedStyle(document.documentElement)
          .getPropertyValue(tokenName)
          .trim();

        const swatch = document.createElement('div');
        swatch.className = 'uikit-brand-swatch';

        const colorDiv = document.createElement('div');
        colorDiv.className = 'uikit-brand-swatch-color';

        if (tokenValue) {
          colorDiv.style.background = `var(${tokenName})`;
          colorDiv.addEventListener('click', () => copyToken(tokenName, colorDiv));
        } else {
          colorDiv.style.background = 'repeating-linear-gradient(45deg, #ff000020, #ff000020 10px, transparent 10px, transparent 20px)';
        }

        const infoDiv = document.createElement('div');
        infoDiv.className = 'uikit-brand-swatch-info';
        infoDiv.innerHTML = `
          <div class="uikit-brand-swatch-label">${step}</div>
          <div class="uikit-brand-swatch-token">${tokenName}</div>
        `;

        swatch.appendChild(colorDiv);
        swatch.appendChild(infoDiv);
        grid.appendChild(swatch);
      });
    });
  }

  function copyToken(tokenName, element) {
    const cssVar = `var(${tokenName})`;
    navigator.clipboard.writeText(cssVar).then(() => {
      element.classList.add('copied');
      setTimeout(() => {
        element.classList.remove('copied');
      }, 1500);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }

  function renderCategories() {
    if (!uiKitData) return;

    const componentCounts = {};
    uiKitData.categories.forEach(category => {
      category.items.forEach(item => {
        componentCounts[category.name] = (componentCounts[category.name] || 0) + 1;
      });
    });

    const allCount = uiKitData.categories.reduce((sum, cat) => sum + (componentCounts[cat.name] || 0), 0);

    let html = `
      <button class="uikit-category-btn ${activeCategory === 'all' ? 'active' : ''}" data-category="all">
        <span class="uikit-category-name">All Components</span>
        <span class="uikit-category-count">${allCount}</span>
      </button>
    `;

    uiKitData.categories.forEach(category => {
      const count = componentCounts[category.name] || 0;
      html += `
        <button class="uikit-category-btn ${activeCategory === category.name ? 'active' : ''}" data-category="${category.name}">
          <span class="uikit-category-name">${category.name}</span>
          <span class="uikit-category-count">${count}</span>
        </button>
      `;
    });

    elements.categoriesList.innerHTML = html;

    elements.categoriesList.querySelectorAll('.uikit-category-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.category;
        renderCategories();
        renderComponents();
        closeSidebar();
      });
    });
  }

  function renderComponents() {
    if (!uiKitData) return;

    let filtered = [];

    // Flatten all components
    uiKitData.categories.forEach(category => {
      category.items.forEach(item => {
        filtered.push({ ...item, category: category.name });
      });
    });

    if (activeCategory !== 'all') {
      filtered = filtered.filter(c => c.category === activeCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(c =>
        c.title.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query) ||
        c.id.toLowerCase().includes(query)
      );
    }

    updateResultsInfo(filtered.length);

    if (filtered.length === 0) {
      elements.componentGrid.innerHTML = `
        <div class="uikit-empty">
          <div class="uikit-empty-icon">?</div>
          <h3 class="uikit-empty-title">No components found</h3>
          <p class="uikit-empty-desc">Try adjusting your search or filter criteria.</p>
        </div>
      `;
      return;
    }

    let html = '';
    filtered.forEach(component => {
      const isActive = activeComponent && activeComponent.id === component.id;
      html += `
        <div class="uikit-card ${isActive ? 'active' : ''}" data-id="${component.id}">
          <div class="uikit-card-header">
            <h3 class="uikit-card-title">${component.title}</h3>
            <span class="uikit-card-category">${component.category}</span>
          </div>
          <p class="uikit-card-desc">${component.description}</p>
        </div>
      `;
    });

    elements.componentGrid.innerHTML = html;

    elements.componentGrid.querySelectorAll('.uikit-card').forEach(card => {
      card.addEventListener('click', () => {
        const component = filtered.find(c => c.id === card.dataset.id);
        if (component) {
          openDetail(component);
        }
      });
    });
  }

  function updateResultsInfo(count) {
    const categoryName = activeCategory === 'all'
      ? 'all categories'
      : activeCategory;

    let text = `${count} component${count !== 1 ? 's' : ''}`;
    if (searchQuery) {
      text += ` matching "${searchQuery}"`;
    }
    if (activeCategory !== 'all') {
      text += ` in ${categoryName}`;
    }
    elements.resultsInfo.textContent = text;
  }

  function handleSearch(e) {
    searchQuery = e.target.value.trim();
    renderComponents();
  }

  async function openDetail(component) {
    activeComponent = component;

    document.getElementById('detail-title').textContent = component.title;
    document.getElementById('detail-desc').textContent = component.description;
    document.getElementById('detail-category').textContent = component.category;

    const previewFrame = document.getElementById('detail-preview');
    const codeBlock = document.getElementById('detail-code');

    // Show loading state
    previewFrame.innerHTML = '<div class="text-muted">Loading preview...</div>';
    codeBlock.textContent = 'Loading code...';

    // Load component snippet
    try {
      const sourcePath = component.sourcePaths && component.sourcePaths[0] 
        ? component.sourcePaths[0] 
        : component.demoPath;
      
      if (sourcePath) {
        const response = await fetch(sourcePath);
        if (response.ok) {
          const snippet = await response.text();
          
          // Render preview
          previewFrame.innerHTML = `
            <div class="container py-5">
              ${snippet}
            </div>
          `;
          
          // Initialize Bootstrap components in preview
          initBootstrapComponents(previewFrame);
          
          // Show code
          codeBlock.textContent = snippet;
        } else {
          previewFrame.innerHTML = '<p class="text-muted mb-0">Failed to load preview.</p>';
          codeBlock.textContent = '// Component file not found';
        }
      } else {
        previewFrame.innerHTML = '<p class="text-muted mb-0">No preview available.</p>';
        codeBlock.textContent = '// No source path available';
      }
    } catch (error) {
      console.error('Failed to load component:', error);
      previewFrame.innerHTML = '<p class="text-muted mb-0">Error loading component.</p>';
      codeBlock.textContent = '// Error loading component';
    }

    elements.detailPanel.classList.add('open');
    elements.content.classList.add('detail-open');

    renderComponents();
  }

  function initBootstrapComponents(container) {
    if (typeof bootstrap === 'undefined') return;

    container.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
      new bootstrap.Tooltip(el);
    });

    container.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
      new bootstrap.Popover(el);
    });
  }

  function closeDetail() {
    activeComponent = null;
    elements.detailPanel.classList.remove('open');
    elements.content.classList.remove('detail-open');
    renderComponents();
  }

  function copyCode() {
    const code = document.getElementById('detail-code').textContent;
    const btn = document.getElementById('copy-btn');

    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy:', err);
      btn.textContent = 'Failed';
      setTimeout(() => {
        btn.textContent = 'Copy';
      }, 2000);
    });
  }

  function toggleSidebar() {
    elements.sidebar.classList.toggle('open');
    elements.overlay.classList.toggle('open');
  }

  function closeSidebar() {
    elements.sidebar.classList.remove('open');
    elements.overlay.classList.remove('open');
  }

  window.copyCode = copyCode;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
