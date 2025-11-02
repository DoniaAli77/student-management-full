import Link from "next/link";

export default function F4() {
  const links = [
    { href: "/f1/f3", title: "F3", desc: "Go to Intercept F3" },
    { href: "/about", title: "About", desc: "Learn more about this project using intercept About" },
  ];

  return (
    <main className="min-h-[60vh] w-full px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            F4 Overview
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Select a destination below to continue.
          </p>
        </header>

        {/* Link Cards */}
        <section className="grid gap-4 sm:grid-cols-2">
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

              {/* Subtle hover gradient */}
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
