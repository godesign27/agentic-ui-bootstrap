# Form Components

## Purpose
Form input elements with proper labels, validation states, and accessibility. Form components include text inputs, textareas, select dropdowns, and checkboxes.

## Available Form Snippets

### Input (`input.html`)
Text input fields for single-line text entry.

### Textarea (`textarea.html`)
Multi-line text input fields for longer content.

### Select (`select.html`)
Dropdown select menus for choosing from a list of options.

### Checkbox (`checkbox.html`)
Checkbox inputs for single or multiple selections.

## Common Structure

All form components follow this pattern:
```html
<div class="mb-3">
    <label for="elementId" class="form-label">Label Text</label>
    <!-- Input element -->
    <div class="form-text">Optional helper text</div>
</div>
```

## Usage Rules

### Universal Rules (All Form Components)

1. **Labels are mandatory**: Every form input MUST have an associated `<label>` element
2. **ID and FOR matching**: Label `for` attribute must match input `id` attribute exactly
3. **Spacing**: Wrap each form group in `<div class="mb-3">` for consistent spacing
4. **Helper text**: Use `<div class="form-text">` for optional helper text below inputs
5. **Form validation**: Use Bootstrap validation classes (`is-valid`, `is-invalid`) with feedback messages

### Input-Specific Rules

1. **Input types**: Use appropriate `type` attribute (`text`, `email`, `password`, `number`, `tel`, `url`, etc.)
2. **Placeholders**: Use `placeholder` for example text (not a replacement for labels)
3. **Required fields**: Add `required` attribute and indicate visually with asterisk or "(required)" text

### Textarea-Specific Rules

1. **Rows attribute**: Specify `rows` attribute for initial height (e.g., `rows="3"`)
2. **Resize**: Textareas are resizable by default (can be disabled with CSS if needed)

### Select-Specific Rules

1. **Use `form-select` class**: Not `form-control` (Bootstrap 5.3+)
2. **Default option**: Include a default option like "Choose an option" or "Select..."
3. **ARIA label**: Add `aria-label` if label is not visible or for additional context
4. **Value attributes**: Always include `value` attributes on options

### Checkbox-Specific Rules

1. **Use `form-check` wrapper**: Wrap checkbox and label in `<div class="form-check">`
2. **Label after input**: Place label after the checkbox input (not before)
3. **Use `form-check-label`**: Label should have `form-check-label` class
4. **Grouping**: For multiple checkboxes, use same `name` attribute to group them
5. **Fieldset for groups**: Consider using `<fieldset>` and `<legend>` for checkbox groups

## Variants

### Input Types
- `type="text"` - Standard text input
- `type="email"` - Email input (with validation)
- `type="password"` - Password input (masked)
- `type="number"` - Number input
- `type="tel"` - Telephone input
- `type="url"` - URL input
- `type="date"` - Date picker
- `type="time"` - Time picker
- `type="datetime-local"` - Date and time picker

### Size Variants
- Default size (no class)
- `form-control-lg` - Large input
- `form-control-sm` - Small input

### Validation States
- `is-valid` - Valid input (green border)
- `is-invalid` - Invalid input (red border)
- `valid-feedback` - Success message
- `invalid-feedback` - Error message

### Select Variants
- `form-select` - Standard select
- `form-select-lg` - Large select
- `form-select-sm` - Small select
- `multiple` - Multiple selection

## Accessibility

- ✅ All inputs have associated labels with matching `for` and `id`
- ✅ Labels are visible and descriptive
- ✅ Required fields are indicated
- ✅ Error messages are associated with inputs (`aria-describedby`)
- ✅ Keyboard navigation supported
- ✅ Screen reader friendly

## Do's

- ✅ Always include labels for every input
- ✅ Use semantic input types (`email`, `tel`, `url`, etc.)
- ✅ Provide helpful placeholder text
- ✅ Include helper text for complex inputs
- ✅ Use validation states with feedback messages
- ✅ Group related form fields logically
- ✅ Use `required` attribute for mandatory fields
- ✅ Match label `for` with input `id` exactly

## Don'ts

- ❌ Don't use placeholders as labels
- ❌ Don't skip labels (even if visually hidden)
- ❌ Don't use generic IDs (use descriptive, unique IDs)
- ❌ Don't forget `name` attributes for form submission
- ❌ Don't nest form elements incorrectly
- ❌ Don't use `form-control` for selects (use `form-select`)

## Dependencies

- Bootstrap 5.3.8 CSS
- Bootstrap 5.3.8 JavaScript bundle (for validation and custom form controls)

## Example Usage

### Text Input with Validation
```html
<div class="mb-3">
    <label for="emailInput" class="form-label">Email Address <span class="text-danger">*</span></label>
    <input type="email" class="form-control" id="emailInput" placeholder="name@example.com" required>
    <div class="invalid-feedback">
        Please provide a valid email address.
    </div>
</div>
```

### Select Dropdown
```html
<div class="mb-3">
    <label for="countrySelect" class="form-label">Country</label>
    <select class="form-select" id="countrySelect" required>
        <option value="" selected>Choose a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
    </select>
</div>
```

### Checkbox Group with Fieldset
```html
<fieldset class="mb-3">
    <legend class="form-label">Select your interests</legend>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="interest1" name="interests" value="tech">
        <label class="form-check-label" for="interest1">Technology</label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="interest2" name="interests" value="design">
        <label class="form-check-label" for="interest2">Design</label>
    </div>
</fieldset>
```

### Form with Validation
```html
<form>
    <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control is-invalid" id="username" required>
        <div class="invalid-feedback">
            Username is required.
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

## Notes

- Form components work best when wrapped in a `<form>` element
- Use `name` attributes for form submission
- Validation classes (`is-valid`, `is-invalid`) can be added dynamically via JavaScript
- Helper text (`form-text`) is optional but recommended for complex inputs
- Always test forms with keyboard-only navigation
- Consider using HTML5 validation attributes (`required`, `pattern`, `min`, `max`, etc.)

