import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-emerald-100 to-green-200 flex items-center justify-center px-5">

      {/* Background */}
      <div className="absolute w-72 h-72 bg-green-400/30 rounded-full blur-3xl animate-pulse top-10 left-10"></div>

      <div className="absolute w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse bottom-0 right-0"></div>

      <div className="absolute w-48 h-48 bg-lime-300/40 rounded-full blur-2xl animate-bounce top-1/2 left-1/2"></div>

      {/* Card */}
      <div className="relative w-full max-w-md">

        <div
          className="
          bg-white/80
          backdrop-blur-xl
          shadow-2xl
          rounded-3xl
          p-8
          animate-[fade_0.7s_ease]
        "
        >
          <h1 className="text-4xl font-bold text-center text-emerald-700">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Join us and start your journey 🌿
          </p>

          <form className="mt-8 space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-green-200 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 transition"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-green-200 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 transition"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-green-200 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 transition"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-xl border border-green-200 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 transition"
            />

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
              hover:scale-105
              hover:shadow-green-300
              transition-all
              duration-300
            "
            >
              Register
            </button>
          </form>

          <p className="text-center mt-6 text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-emerald-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}