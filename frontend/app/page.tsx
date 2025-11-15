import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-6 row-start-2 items-center text-center sm:items-center">
        {/* Logo + Title */}
        <div className="flex flex-col items-center gap-4">
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Logo"
            width={40}
            height={40}
          />
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Welcome to course and student management system
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl">
            Please login to access your dashboard or create a new account to get started.
          </p>
        </div>

        {/* Auth Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="/login"
            className="rounded-full px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-medium bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-full px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-medium border border-foreground text-foreground hover:bg-foreground/5 transition-colors"
          >
            Register
          </Link>
        </div>
      </main>
    </div>
  );
}
