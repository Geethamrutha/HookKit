import type { Hook } from "../data/hooks";
import CategoryBadge from "./CategoryBadge";

export default function HookCard({ hook }: { hook: Hook }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{hook.name}</h3>
        <CategoryBadge event={hook.category} />
      </div>

      <p className="line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {hook.description}
      </p>

      <div className="mt-auto flex items-center justify-between pt-1">
        <span className="text-xs text-zinc-500 dark:text-zinc-500">@{hook.author}</span>
        <a
          href={hook.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
        >
          View Repo →
        </a>
      </div>
    </div>
  );
}
