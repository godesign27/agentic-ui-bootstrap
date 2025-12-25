# bootstrap

## About This Repository

- This repo is an implementation of the Agentic AI UI Control System using Bootstrap 5.3.8 (CDN).
- The core governance/instruction layer lives in the separate repo: agentic-ai-ui-control-system.
- Users should consult the core repo first for system rules and governance, then use this repo for Bootstrap components, patterns, and examples.

---

## Quick Start

### Get the Repository Running

1. **Clone or download this repository**:
   ```bash
   git clone https://github.com/godesign27/agentic-ui-bootstrap.git
   cd agentic-ui-bootstrap
   ```

2. **Start a local web server** (required for Prompt Library):
   ```bash
   python3 -m http.server 8080
   ```
   *Note: The Prompt Library requires a web server; it won't work with `file://` protocol.*

3. **Open the default page in your browser**:
   ```
   http://localhost:8080/
   ```

4. **Access the Prompt Library**:
   - Click the "Prompt Library ⌘L" button, or
   - Press `Cmd+L` (Mac) or `Ctrl+L` (Windows/Linux), or
   - Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) as fallback

The default page (`/index.html`) includes:
- A "Hello World" welcome page
- Integrated Prompt Library drawer with all available prompts
- Keyboard shortcuts for quick access

### Read Order (Recommended)

1. Core repo README + AGENT_RULES
2. This repo COMPONENTS_INDEX
3. Component-level docs
4. Patterns/examples

---

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

## Licensing

The Agentic AI UI Control System is free for non-commercial use.

Commercial use, SaaS embedding, or redistribution requires a paid commercial
license. See LICENSE and COMMERCIAL_LICENSE.md for details.

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

---

## Prompt Library Demo

This repository includes an out-of-the-box Prompt Library drawer that provides quick access to all prompts.

### Quick Start

1. **Start a local server**:
   ```bash
   python3 -m http.server 8080
   ```

2. **Open in browser**:
   ```
   http://localhost:8080/
   ```

3. **Use shortcuts**:
   - Press `Cmd+L` (Mac) or `Ctrl+L` (Windows/Linux) to open the drawer
   - Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) as fallback
   - Press `ESC` to close or return to list
   - Click the "Open Prompt Library" button

### Features

- Browse prompts organized by category as cards
- Click any card to view full prompt content in takeover view
- Copy prompts to clipboard with one click
- Keyboard accessible with focus trap
- Works with static HTML (no build tools)

The Prompt Library demo page is located at `/index.html` (root) and uses assets from `/public/assets/prompt-drawer/`.

---

## UI Kit Library

This repository includes a browsable UI Kit that provides visual access to all components, helping verify availability and avoid hallucination.

### Quick Start

1. **Start a local server** (if not already running):
   ```bash
   python3 -m http.server 8080
   ```

2. **Access the UI Kit**:
   - Click the "UI Kit" button on the start page, or
   - Navigate directly to: `http://localhost:8080/ui-kit/`

### Features

- Browse all components organized by category
- Search components by name or description
- View component previews in iframe
- Copy component HTML snippets with one click
- See file paths for each component
- No build tools required - works with static HTML

### Purpose

The UI Kit serves as a visual component gallery that:
- Helps verify which components are available
- Prevents hallucination by showing actual component structure
- Provides quick access to component snippets
- Shows component previews before copying

The UI Kit is located at `/ui-kit/index.html` and uses `/ui-kit/UI_KIT_INDEX.json` as its data source.