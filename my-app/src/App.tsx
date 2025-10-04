import React from "react";

type NavItem = {
  label: string;
  href: string;
};

type Feature = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#products" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const FEATURES: Feature[] = [
  {
    title: "Fast & Lightweight",
    description: "Blazing fast performance with minimal bundle size and optimized assets.",
  },
  {
    title: "Accessible",
    description: "Built with semantic HTML and keyboard-first interactions in mind.",
  },
  {
    title: "Responsive",
    description: "Looks great on phones, tablets and large screens using Tailwind's utility classes.",
  },
];

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      {/* Header */}
      <header className="border-b bg-white/60 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
              S
n            </div>
            <span className="font-semibold text-lg">SOLO</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 inline-block rounded-md px-4 py-2 bg-indigo-600 text-white text-sm shadow-sm hover:bg-indigo-700"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              className="p-2 rounded-md ring-1 ring-slate-200"
              onClick={() => alert('Replace this with a real mobile menu handler')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="pt-16 pb-12">
          <div className="max-w-6xl mx-auto px-6 grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Step up your game — <span className="text-indigo-600">SOLO</span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 max-w-xl">
                Urban streetwear sneakers engineered for comfort, performance, and street cred. Lightweight materials, bold colors, and a fit that keeps you moving.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-indigo-600 text-white font-medium shadow hover:opacity-95"
                >
                  Shop Now
                </a>
                <a href="#about" className="text-sm text-slate-600 hover:text-slate-900">
                  Learn More
                </a>
              </div>

              <div className="mt-6 text-sm text-slate-500">
                Free shipping on orders over ₹1999 • 30-day returns
              </div>
            </div>

            {/* Hero image / showcase */}
            <div className="order-first lg:order-last">
              <div className="mx-auto max-w-md sm:max-w-lg lg:max-w-xl">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-slate-100 to-white flex items-end p-6 shadow-lg">
                  <img
                    src="/images/hero-sneaker.jpg"
                    alt="SOLO sneaker hero"
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      // graceful fallback when user doesn't have the image
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=SOLO+Sneaker';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-12 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-semibold">Why SOLO?</h2>
            <p className="mt-2 text-slate-600">Designed for urban movement — built to last and look great.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f) => (
                <article key={f.title} className="rounded-lg border p-6 bg-white">
                  <div className="text-xl font-semibold">{f.title}</div>
                  <p className="mt-2 text-slate-600 text-sm">{f.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Products preview */}
        <section id="products" className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Popular picks</h3>
              <a href="#products" className="text-sm text-indigo-600 hover:underline">
                View all
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-lg border overflow-hidden bg-white">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <img
                      src={`https://via.placeholder.com/400x400?text=Product+${i + 1}`}
                      alt={`Product ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <div className="font-medium">SOLO Runner {i + 1}</div>
                    <div className="text-sm text-slate-600">₹{3999 + i * 500}</div>
                    <div className="mt-3">
                      <button className="w-full rounded-md px-3 py-2 bg-indigo-600 text-white text-sm">Add to cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-indigo-600 text-white">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-2xl font-semibold">Join the SOLO community</h4>
              <p className="mt-2 text-slate-100/90">Sign up for early drops, exclusive discounts and behind-the-scenes.</p>
            </div>
            <form className="flex w-full max-w-md gap-2" onSubmit={(e) => { e.preventDefault(); alert('Thanks — wire this up to your email provider'); }}>
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" placeholder="you@domain.com" required className="flex-1 rounded-md px-4 py-3 text-slate-800" />
              <button type="submit" className="rounded-md px-5 py-3 bg-white text-indigo-600 font-semibold">Subscribe</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-600">© {new Date().getFullYear()} SOLO — All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm hover:text-indigo-600">Privacy</a>
              <a href="#" className="text-sm hover:text-indigo-600">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
