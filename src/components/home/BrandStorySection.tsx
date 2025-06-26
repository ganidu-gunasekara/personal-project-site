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
                    This Brand Started With Nothing But Grit
                </h2>

                <p className="text-sm sm:text-base leading-relaxed mb-5 text-gray-200">
                    I didn’t have a big budget. No handouts. No team. Just an idea and a need to prove something.
                </p>
                <p className="text-sm sm:text-base leading-relaxed mb-5 text-gray-200">
                    I started Nevano while working a 9–5, printing a few tees with the little I had. Not because it was easy — but because I couldn’t stop thinking about it.
                </p>
                <p className="text-sm sm:text-base leading-relaxed mb-5 text-gray-200">
                    Nevano is for anyone who’s been doubted, overlooked, or building in silence. If you’ve ever chased something that made no sense to anyone but you — you’re already one of us.
                </p>

                <p className="italic text-gray-300 text-sm mb-5">
                    We don’t do hype. We do meaning. Welcome to Nevano.
                </p>

                <div className="flex gap-4 flex-wrap">
                    <a
                        href="/about"
                        className="px-5 py-2 border border-white text-white text-sm hover:bg-white hover:text-black transition"
                    >
                        Read More About Us
                    </a>
                    <a
                        href="/shop"
                        className="px-5 py-2 bg-white text-black text-sm hover:bg-gray-200 transition"
                    >
                        Shop the Drop
                    </a>
                </div>
            </div>
        </section>

    );
}
