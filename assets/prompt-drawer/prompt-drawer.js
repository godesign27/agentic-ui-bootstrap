/**
 * Prompt Drawer - A right-side drawer for browsing and copying prompts
 * 
 * Usage:
 *   <link rel="stylesheet" href="/assets/prompt-drawer/prompt-drawer.css">
 *   <script type="module" src="/assets/prompt-drawer/prompt-drawer.js"></script>
 * 
 * Hotkeys:
 *   Cmd+L (Mac) or Ctrl+L (Windows) - Toggle drawer
 *   Cmd+K (Mac) or Ctrl+K (Windows) - Toggle drawer (fallback)
 *   ESC - Close drawer
 * 
 * Declarative trigger:
 *   Add data-open-prompt-drawer attribute to any element to open drawer on click
 */

class PromptDrawer {
  constructor() {
    this.isOpen = false;
    this.prompts = [];
    this.currentPrompt = null;
    this.init();
  }

  init() {
    this.createDrawer();
    this.setupHotkeys();
    this.setupClickTriggers();
    this.loadPrompts();
  }

  createDrawer() {
    // Create overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'prompt-drawer-overlay';
    this.overlay.setAttribute('role', 'dialog');
    this.overlay.setAttribute('aria-modal', 'true');
    this.overlay.setAttribute('aria-label', 'Prompt Library');
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });

    // Create drawer container
    this.drawer = document.createElement('div');
    this.drawer.className = 'prompt-drawer';
    this.drawer.setAttribute('role', 'complementary');
    this.drawer.setAttribute('aria-label', 'Prompt Library Drawer');

    // Create header
    const header = document.createElement('div');
    header.className = 'prompt-drawer-header';
    
    const title = document.createElement('h2');
    title.className = 'prompt-drawer-title';
    title.textContent = 'Prompt Library';
    
    const closeButton = document.createElement('button');
    closeButton.className = 'prompt-drawer-close';
    closeButton.innerHTML = '&times;';
    closeButton.setAttribute('aria-label', 'Close drawer');
    closeButton.addEventListener('click', () => this.close());
    
    header.appendChild(title);
    header.appendChild(closeButton);

    // Create body
    const body = document.createElement('div');
    body.className = 'prompt-drawer-body';

    // Create sidebar
    this.sidebar = document.createElement('div');
    this.sidebar.className = 'prompt-drawer-sidebar';
    this.sidebar.setAttribute('role', 'navigation');
    this.sidebar.setAttribute('aria-label', 'Prompt categories');

    // Create content area
    this.content = document.createElement('div');
    this.content.className = 'prompt-drawer-content';
    this.content.setAttribute('role', 'main');
    this.content.setAttribute('aria-label', 'Prompt content');

    body.appendChild(this.sidebar);
    body.appendChild(this.content);

    this.drawer.appendChild(header);
    this.drawer.appendChild(body);
    this.overlay.appendChild(this.drawer);

    // Focus trap elements
    this.focusTrapStart = document.createElement('div');
    this.focusTrapStart.className = 'prompt-drawer-focus-trap';
    this.focusTrapStart.setAttribute('tabindex', '0');
    this.focusTrapStart.setAttribute('aria-hidden', 'true');
    
    this.focusTrapEnd = document.createElement('div');
    this.focusTrapEnd.className = 'prompt-drawer-focus-trap';
    this.focusTrapEnd.setAttribute('tabindex', '0');
    this.focusTrapEnd.setAttribute('aria-hidden', 'true');

    this.drawer.insertBefore(this.focusTrapStart, this.drawer.firstChild);
    this.drawer.appendChild(this.focusTrapEnd);

    // Setup focus trap
    this.setupFocusTrap();

    document.body.appendChild(this.overlay);
  }

  setupFocusTrap() {
    const focusableElements = this.drawer.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    this.drawer.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    });
  }

  setupHotkeys() {
    document.addEventListener('keydown', (e) => {
      // Ignore shortcuts when typing in form elements
      const isInputElement = e.target.tagName === 'INPUT' ||
                             e.target.tagName === 'TEXTAREA' ||
                             e.target.tagName === 'SELECT' ||
                             e.target.isContentEditable;
      
      if (isInputElement) {
        return;
      }
      
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const modifier = isMac ? e.metaKey : e.ctrlKey;
      
      // Ignore if modifier keys other than Cmd/Ctrl are pressed
      if (e.shiftKey || e.altKey) {
        return;
      }
      
      // Cmd/Ctrl+L to toggle
      if (modifier && e.key === 'l') {
        e.preventDefault();
        this.toggle();
        return;
      }
      
      // Cmd/Ctrl+K to toggle (fallback)
      if (modifier && e.key === 'k') {
        e.preventDefault();
        this.toggle();
        return;
      }
      
      // ESC to close
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  setupClickTriggers() {
    // Single delegated click handler for declarative triggers
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-open-prompt-drawer]');
      if (trigger) {
        e.preventDefault();
        if (!this.isOpen) {
          this.open();
        }
      }
    });
  }

  async loadPrompts() {
    try {
      const response = await fetch('/prompts/PROMPTS_INDEX.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.prompts = data.prompts || [];
      this.renderSidebar();
    } catch (error) {
      console.error('Failed to load prompts:', error);
      this.showError('Prompts could not be loaded. Serve this repo via a local web server.');
    }
  }

  renderSidebar() {
    this.sidebar.innerHTML = '';
    
    if (this.prompts.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'prompt-drawer-loading';
      empty.textContent = 'No prompts available';
      this.sidebar.appendChild(empty);
      return;
    }

    // Group prompts by category
    const categories = {};
    this.prompts.forEach(prompt => {
      if (!categories[prompt.category]) {
        categories[prompt.category] = [];
      }
      categories[prompt.category].push(prompt);
    });

    // Render categories and prompts
    Object.keys(categories).sort().forEach(category => {
      const categoryHeader = document.createElement('div');
      categoryHeader.className = 'prompt-drawer-category';
      categoryHeader.textContent = category;
      this.sidebar.appendChild(categoryHeader);

      categories[category].forEach(prompt => {
        const item = document.createElement('button');
        item.className = 'prompt-drawer-item';
        item.setAttribute('type', 'button');
        item.setAttribute('role', 'tab');
        item.setAttribute('aria-selected', 'false');
        
        const title = document.createElement('div');
        title.className = 'prompt-drawer-item-title';
        title.textContent = prompt.title;
        
        const description = document.createElement('div');
        description.className = 'prompt-drawer-item-description';
        description.textContent = prompt.description;
        
        item.appendChild(title);
        item.appendChild(description);
        
        item.addEventListener('click', () => this.selectPrompt(prompt));
        
        this.sidebar.appendChild(item);
      });
    });
  }

  async selectPrompt(prompt) {
    // Update active state
    this.sidebar.querySelectorAll('.prompt-drawer-item').forEach(item => {
      item.classList.remove('is-active');
      item.setAttribute('aria-selected', 'false');
    });
    
    const activeItem = Array.from(this.sidebar.querySelectorAll('.prompt-drawer-item')).find(
      item => item.querySelector('.prompt-drawer-item-title').textContent === prompt.title
    );
    if (activeItem) {
      activeItem.classList.add('is-active');
      activeItem.setAttribute('aria-selected', 'true');
    }

    this.currentPrompt = prompt;
    
    // Show loading
    this.content.innerHTML = '<div class="prompt-drawer-loading">Loading prompt...</div>';

    try {
      const response = await fetch(prompt.file);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const markdown = await response.text();
      this.renderPrompt(prompt, markdown);
    } catch (error) {
      console.error('Failed to load prompt:', error);
      this.content.innerHTML = `
        <div class="prompt-drawer-error">
          <div class="prompt-drawer-error-message">Failed to load prompt: ${prompt.file}</div>
          <div class="prompt-drawer-error-message">Make sure you're serving this repo via a local web server.</div>
        </div>
      `;
    }
  }

  renderPrompt(prompt, markdown) {
    const view = document.createElement('div');
    view.className = 'prompt-drawer-prompt-view is-active';

    const header = document.createElement('div');
    header.className = 'prompt-drawer-prompt-header';

    const title = document.createElement('h3');
    title.className = 'prompt-drawer-prompt-title';
    title.textContent = prompt.title;

    const copyButton = document.createElement('button');
    copyButton.className = 'prompt-drawer-copy-button';
    copyButton.innerHTML = '<span>📋</span> Copy Prompt';
    copyButton.addEventListener('click', () => this.copyPrompt(markdown, copyButton));

    header.appendChild(title);
    header.appendChild(copyButton);

    const content = document.createElement('pre');
    content.className = 'prompt-drawer-prompt-content';
    content.textContent = markdown;

    view.appendChild(header);
    view.appendChild(content);

    this.content.innerHTML = '';
    this.content.appendChild(view);
  }

  async copyPrompt(markdown, button) {
    try {
      await navigator.clipboard.writeText(markdown);
      const originalHTML = button.innerHTML;
      button.innerHTML = '<span>✓</span> Copied!';
      button.classList.add('copied');
      
      setTimeout(() => {
        button.innerHTML = originalHTML;
        button.classList.remove('copied');
      }, 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = markdown;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        const originalHTML = button.innerHTML;
        button.innerHTML = '<span>✓</span> Copied!';
        button.classList.add('copied');
        setTimeout(() => {
          button.innerHTML = originalHTML;
          button.classList.remove('copied');
        }, 2000);
      } catch (err) {
        alert('Failed to copy. Please copy manually.');
      }
      document.body.removeChild(textarea);
    }
  }

  showError(message) {
    this.content.innerHTML = `
      <div class="prompt-drawer-error">
        <div class="prompt-drawer-error-message">${message}</div>
      </div>
    `;
  }

  open() {
    if (this.isOpen) return;
    this.isOpen = true;
    this.overlay.classList.add('is-open');
    this.drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    
    // Focus first focusable element
    const firstFocusable = this.drawer.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    firstFocusable?.focus();
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.overlay.classList.remove('is-open');
    this.drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}

// Initialize drawer when DOM is ready
let promptDrawer;
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    promptDrawer = new PromptDrawer();
    window.promptDrawer = promptDrawer; // Expose globally for manual control
  });
} else {
  promptDrawer = new PromptDrawer();
  window.promptDrawer = promptDrawer; // Expose globally for manual control
}

