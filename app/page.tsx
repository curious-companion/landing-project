import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center text-white">
      <div className="max-w-3xl text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Build. Launch. Grow. 🚀
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-10">
          A modern platform with secure login, Google sign-in, and a beautiful
          dashboard experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/login">
            <button className="px-8 py-3 rounded-xl bg-white text-indigo-700 font-semibold text-lg hover:bg-gray-100 transition">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="px-8 py-3 rounded-xl border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-indigo-700 transition">
              Get Started
            </button>
          </Link>
        </div>

        <div className="mt-12 text-sm text-white/70">
          Trusted • Secure • Fast
        </div>
      </div>
    </main>
  );
}