"use client";

export default function MovementBanner() {
  return (
    <section className="bg-black text-white py-20 px-6 text-center relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/images/movement.jpg')] bg-cover bg-center opacity-40 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase mb-4">
          Join the Movement
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6">
          Not just a brand. Not just clothes. This is for the ones who move different,
          think louder, and wear their truth.
        </p>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-block px-6 py-3 bg-white text-black text-sm font-semibold tracking-wide hover:bg-gray-200 transition rounded-sm shadow-md"
        >
          Join the Movement
        </a>
      </div>
    </section>
  );
}
