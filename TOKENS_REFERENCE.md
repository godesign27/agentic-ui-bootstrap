# Tokens Reference

## Overview

This library uses CSS custom properties (variables) defined in `/styles/tokens.css` and custom classes in `/styles/overrides.css`. These tokens provide consistent design values across all components.

## Available Tokens

### Brand Colors

Defined in `:root` as CSS custom properties:

- `--brand-primary: #0d6efd` - Primary brand color (blue)
- `--brand-secondary: #6c757d` - Secondary color (gray)
- `--brand-success: #198754` - Success state (green)
- `--brand-danger: #dc3545` - Danger/error state (red)
- `--brand-warning: #ffc107` - Warning state (yellow)
- `--brand-info: #0dcaf0` - Informational state (cyan)

**Usage**: These tokens are available but Bootstrap's built-in color classes (`bg-primary`, `text-success`, etc.) are preferred for consistency. Use tokens only when Bootstrap classes don't meet the need.

### Border Radius

- `--radius-sm: 0.25rem` - Small radius (4px)
- `--radius-md: 0.375rem` - Medium radius (6px)
- `--radius-lg: 0.5rem` - Large radius (8px)
- `--radius-xl: 0.75rem` - Extra large radius (12px)

**Usage**: Applied automatically to `.card` components. Use Bootstrap's `rounded-*` utility classes for other elements.

### Shadows

- `--shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)` - Small shadow
- `--shadow-md: 0 0.5rem 1rem rgba(0, 0, 0, 0.15)` - Medium shadow
- `--shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175)` - Large shadow

**Usage**: Applied automatically to `.card` components (small on default, medium on hover). Use Bootstrap's `shadow-*` utility classes for other elements.

### Typography

- `--body-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

**Usage**: Applied automatically to `<body>` element. Use Bootstrap typography utilities for text styling.

## Custom Classes

### `.btn-brand`

Defined in `/styles/overrides.css`:

- Primary brand button style using `--brand-primary`
- Hover state: darker shade (`#0b5ed7`)
- Focus state: Bootstrap focus ring with brand color

**When to Use**:
- ✅ Primary call-to-action buttons
- ✅ Main form submit buttons
- ✅ Primary navigation actions

**When NOT to Use**:
- ❌ Secondary actions (use `btn-secondary` or `btn-outline-primary`)
- ❌ Destructive actions (use `btn-danger`)
- ❌ Cancel buttons (use `btn-secondary`)
- ❌ Link-styled buttons (use `btn-link`)

**Example**:
```html
<button type="submit" class="btn btn-brand">Save Changes</button>
```

### Card Styling

Applied automatically to `.card` components:

- Border radius: `var(--radius-lg)` (0.5rem)
- Box shadow: `var(--shadow-sm)` by default
- Hover shadow: `var(--shadow-md)` with transition

**Usage**: No action required. All cards automatically receive this styling.

## Usage Rules

### ✅ Allowed

- Using Bootstrap utility classes (`bg-primary`, `text-success`, `rounded-lg`, `shadow-md`, etc.)
- Using `.btn-brand` for primary brand actions
- Referencing tokens in custom CSS (only in `/styles/tokens.css` and `/styles/overrides.css`)
- Using Bootstrap's built-in color/spacing/typography utilities

### ❌ Forbidden

- **Hard-coding hex values** in component HTML or inline styles
  - ❌ `<div style="color: #0d6efd">` 
  - ✅ `<div class="text-primary">`
  
- **Inline styles** for colors, spacing, or layout
  - ❌ `<div style="margin-bottom: 1rem; color: #dc3545;">`
  - ✅ `<div class="mb-4 text-danger">`
  
- **Creating new CSS classes** outside of `/styles/tokens.css` and `/styles/overrides.css`
  - ❌ Adding `<style>` tags to HTML files
  - ❌ Creating new CSS files
  
- **Using tokens directly in HTML** (tokens are for CSS only)
  - ❌ `<div style="border-radius: var(--radius-lg)">`
  - ✅ `<div class="rounded-lg">` or let card styling apply automatically

## Token Modification

**Rule**: Tokens should only be modified in `/styles/tokens.css`. Do not override tokens in component HTML or other CSS files.

**Process**: If brand colors or design tokens need to change:
1. Update values in `/styles/tokens.css`
2. Update values in `/styles/overrides.css` if needed
3. Test all components that use these tokens
4. Document changes if significant

## Bootstrap Utilities vs Tokens

**Prefer Bootstrap utilities** for:
- Colors: `bg-primary`, `text-success`, `border-danger`
- Spacing: `mb-4`, `p-3`, `gap-2`
- Typography: `fs-5`, `fw-bold`, `text-center`
- Layout: `d-flex`, `justify-content-between`, `row`, `col-md-6`
- Borders: `rounded`, `border`, `border-primary`
- Shadows: `shadow`, `shadow-sm`, `shadow-lg`

**Use tokens** (via custom classes) for:
- Brand-specific styling (`.btn-brand`)
- Consistent component styling (card radius/shadows)
- When Bootstrap utilities don't provide the needed value

## Quick Reference

| Need | Use | Don't Use |
|------|-----|-----------|
| Primary button | `btn btn-brand` | `btn btn-primary` (unless brand not needed) |
| Colors | `bg-primary`, `text-success` | Hard-coded hex values |
| Spacing | `mb-4`, `p-3` | Inline `style="margin-bottom: 1rem"` |
| Border radius | `rounded-lg` | `style="border-radius: 0.5rem"` |
| Shadows | `shadow-md` | `style="box-shadow: ..."` |
| Custom CSS | `/styles/tokens.css` or `/styles/overrides.css` | Inline styles or new CSS files |

