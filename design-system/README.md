# AI-Ready Design System Starter

This starter package gives you a machine-readable design-system folder you can place alongside an existing design system repo without modifying the current implementation.

## Goal
Use this structure as a parallel test bed:
- preserve the existing design system
- let Cursor or another AI agent inspect the current repo
- populate the new `/design-system` folder using the real components, tokens, patterns, and rules already present
- test whether governed AI generation works before replacing legacy docs or files

## Included
- machine-readable token files
- component contract schema
- example component contract files
- patterns
- graph relationships
- rules
- agent loading and validation files

## Suggested workflow
1. Add this `design-system` folder at the root of the existing repo.
2. Ask Cursor to inspect the current codebase, Storybook, docs, tokens, and components.
3. Have Cursor update these starter files with repo-specific information.
4. Keep all original files untouched during the test.
5. Validate how well AI tools can load, reason over, and generate from the new structure.
