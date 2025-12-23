You are working in the repository: bootstrap-agentic-ai.

## Task: [FEATURE NAME]

**Scope**: Multi-component or single-page feature.

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
   - Reference component documentation: `/components/<component>/<component>.md`
   - Reference pattern documentation: `/patterns/<pattern>.md`
   - Check `/examples/` for similar implementations
   - Do NOT duplicate governance content

3. **Accessibility Enforcement**
   - WCAG 2.1 AA compliance required
   - Reference ACCESSIBILITY.md for requirements
   - Verify semantic HTML, ARIA attributes, keyboard navigation

4. **Complexity Limits**
   - Multi-component or single-page feature only
   - If scope exceeds single-page or requires multi-page, use large-feature.md instead
   - Do NOT infer requirements beyond stated scope

## Required Checks

- [ ] Pattern alignment: Referenced applicable pattern(s) from `/patterns/`
- [ ] Component usage: Only used components from `/components/`
- [ ] No component modification: Did not modify component files
- [ ] Accessibility: WCAG 2.1 AA compliance verified
- [ ] No custom CSS: Only tokens.css, brand.css (if exists), overrides.css
- [ ] Scope validation: Feature remains within multi-component/single-page scope

## Workflow

1. Reference `/patterns/` for applicable UX patterns before composing
2. Check `/examples/` for similar implementations
3. Identify component(s) from COMPONENTS_INDEX.md
4. Read component and pattern documentation for usage rules
5. Copy component snippet(s) from `/components/<component>/<component>.html`
6. Compose within app shell structure (`/assets/app-shell.html`)
7. Verify accessibility compliance
8. Output structured summary

## Output Format

1. Pattern(s) referenced: [list from `/patterns/`]
2. Component(s) used: [list from COMPONENTS_INDEX.md]
3. File(s) created/modified: [list]
4. Accessibility verification: [brief notes]
5. Implementation summary: [concise description]

## Deliverable

[Specific deliverable description]

After completing this task, execute /prompts/changelog_prompt.md.
