# bootstrap

## Instruction Layer (Read This First)

Before using this repository, read the root-level instruction files in this order:

1. **README.md** (this file) - Overview and getting started
2. **AGENT_RULES.md** - Core principles, constraints, and workflow rules
3. **COMPONENTS_INDEX.md** - Complete inventory of components, patterns, and examples
4. **DESIGN_PRINCIPLES.md** - Design decision framework and component restrictions
5. **ACCESSIBILITY.md** - WCAG 2.1 AA requirements and mandatory accessibility rules
6. **TOKENS_REFERENCE.md** - Available design tokens and CSS usage rules
7. **BRAND_THEMING.md** - Brand color theming system (if customizing brand colors)

Each file serves a specific purpose:
- **AGENT_RULES.md**: Behavioral contracts and composition rules
- **COMPONENTS_INDEX.md**: Catalog of available resources
- **DESIGN_PRINCIPLES.md**: When and how to use components appropriately
- **ACCESSIBILITY.md**: Mandatory accessibility standards and checklists
- **TOKENS_REFERENCE.md**: Design token usage and CSS constraints
- **BRAND_THEMING.md**: Brand color customization guide and utility classes

After reading these, reference component-level `.md` files and patterns/examples as needed.

---

## How to use this repo with agent tools

This repository provides an "Agentic Bootstrap Component Library" designed for AI agents to assemble consistent Bootstrap-based pages.

### Getting Started

1. **Start from the app shell**: Begin with `/assets/app-shell.html` as your base template. This includes Bootstrap CDN links, local styles, and a main content container.

2. **Consult the component index**: Reference `/COMPONENTS_INDEX.md` to find available components and their file paths.

3. **Compose pages from components**: Copy HTML snippets from `/components/<component>/<component>.html` and combine them within the `<main class="container py-5">` region of the app shell.

4. **Follow component documentation**: Read each component's `.md` file in `/components/<component>/` for usage rules, variants, accessibility requirements, and dependencies.

5. **Do not install dependencies**: This library uses Bootstrap via CDN only. Do not add npm packages, package.json, or build tools.

### Key Files

- `/AGENT_RULES.md` - Rules for agent behavior and composition guidelines
- `/BOOTSTRAP_VERSION.md` - Bootstrap version and CDN links
- `/COMPONENTS_INDEX.md` - Complete inventory of available components
- `/BRAND_THEMING.md` - Brand color theming system guide
- `/assets/app-shell.html` - Base HTML template with Bootstrap CDN
- `/styles/tokens.css` - Base design tokens (radius, shadows, typography)
- `/styles/brand.template.css` - Template for custom brand colors
- `/styles/overrides.css` - Brand utility classes and minimal overrides

### Component Structure

Each component in `/components/<component>/` includes:
- `<component>.html` - Ready-to-copy HTML snippet
- `<component>.md` - Documentation (purpose, variants, usage rules, accessibility)

### Important Constraints

- Do NOT modify component files in `/components/`
- Do NOT add custom CSS outside of `/styles/tokens.css` and `/styles/overrides.css`
- Do NOT remove or modify `/bootstrap-5.3.8-dist/` folder
- Do NOT install npm dependencies or create package.json

---

## Using this repo with Agentic AI tools

This repository is optimized for AI agents to build consistent Bootstrap-based web pages. Follow these guidelines:

### Workflow

1. **Start with App Shell**: Always begin with `/assets/app-shell.html` as your base template
2. **Reference Index**: Consult `/COMPONENTS_INDEX.md` for complete inventory of components, patterns, and examples
3. **Use Patterns**: Reference `/patterns/` for multi-component UX recipes (dashboard, marketing, CRUD, etc.)
4. **Study Examples**: Review `/examples/` for complete page implementations
5. **Copy Components**: Use snippets from `/components/<component>/<component>.html`
6. **Read Documentation**: Always check component `.md` files for usage rules, variants, and accessibility requirements

### Available Resources

- **Components**: 30+ Bootstrap components with HTML snippets and documentation
- **Patterns**: 9 UX patterns for common layouts and interactions
- **Examples**: 9 complete runnable HTML pages demonstrating real-world usage

### Key Principles

- **Composition Only**: Copy and combine components, don't modify component files
- **Bootstrap First**: Prefer Bootstrap utility classes over custom CSS
- **Accessibility Required**: All components include ARIA attributes and keyboard navigation
- **CDN Only**: Bootstrap loaded via CDN, no build tools or npm dependencies

For detailed rules and guidelines, see `/AGENT_RULES.md`.

---

## Brand Theming

This library includes a **token-based brand theming system** that allows you to customize brand colors without modifying Bootstrap or requiring build tools.

### Quick Start

1. **Copy the template**: Copy `/styles/brand.template.css` to your project as `/styles/brand.css`
2. **Set your colors**: Edit `brand.css` with your brand color values
3. **Include in HTML**: Load `brand.css` after `tokens.css`, before `overrides.css`
4. **Use brand classes**: Apply `.btn-brand`, `.bg-brand`, `.text-brand`, etc. in your components

### Resources

- **[BRAND_THEMING.md](./BRAND_THEMING.md)** - Complete theming guide with examples
- **[/examples/brand-customizer.html](./examples/brand-customizer.html)** - Visual color customizer tool
- **[/styles/brand.template.css](./styles/brand.template.css)** - Template file to copy

The brand theming system supports both light and dark modes via Bootstrap's `data-bs-theme` attribute.