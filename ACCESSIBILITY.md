# Accessibility Standards

## Baseline Standard

**WCAG 2.1 Level AA (Minimum)**
- All pages and components must meet WCAG 2.1 Level AA standards.
- Level AAA compliance is encouraged where feasible but not required.

## Mandatory Rules

### Semantic HTML and Landmarks

- ✅ Use semantic HTML5 elements (`<nav>`, `<main>`, `<header>`, `<footer>`, `<article>`, `<section>`)
- ✅ Include proper landmark structure (one `<main>`, logical `<nav>` placement)
- ✅ Use heading hierarchy correctly (h1 → h2 → h3, no skipping levels)
- ✅ One `<h1>` per page (page title)

### Form Accessibility

- ✅ Every form input MUST have an associated `<label>` with matching `for` and `id`
- ✅ Use `fieldset` and `legend` for grouped form controls
- ✅ Provide `required` attribute on mandatory fields
- ✅ Include validation feedback with `invalid-feedback` or `valid-feedback` classes
- ✅ Use appropriate input types (`email`, `tel`, `url`, `number`, etc.)
- ✅ Associate error messages with inputs using `aria-describedby` when needed

### Keyboard Access

- ✅ All interactive elements must be keyboard accessible
- ✅ Tab order must be logical and intuitive
- ✅ Focus indicators must be visible (Bootstrap default or enhanced)
- ✅ Skip links for main content when appropriate
- ✅ No keyboard traps (users can navigate away from all elements)

### Color and Contrast

- ✅ Text contrast ratio: minimum 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt+ bold)
- ✅ Do not rely on color alone to convey information
- ✅ Provide text labels, icons, or patterns in addition to color
- ✅ Ensure focus indicators have sufficient contrast

### Images and Media

- ✅ All images must have descriptive `alt` attributes
- ✅ Decorative images use `alt=""` (empty string)
- ✅ Complex images (charts, graphs) require longer descriptions (consider `aria-describedby`)
- ✅ Video/audio content must have captions or transcripts

## Component-Specific Rules

### Modals

- ✅ `aria-labelledby` pointing to modal title `id`
- ✅ `aria-hidden="true"` when closed (managed by Bootstrap JS)
- ✅ `tabindex="-1"` on modal container
- ✅ Focus trap when open (Bootstrap handles this)
- ✅ ESC key closes modal
- ✅ Focus returns to trigger element when closed

### Dropdowns

- ✅ `aria-expanded` indicates open/closed state
- ✅ `aria-labelledby` on menu linking to button `id`
- ✅ Keyboard navigation (Arrow keys, Enter, Escape)
- ✅ Focus management when opening/closing

### Navbars

- ✅ Toggle button has `aria-label="Toggle navigation"`
- ✅ Toggle button has `aria-expanded` attribute
- ✅ Toggle button has `aria-controls` pointing to collapse element
- ✅ Active link has `aria-current="page"`

### Forms

- ✅ All inputs have visible labels
- ✅ Labels use `for` attribute matching input `id`
- ✅ Required fields indicated visually and with `required` attribute
- ✅ Error messages are associated with inputs
- ✅ Form validation is keyboard accessible

### Tables

- ✅ Use `<thead>` and `<tbody>` structure
- ✅ `scope` attributes on header cells (`scope="col"` or `scope="row"`)
- ✅ Table captions for complex tables
- ✅ Responsive wrapper (`table-responsive`) for mobile

### Alerts and Toasts

- ✅ `role="alert"` for important messages
- ✅ `aria-live="assertive"` for critical alerts
- ✅ `aria-live="polite"` for non-critical notifications
- ✅ Dismissible alerts have close button with `aria-label="Close"`

## Pre-Flight Checklist

Before finalizing any page or component, verify:

### Structure
- [ ] Semantic HTML5 elements used appropriately
- [ ] Proper heading hierarchy (h1 → h2 → h3, no skipping)
- [ ] One `<h1>` per page
- [ ] Landmark structure is logical

### Forms
- [ ] Every input has an associated `<label>`
- [ ] Label `for` matches input `id` exactly
- [ ] Required fields have `required` attribute
- [ ] Validation feedback is provided

### Keyboard
- [ ] All interactive elements are keyboard accessible
- [ ] Tab order is logical
- [ ] Focus indicators are visible
- [ ] No keyboard traps

### Images
- [ ] All images have `alt` attributes
- [ ] Decorative images use `alt=""`
- [ ] Complex images have descriptions

### Color
- [ ] Text contrast meets 4.5:1 (normal) or 3:1 (large)
- [ ] Information not conveyed by color alone
- [ ] Focus indicators have sufficient contrast

### ARIA
- [ ] Modals have `aria-labelledby` and `aria-hidden`
- [ ] Dropdowns have `aria-expanded` and `aria-labelledby`
- [ ] Interactive elements have appropriate ARIA attributes
- [ ] No redundant ARIA (don't add ARIA to native semantic elements)

### Testing
- [ ] Tested with keyboard navigation
- [ ] Tested with screen reader (if possible)
- [ ] Validated HTML structure
- [ ] Checked color contrast with tool

## Resources

- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- Bootstrap Accessibility: https://getbootstrap.com/docs/5.3/getting-started/accessibility/
- Color Contrast Checker: https://webaim.org/resources/contrastchecker/

