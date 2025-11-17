"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForbiddenPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      <h1 className="text-7xl font-bold text-red-600 mb-4">403</h1>
      <h2 className="text-2xl font-semibold mb-2">Access Denied</h2>
      <p className="text-gray-700 mb-8 max-w-md">
        You are authenticated, but you don't have permission to view this page.
        If you think this is a mistake, please contact the system administrator.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
        >
          ⬅ Back
        </button>

        <Link
          href="/home"
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition"
        >
          🏠 Go to Home
        </Link>
      </div>
    </div>
  );
}
