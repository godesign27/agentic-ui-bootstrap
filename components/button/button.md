# Button Component

## Purpose
Interactive button elements for user actions. Buttons trigger actions, submit forms, or navigate to other pages.

## Variants

### Style Variants
- `btn-primary` - Primary action (blue)
- `btn-secondary` - Secondary action (gray)
- `btn-success` - Success action (green)
- `btn-danger` - Destructive action (red)
- `btn-warning` - Warning action (yellow)
- `btn-info` - Informational action (cyan)
- `btn-light` - Light background
- `btn-dark` - Dark background
- `btn-link` - Link-styled button
- `btn-brand` - Custom brand button (from overrides.css)

### Size Variants
- `btn-lg` - Large button
- `btn-sm` - Small button
- Default size (no class)

### Outline Variants
Add `btn-outline-*` prefix (e.g., `btn-outline-primary`)

### States
- `disabled` attribute or `disabled` class
- `active` class for pressed state

## Usage Rules

1. **Always specify `type` attribute**: `type="button"`, `type="submit"`, or `type="reset"`
2. Use semantic button types:
   - `type="button"` for general actions
   - `type="submit"` for form submission
   - `type="reset"` for form reset
3. For links styled as buttons, use `<a>` tag with `btn` classes instead of `<button>`
4. Disabled buttons should include `aria-disabled="true"` for accessibility
5. Use `btn-brand` for primary brand actions

## Accessibility

- ✅ Keyboard accessible (Enter/Space keys)
- ✅ Focus indicators visible
- ✅ Disabled state properly announced
- ✅ Use semantic HTML (`<button>` for actions, `<a>` for navigation)

## Do's

- ✅ Use appropriate button variant for action importance
- ✅ Include clear, action-oriented text
- ✅ Use `btn-brand` for primary brand actions
- ✅ Group related buttons with spacing (`me-2`, `mb-2`)
- ✅ Use button groups (`btn-group`) for related actions

## Don'ts

- ❌ Don't use buttons for navigation (use links with `btn` class instead)
- ❌ Don't nest interactive elements inside buttons
- ❌ Don't remove focus indicators
- ❌ Don't use color alone to convey meaning

## Dependencies

- Bootstrap 5.3.8 CSS
- `/styles/overrides.css` for `.btn-brand` class

## Example Usage

```html
<!-- Primary Action -->
<button type="button" class="btn btn-primary">Save Changes</button>

<!-- Brand Button -->
<button type="submit" class="btn btn-brand">Submit Form</button>

<!-- Disabled Button -->
<button type="button" class="btn btn-secondary" disabled aria-disabled="true">Disabled</button>

<!-- Link Styled as Button -->
<a href="#" class="btn btn-primary">Go to Page</a>

<!-- Button Group -->
<div class="btn-group" role="group">
    <button type="button" class="btn btn-outline-primary">Left</button>
    <button type="button" class="btn btn-outline-primary">Middle</button>
    <button type="button" class="btn btn-outline-primary">Right</button>
</div>
```

