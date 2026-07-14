"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  Leaf, 
  Eye, 
  EyeOff,
  Mail,
  Lock,
  CheckSquare,
  Square,
  Chrome,
  Github
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-green-100 to-lime-100 px-6">

      {/* Background */}
      <div className="absolute -left-24 top-10 h-80 w-80 animate-pulse rounded-full bg-green-400/20 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 animate-pulse rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-[float_6s_ease-in-out_infinite] rounded-full bg-lime-300/20 blur-3xl" />

      {/* Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-white/30 bg-white/75 p-8 shadow-2xl backdrop-blur-xl animate-[fade_.8s_ease]">

        <div className="mb-8 text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-3xl shadow-lg">
            <Leaf className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-4xl font-bold text-emerald-700">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Login to continue using the application.
          </p>

        </div>

        <form className="space-y-5">

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-green-200 bg-white/70 px-4 py-3 pl-12 outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-xl border border-green-200 bg-white/70 px-4 py-3 pl-12 pr-12 outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>

          </div>

          <div className="flex items-center justify-between text-sm">

            <label className="flex cursor-pointer items-center gap-2 text-gray-600">
              <button
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                className="flex items-center"
              >
                {rememberMe ? (
                  <CheckSquare className="h-5 w-5 text-emerald-600" />
                ) : (
                  <Square className="h-5 w-5 text-gray-400" />
                )}
              </button>
              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="font-medium text-emerald-600 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-300"
          >
            Login
          </button>

        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="text-sm text-gray-400">or</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-3 transition hover:bg-gray-100 hover:shadow-md">
            <Chrome className="h-5 w-5" />
            Google
          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-3 transition hover:bg-gray-100 hover:shadow-md">
            <Github className="h-5 w-5" />
            GitHub
          </button>

        </div>

        <p className="mt-6 text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-emerald-700 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>

    </main>
  );
}