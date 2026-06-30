# Handoff — ForwardLine "Free Tools" page

**Repo:** `HawkCoding/ForwardLine.Site`
**Branch:** `claude/public-tools-page-yhntds`  → **PR #3** (https://github.com/HawkCoding/ForwardLine.Site/pull/3)
**Do not open a new PR.** Push to this branch; it updates PR #3.

---

## 1. What this task is

Add a new public page, **"Free Tools"**, to the ForwardLine site. It showcases the
diagnostic tools the consultancy uses internally, opened up free for anyone. The
page must match the look/feel of the existing pages, present ~8 tools each in its
own clearly-segmented space (title + short description), and clicking a tool opens
its dedicated widget.

User decisions already locked in:
- **Nav label:** "Free Tools"
- **First build scope:** polished gallery landing page + all 8 cards; widgets that
  aren't ready yet show a "coming soon" placeholder.
- **Tool format:** the real tools are **self-contained standalone `.html` files**
  (Playfair Display + Montserrat fonts, ForwardLine navy/sand palette, step-based
  interactive widgets using localStorage + print).
- **Embed approach:** in-app at hash route `#/tools/<slug>`, each tool loaded in an
  **auto-sizing same-origin iframe** inside the site shell (chosen over standalone
  pages so nav/footer/chrome are shared).
- **Design harmonization:** user chose **option (b)** — harmonize the tool template
  (fonts + corners) across all tools so they feel native to the site. NOT YET DONE
  (waiting on the full set of tool files).

---

## 2. Architecture (how the site works)

Static site, **no build step**. React 18 + Babel-standalone loaded from CDN in
`index.html`; each page is a `.jsx` file transpiled in-browser. Deployed on Vercel
(`vercel.json` = no build, serve root `.`).

- **`index.html`** — loads CDN scripts, then `fl-snap.js`, then the `.jsx` files in
  order (`fl-shared.jsx` MUST be first — it defines shared globals). Contains the
  hash router (`useRoute`) and `<App>`.
- **`fl-shared.jsx`** — design tokens (`FL_NAVY`, `FL_SAND`, fonts `FL_DISPLAY` =
  Cormorant, `FL_BODY` = Lora, `FL_CAPS` = Cinzel, etc.), and shared components:
  `FLNav`, `FLFooter`, `FLSection`, `FLSectionRail`, `FLButton`, `FLEyebrow`,
  `FLPhoto`, `FLDivider`, plus hooks (`useBreakpoint`, `useSnapTracker`,
  `useRevealOnEnter`). Everything is exported via `Object.assign(window, {...})`.
- **Pages:** `fl-home.jsx` (`FLHome`), `fl-wwd.jsx` (`FLWhatWeDo`),
  `fl-contact.jsx` (`FLContact`), **`fl-tools.jsx` (`FLTools`)** — each exposes its
  component on `window`.

**Routing** (`index.html` `useRoute`): hash-based. Returns a route key:
`'home'` | `'wwd'` | `'contact'` | `'tools'` | `'tools/<slug>'`. The slug is kept in
the key so tool→tool navigation re-renders; `<html data-route>` is set to the base
(`tools`) for route-scoped CSS. `<App>` renders `<FLTools slug={toolSlug} />` for any
tools route.

**Page pattern** (follow `fl-wwd.jsx` as the model): a page is a series of
`<FLSection>` blocks each `minHeight: calc(100vh - FL_STRIP_H px)`, with
`fl-reveal fl-r1..r6` classes for staggered reveal-on-enter, plus an `<FLSectionRail>`
at the end driven by `useSnapTracker()`. Inline styles only (no CSS framework).
Sharp corners (`borderRadius: 0`) and the navy/sand/ivory palette throughout.

---

## 3. What's been done (committed + pushed)

Commits on the branch:
- `7c87a02` Add Free Tools page with toolkit gallery
- `d628d69` Embed real standalone tools; add "Are You Charging Enough?"

Files:
- **`fl-tools.jsx`** (new) — the page. Contains:
  - `FL_TOOLS` — the single source of truth array of tool entries
    `{ slug, kind, title, blurb, html? }`. `kind` is `'Calculator'` | `'Diagnostic'`.
    `html` is the path to a standalone tool file; when present the tool is live,
    when absent it shows the placeholder.
  - `FL_ROMAN` / `flRoman(i)` — card numbering computed from index (so the list
    reorders/extends without renumbering by hand).
  - `FLToolCard` — one gallery card (segmented, gold hover accent, "Open Tool" vs
    "Coming Soon").
  - `FLToolFrame` — auto-sizing same-origin iframe (reads tool body height +
    ResizeObserver so there's no nested scrollbar).
  - `FLToolWidget` — individual tool view: embeds `tool.html` in the shell (back-link
    + Book a Call bar + nav + footer) when ready, else the "in the workshop"
    placeholder; handles unknown slug too.
  - `FLTools({slug})` — gallery (intro / 8-card grid / CTA + footer + rail), or
    delegates to `FLToolWidget` when a slug is present.
- **`index.html`** — added `<script src="fl-tools.jsx">`; extended `useRoute` for
  `#/tools` and `#/tools/<slug>`; `<App>` renders `<FLTools>`.
- **`fl-shared.jsx`** — added "Free Tools" to `FLNav` links AND the footer "Navigate"
  column.
- **`tools/are-you-charging-enough.html`** (new) — the first real tool, wired in as
  the first `FL_TOOLS` entry (`slug: 'are-you-charging-enough'`, `html:` set). This is
  the working example of the embed mechanism.

The other 8 entries in `FL_TOOLS` (cac, ltv, ltv-cac, customer-value, break-even,
margin, bottleneck, next-hire) are **placeholder guesses** with no `html` — they
render "Coming Soon". They will be replaced by the user's real tools.

---

## 4. What's pending / next steps

The user is running `Sync-ForwardLine-Tools.ps1` (delivered to them) on their machine.
It copies their real tool `.html` files from
`C:\Users\Hancke\Desktop\Forwardline\Forwardline Claude\Audit Tools` into `tools/`,
commits, and pushes to this branch. So **expect new files under `tools/` to arrive.**

When they land, the next agent should:

1. **`git pull origin claude/public-tools-page-yhntds`** and list `tools/`.
2. **Rename each file to a clean URL-safe slug** (lowercase, hyphens, no spaces) —
   spaces break the iframe `src` and the hash route. E.g.
   `Tool_Are_You_Charging_Enough.html` → `are-you-charging-enough.html`.
3. **Rebuild the `FL_TOOLS` array** in `fl-tools.jsx` to reflect the user's REAL set:
   one entry per tool with real `slug` (= filename without `.html`), `kind`,
   `title`, a one-line `blurb`, and `html: 'tools/<slug>.html'`. Remove placeholder
   entries that don't correspond to a real tool (or keep any genuinely planned ones
   as "Coming Soon"). Read each tool's `<title>`/`<h1>`/intro to write accurate
   titles + blurbs. NOTE: the grid is `repeat(4, 1fr)` on desktop — any count works,
   but a multiple of 4 looks cleanest.
4. **Harmonize the tool look (user chose option b).** Recommended approach: create a
   shared **`tools/_tool.css`** that sets the site fonts (Cormorant `FL_DISPLAY`
   headings, Lora body, Cinzel for caps/labels) and sharp corners
   (`border-radius: 0`), and link it from each tool file (add the Google Fonts link
   for Cormorant/Lora/Cinzel + `<link rel="stylesheet" href="_tool.css">`, after the
   tool's own `<style>` so it overrides). Keep the navy/sand palette (already shared).
   Goal: tools feel native to the site; future tools inherit by linking the same CSS.
   Keep each tool's logic/structure intact — only restyle.
5. **Verify** (the user may say "just push don't verify" — respect that). If
   verifying, see §5.
6. **Commit + push** to this branch (updates PR #3). Conventional commit message;
   end with the Co-Authored-By / Claude-Session trailers (see §6).

Open question raised with the user (may be answered by the time you read this):
whether to add a no-dependency local preview fallback to the PS1 script if neither
python nor node is installed.

---

## 5. Local verification (browser) — proxy gotchas

This cloud env routes browser traffic through an agent proxy that the headless
Chromium does NOT trust for the CDN scripts, so loading `index.html` directly fails
(React/Babel never load). Two working options:

- **Preferred:** vendor the CDN scripts locally and render a self-contained copy.
  Steps that worked: copy repo to a scratch dir; `curl` (curl IS proxy-configured)
  the three scripts (`react@18.3.1` umd dev, `react-dom@18.3.1` umd dev,
  `@babel/standalone@7.29.0`) into `vendor/`; rewrite the copied `index.html` to point
  at the local `vendor/*.js` (strip `integrity`/`crossorigin`, and the Vercel insights
  + Google Fonts tags); serve with `python3 -m http.server`; launch Playwright Chromium
  (`/opt/pw-browsers/chromium`) with `args: ['--no-sandbox']` and navigate to
  `http://127.0.0.1:<port>/#/tools`.
- Chromium binary: `/opt/pw-browsers/chromium`. Playwright lib:
  `/opt/node22/lib/node_modules/playwright/index.js`. Do NOT run `playwright install`.

Checks to run: nav contains "Free Tools"; gallery renders N cards with titles; a live
tool route shows an `<iframe>` whose `contentDocument` has the tool's `<h1>` and a
sensible height; no console/page errors.

(The user's local machine has no such proxy issue — `Sync-ForwardLine-Tools.ps1`
serves + opens the real CDN site directly.)

---

## 6. Conventions / rules

- **Branch:** develop + push only to `claude/public-tools-page-yhntds`. Never push
  elsewhere without explicit permission. Don't open a new PR (PR #3 exists).
- **Commit trailers:** end commit messages with:
  ```
  Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01AdKfdk5MM4UgjBSNr4QZoQ
  ```
- Do NOT put the model identifier in commits/PRs/code — chat only.
- **Style:** match surrounding code — inline styles, shared `FL_*` tokens/components,
  sharp corners, the navy/sand/ivory palette, Cormorant/Lora/Cinzel fonts. Reuse
  `FLSection`/`FLNav`/`FLFooter`/`FLButton` rather than re-rolling.
- **Watch out:** `index.html` has one stray Unicode char in a comment block around the
  router (a `�`); when editing near there, anchor edits on code lines, not that
  comment, or large block replacements will fail to match.
- GitHub ops use the `mcp__github__*` MCP tools (no `gh` CLI). Repo scope is limited to
  `hawkcoding/forwardline.site`.

---

## 7. Quick orientation commands

```bash
git log --oneline -5
sed -n '1,120p' fl-tools.jsx        # FL_TOOLS array + helpers live near the top
ls tools/                            # tool .html files (slugs = filenames)
```
To see how a standard page is built, read `fl-wwd.jsx`. Shared primitives:
`fl-shared.jsx`.
