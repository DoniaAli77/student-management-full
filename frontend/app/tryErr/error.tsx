// app/error-test/error.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorPageProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Optional: report to logging service
    // console.error(error);
  }, [error]);

  const copyDetails = async () => {
    const text = [
      `Message: ${error.message}`,
      error.digest ? `Digest: ${error.digest}` : null,
      error.stack ? `Stack:\n${error.stack}` : null,
    ]
      .filter(Boolean)
      .join('\n\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 dark:bg-neutral-900 dark:text-neutral-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Card */}
        <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 shadow-xl overflow-hidden bg-white/70 backdrop-blur dark:bg-neutral-900/60">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500/90 via-orange-500/90 to-rose-500/90 text-white px-6 py-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <h2 className="text-xl font-semibold tracking-wide">
                Something went wrong
              </h2>
            </div>
            <p className="mt-2 text-sm/6 opacity-95">
              The page encountered an unexpected error. You can retry or go back.
            </p>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            <div className="rounded-xl border border-amber-200/60 dark:border-amber-900/40 bg-amber-50/70 dark:bg-amber-950/30 p-4">
              <p className="font-medium text-amber-900 dark:text-amber-200">
                {error.message || 'Unknown error'}
              </p>
              {error.digest && (
                <p className="mt-1 text-xs text-amber-800/80 dark:text-amber-300/80">
                  Reference: {error.digest}
                </p>
              )}
            </div>

            {/* Details toggle */}
            <button
              onClick={() => setShowDetails((s) => !s)}
              className="mt-4 text-sm underline-offset-4 hover:underline text-gray-600 dark:text-neutral-300"
              aria-expanded={showDetails}
            >
              {showDetails ? 'Hide details' : 'Show details'}
            </button>

            {showDetails && (
              <pre className="mt-3 max-h-72 overflow-auto rounded-lg bg-gray-900 text-gray-100 text-xs p-4">
{error.stack ?? 'No stack trace available.'}
              </pre>
            )}

            {/* Actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => reset()}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-medium bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-white/90 transition"
              >
                Try again
              </button>

              <button
                onClick={() => history.back()}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-medium border border-gray-300 hover:bg-gray-50 dark:border-neutral-700 dark:hover:bg-neutral-800 transition"
              >
                Go back
              </button>

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-medium border border-gray-300 hover:bg-gray-50 dark:border-neutral-700 dark:hover:bg-neutral-800 transition"
              >
                Home
              </Link>

              <button
                onClick={copyDetails}
                className="ml-auto inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-medium border border-gray-300 hover:bg-gray-50 dark:border-neutral-700 dark:hover:bg-neutral-800 transition"
                title="Copy error details"
              >
                {copied ? 'Copied!' : 'Copy details'}
              </button>
            </div>
          </div>
        </div>

        {/* Small tip */}
        <p className="mt-3 text-xs text-gray-500 dark:text-neutral-400">
          Tip: Check the server logs for more context in development.
        </p>
      </div>
    </div>
  );
}
