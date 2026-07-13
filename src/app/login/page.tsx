import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-emerald-100 to-green-200 flex items-center justify-center px-5">

      {/* Animated Background */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-green-400/30 blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/40 blur-2xl animate-bounce"></div>

      {/* Card */}
      <div className="relative w-full max-w-md">
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl p-8 animate-[fade_0.7s_ease]">

          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-3xl shadow-lg">
              🌿
            </div>
          </div>

          <h1 className="text-center text-4xl font-bold text-emerald-700">
            Welcome Back
          </h1>

          <p className="mt-2 text-center text-gray-500">
            Login to continue your journey
          </p>

          <form className="mt-8 space-y-5">

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-green-200 px-4 py-3 outline-none transition focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-xl border border-green-200 px-4 py-3 pr-14 outline-none transition focus:ring-2 focus:ring-emerald-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-600"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-emerald-600"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-emerald-700 hover:underline"
              >
                Forgot Password?
              </button>

            </div>

            {/* Button */}
            <button
              className="
                w-full
                rounded-xl
                bg-gradient-to-r
                from-green-500
                to-emerald-600
                py-3
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-green-300
              "
            >
              Login
            </button>

          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">

            <button className="rounded-xl border border-gray-300 py-3 transition hover:bg-gray-100">
              Google
            </button>

            <button className="rounded-xl border border-gray-300 py-3 transition hover:bg-gray-100">
              GitHub
            </button>

          </div>

          <p className="mt-6 text-center text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-emerald-700 hover:underline"
            >
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}