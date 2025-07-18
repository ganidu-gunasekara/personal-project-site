"use client";

export default function BrandStorySection() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white"
            style={{ backgroundImage: "url('/images/back-story-image.jpg')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto text-left z-10">
                <p className="uppercase text-sm text-gray-300 mb-2 tracking-wider">
                    The Story Behind the Stitch
                </p>

                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
                    This Brand Started with Coffee, Chaos & Curiosity
                </h2>

                <p className="text-sm sm:text-base leading-relaxed mb-5 text-gray-200">
                    It all started with a coffee-fueled idea at 2AM -- you know, one of those "what if..." moments. No money, no plan, just a lot of tabs open and a sketchbook full of scribbles.
                </p>
                <p className="text-sm sm:text-base leading-relaxed mb-5 text-gray-200">
                    Nevano was born in a cluttered apartment with more ambition than square footage. I was juggling a day job, late-night YouTube tutorials, and trying not to accidentally glue my fingers together.
                </p>
                <p className="text-sm sm:text-base leading-relaxed mb-5 text-gray-200">
                    This brand is for the dreamers who don&apos;t take themselves too seriously -- the ones who chase ideas, trip over them, and keep running anyway. If you&apos;re building something weird and wonderful, you&apos;re one of us.
                </p>

                <p className="italic text-gray-300 text-sm mb-5">
                    We&apos;re not trying to be cool. We&apos;re just having fun doing what we love. Welcome to Nevano.
                </p>

                <div className="flex gap-4 flex-wrap">
                    <a
                        href="/about"
                        className="px-5 py-2 border border-white text-white text-sm hover:bg-white hover:text-black transition"
                    >
                        Read More About Us
                    </a>
                    <a
                        href="/products"
                        className="px-5 py-2 bg-white text-black text-sm hover:bg-gray-200 transition"
                    >
                        Shop the Drop
                    </a>
                </div>
            </div>
        </section>
    );
}
