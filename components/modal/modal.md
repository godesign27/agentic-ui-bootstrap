# Modal Component

## Purpose
Dialog boxes for displaying content, forms, confirmations, or important information. Modals overlay the page content and require user interaction.

## Variants

### Size Variants
- Default size (no class)
- `modal-sm` - Small modal
- `modal-lg` - Large modal
- `modal-xl` - Extra large modal
- `modal-fullscreen` - Fullscreen modal

### Structure
- **Modal Trigger**: Button or link with `data-bs-toggle="modal"` and `data-bs-target="#modalId"`
- **Modal Container**: `modal fade` with unique `id`
- **Modal Dialog**: `modal-dialog` wrapper
- **Modal Content**: `modal-content` containing header, body, footer
- **Modal Header**: Title and close button
- **Modal Body**: Main content area
- **Modal Footer**: Action buttons

## Usage Rules

1. **Unique ID required**: Each modal must have a unique `id` attribute
2. **ARIA attributes mandatory**:
   - `aria-labelledby` pointing to modal title `id`
   - `aria-hidden="true"` (managed by Bootstrap JS)
   - `tabindex="-1"` on modal container
3. **Trigger button must match**: `data-bs-target` must match modal `id` with `#` prefix
4. **Close button**: Must have `data-bs-dismiss="modal"` and `aria-label="Close"`
5. **Title ID**: Modal title must have unique `id` that matches `aria-labelledby`
6. **Footer buttons**: Primary action on right, secondary (Close) on left

## Accessibility

- ✅ `aria-labelledby` points to modal title
- ✅ `aria-hidden` managed by Bootstrap JS
- ✅ Close button has `aria-label="Close"`
- ✅ Keyboard accessible (ESC closes modal)
- ✅ Focus trap (focus stays within modal when open)
- ✅ Focus returns to trigger element when closed

## Do's

- ✅ Use modals for important confirmations or focused tasks
- ✅ Include clear, descriptive titles
- ✅ Place primary action button on the right
- ✅ Include a "Close" or "Cancel" button
- ✅ Keep modal content focused and concise
- ✅ Use appropriate modal size for content

## Don'ts

- ❌ Don't nest modals inside modals
- ❌ Don't remove ARIA attributes
- ❌ Don't use modals for non-critical information (use alerts instead)
- ❌ Don't forget unique IDs for modal and title
- ❌ Don't remove the fade animation (improves UX)

## Dependencies

- Bootstrap 5.3.8 JavaScript bundle (required for modal functionality)
- Bootstrap 5.3.8 CSS

## Example Usage

```html
<!-- Basic Modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open Modal
</button>

<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="myModalLabel">Confirm Action</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure you want to proceed?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary">Confirm</button>
            </div>
        </div>
    </div>
</div>

<!-- Large Modal -->
<div class="modal fade" id="largeModal" tabindex="-1" aria-labelledby="largeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <!-- Same structure as above -->
    </div>
</div>
```

## Notes

- Modals are hidden by default (`aria-hidden="true"`)
- Bootstrap JS automatically manages `aria-hidden` when opening/closing
- ESC key closes modal automatically
- Clicking backdrop closes modal (can be disabled with `data-bs-backdrop="static"`)
- Focus is trapped inside modal when open
- Modal must be a direct child of `<body>` for proper z-index stacking

