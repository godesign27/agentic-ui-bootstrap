# bootstrap

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
- `/assets/app-shell.html` - Base HTML template with Bootstrap CDN
- `/styles/tokens.css` - Brand variables and design tokens
- `/styles/overrides.css` - Minimal custom CSS overrides

### Component Structure

Each component in `/components/<component>/` includes:
- `<component>.html` - Ready-to-copy HTML snippet
- `<component>.md` - Documentation (purpose, variants, usage rules, accessibility)

### Important Constraints

- Do NOT modify component files in `/components/`
- Do NOT add custom CSS outside of `/styles/tokens.css` and `/styles/overrides.css`
- Do NOT remove or modify `/bootstrap-5.3.8-dist/` folder
- Do NOT install npm dependencies or create package.json