"use client";

import { useEffect, useState } from "react";
import { getProductBySlug } from "@/lib/api";
import { useParams } from "next/navigation";
import {
    FaCheckCircle,
    FaExchangeAlt,
    FaHeart,
    FaMoneyBillWave,
} from "react-icons/fa";

export default function ProductDetail() {
    const { slug } = useParams() as { slug: string };
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState<string>("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductBySlug(slug);
                setProduct(data);
                setMainImage(data.mainImageUrl); // set initial main image
            } catch (err) {
                console.error("Product not found:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [slug]);

    if (loading) return <div className="p-6">Loading product...</div>;
    if (!product) return <div className="p-6 text-red-500">Product not found.</div>;

    return (
        <section className="max-w pt-20 p-3 text-black font-sans bg-white h-full">
            {/* Breadcrumbs */}
            <p className="text-sm text-gray-500 mb-4">
                {product.category.toUpperCase()} / NEVANO / <span className="font-medium text-black">{product.title}</span>
            </p>


            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left: Image Gallery */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative border mb-4">
                            <div className="absolute -top-4 -left-4 w-60 h-80 bg-black z-0"></div>
                            <img
                                src={mainImage}
                                alt="Main Product"
                                className="object-contain max-h-96 md:max-h-96 lg:max-h-96 relative z-10 p-2"
                            />
                        </div>

                        <div className="flex gap-2">
                            {product.imageUrls.map((url: string, i: number) => (
                                <div
                                    key={i}
                                    className={`border p-1 cursor-pointer ${mainImage === url ? "border-black" : "border-gray-200"
                                        }`}
                                    onClick={() => setMainImage(url)}
                                >
                                    <img
                                        src={url}
                                        alt={`Thumbnail ${i + 1}`}
                                        className="w-20 h-24 object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Product Info */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-2">
                        <p className="uppercase text-xs tracking-wide text-gray-500">
                            New Arrival
                        </p>
                        <h1 className="text-3xl font-bold uppercase leading-tight">
                            {product.title}
                        </h1>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    {/* Meta */}
                    <div className="text-sm text-gray-700 space-y-1">
                        <p>
                            <strong>Product No.</strong> — {product.productNo}
                        </p>
                        <p>
                            <strong>Fit</strong> — {product.fit}
                        </p>
                        <p>
                            <strong>Composition</strong> — {product.composition}
                        </p>
                    </div>

                    {/* Details Tabs */}
                    <div className="text-sm underline space-x-6 text-gray-800 font-medium">
                        <button>Product Details</button>
                        <button>Shipping Details</button>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-400 line-through">
                            {product.originalPrice}
                        </span>
                        <span className="text-xl font-bold">{product.discountedPrice}</span>
                    </div>

                    {/* Color Options */}
                    <div className="flex gap-3">
                        {product.colors.map((color: string, i: number) => (
                            <div
                                key={i}
                                className="w-6 h-6 border rounded-full"
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>

                    {/* Sizes */}
                    <div className="flex items-center gap-3 flex-wrap">
                        {product.sizes.map((size: string) => (
                            <button
                                key={size}
                                className="border px-4 py-1 rounded-md hover:border-black transition text-sm"
                            >
                                {size}
                            </button>
                        ))}
                        <span className="text-sm underline ml-2 cursor-pointer">
                            Size Guide
                        </span>
                    </div>

                    {/* Add to Cart */}
                    <div className="flex items-center gap-4">
                        <button className="w-10 h-10 border hover:bg-gray-100 flex items-center justify-center">
                            <FaHeart />
                        </button>
                        <button className="flex-grow bg-black text-white mr-4 py-3 text-sm font-semibold tracking-wide">
                            ADD TO CART
                        </button>
                    </div>

                    {/* Bottom info */}
                    <div className="text-sm text-gray-600 space-y-1">
                        <p className="flex items-center gap-2">
                            <FaCheckCircle /> 100% Original Goods
                        </p>
                        <p className="flex items-center gap-2">
                            <FaMoneyBillWave /> Cash on Delivery Available
                        </p>
                        <p className="flex items-center gap-2">
                            <FaExchangeAlt /> 14 Days Free Return Exchange
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
