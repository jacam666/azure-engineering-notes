import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-100 via-white to-zinc-100 px-6 py-8 text-left shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-950 dark:to-black sm:px-10 sm:py-12">
          <p className="inline-flex rounded-full border border-zinc-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
            Engineering Notes
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Azure Engineering Notebook
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
            A focused workspace for scripts, command references, and practical notes you can reuse while building and supporting Azure projects.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Start Here</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Choose a category to jump into commands or scripts quickly.</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link
              href="/powershell-cheatsheet-for-python"
              className="group rounded-xl border border-zinc-300 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-500"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 sm:text-lg">
                  PowerShell for Python: Command Cheat Sheet
                </h3>
                <span className="text-zinc-400 transition-transform group-hover:translate-x-0.5">-&gt;</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Navigation, environment setup, package commands, and daily shell shortcuts for Python workflows.
              </p>
            </Link>

            <Link
              href="/python-scripts"
              className="group rounded-xl border border-zinc-300 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-500"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 sm:text-lg">Python Scripts</h3>
                <span className="text-zinc-400 transition-transform group-hover:translate-x-0.5">-&gt;</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Reusable script examples with step-by-step notes for data processing and Azure automation tasks.
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
