# Hook Hub — MVP Spec

## Context

Claude Code supports user-defined "hooks" — shell commands that fire at lifecycle events (PreToolUse, PostToolUse, Stop, SessionStart, etc.) to automate workflows, enforce rules, and extend Claude's behavior. A growing number of open-source hooks exist across GitHub but there's no central place to discover them.

**Hook Hub** is a read-only directory where developers can browse curated, community-sourced Claude Code hooks. MVP scope: display only — no auth, no submissions, no search, no backend.

---

## Data Model

Each hook entry is a static TypeScript object:

```ts
type Hook = {
  id: string;               // slug, e.g. "auto-format-on-edit"
  name: string;             // display name
  category: HookEvent;      // lifecycle event it targets
  description: string;      // 1–2 sentence summary of what it does
  author: string;           // GitHub username
  repoUrl: string;          // link to GitHub repo or file
  tags?: string[];          // optional: e.g. ["safety", "formatting", "logging"]
}

type HookEvent =
  | "PreToolUse"
  | "PostToolUse"
  | "PostToolUseFailure"
  | "UserPromptSubmit"
  | "Stop"
  | "SubagentStop"
  | "SessionStart"
  | "SessionEnd"
  | "Notification"
  | "ConfigChange";
```

Data lives in `app/data/hooks.ts` as a static array — no database for MVP.

---

## Pages & Routes

| Route | Purpose |
|-------|---------|
| `/` | Hero + full hook grid |

MVP is a single page. No detail pages, no filtering routes.

---

## Page Layout — `/`

### Hero Section
- App name: **Hook Hub**
- Tagline: *"Discover open-source Claude Code hooks"*
- Brief explanation of what a Claude hook is (1–2 sentences)

### Hook Grid
- Responsive CSS grid: 1 col (mobile) → 2 col (tablet) → 3 col (desktop)
- Each **HookCard** displays:
  - Hook name (bold)
  - Category badge (color-coded by event type, e.g. `PreToolUse` = amber, `Stop` = blue)
  - Description (2-line clamp)
  - Author handle (`@username`)
  - "View Repo" link → opens GitHub repo in new tab

---

## Component Breakdown

```
app/
  data/
    hooks.ts          # Static hook entries (seed data: ~10 real hooks)
  components/
    HookCard.tsx      # Single hook card
    HookGrid.tsx      # Maps hooks → HookCard grid
    CategoryBadge.tsx # Color-coded event label
  page.tsx            # Hero + <HookGrid />
```

---

## Seed Data

Populate with real open-source hooks found during research:

| Name | Category | Repo |
|------|----------|------|
| Auto-format on edit | PostToolUse | karanb192/claude-code-hooks |
| Block risky shell commands | PreToolUse | karanb192/claude-code-hooks |
| TTS notification on stop | Stop | disler/claude-code-hooks-mastery |
| Session activity logger | SessionEnd | disler/claude-code-hooks-mastery |
| Multi-agent observability | PostToolUse | disler/claude-code-hooks-multi-agent-observability |
| TypeScript type-safe hooks | PreToolUse | johnlindquist/claude-hooks |
| Auto validation on save | PostToolUse | decider/claude-hooks |
| Prompt safety checker | UserPromptSubmit | karanb192/claude-code-hooks |

---

## Styling

- Tailwind CSS v4 (already configured)
- Dark mode via `prefers-color-scheme` (already in globals.css)
- Category badge colors:
  - `PreToolUse` → amber
  - `PostToolUse` → green
  - `Stop` / `SubagentStop` → blue
  - `SessionStart` / `SessionEnd` → purple
  - `UserPromptSubmit` → pink
  - Others → gray

---

## Critical Files to Modify

| File | Change |
|------|--------|
| `app/page.tsx` | Replace default template with Hero + HookGrid |
| `app/layout.tsx` | Update metadata title to "Hook Hub" |
| `app/globals.css` | No changes needed |

## Files to Create

| File | Purpose |
|------|---------|
| `app/data/hooks.ts` | Static hook data |
| `app/components/HookCard.tsx` | Card component |
| `app/components/HookGrid.tsx` | Grid layout |
| `app/components/CategoryBadge.tsx` | Event badge |

---

## Out of Scope (MVP)

- Search / filter by category
- Hook submission form
- Detail pages per hook
- Backend / database
- Auth
- Pagination (show all ~10 hooks at once)

---

## Verification

1. `npm run dev` → visit `http://localhost:3000`
2. Confirm hero section renders with name and tagline
3. Confirm grid shows all seed hooks as cards
4. Confirm category badges are color-coded
5. Confirm "View Repo" links open correct GitHub URLs in a new tab
6. Confirm responsive layout: resize viewport across mobile/tablet/desktop
7. `npm run build` → no TypeScript or lint errors
