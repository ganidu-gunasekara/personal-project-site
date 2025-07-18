"use client";

import React, { forwardRef, RefObject, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";


const Header = forwardRef<HTMLElement>((_, ref) => {

    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { label: "Men", href: "/products?category=Men" },
        { label: "Women", href: "/products?category=Women" },
        { label: "Sale", href: "/#" },
        { label: "About", href: "/about" },
    ];


    return (
        <nav id="site-header" ref={ref} className="fixed top-0 left-0 w-full z-[999] bg-white shadow-md flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={110}
                        height={36}
                        priority
                        style={{ height: "auto" }}
                    />
                </Link>
            </div>

            {/* Desktop Nav - centered */}
            <div className="hidden md:flex flex-1 justify-center space-x-6 text-[15px] font-semibold">
                {navLinks.map(({ label, href }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`relative pb-1 transition-colors duration-300 ${isActive ? "text-black" : "text-black"
                                } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:w-0 hover:after:w-full`}
                        >
                            {label}
                        </Link>
                    );
                })}
            </div>

            {/* Right: Search bar + Cart + Hamburger */}
            <div className="flex items-center space-x-4">
                {/* Search Bar (hidden on small screens) */}
                <div className="hidden md:flex items-center bg-gray-100 px-3 py-1.5 rounded-md w-[220px]">
                    <FaSearch className="text-gray-500 mr-2 text-sm" />
                    <input
                        type="text"
                        placeholder="Search for a Product"
                        className="bg-transparent focus:outline-none text-sm text-gray-800 w-full"
                    />
                </div>

                {/* Cart Icon */}
                <Link href="#" onClick={(e) => e.preventDefault()} className="text-black text-xl">
                    <FaShoppingCart />
                </Link>

                {/* Hamburger - visible on small screens */}
                <button
                    className="md:hidden text-xl text-black"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <FaBars />
                </button>
            </div>

            {/* Mobile Nav Menu (animated) */}
            {/* Mobile Nav Menu */}
            <div
                className={`absolute top-full left-0 w-full z-10 md:hidden bg-white overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="border-t border-gray-200 shadow-md p-4 text-sm font-semibold text-black">
                    {navLinks.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className={`block px-2 py-2 rounded hover:bg-gray-100 transition-all duration-500 ease-out ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                }`}
                        >
                            {label}
                        </Link>
                    ))}

                    {/* Mobile Search */}
                    <div
                        className={`flex items-center bg-gray-100 px-3 py-2 rounded-md mt-4 transition-all duration-500 ease-out ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                            }`}
                    >
                        <FaSearch className="text-gray-500 mr-2 text-sm" />
                        <input
                            type="text"
                            placeholder="Search for a Product"
                            className="bg-transparent focus:outline-none text-sm text-gray-800 w-full"
                        />
                    </div>
                </div>
            </div>


        </nav>
    );
});

Header.displayName = "Header"; // makes React-DevTools happy
export default Header;
