export type HookEvent =
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

export type Hook = {
  id: string;
  name: string;
  category: HookEvent;
  description: string;
  author: string;
  repoUrl: string;
  tags?: string[];
};

export const hooks: Hook[] = [
  {
    id: "auto-format-on-edit",
    name: "Auto-format on Edit",
    category: "PostToolUse",
    description:
      "Automatically runs your formatter (Prettier, Black, etc.) after every file edit so your code stays consistently formatted without manual intervention.",
    author: "karanb192",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    tags: ["formatting", "automation"],
  },
  {
    id: "block-risky-shell-commands",
    name: "Block Risky Shell Commands",
    category: "PreToolUse",
    description:
      "Intercepts shell tool calls and blocks destructive commands like `rm -rf`, `git reset --hard`, and `force push` before they execute.",
    author: "karanb192",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    tags: ["safety", "shell"],
  },
  {
    id: "tts-notification-on-stop",
    name: "TTS Notification on Stop",
    category: "Stop",
    description:
      "Plays a text-to-speech audio notification when Claude finishes a task, so you can step away and still know when work is done.",
    author: "disler",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    tags: ["notification", "audio"],
  },
  {
    id: "session-activity-logger",
    name: "Session Activity Logger",
    category: "SessionEnd",
    description:
      "Writes a structured JSON summary of tool calls and file changes made during the session to a local log file for auditing and review.",
    author: "disler",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    tags: ["logging", "observability"],
  },
  {
    id: "multi-agent-observability",
    name: "Multi-Agent Observability",
    category: "PostToolUse",
    description:
      "Emits structured trace events for every tool use across all agents in a multi-agent workflow, enabling distributed tracing and debugging.",
    author: "disler",
    repoUrl: "https://github.com/disler/claude-code-hooks-multi-agent-observability",
    tags: ["observability", "multi-agent", "tracing"],
  },
  {
    id: "typescript-type-safe-hooks",
    name: "TypeScript Type-Safe Hooks",
    category: "PreToolUse",
    description:
      "A strongly-typed hook framework that validates hook payloads against TypeScript interfaces, catching malformed events before your hook logic runs.",
    author: "johnlindquist",
    repoUrl: "https://github.com/johnlindquist/claude-hooks",
    tags: ["typescript", "safety"],
  },
  {
    id: "auto-validation-on-save",
    name: "Auto Validation on Save",
    category: "PostToolUse",
    description:
      "Runs your project's type-check and lint commands after each file write, surfacing errors immediately while the context is still fresh.",
    author: "decider",
    repoUrl: "https://github.com/decider/claude-hooks",
    tags: ["validation", "lint", "typescript"],
  },
  {
    id: "prompt-safety-checker",
    name: "Prompt Safety Checker",
    category: "UserPromptSubmit",
    description:
      "Scans incoming user prompts for patterns that could lead to unsafe or policy-violating tool use and logs a warning before Claude processes the request.",
    author: "karanb192",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    tags: ["safety", "prompt"],
  },
];
