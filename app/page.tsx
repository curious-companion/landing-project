import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
      {/* Navbar */}
      <header className="w-full bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Landing Page</h1>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-white/90 hover:text-white font-medium"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 rounded-lg bg-white text-indigo-700 font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Grow Your Business with Confidence
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10">
              We help businesses streamline operations, manage customers, and
              scale faster with a modern, secure platform built for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="px-8 py-3 rounded-xl bg-white text-indigo-700 font-semibold text-lg hover:bg-gray-100 transition"
              >
                Start Free
              </Link>
              <Link
                href="/login"
                className="px-8 py-3 rounded-xl border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-indigo-700 transition"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Image (Free from Unsplash via direct link) */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
                alt="Team working together to grow business"
                className="rounded-xl w-[520px] h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl text-gray-800 hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3">
                Secure & Reliable
              </h4>
              <p className="text-gray-600">
                Built with modern security standards to keep your business and
                customer data safe.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl text-gray-800 hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3">
                Faster Growth
              </h4>
              <p className="text-gray-600">
                Optimize workflows, track performance, and scale your business
                with confidence.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl text-gray-800 hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3">
                Easy to Use
              </h4>
              <p className="text-gray-600">
                Clean, simple interface designed for teams of any size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-white/10 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Grow Your Business?
          </h3>
          <p className="text-white/90 mb-8">
            Create your account today and start building a better, smarter
            business with our platform.
          </p>
          <Link
            href="/signup"
            className="px-8 py-3 rounded-xl bg-white text-indigo-700 font-semibold text-lg hover:bg-gray-100 transition"
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-white/80 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </footer>
    </main>
  );
}