import Link from "next/link";

const links = [
  { href: "/f1/f2", title: "F2", desc: "Go to intercept F2" },
  { href: "/f1/f3", title: "F3", desc: "Open F3 Page" },
  { href: "/f1/f4", title: "F4", desc: "Open F4 Page" },
];

export default function F1() {
  return (
    <main className="min-h-[60vh] w-full px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            F1 Overview
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Choose a section below to continue.
          </p>
        </header>

        {/* Link Cards */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black/80 dark:border-neutral-800 dark:bg-neutral-900/70"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">{item.title}</h2>
                {/* Arrow icon */}
                <svg
                  className="h-5 w-5 translate-x-0 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>

              {/* Subtle gradient hover effect */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-black/[0.02] opacity-0 transition-opacity group-hover:opacity-100 dark:to-white/[0.06]"
              />
            </Link>
          ))}
        </section>

       
      </div>
    </main>
  );
}
