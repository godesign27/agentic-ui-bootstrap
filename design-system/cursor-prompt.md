# Cursor prompt: populate the new design-system folder from the existing repo

You are working inside an existing product repository that already contains a design system, components, tokens, styles, documentation, and implementation patterns.

Your job is to populate and refine the new `/design-system` folder using the real information already present in this repository.

## Primary objective
Use the existing repo as the source of truth and update the files inside `/design-system` so they accurately reflect the current design system.

## Important constraints
- Do NOT remove, rename, or modify the existing design system files outside `/design-system` unless explicitly asked.
- Treat `/design-system` as a parallel test structure.
- Preserve the current implementation while building this machine-readable AI-ready layer.
- Prefer extracting real repo information over inventing values.
- If information is unclear, infer conservatively and leave a clear TODO note in the relevant file.
- Do not generate new UI.
- Do not refactor product code.
- Focus only on analysis, extraction, mapping, and documentation into the `/design-system` folder.

## What to inspect in the repo
Review all relevant sources such as:
- component source files
- shared UI libraries
- design token files
- CSS variables / theme files
- Storybook stories
- Figma export artifacts if present
- documentation files
- README files
- accessibility guidance
- existing patterns, templates, layouts, or page-level conventions

## What to populate
Update the files in `/design-system` to reflect the real repo:

### 1. meta
- `/design-system/meta/system.json`
- `/design-system/meta/changelog.json`

### 2. tokens
- `/design-system/tokens/primitives.json`
- `/design-system/tokens/semantic.json`
- `/design-system/tokens/aliases.json`

Map raw values, semantic tokens, aliases, naming conventions, theme layers, and token inheritance.

### 3. components
- `/design-system/components/schema.json`
- each component contract file such as Button, Input, Dialog, Alert, Card, Table, Tabs, FormField

For each real component, document:
- name
- purpose
- intent
- variants
- states
- slots
- token usage
- accessibility requirements
- composition rules
- forbidden usage patterns

If the repo has additional components, add more component JSON files in this folder.

### 4. patterns
Populate pattern files based on real flows and shared implementation patterns such as:
- destructive actions
- forms
- empty states
- tables
- filters
- dashboards
- wizards

### 5. graph
Populate relationship files:
- token usage
- component-to-page mapping
- page criticality / traffic if such metadata exists
- component dependencies

If business criticality is not explicitly available in the repo, infer only from folder names, route names, documentation, or comments and mark uncertain items clearly.

### 6. rules
Populate and refine:
- naming.json
- forbidden.json
- composition.json
- accessibility.json
- generation.json

These should reflect the actual guardrails already implied by the repo.

### 7. agents
Refine:
- context-loading.json
- page-generation.json
- validation.json

These should align to the structure and constraints of this repo.

## Working method
Follow this sequence exactly:
1. Inspect the existing repo structure.
2. Identify token sources and naming conventions.
3. Identify the real component inventory.
4. Identify reusable patterns and composition rules.
5. Identify accessibility expectations.
6. Update `/design-system` files incrementally.
7. Add TODO markers where evidence is incomplete.
8. Provide a summary of what was populated, what was inferred, and what still needs review.

## Output expectations
When finished, provide:
1. a summary of files updated
2. a list of components discovered
3. a list of tokens discovered
4. a list of assumptions or TODOs
5. confirmation that the existing design system outside `/design-system` was left untouched

## Final reminder
The goal is not to rebuild the design system.
The goal is to create an AI-ready, machine-readable mirror of the current system in `/design-system` so the team can test this new approach safely before replacing anything.
