# Brand Theming Guide

## Overview

This library provides a **token-based brand theming system** that allows you to customize brand colors in your project without modifying Bootstrap's CDN files or requiring build tooling. This system adds a brand color layer on top of Bootstrap 5.3.8.

## What This System Is

- ✅ A **token-based** brand color system using CSS custom properties
- ✅ **Lightweight** - works with Bootstrap CDN, no build tools required
- ✅ **Flexible** - supports light and dark modes via Bootstrap's `data-bs-theme` attribute
- ✅ **Scalable** - provides utility classes (`.btn-brand`, `.bg-brand`, `.text-brand`, etc.) that use your brand colors
- ✅ **Non-invasive** - does not modify Bootstrap's default color system

## What This System Is NOT

- ❌ **NOT a Sass/SCSS rebuild** - we do not rebuild Bootstrap's theme colors globally
- ❌ **NOT a replacement** for Bootstrap's built-in color utilities (`btn-primary`, `bg-success`, etc.)
- ❌ **NOT a build-time system** - no npm, webpack, or other build tooling required
- ❌ **NOT a global override** - Bootstrap's default colors remain unchanged; brand colors are additive

## Agent Detection Rule

**Deterministic decision rule for agents:**

- ✅ **IF** `/styles/brand.css` exists in the project **OR** the HTML includes a `<link>` tag referencing `styles/brand.css` (or any path ending in `brand.css`)
- ✅ **THEN** brand utility classes (`.btn-brand`, `.bg-brand`, `.text-brand`, etc.) are allowed and should be used for brand-specific styling
- ❌ **ELSE** use Bootstrap default classes (`btn-primary`, `bg-success`, `text-danger`, etc.)

This rule ensures composition-only behavior: agents check for the presence of `brand.css` before using brand utility classes. If `brand.css` is not present, agents must use Bootstrap's semantic color classes instead.

## Quick Start

### Step 1: Copy the Template

Copy `/styles/brand.template.css` into your project as `/styles/brand.css` (or any name you prefer).

### Step 2: Set Your Brand Colors

Edit your `brand.css` file and set your brand color values:

```css
:root {
    --brand: #0d6efd;        /* Your primary brand color */
    --brand-2: #6c757d;      /* Your secondary brand color */
    --brand-3: #198754;       /* Your accent color */
    --brand-4: #dc3545;       /* Your highlight/warn color */
    --brand-text-on: #fff;   /* Text color on brand backgrounds */
}
```

### Step 3: Include in Your HTML

Include your brand CSS file in the correct order:

```html
<head>
    <!-- Bootstrap CSS via CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    
    <!-- Local Styles (in this order) -->
    <link rel="stylesheet" href="styles/tokens.css">
    <link rel="stylesheet" href="styles/brand.css">        <!-- Your brand colors -->
    <link rel="stylesheet" href="styles/overrides.css">    <!-- Brand utility classes -->
</head>
```

**Critical**: The order matters:
1. Bootstrap CDN (first)
2. `tokens.css` (base tokens)
3. `brand.css` (your brand colors - **must come before overrides.css**)
4. `overrides.css` (brand utility classes that use your brand variables)

### Step 4: Use Brand Classes

Now you can use brand utility classes in your components:

```html
<!-- Buttons -->
<button class="btn btn-brand">Primary Brand Action</button>
<button class="btn btn-brand-2">Secondary Brand Action</button>

<!-- Backgrounds -->
<div class="bg-brand text-white p-3">Brand background</div>

<!-- Text -->
<p class="text-brand">Brand colored text</p>

<!-- Borders -->
<div class="border border-brand p-3">Brand border</div>

<!-- Links -->
<a href="#" class="link-brand">Brand colored link</a>

<!-- Badges -->
<span class="badge badge-brand">Brand Badge</span>
```

## Available Brand Utility Classes

### Buttons

- `.btn-brand` - Primary brand button
- `.btn-brand-2` - Secondary brand button
- `.btn-brand-3` - Accent brand button
- `.btn-brand-4` - Highlight/warn brand button

All buttons include proper `:hover` and `:focus-visible` states.

### Text Colors

- `.text-brand` - Brand primary text color
- `.text-brand-2` - Brand secondary text color
- `.text-brand-3` - Brand accent text color
- `.text-brand-4` - Brand highlight text color

### Background Colors

- `.bg-brand` - Brand primary background (with readable text color)
- `.bg-brand-2` - Brand secondary background
- `.bg-brand-3` - Brand accent background
- `.bg-brand-4` - Brand highlight background

### Borders

- `.border-brand` - Brand primary border
- `.border-brand-2` - Brand secondary border
- `.border-brand-3` - Brand accent border
- `.border-brand-4` - Brand highlight border

### Links

- `.link-brand` - Brand colored link with hover state

### Badges

- `.badge-brand` - Brand colored badge

## Dark Mode Support

Bootstrap 5.3 supports color modes via the `data-bs-theme` attribute. This brand theming system works seamlessly with dark mode.

### How to Enable Dark Mode

Set the theme on the `<html>` element:

```html
<html lang="en" data-bs-theme="dark">
```

Or toggle dynamically:

```javascript
document.documentElement.setAttribute('data-bs-theme', 'dark');
```

### Customizing Dark Mode Brand Colors

In your `brand.css` file, you can optionally override brand colors for dark mode:

```css
:root[data-bs-theme="dark"] {
    --brand: #4dabf7;        /* Brighter for dark mode */
    --brand-2: #868e96;       /* Adjusted for dark background */
    --brand-3: #51cf66;       /* Brighter accent */
    --brand-4: #ff6b6b;       /* Adjusted highlight */
    --brand-text-on: #fff;   /* Usually stays white */
}
```

If you don't define dark mode overrides, the light mode colors will be used (which may not have sufficient contrast on dark backgrounds).

## Visual Customizer

Use `/examples/brand-customizer.html` to:
- Preview brand colors in real-time
- Test light and dark modes
- Generate the final CSS snippet to copy into your `brand.css` file

Navigate to: `http://localhost:8000/examples/brand-customizer.html`

## Agent Rules for Theming

When working with this theming system, agents MUST follow these rules (composition-only):

### ✅ DO

- **Check for brand.css first** (see Agent Detection Rule above):
  - If `brand.css` exists or is linked → use brand utility classes (`.btn-brand`, `.bg-brand`, `.text-brand`, etc.)
  - If `brand.css` does not exist → use Bootstrap default classes (`.btn-primary`, `.bg-success`, `.text-danger`, etc.)

- **Use brand utility classes** when brand colors are available:
  - ✅ `btn-brand` instead of `btn-primary` (when brand.css exists)
  - ✅ `bg-brand` instead of hard-coded backgrounds
  - ✅ `text-brand` instead of inline color styles

- **Reference brand variables in custom CSS** (only in `brand.css` or `overrides.css`):
  - ✅ `color: var(--brand);`
  - ✅ `background-color: var(--brand-2);`

- **Use Bootstrap utilities for non-brand styling**:
  - ✅ `btn-secondary`, `bg-success`, `text-danger` (Bootstrap defaults)
  - ✅ `mb-4`, `p-3`, `rounded-lg` (Bootstrap utilities)

### ❌ DON'T

- **Never hard-code hex values** in component snippets:
  - ❌ `<button style="background-color: #0d6efd">`
  - ❌ `<div class="bg-primary" style="color: #ff0000">`
  - ✅ `<button class="btn btn-brand">`
  - ✅ `<div class="bg-brand text-white">`

- **Never use inline styles** for colors:
  - ❌ `style="color: #0d6efd"`
  - ❌ `style="background: var(--brand)"`
  - ✅ `class="text-brand"`
  - ✅ `class="bg-brand"`

- **Never modify Bootstrap's default colors**:
  - ❌ Attempting to override `--bs-primary`, `--bs-success`, etc.
  - ❌ Creating global CSS that changes Bootstrap's color system
  - ✅ Use brand classes as additive layer

- **Never create new CSS files** outside the designated structure:
  - ❌ Creating `custom.css` or `theme.css` in project root
  - ❌ Adding `<style>` blocks to HTML files
  - ✅ Only modify `brand.css`, `tokens.css`, or `overrides.css`

## When to Use Brand Classes vs Bootstrap Defaults

### Use Brand Classes When:
- The project has a specific brand identity that differs from Bootstrap defaults
- The design requires consistent brand colors across the application
- The project includes `brand.css` with custom brand variables

### Use Bootstrap Defaults When:
- No brand identity is required
- The project doesn't include `brand.css`
- Using Bootstrap's semantic colors (`primary`, `success`, `danger`, etc.) is sufficient

## Examples

### Example 1: Brand Button

```html
<!-- If brand.css exists -->
<button type="submit" class="btn btn-brand">Save Changes</button>

<!-- If brand.css doesn't exist, fallback to Bootstrap -->
<button type="submit" class="btn btn-primary">Save Changes</button>
```

### Example 2: Brand Colored Card

```html
<div class="card">
    <div class="card-header bg-brand text-white">
        <h5 class="mb-0">Brand Header</h5>
    </div>
    <div class="card-body">
        <p class="text-brand">This text uses brand color.</p>
        <button class="btn btn-brand">Action</button>
    </div>
</div>
```

### Example 3: Brand Link

```html
<p>Visit our <a href="#" class="link-brand">brand website</a> for more information.</p>
```

## Troubleshooting

### Brand Colors Not Appearing

1. **Check file order**: Ensure `brand.css` is loaded after `tokens.css` but before `overrides.css`
2. **Verify brand.css exists**: Check that you've copied and customized `brand.template.css`
3. **Check variable names**: Ensure you're using `--brand`, `--brand-2`, etc. (not `--brand-primary`)
4. **Browser cache**: Hard refresh (`Cmd+Shift+R` or `Ctrl+Shift+R`)

### Dark Mode Not Working

1. **Check data-bs-theme**: Ensure `<html>` has `data-bs-theme="dark"` attribute
2. **Verify dark mode overrides**: Check that `:root[data-bs-theme="dark"]` block exists in `brand.css`
3. **Contrast issues**: Dark mode colors may need to be brighter for sufficient contrast

### Classes Not Found

1. **Check overrides.css**: Ensure `/styles/overrides.css` is loaded (contains brand utility classes)
2. **Verify Bootstrap loaded**: Check that Bootstrap CDN CSS is loaded first
3. **File paths**: Verify all CSS file paths are correct relative to your HTML

## Best Practices

1. **Start with the template**: Always copy `brand.template.css` rather than creating from scratch
2. **Use the customizer**: Use `/examples/brand-customizer.html` to preview and generate your brand.css
3. **Test both modes**: Always test your brand colors in both light and dark modes
4. **Check contrast**: Ensure text on brand backgrounds meets WCAG 2.1 AA contrast requirements
5. **Document your colors**: Keep a record of your brand color hex values for reference
6. **Version control**: Include your `brand.css` file in version control (it's project-specific)

## Related Documentation

- **TOKENS_REFERENCE.md** - Complete reference for all design tokens
- **DESIGN_PRINCIPLES.md** - Design decision framework
- **ACCESSIBILITY.md** - Color contrast and accessibility requirements
- **/examples/brand-customizer.html** - Visual brand color customizer tool

