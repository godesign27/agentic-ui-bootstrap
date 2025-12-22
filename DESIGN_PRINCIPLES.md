# Design Principles

## Core Principles

### 1. Composition Over Invention
- **Rule**: Use existing components from `/components/` and patterns from `/patterns/`. Do not invent new components.
- **Rationale**: Consistency and maintainability require reusing tested, documented components.
- **Action**: If a need arises that isn't covered, consult `COMPONENTS_INDEX.md` first. Only propose new components if absolutely necessary and update the index.

### 2. Utility-First Spacing and Layout
- **Rule**: Prefer Bootstrap utility classes (`mb-4`, `p-3`, `d-flex`, `gap-2`, etc.) over custom CSS for spacing and layout.
- **Rationale**: Utilities provide consistent spacing scale and responsive behavior without custom code.
- **Action**: Use utilities for margins, padding, display, flexbox, and grid. Only use custom CSS in `/styles/tokens.css` and `/styles/overrides.css`.

### 3. Page-First UX
- **Rule**: Prefer full-page experiences over modal-heavy workflows. Use modals for confirmations, simple forms, or supplementary information only.
- **Rationale**: Modals interrupt user flow and reduce accessibility. Full pages provide better navigation, bookmarking, and screen reader support.
- **Action**: Use modals for:
  - Confirmation dialogs (delete, confirm actions)
  - Simple single-field inputs
  - Supplementary information overlays
- **Do NOT use modals for**:
  - Complex multi-step forms (use wizard pattern)
  - Primary content workflows
  - Settings pages (use full page)

### 4. Consistency and Predictability
- **Rule**: Reuse patterns from `/patterns/` and examples from `/examples/` for similar use cases.
- **Rationale**: Users learn interfaces faster when patterns are consistent across pages.
- **Action**: Before creating a new layout, check if a pattern exists. Use examples as reference for complete implementations.

### 5. Component Restrictions

#### Do NOT Use These Components Without Justification

**Carousel**
- **Restriction**: Avoid carousels for critical content or primary navigation.
- **Reason**: Poor accessibility, auto-play issues, hidden content, mobile usability problems.
- **Exception**: Image galleries where content is supplementary, not primary.

**Tooltip / Popover**
- **Restriction**: Do not use for critical information or required actions.
- **Reason**: Hidden by default, not accessible to keyboard-only users, mobile issues.
- **Exception**: Supplementary help text, non-critical hints, icon explanations.

**Scrollspy**
- **Restriction**: Use only for long-form content with clear section navigation.
- **Reason**: Adds complexity, requires JavaScript initialization, can be confusing.
- **Exception**: Documentation pages, long articles with table of contents.

## Design Decision Framework

When making design decisions, ask:
1. Is there an existing component/pattern for this?
2. Can this be solved with Bootstrap utilities?
3. Is this a full-page experience or a modal?
4. Does this maintain consistency with existing patterns?
5. Is this component restricted? If yes, is there justification?

## Forbidden Practices

- ❌ Creating new component variants without updating `COMPONENTS_INDEX.md`
- ❌ Using inline styles (use utility classes or tokens)
- ❌ Hard-coding colors (use tokens or Bootstrap classes)
- ❌ Building complex workflows in modals
- ❌ Using restricted components without justification

