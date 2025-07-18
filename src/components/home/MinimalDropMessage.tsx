"use client";

export default function MinimallDropMessage() {
  return (
    <section className="relative bg-gray-50 py-20 px-6 text-center overflow-hidden">
      {/* Optional: Subtle Background Texture (e.g., grid pattern) */}
      <div className="absolute inset-0 bg-[url('/textures/noise-light.png')] opacity-5 pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-gray-900 mb-2">
          We're Not Flooding You With Options
        </h2>

        <div className="w-12 h-1 bg-black mx-auto mb-4 rounded-full"></div>

        <p className="max-w-xl mx-auto text-gray-600 text-base sm:text-lg mb-8">
          We believe in putting out only what matters — no filler, no fluff.
          Just a few cuts we’d wear every day. If it’s in here, it’s because it made the cut.
        </p>

        <a
          href="/products"
          className="inline-block px-6 py-3 bg-black text-white text-sm font-semibold tracking-wide hover:bg-gray-800 transition shadow-md rounded-sm"
        >
          Shop the Collection
        </a>
      </div>
    </section>
  );
}
