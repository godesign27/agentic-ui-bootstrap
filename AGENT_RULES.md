# Agent Rules for Bootstrap Component Library

## Core Principles

1. **Composition Only**: This library provides HTML snippets and documentation. Agents should compose pages by copying and combining component snippets, not by modifying the component files themselves.

2. **No Dependencies**: Do not add npm packages, package.json, or build tools. Bootstrap is loaded via CDN only.

3. **Bootstrap First**: Prefer Bootstrap utility classes over custom CSS. Custom styles should only be added to `/styles/tokens.css` and `/styles/overrides.css`.

4. **Accessibility Required**: All components must maintain proper ARIA attributes, semantic HTML, and keyboard navigation support.

## Usage Workflow

1. **Start with App Shell**: Always begin with `/assets/app-shell.html` as the base template.

2. **Reference Components**: Consult `/COMPONENTS_INDEX.md` to find available components and their file paths.

3. **Copy Snippets**: Copy component HTML snippets from `/components/<component>/<component>.html` into your page.

4. **Follow Documentation**: Read each component's `.md` file for usage rules, variants, accessibility requirements, and dependencies.

5. **Compose Pages**: Combine multiple components within the `<main class="container py-5">` region of the app shell.

## Constraints

- **Do NOT** modify component files in `/components/`
- **Do NOT** create new component files without updating `COMPONENTS_INDEX.md`
- **Do NOT** add custom CSS outside of `/styles/tokens.css` and `/styles/overrides.css`
- **Do NOT** remove or modify `/bootstrap-5.3.8-dist/` folder
- **Do NOT** install npm dependencies or create package.json

## Component Composition Rules

- Components are designed to be self-contained HTML snippets
- When combining components, ensure proper spacing using Bootstrap utility classes (e.g., `mb-4`, `mt-3`)
- Maintain semantic HTML structure (use appropriate heading hierarchy, landmarks)
- Ensure form inputs always have associated `<label>` elements with matching `for` and `id` attributes
- Modals require proper ARIA attributes (`aria-labelledby`, `aria-hidden`, etc.)
- Tables should include proper `<thead>` and `<tbody>` structure

## Style Guidelines

- Use Bootstrap utility classes for spacing, colors, typography, and layout
- Reference `/styles/tokens.css` for brand-specific variables (colors, shadows, border-radius)
- Use `.btn-brand` class from `/styles/overrides.css` for primary brand buttons
- Keep custom CSS minimal and token-based

## Accessibility Checklist

- All interactive elements are keyboard accessible
- Form inputs have associated labels
- Images have alt text
- Modals have proper ARIA attributes
- Color contrast meets WCAG AA standards
- Focus indicators are visible

## Required Read Order

Agents must read documentation in this order before composing pages:

1. **README.md** - Overview and getting started
2. **AGENT_RULES.md** - This file: core principles and constraints
3. **COMPONENTS_INDEX.md** - Complete inventory of available components, patterns, and examples
4. **DESIGN_PRINCIPLES.md** - Design decision framework and component restrictions
5. **ACCESSIBILITY.md** - WCAG 2.1 AA requirements and mandatory rules
6. **TOKENS_REFERENCE.md** - Available design tokens and usage rules
7. **Component-level *.md** - Individual component documentation as needed
8. **Patterns/Examples** - Reference patterns and examples for specific use cases

This order ensures agents understand constraints, available resources, and quality standards before implementation.

## Output Rejection Conditions

Reject output if any of the following conditions are met:

### Component Violations
- ❌ New components are invented without adding them to `COMPONENTS_INDEX.md`
- ❌ Component snippets are modified in `/components/` (composition only)
- ❌ Components are used in ways that violate their documentation

### Bootstrap Version Violations
- ❌ Bootstrap CDN version differs from `BOOTSTRAP_VERSION.md` (must be 5.3.8)
- ❌ Different CDN URLs are used than specified in `BOOTSTRAP_VERSION.md`

### CSS Violations
- ❌ Custom CSS is added outside `/styles/tokens.css` and `/styles/overrides.css`
- ❌ Inline styles are used for colors, spacing, or layout
- ❌ Hard-coded hex values are used instead of Bootstrap classes or tokens
- ❌ New CSS files are created

### Accessibility Violations
- ❌ Accessibility checklist in `ACCESSIBILITY.md` is not satisfied
- ❌ Form inputs lack associated labels
- ❌ Images lack alt attributes
- ❌ ARIA attributes are missing or incorrect
- ❌ Keyboard navigation is broken
- ❌ Color contrast does not meet WCAG 2.1 AA standards

### Design Principle Violations
- ❌ Restricted components (carousel, tooltip/popover, scrollspy) are used without justification
- ❌ Complex workflows are built in modals instead of full pages
- ❌ Bootstrap utilities are not preferred over custom CSS
- ❌ Existing patterns/examples are not referenced for similar use cases

If output is rejected, provide specific violations and corrections needed.

