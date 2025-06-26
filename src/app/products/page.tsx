"use client";

import { useState } from "react";
import Filters from "./Filters";

export default function ProductsPage() {

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
        {
            id: 5,
            title: "Urban Street Tee",
            description: "Bold design and oversized fit for a modern streetwear look.",
            imageUrl: "/best-picks/best-picks-3.jpg",
        },
        {
            id: 6,
            title: "Eco Cotton Tee",
            description: "Made from 100% organic cotton – soft on your skin and the planet.",
            imageUrl: "/best-picks/best-picks-3.jpg",
        },
    ];

    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        Category: false,
        Size: false,
        Sort: false,
    });

    const [showFilters, setShowFilters] = useState(false); // animation state
    const [renderFilters, setRenderFilters] = useState(false); // DOM control


    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const openFilters = () => {
        setRenderFilters(true); // mount to DOM
        setTimeout(() => setShowFilters(true), 10); // trigger animation
    };

    const closeFilters = () => {
        setShowFilters(false); // trigger close animation
        setTimeout(() => setRenderFilters(false), 500); // remove from DOM after animation
    };


    return (
        <section className="pt-16 bg-white">
            <div
                className="relative bg-cover bg-center bg-no-repeat text-white py-12 px-4 md:py-16"
                style={{ backgroundImage: "url('/products-hero/product-page-hero.jpg')" }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/30"></div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-2xl mx-auto">
                    <p className="text-xs md:text-sm uppercase tracking-widest text-gray-400 mb-3">
                        Home / Shop
                    </p>
                    <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide drop-shadow-md">
                        The Drop
                    </h1>
                    <p className="text-sm md:text-lg text-gray-200 mt-3 leading-relaxed font-light">
                        Elevated streetwear made for every body. Oversized. Unisex. No rules — just style.
                    </p>
                </div>
            </div>
            <div className="h-px bg-black/20 my-6 mx-auto w-3/4" />


            <div className="flex flex-col lg:flex-row">
                <div className="bg-white text-black lg:w-1/5">
                    <button
                        onClick={openFilters}
                        className="lg:hidden bg-zinc-900 text-white px-6 py-2.5 rounded-full mt-4 mb-2 ml-8 text-sm font-medium tracking-wider shadow-sm active:scale-95 transition-transform duration-150 flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.8}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 4h18M6 10h12M10 16h4"
                            />
                        </svg>
                        FILTER PRODUCTS
                    </button>


                    {/* Sidebar (desktop only) */}
                    <div className="hidden lg:block md:min-h-screen p-4 space-y-4">
                        <Filters
                            openSections={openSections}
                            toggleSection={toggleSection}
                        />
                    </div>
                </div>

                {/* Product Grid */}
                <div className="min-h-screen bg-white lg:w-4/5 p-4 ">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 ">
                        {products.map((product) => (
                            <div key={product.id} className="transform hover:scale-105 transition-transform duration-300">
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
                </div>
            </div>

            {/* Mobile Filter Modal */}
            {renderFilters && (
                <div className="fixed inset-0 top-16 z-40 bg-white overflow-y-auto lg:hidden">
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out p-4
        ${showFilters ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-black">Filters</h2>
                            <button
                                onClick={closeFilters}
                                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-zinc-800 hover:border-black hover:text-black hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black"
                                aria-label="Close filters"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <Filters
                            openSections={openSections}
                            toggleSection={toggleSection}
                        />
                    </div>
                </div>
            )}


        </section>
    );
}
