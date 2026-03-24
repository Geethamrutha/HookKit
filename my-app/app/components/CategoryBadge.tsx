import type { HookEvent } from "../data/hooks";

const colorMap: Record<HookEvent, string> = {
  PreToolUse: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  PostToolUse: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  PostToolUseFailure: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  UserPromptSubmit: "bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300",
  Stop: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  SubagentStop: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  SessionStart: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  SessionEnd: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  Notification: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  ConfigChange: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
};

export default function CategoryBadge({ event }: { event: HookEvent }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${colorMap[event]}`}
    >
      {event}
    </span>
  );
}
