# Card Component

## Purpose
Flexible container for displaying content with optional header, body, and footer sections. Cards are versatile containers that can hold various types of content.

## Variants

### Structure Variants
- **Full Card**: Header + Body + Footer
- **Header + Body**: Header and body only
- **Body Only**: Just the card body
- **Image Card**: Card with image at top

### Style Variants
- `card` - Default card
- `card-header` - Header section
- `card-body` - Main content section
- `card-footer` - Footer section
- `card-title` - Title heading (typically h5)
- `card-subtitle` - Subtitle text
- `card-text` - Body text
- `card-img-top` - Image at top of card
- `card-img-bottom` - Image at bottom of card

## Usage Rules

1. **Always include `card-body`** for main content, even if header/footer are omitted
2. Use semantic heading hierarchy (`h5` for `card-title` is standard)
3. Cards should have spacing between them (`mb-4`, `mb-3`)
4. Use `card-text` class for paragraph content within card body
5. Footer content should typically be muted (`text-muted`)

## Accessibility

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Links and buttons are keyboard accessible
- ✅ Images should have alt text if used

## Do's

- ✅ Use cards to group related content
- ✅ Include clear headings in card headers
- ✅ Add spacing between multiple cards
- ✅ Use card-footer for metadata or secondary actions
- ✅ Keep card content focused and concise

## Don'ts

- ❌ Don't nest cards inside cards
- ❌ Don't use cards for simple text blocks (use regular divs)
- ❌ Don't skip heading hierarchy
- ❌ Don't overload cards with too much content

## Dependencies

- Bootstrap 5.3.8 CSS
- `/styles/overrides.css` for custom card styling (border-radius, shadow)

## Example Usage

```html
<!-- Simple Card -->
<div class="card mb-4">
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Card content goes here.</p>
    </div>
</div>

<!-- Card with Image -->
<div class="card mb-4">
    <img src="image.jpg" class="card-img-top" alt="Description">
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Card content.</p>
    </div>
</div>

<!-- Full Card -->
<div class="card mb-4">
    <div class="card-header">
        <h5 class="card-title mb-0">Featured</h5>
    </div>
    <div class="card-body">
        <p class="card-text">Content here.</p>
    </div>
    <div class="card-footer text-muted">
        Last updated 2 days ago
    </div>
</div>
```

