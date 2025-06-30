"use client";

import { FaCheckCircle, FaExchangeAlt, FaHeart, FaMoneyBillWave } from "react-icons/fa";

export default function ProductDetail() {
    const product = {
        title: "OVERSIZE BUTTON–DOWN LINEN BLOUSE",
        description:
            "Lapel collar and long sleeve shirt. Criss–cross V neckline. Elastic bottom hem. Long shirt with lapel collar and long sleeves at cuffs. Patch pocket on the chest.",
        productNo: "43287348",
        fit: "Oversize",
        composition: "Linen",
        originalPrice: "$160",
        discountedPrice: "$120",
        colors: ["#f2f2f2", "#d9d9d9", "#f4cccc", "#7a4e3c", "#000000"],
        sizes: ["S", "M", "L", "XL"],
        imageUrl: "/best-picks/best-picks-3.jpg",
    };

    return (
        <section className="max-w pt-20 p-3 text-black font-sans bg-white h-full">
            {/* Breadcrumbs */}
            <p className="text-sm text-gray-500 mb-4">Women’s / Zara / <span className="font-medium text-black">Blouse</span></p>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left: Image Gallery */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative border mb-4">
                            <div className="absolute -top-4 -left-4 w-60 h-80 bg-black z-0">
                            </div>
                            <img src={product.imageUrl} alt="Main Product" className="object-contain max-h-96 md:max-h-96 lg:max-h-96 relative z-10 p-2" />
                        </div>

                        <div className="flex gap-2">
                        {Array(4).fill(0).map((_, i) => (
                            <div key={i} className="border p-1">
                                <img src={product.imageUrl} alt={`Thumbnail ${i + 1}`} className="w-20 h-24 object-cover" />
                            </div>
                        ))}
                    </div>
                    </div>
                </div>

                {/* Right: Product Info */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-2">
                        <p className="uppercase text-xs tracking-wide text-gray-500">New Arrival</p>
                        <h1 className="text-3xl font-bold uppercase leading-tight">{product.title}</h1>
                        <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>
                    </div>

                    {/* Meta */}
                    <div className="text-sm text-gray-700 space-y-1">
                        <p><strong>Product No.</strong> — {product.productNo}</p>
                        <p><strong>Fit</strong> — {product.fit}</p>
                        <p><strong>Composition</strong> — {product.composition}</p>
                    </div>

                    {/* Details Tabs */}
                    <div className="text-sm underline space-x-6 text-gray-800 font-medium">
                        <button>Product Details</button>
                        <button>Shipping Details</button>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-400 line-through">{product.originalPrice}</span>
                        <span className="text-xl font-bold">{product.discountedPrice}</span>
                    </div>

                    {/* Color Options */}
                    <div className="flex gap-3">
                        {product.colors.map((color, i) => (
                            <div
                                key={i}
                                className="w-6 h-6 border rounded-full"
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>

                    {/* Sizes */}
                    <div className="flex items-center gap-3 flex-wrap">
                        {product.sizes.map((size) => (
                            <button
                                key={size}
                                className="border px-4 py-1 rounded-md hover:border-black transition text-sm"
                            >
                                {size}
                            </button>
                        ))}
                        <span className="text-sm underline ml-2 cursor-pointer">Size Guide</span>
                    </div>

                    {/* Add to Cart */}
                    <div className="flex items-center gap-4">
                        <button className="w-10 h-10 border hover:bg-gray-100 flex items-center justify-center">
                            <FaHeart/>
                        </button>
                        <button className="flex-grow bg-black text-white mr-4 py-3 text-sm font-semibold tracking-wide">
                            ADD TO CART
                        </button>
                    </div>

                    {/* Bottom info */}
                    <div className="text-sm text-gray-600 space-y-1">
                        <p className="flex items-center gap-2"><FaCheckCircle/> 100% Original Goods</p>
                        <p className="flex items-center gap-2"><FaMoneyBillWave/> Cash on Delivery Available</p>
                        <p className="flex items-center gap-2"><FaExchangeAlt/>14 Days Free Return Exchange</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
