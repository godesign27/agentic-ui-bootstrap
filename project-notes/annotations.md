# Annotations

This file captures behavioral assumptions, UX decisions, and technical explanations that affect implementation.

## Design Decisions

### CDN-Only Architecture
**Decision**: Bootstrap loaded via CDN, no npm or build tools.
**Rationale**: Simplifies agent usage, eliminates build complexity, ensures consistent versioning.
**Impact**: All examples and components must use CDN links. No local Bootstrap files except bootstrap-5.3.8-dist (reference only).

### Composition-Only Model
**Decision**: Agents compose from existing snippets; do not modify component files.
**Rationale**: Ensures consistency, reduces drift, maintains single source of truth.
**Impact**: All new pages built by copying and combining existing components.

### Token-Based Theming
**Decision**: Brand colors via CSS variables in user-created brand.css file.
**Rationale**: Allows customization without modifying Bootstrap or requiring build tools.
**Impact**: Brand utility classes (.btn-brand, .bg-brand) only work if brand.css exists.

## UX Assumptions

### Component Usage
- Components are atomic and reusable.
- Patterns combine multiple components into common UX flows.
- Examples demonstrate real-world page composition.

### Accessibility Baseline
- WCAG 2.1 AA compliance required.
- All components include ARIA attributes.
- Keyboard navigation mandatory.

## Technical Notes

### File Structure
- `/components/` - Individual component snippets
- `/patterns/` - Multi-component UX recipes
- `/examples/` - Complete page implementations
- `/styles/` - Tokens, brand template, overrides only

### Agent Detection Rules
- Brand classes allowed only if brand.css exists or is linked.
- Otherwise, use Bootstrap default semantic classes.

