You are working in the repository: bootstrap-agentic-ai.

## Task: [FEATURE NAME]

**Scope**: Complex or multi-page feature.

## Constraints

1. **Composition Only**
   - Copy and combine existing components from `/components/`
   - Reference patterns from `/patterns/` for applicable UX patterns
   - Do NOT modify component files
   - Do NOT create new components
   - Components and patterns are closed-world: only use what exists

2. **Framework-Agnostic Rules**
   - Reference AGENT_RULES.md for composition rules
   - Reference COMPONENTS_INDEX.md for available components
   - Reference DESIGN_PRINCIPLES.md for design decision framework
   - Reference component documentation: `/components/<component>/<component>.md`
   - Reference pattern documentation: `/patterns/<pattern>.md`
   - Check `/examples/` extensively for similar implementations
   - Do NOT duplicate governance content

3. **UI Composition Separation**
   - Separate UI composition from backend logic assumptions
   - State all assumptions explicitly before implementation
   - UI composition must be complete and functional without backend
   - Backend integration points must be clearly documented

4. **Accessibility Enforcement**
   - WCAG 2.1 AA compliance required
   - Reference ACCESSIBILITY.md for requirements
   - Verify semantic HTML, ARIA attributes, keyboard navigation
   - Test multi-page navigation flows

5. **State and Flow Rigor**
   - Document user flow assumptions explicitly
   - State state management assumptions
   - Verify navigation between pages
   - Ensure consistent UX patterns across pages

## Assumptions (State Explicitly)

1. [Assumption about data/backend]
2. [Assumption about user flow]
3. [Assumption about state management]
4. [Assumption about page transitions/navigation]
5. [Other assumptions]

## Required Checks

- [ ] Assumptions stated: All assumptions documented before implementation
- [ ] Pattern alignment: Referenced applicable pattern(s) from `/patterns/`
- [ ] Component usage: Only used components from `/components/`
- [ ] No component modification: Did not modify component files
- [ ] Accessibility: WCAG 2.1 AA compliance verified across all pages
- [ ] No custom CSS: Only tokens.css, brand.css (if exists), overrides.css
- [ ] UI/Backend separation: UI composition complete without backend dependencies
- [ ] Navigation flow: Multi-page navigation verified

## Workflow

1. State all assumptions explicitly before implementation
2. Reference `/patterns/` extensively for applicable UX patterns
3. Check `/examples/` extensively for similar implementations
4. Identify component(s) from COMPONENTS_INDEX.md
5. Read component and pattern documentation for usage rules
6. Copy component snippet(s) from `/components/<component>/<component>.html`
7. Compose pages within app shell structure (`/assets/app-shell.html`)
8. Verify accessibility compliance across all pages
9. Verify navigation flows between pages
10. Output structured summary

## Implementation Plan

### UI Composition
- Pattern(s): [list from `/patterns/`]
- Component(s): [list from COMPONENTS_INDEX.md]
- Page(s): [list of pages to create]

### Backend Logic (if applicable)
- [Brief description of logic assumptions and integration points]

## Output Format

1. Assumptions stated: [yes/no]
2. Pattern(s) referenced: [list from `/patterns/`]
3. Component(s) used: [list from COMPONENTS_INDEX.md]
4. Page(s) created: [list]
5. Accessibility verification: [brief notes]
6. Implementation summary: [concise description]
7. Stakeholder summary: [2-3 sentence non-technical summary]

## Deliverable

[Specific deliverable description]

## Stakeholder Summary

[Brief, non-technical summary for stakeholders]

After completing this task, execute /prompts/changelog_prompt.md.
