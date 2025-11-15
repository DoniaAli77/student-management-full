"use client";

import Link from "next/link";
import { useAuth } from "@/app/(system)/context/authContext";

export default function ProfilePage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-neutral-300 text-sm">Checking authentication…</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-center">
          <h1 className="text-xl font-semibold text-white mb-2">
            No user logged in
          </h1>
          <p className="text-neutral-400 text-sm mb-4">
            You need to login to view your profile.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-lg bg-white text-black font-medium px-4 py-2 text-sm hover:bg-neutral-200"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  // adjust fields depending on what your backend returns
  const userid = (user as any).id ?? "Unknown ID";
  const email = (user as any).email;
  const name = (user as any).name ?? "Unnamed User";

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <h1 className="text-2xl font-semibold text-white mb-1">
          Profile
        </h1>
        <p className="text-neutral-400 text-sm mb-6">
          Your account details in the course and student management system.
        </p>

        <div className="space-y-3">
          {name && (
            <div className="flex justify-between text-sm">
              <span className="text-neutral-400">Name</span>
              <span className="text-white font-medium">{name}</span>
            </div>
          )}

          <div className="flex justify-between text-sm">
            <span className="text-neutral-400">User ID</span>
            <span className="text-white font-medium">{userid}</span>
          </div>

          {email && (
            <div className="flex justify-between text-sm">
              <span className="text-neutral-400">Email</span>
              <span className="text-white font-medium break-all">
                {email}
              </span>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-between gap-3 text-sm">
          <Link
            href="/home"
            className="flex-1 inline-flex items-center justify-center rounded-lg border border-neutral-700 text-neutral-200 px-3 py-2 hover:bg-neutral-800 transition"
          >
            Back to Home
          </Link>
          <Link
            href="/courses"
            className="flex-1 inline-flex items-center justify-center rounded-lg bg-white text-black font-medium px-3 py-2 hover:bg-neutral-200 transition"
          >
            View Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
