# Alert Component

## Purpose
Display contextual feedback messages to users. Alerts provide important information, warnings, success messages, or error notifications.

## Variants

### Contextual Variants
- `alert-primary` - Primary information
- `alert-secondary` - Secondary information
- `alert-success` - Success messages
- `alert-danger` - Error or danger messages
- `alert-warning` - Warning messages
- `alert-info` - Informational messages
- `alert-light` - Light background
- `alert-dark` - Dark background

### Dismissible Alerts
Add `alert-dismissible` class and include a close button with `data-bs-dismiss="alert"` attribute.

## Usage Rules

1. **Always include `role="alert"`** for screen reader accessibility
2. Use appropriate contextual variant based on message type
3. For dismissible alerts, include `fade show` classes for smooth animation
4. Close button must have `aria-label="Close"` attribute
5. Place alerts at the top of content sections or after form submissions

## Accessibility

- ✅ `role="alert"` attribute included
- ✅ Close button has `aria-label="Close"`
- ✅ Keyboard accessible (ESC key closes dismissible alerts)
- ✅ Color contrast meets WCAG AA standards

## Do's

- ✅ Use semantic HTML structure
- ✅ Choose appropriate alert variant for message type
- ✅ Include clear, concise messaging
- ✅ Use dismissible alerts for non-critical information
- ✅ Place alerts where users will notice them

## Don'ts

- ❌ Don't use alerts for critical errors that require immediate action (use modals instead)
- ❌ Don't stack multiple alerts without spacing
- ❌ Don't use alert colors alone to convey meaning (include text)
- ❌ Don't remove `role="alert"` attribute

## Dependencies

- Bootstrap 5.3.8 JavaScript bundle (for dismissible functionality)
- No additional custom CSS required

## Example Usage

```html
<!-- Success Alert -->
<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success!</strong> Your changes have been saved.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<!-- Error Alert (non-dismissible) -->
<div class="alert alert-danger" role="alert">
    <strong>Error:</strong> Please check your input and try again.
</div>
```

