You are working in the repository: bootstrap-agentic-ai.

## Task: Repository Update Check

**Scope**: Read-only check for meaningful updates and changes in the repository.

## Constraints

1. **Read-Only Mode**
   - Do NOT modify any files
   - Do NOT create new files
   - Do NOT delete files
   - Only read and analyze existing content

2. **Deterministic Analysis**
   - Check key governance files for changes (AGENT_RULES.md, DESIGN_PRINCIPLES.md, ACCESSIBILITY.md)
   - Review component inventory (COMPONENTS_INDEX.md)
   - Check for new components in `/components/`
   - Check for new examples in `/examples/`
   - Check for new patterns in `/patterns/`
   - Review prompt library updates (`/prompts/PROMPTS_INDEX.json`)
   - Check project notes for recent changes (`/project-notes/changelog.md`)

3. **Meaningful Updates Only**
   - Focus on substantive changes (new components, updated rules, new patterns)
   - Ignore minor formatting or documentation-only changes
   - Prioritize changes that affect agent behavior or available resources

## Required Checks

- [ ] Governance files: Reviewed for rule changes or additions
- [ ] Components: Checked for new or modified components
- [ ] Examples: Checked for new example pages
- [ ] Patterns: Checked for new UX patterns
- [ ] Prompts: Checked for new or updated prompt templates
- [ ] Project notes: Reviewed changelog for recent updates

## Workflow

1. Read key governance files to understand current rules
2. Check COMPONENTS_INDEX.md for component inventory
3. Review `/components/` directory for new additions
4. Review `/examples/` directory for new examples
5. Review `/patterns/` directory for new patterns
6. Check `/prompts/PROMPTS_INDEX.json` for prompt updates
7. Review `/project-notes/changelog.md` for recent changes
8. Compile concise summary of meaningful updates

## Output Format

1. **Governance Changes**: [List any rule changes or additions]
2. **New Components**: [List any new components added]
3. **New Examples**: [List any new example pages]
4. **New Patterns**: [List any new UX patterns]
5. **Prompt Updates**: [List any new or updated prompts]
6. **Other Updates**: [List any other meaningful changes]
7. **Summary**: [2-3 sentence overview of repository state]

## Deliverable

A concise, read-only summary of meaningful repository updates without modifying any files.

After completing this task, execute /prompts/changelog_prompt.md.

