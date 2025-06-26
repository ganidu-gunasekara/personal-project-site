"use client";

export default function BestPicksSection() {

    const products = [
        {
            id: 1,
            title: "Classic Oversized Tee",
            description: "Relaxed fit with premium cotton – great for everyday comfort.",
            imageUrl: "/best-picks/best-picks-3.jpg", // replace with your actual image path
        },
        {
            id: 2,
            title: "Everyday Basic Tee",
            description: "Lightweight and breathable – perfect for layering.",
            imageUrl: "/best-picks/best-picks-3.jpg",
        },
        {
            id: 3,
            title: "Urban Street Tee",
            description: "Bold design and oversized fit for a modern streetwear look.",
            imageUrl: "/best-picks/best-picks-3.jpg",
        },
        {
            id: 4,
            title: "Eco Cotton Tee",
            description: "Made from 100% organic cotton – soft on your skin and the planet.",
            imageUrl: "/best-picks/best-picks-3.jpg",
        },
    ];

    return (
        <section
            id="best-pick-section"
            className="scroll-mt-0 py-6 bg-white"
        >
            <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-extrabold tracking-tight text-gray-900 mb-3">
                    BEST PICKS
                </h2>

                <div className="w-16 sm:w-20 md:w-24 h-1 bg-black mx-auto mb-4 rounded-full" />

                <p className="text-base sm:text-lg text-gray-600 text-center italic mb-2">
                    Cleanest Cuts Right Now
                </p>

                <p className="text-sm sm:text-md md:text-lg text-gray-500 text-center mb-10 tracking-wide sm:tracking-wider uppercase">
                    — Wear it Before Everyone Else Does —
                </p>

                <div className="aspect[5/4] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
                    {products.map((product) => (
                        <div key={product.id}
                        className="transform hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={product.imageUrl}
                                alt={product.title}
                                className="w-full h-auto object-cover rounded-md shadow-md"
                            />

                            <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                            <p className="text-sm text-gray-600">{product.description}</p>
                        </div>

                    ))}
                </div>
                <div className="mt-10 text-center">
  <a
    href="/shop"
    className="inline-block px-6 py-2 border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition"
  >
    View More
  </a>
</div>
            </div>
        </section>

    );
}