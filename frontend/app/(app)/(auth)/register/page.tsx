"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axiosInstance from "@/app/utils/ApiClient";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const response = await axiosInstance.post(`/auth/register`, {
        email,
        password,
        name,
        age,
        courses: [],
        role: "student",
      });
      const { status, data } = response;
      if (status == 201) {
        // handleSuccess(message);
        // setSucessMessage("SignUp successfuly");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } else {
        // setErrorMessage(message);
        // handleError(message);
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 shadow-xl rounded-2xl p-6 sm:p-8">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-white text-center mb-2">
          Create an account
        </h1>
        <p className="text-center text-neutral-400 text-sm mb-6">
          Join the course and student management system
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="space-y-1">
            <label className="text-sm text-neutral-300 block">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg bg-black border border-neutral-700 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="John Doe"
            />
          </div>

          {/* Age */}
          <div className="space-y-1">
            <label className="text-sm text-neutral-300 block">Age</label>
            <input
              type="number"
              required
              value={age}
              onChange={(e) => setAge(e.target.valueAsNumber)}
              className="w-full rounded-lg bg-black border border-neutral-700 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="18"
              min={1}
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm text-neutral-300 block">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-black border border-neutral-700 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-sm text-neutral-300 block">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg bg-black border border-neutral-700 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="••••••••"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-lg border border-red-600 bg-red-950/40 px-3 py-2 text-sm text-red-300">
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-white text-black font-semibold py-2 transition hover:bg-neutral-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-5 text-center text-neutral-400 text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-white underline hover:text-neutral-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
