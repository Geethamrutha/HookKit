import HookGrid from "./components/HookGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Hook Hub
          </h1>
          <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
            Discover open-source Claude Code hooks
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-500">
            Claude Code hooks are shell commands that fire at lifecycle events — like{" "}
            <code className="rounded bg-zinc-200 px-1 py-0.5 text-xs dark:bg-zinc-800">
              PreToolUse
            </code>{" "}
            or{" "}
            <code className="rounded bg-zinc-200 px-1 py-0.5 text-xs dark:bg-zinc-800">
              SessionEnd
            </code>{" "}
            — letting you automate workflows, enforce rules, and extend Claude&apos;s behavior.
          </p>
        </div>

        {/* Grid */}
        <HookGrid />
      </main>
    </div>
  );
}
