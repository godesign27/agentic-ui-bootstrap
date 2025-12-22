# Navbar Component

## Purpose
Responsive navigation bar with brand logo, navigation links, and a right-side CTA (Call-to-Action) group. Provides site-wide navigation and primary actions.

## Variants

### Color Variants
- `navbar-light bg-light` - Light navbar (default)
- `navbar-dark bg-dark` - Dark navbar
- `navbar-dark bg-primary` - Primary colored navbar

### Breakpoint Variants
- `navbar-expand-sm` - Expand at small breakpoint
- `navbar-expand-md` - Expand at medium breakpoint
- `navbar-expand-lg` - Expand at large breakpoint (recommended)
- `navbar-expand-xl` - Expand at extra large breakpoint
- `navbar-expand-xxl` - Expand at extra extra large breakpoint

### Structure
- Brand logo/text (left side)
- Navigation links (center/left)
- CTA group (right side)
- Mobile toggle button (hamburger menu)

## Usage Rules

1. **Always include responsive toggle button** with proper ARIA attributes
2. **Unique ID required**: Each navbar collapse div needs a unique `id` (e.g., `navbarNav`)
3. **Toggle button must match**: `data-bs-target` must match the collapse `id` with `#` prefix
4. **CTA group on right**: Use `d-flex` wrapper for right-side button group
5. **Active state**: Use `active` class and `aria-current="page"` for current page link
6. **Spacing**: Add `mb-4` or similar spacing below navbar

## Accessibility

- ✅ Toggle button has `aria-label="Toggle navigation"`
- ✅ Toggle button has `aria-expanded` attribute (managed by Bootstrap JS)
- ✅ Toggle button has `aria-controls` pointing to collapse element
- ✅ Active link has `aria-current="page"`
- ✅ Keyboard navigation supported
- ✅ Focus indicators visible

## Do's

- ✅ Use semantic `<nav>` element
- ✅ Include brand logo/text on left
- ✅ Place primary CTAs on right side
- ✅ Use appropriate breakpoint for your design (`navbar-expand-lg` recommended)
- ✅ Keep navigation items concise and clear
- ✅ Update `active` class based on current page

## Don'ts

- ❌ Don't remove the toggle button (required for mobile)
- ❌ Don't forget unique IDs for collapse elements
- ❌ Don't nest navbars
- ❌ Don't use too many navigation items (keep it focused)
- ❌ Don't remove ARIA attributes

## Dependencies

- Bootstrap 5.3.8 JavaScript bundle (for collapse/toggle functionality)
- Bootstrap 5.3.8 CSS

## Example Usage

```html
<!-- Light Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">My Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
            </ul>
            <div class="d-flex">
                <button type="button" class="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
</nav>

<!-- Dark Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <!-- Same structure as above -->
</nav>
```

## Notes

- The `container-fluid` class allows navbar to span full width
- Use `me-auto` on nav list to push CTA group to the right
- Mobile menu collapses automatically below the specified breakpoint
- Toggle button icon is automatically styled by Bootstrap

