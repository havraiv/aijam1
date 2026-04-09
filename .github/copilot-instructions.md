# Project Guidelines

## Scope

These instructions apply to the whole workspace.

## Build And Test

Use these commands for validation:

```bash
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

## Architecture

- App entry is `src/main.tsx`, rendering `src/App.tsx`.
- `src/App.tsx` composes section components from `src/components/`.
- Shared typed content for sections lives in `src/content.ts`.
- Main visual system and layout live in `src/App.css`.

## Conventions

- Use TypeScript + React function components in `.tsx` files.
- Prefer named exports for components in `src/components/`.
- Keep content/config data in `src/content.ts` rather than hardcoding in multiple components.
- Preserve existing style choices in this repo (semicolon formatting, CSS token usage in `src/App.css`).
- For page navigation, use anchor links to section IDs (no client router is set up).

## Project Gotchas

- Vite base path is `/aijam1/` in `vite.config.ts`; keep this in mind for deploy-safe asset paths.
- GitHub Pages deploy runs from `.github/workflows/static.yml` on push to `main`.
- Remote portfolio images are external URLs from Stitch exports; verify image URLs return HTTP 200 before shipping.

## Docs (Link, Do Not Duplicate)

- Overview and commands: `README.md`
- Stitch setup: `docs/guides/stitch.md`
- Browser agent setup: `docs/guides/agent-browser.md`
- GitHub Pages fork setup: `docs/guides/github-pages-fork.md`
- Stitch prompt examples: `docs/projects/`
- Docs update skill: `docs/skills/update-docs/SKILL.md`
