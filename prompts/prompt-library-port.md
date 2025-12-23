You are working in a project that needs the Prompt Library drawer component.

## Task: Install Prompt Library Drawer (Cmd/Ctrl+L or Cmd/Ctrl+K)

**Scope**: Port the Prompt Library drawer component into the local project to enable Cmd/Ctrl+L or Cmd/Ctrl+K hotkey access to prompts, and create a minimal verification page.

## Requirements

1. **Copy Drawer Component Files**
   - Copy `/assets/prompt-drawer/prompt-drawer.js` to the target project
   - Copy `/assets/prompt-drawer/prompt-drawer.css` to the target project
   - Maintain the same file structure or update paths accordingly

2. **Create Prompt Index**
   - Create or adapt `/prompts/PROMPTS_INDEX.json` in the target project
   - Ensure JSON structure matches: `{ "prompts": [...] }`
   - Each prompt entry must include: `id`, `title`, `category`, `description`, `file`
   - Update `file` paths to match target project structure

3. **Add to HTML Pages**
   - Include CSS: `<link rel="stylesheet" href="/path/to/prompt-drawer.css">`
   - Include JS: `<script type="module" src="/path/to/prompt-drawer.js"></script>`
   - Place includes before closing `</body>` tag or in `<head>` as appropriate

4. **Verify File Paths**
   - Ensure prompt markdown files are accessible via relative paths from HTML
   - Ensure PROMPTS_INDEX.json is accessible at the path specified in the code
   - Update fetch paths in `prompt-drawer.js` if project structure differs

5. **Create Minimal Verification Start Page**
   - Create `/start/index.html` (or closest equivalent if routing constraints exist)
   - Page must contain ONLY:
     - H1: "Hello World"
     - One short line: "Prompt Library installed. Use Cmd/Ctrl+L or Cmd/Ctrl+K."
     - CTA button labeled "Open Prompt Library" with attribute: `data-open-prompt-drawer`
   - Include drawer CSS and JS files
   - Do NOT generate any additional UI beyond this minimal verification page

## Constraints

1. **No External Dependencies**
   - Drawer uses vanilla JavaScript (ES6 modules)
   - No npm packages or build tools required
   - Works with static HTML files

2. **Server Requirement**
   - Must be served via HTTP server (not file:// protocol)
   - Required for fetching JSON and markdown files
   - Use local server: `python -m http.server`, `npx serve`, or similar

3. **Path Adjustments**
   - Update all file paths to match target project structure
   - Ensure relative paths are correct for JSON and markdown fetches
   - Maintain consistent path structure

## Required Checks

- [ ] Drawer component files copied to target project
- [ ] PROMPTS_INDEX.json created/adapted with correct structure
- [ ] HTML includes added to target pages
- [ ] File paths verified and updated if needed
- [ ] Drawer opens with Cmd/Ctrl+L hotkey
- [ ] Drawer opens with Cmd/Ctrl+K hotkey (fallback)
- [ ] Drawer opens via declarative trigger (data-open-prompt-drawer)
- [ ] Prompts load and display correctly
- [ ] Copy to clipboard functionality works
- [ ] ESC key closes drawer
- [ ] Verification Start page created at /start/index.html

## Workflow

1. Copy `prompt-drawer.js` and `prompt-drawer.css` to target project
2. Create or adapt `PROMPTS_INDEX.json` with project's prompts
3. Add CSS and JS includes to HTML pages
4. Update file paths in `prompt-drawer.js` if project structure differs
5. Create minimal verification Start page at `/start/index.html`:
   - H1: "Hello World"
   - One line: "Prompt Library installed. Use Cmd/Ctrl+L or Cmd/Ctrl+K."
   - CTA button with `data-open-prompt-drawer` attribute
   - Include drawer CSS and JS
6. Test drawer functionality:
   - Open with Cmd/Ctrl+L
   - Open with Cmd/Ctrl+K (fallback)
   - Open via declarative trigger button
   - Browse prompts by category
   - View prompt content
   - Copy prompt to clipboard
   - Close with ESC key
7. Verify all prompts load correctly

## Output Format

1. Files copied: [list of files copied]
2. Files created: [list of files created]
3. Files modified: [list of files modified]
4. Path adjustments: [any path changes made]
5. Testing results: [confirmation of functionality]
6. Implementation summary: [concise description]

## Deliverable

A working Prompt Library drawer in the target project that:
- Opens with Cmd/Ctrl+L (Mac) or Ctrl+L (Windows/Linux)
- Opens with Cmd/Ctrl+K (Mac) or Ctrl+K (Windows/Linux) as fallback
- Opens via declarative trigger (data-open-prompt-drawer attribute)
- Displays prompts grouped by category
- Allows viewing and copying prompt content
- Closes with ESC key
- Works with static HTML (no build tools)
- Includes minimal verification Start page at /start/index.html

After completing this task, execute /prompts/changelog_prompt.md.

