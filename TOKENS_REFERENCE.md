# Tokens Reference

## Overview

This library uses CSS custom properties (variables) defined in `/styles/tokens.css` and custom classes in `/styles/overrides.css`. These tokens provide consistent design values across all components.

**For brand theming**, see **[BRAND_THEMING.md](./BRAND_THEMING.md)** for complete instructions on customizing brand colors.

## Available Tokens

### Colors: Bootstrap Semantic vs Brand Theming

**Bootstrap Semantic Colors** (use Bootstrap classes):
- Use Bootstrap's built-in color utilities: `bg-primary`, `text-success`, `btn-danger`, `border-warning`, etc.
- These are Bootstrap's default semantic colors and work out of the box.
- **Example**: `<button class="btn btn-primary">` or `<div class="bg-success text-white">`

**Brand Theming** (use brand.css + brand utilities):
- For custom brand colors, use the brand theming system: `brand.css` + `--brand`, `--brand-2`, `--brand-3`, `--brand-4` variables + `.btn-brand`, `.bg-brand`, `.text-brand` utility classes.
- Brand colors are defined in a user-created `brand.css` file (copied from `brand.template.css`).
- **Example**: `<button class="btn btn-brand">` or `<div class="bg-brand text-white">`
- See **[BRAND_THEMING.md](./BRAND_THEMING.md)** for complete brand theming guide.

**Decision Rule**: Use Bootstrap semantic colors (`btn-primary`, `bg-success`) by default. Use brand utilities (`.btn-brand`, `.bg-brand`) only when the project includes `brand.css` with custom brand colors.

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

## Brand Theme

**Brand colors are defined by the consumer** via a copied `brand.css` file (see `BRAND_THEMING.md` for setup instructions).

### Brand Variables

When a project includes `brand.css`, the following CSS variables are available:

- `--brand` - Primary brand color (defined by user)
- `--brand-2` - Secondary brand color (defined by user)
- `--brand-3` - Accent brand color (defined by user)
- `--brand-4` - Highlight/Warn brand color (defined by user)
- `--brand-text-on` - Text color on brand backgrounds (usually `#fff`)

**Important**: These variables are **NOT** defined in `tokens.css`. They must be defined in a user-created `brand.css` file (copied from `brand.template.css`).

### Brand Utility Classes

Defined in `/styles/overrides.css` (uses brand variables from `brand.css`):

#### Buttons
- `.btn-brand` - Primary brand button
- `.btn-brand-2` - Secondary brand button
- `.btn-brand-3` - Accent brand button
- `.btn-brand-4` - Highlight brand button

#### Text Colors
- `.text-brand` - Brand primary text color
- `.text-brand-2` - Brand secondary text color
- `.text-brand-3` - Brand accent text color
- `.text-brand-4` - Brand highlight text color

#### Backgrounds
- `.bg-brand` - Brand primary background (with readable text)
- `.bg-brand-2` - Brand secondary background
- `.bg-brand-3` - Brand accent background
- `.bg-brand-4` - Brand highlight background

#### Borders
- `.border-brand` - Brand primary border
- `.border-brand-2` - Brand secondary border
- `.border-brand-3` - Brand accent border
- `.border-brand-4` - Brand highlight border

#### Links & Badges
- `.link-brand` - Brand colored link
- `.badge-brand` - Brand colored badge
- `.badge-brand-2`, `.badge-brand-3`, `.badge-brand-4` - Additional badge variants

**When to Use Brand Classes**:
- ✅ When project includes `brand.css` with custom brand colors
- ✅ Primary call-to-action buttons (`.btn-brand`)
- ✅ Brand-specific styling needs

**When NOT to Use Brand Classes**:
- ❌ If project doesn't include `brand.css` (use Bootstrap defaults)
- ❌ For semantic colors (use `btn-success`, `btn-danger`, etc.)
- ❌ Secondary actions (use `btn-secondary` or `btn-outline-primary`)

**Example**:
```html
<!-- If brand.css exists -->
<button type="submit" class="btn btn-brand">Save Changes</button>
<div class="bg-brand text-white p-3">Brand background</div>
<p class="text-brand">Brand colored text</p>
```

See **[BRAND_THEMING.md](./BRAND_THEMING.md)** for complete brand theming guide.

## Custom Classes

### Card Styling

Applied automatically to `.card` components:

- Border radius: `var(--radius-lg)` (0.5rem)
- Box shadow: `var(--shadow-sm)` by default
- Hover shadow: `var(--shadow-md)` with transition

**Usage**: No action required. All cards automatically receive this styling.

## Usage Rules

### ✅ Allowed

- Using Bootstrap utility classes (`bg-primary`, `text-success`, `rounded-lg`, `shadow-md`, etc.)
- Using brand utility classes (`.btn-brand`, `.bg-brand`, `.text-brand`, etc.) when `brand.css` exists
- Referencing tokens in custom CSS (only in `/styles/tokens.css` and `/styles/overrides.css`)
- Using Bootstrap's built-in color/spacing/typography utilities

### ❌ Forbidden

- **Hard-coding hex values** in component HTML or inline styles
  - ❌ `<div style="color: #0d6efd">` 
  - ❌ `<button style="background-color: #ff0000">`
  - ✅ `<div class="text-primary">` or `<div class="text-brand">` (if brand.css exists)
  - ✅ `<button class="btn btn-brand">`
  
- **Inline styles** for colors, spacing, or layout
  - ❌ `<div style="margin-bottom: 1rem; color: #dc3545;">`
  - ✅ `<div class="mb-4 text-danger">`
  
- **Creating new CSS classes** outside of designated files
  - ❌ Adding `<style>` tags to HTML files
  - ❌ Creating new CSS files (except `brand.css` copied from template)
  - ✅ Only modify: `tokens.css`, `overrides.css`, or user-created `brand.css`
  
- **Using tokens directly in HTML** (tokens are for CSS only)
  - ❌ `<div style="border-radius: var(--radius-lg)">`
  - ❌ `<div style="color: var(--brand)">`
  - ✅ `<div class="rounded-lg">` or let card styling apply automatically
  - ✅ `<div class="text-brand">` (uses brand utility class)

## Token Modification

**Rule**: 
- Base tokens (radius, shadows, typography) should only be modified in `/styles/tokens.css`
- Brand colors should be defined in a user-created `brand.css` file (copied from `brand.template.css`)
- Do not override tokens in component HTML or other CSS files

**Process**: 
- **For base tokens** (radius, shadows, typography):
  1. Update values in `/styles/tokens.css`
  2. Test all components that use these tokens
  3. Document changes if significant

- **For brand colors**:
  1. Copy `brand.template.css` to your project as `brand.css`
  2. Set your brand color values in `brand.css`
  3. Include `brand.css` in your HTML (after `tokens.css`, before `overrides.css`)
  4. Use brand utility classes (`.btn-brand`, `.bg-brand`, etc.)
  5. See `BRAND_THEMING.md` for complete instructions

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

