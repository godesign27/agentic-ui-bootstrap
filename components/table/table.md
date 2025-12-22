# Table Component

## Purpose
Responsive data tables for displaying structured information. Tables include striped rows, hover effects, status badges, and action buttons.

## Variants

### Style Variants
- `table` - Default table
- `table-striped` - Alternating row colors
- `table-hover` - Hover effect on rows
- `table-bordered` - Borders around cells
- `table-borderless` - No borders
- `table-sm` - Compact table (smaller padding)

### Combination
- `table table-striped table-hover` - Recommended combination

### Responsive Wrapper
- `table-responsive` - Makes table horizontally scrollable on small screens

### Badge Variants (for status column)
- `badge bg-primary` - Primary status
- `badge bg-success` - Success/Active status
- `badge bg-danger` - Danger/Inactive status
- `badge bg-warning` - Warning/Pending status
- `badge bg-info` - Info status
- `badge bg-secondary` - Secondary status

## Usage Rules

1. **Always use `<thead>` and `<tbody>`** for proper structure
2. **Scope attributes**: Use `scope="col"` on `<th>` in header, `scope="row"` on row headers
3. **Responsive wrapper**: Wrap table in `<div class="table-responsive">` for mobile support
4. **Status badges**: Use appropriate badge color for status meaning
5. **Action buttons**: Use `btn-sm` for compact action buttons in table cells
6. **Spacing**: Add `me-1` or `me-2` between action buttons

## Accessibility

- ✅ Semantic `<table>`, `<thead>`, `<tbody>` structure
- ✅ `scope` attributes on header cells
- ✅ Proper heading hierarchy
- ✅ Keyboard accessible buttons
- ✅ Screen reader friendly structure

## Do's

- ✅ Use striped and hover effects for better readability
- ✅ Include clear column headers
- ✅ Use badges for status indicators
- ✅ Keep action buttons small (`btn-sm`)
- ✅ Wrap in `table-responsive` for mobile
- ✅ Use semantic row headers (`<th scope="row">`) when appropriate

## Don'ts

- ❌ Don't skip `<thead>` or `<tbody>` elements
- ❌ Don't forget `scope` attributes
- ❌ Don't use tables for layout (use for data only)
- ❌ Don't overload tables with too many columns
- ❌ Don't remove responsive wrapper

## Dependencies

- Bootstrap 5.3.8 CSS
- No JavaScript required for basic table functionality

## Example Usage

```html
<!-- Basic Table -->
<div class="table-responsive">
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Item Name</td>
                <td><span class="badge bg-success">Active</span></td>
                <td>
                    <button type="button" class="btn btn-sm btn-primary">Edit</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<!-- Compact Table -->
<table class="table table-striped table-hover table-sm">
    <!-- Same structure -->
</table>

<!-- Bordered Table -->
<table class="table table-bordered table-striped">
    <!-- Same structure -->
</table>
```

## Notes

- `table-responsive` creates horizontal scroll on small screens
- Striped tables improve readability for large datasets
- Hover effect provides visual feedback
- Badges should use semantic colors (green=success, red=danger, yellow=warning)
- Action buttons should be consistent across rows

