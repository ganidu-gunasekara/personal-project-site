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
            className="scroll-mt-0 min-h-screen py-6 bg-white"
        >
            <div>
                <h2 className="text-2xl font-bold text-center mb-4">Best Picks</h2>
                <p className="text-center text-gray-500 mb-8">
                    A few of our go-to oversized essentials — for every body.
                </p>
                <div className="aspect [5/4] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
                    {products.map((product)=>(
                        <div key={product.id}>
                            <img
                            src={product.imageUrl}
                            alt={product.title}
                            className="w-full h- object-contain shadow-xl"
                            />
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p className="text-gray-500 text-sm">{product.description}</p>
                        </div>
                        
                    ))}
                </div>
            </div>
        </section>

    );
}