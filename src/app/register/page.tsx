"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-green-100 to-lime-100 px-6">

      {/* Background */}
      <div className="absolute -left-24 top-10 h-80 w-80 animate-pulse rounded-full bg-green-400/20 blur-3xl"></div>

      <div className="absolute -right-24 bottom-0 h-96 w-96 animate-pulse rounded-full bg-emerald-500/20 blur-3xl"></div>

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-[float_6s_ease-in-out_infinite] rounded-full bg-lime-300/20 blur-3xl"></div>

      {/* Card */}
      <div className="relative w-full max-w-md animate-[fade_0.8s_ease] rounded-3xl border border-white/30 bg-white/75 p-8 shadow-2xl backdrop-blur-xl">

        <div className="mb-8 text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-3xl shadow-lg">
            🌿
          </div>

          <h1 className="text-4xl font-bold text-emerald-700">
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Create your account to get started.
          </p>

        </div>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-green-200 bg-white/70 px-4 py-3 outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-green-200 bg-white/70 px-4 py-3 outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200"
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-xl border border-green-200 bg-white/70 px-4 py-3 pr-12 outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xl"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>

          </div>

          <div className="relative">

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full rounded-xl border border-green-200 bg-white/70 px-4 py-3 pr-12 outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xl"
            >
              {showConfirm ? "🙈" : "👁️"}
            </button>

          </div>

          <button
            className="w-full rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-300"
          >
            Create Account
          </button>

        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="text-sm text-gray-400">or</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <button className="rounded-xl border border-gray-300 bg-white py-3 transition hover:bg-gray-100">
            Google
          </button>

          <button className="rounded-xl border border-gray-300 bg-white py-3 transition hover:bg-gray-100">
            GitHub
          </button>

        </div>

        <p className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-emerald-700 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </main>
  );
}