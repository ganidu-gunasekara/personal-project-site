"use client";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaNewspaper } from "react-icons/fa";

export default function Footer() {
  const [openAbout, setOpenAbout] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const [openConnect, setOpenConnect] = useState(false);
  const [openLegal, setOpenLegal] = useState(false);

  return (
    <section className="bg-gray-950 text-gray-300 w-full h-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-zinc-800 pb-10">

        {/* ABOUT */}
        <div className="border-t border-gray-700 py-4 md:border-none">
          <div
            className="flex justify-between items-center md:block"
            onClick={() => setOpenAbout(!openAbout)}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-white cursor-pointer">
              About
            </h3>
            <span className="md:hidden text-white text-xl">
              {openAbout ? "−" : "+"}
            </span>
          </div>
          <div className={`transition-all duration-500 ease-in-out overflow-hidden md:block ${openAbout ? "max-h-20 opacity-100" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block mt-3 space-y-2`}>
            <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200">About Us</a>
            <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200">Contact Us</a>
          </div>
        </div>

        {/* HELP */}
        <div className="border-t border-gray-700 py-4 md:border-none">
          <div
            className="flex justify-between items-center md:block"
            onClick={() => setOpenHelp(!openHelp)}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-white cursor-pointer">
              Help
            </h3>
            <span className="md:hidden text-white text-xl">
              {openHelp ? "−" : "+"}
            </span>
          </div>
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openHelp ? "max-h-20 opacity-100" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block mt-3 space-y-2`}>
            <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200">FAQs</a>
            <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200">Returns & Exchanges</a>
          </div>
        </div>

        {/* CONNECT */}
        <div className="border-t border-gray-700 py-4 md:border-none">
          <div
            className="flex justify-between items-center md:block"
            onClick={() => setOpenConnect(!openConnect)}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-white cursor-pointer">
              Connect
            </h3>
            <span className="md:hidden text-white text-xl">
              {openConnect ? "−" : "+"}
            </span>
          </div>
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openConnect ? "max-h-20 opacity-100" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block mt-3 space-y-2`}>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200">
              <FaInstagram /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200">
              <FaFacebook /> Facebook
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200">
              <FaNewspaper /> Newsletter Signup
            </a>
          </div>
        </div>

        {/* LEGAL */}
        <div className="border-t border-gray-700 py-4 md:border-none">
          <div
            className="flex justify-between items-center md:block"
            onClick={() => setOpenLegal(!openLegal)}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-white cursor-pointer">
              Legal
            </h3>
            <span className="md:hidden text-white text-xl">
              {openLegal ? "−" : "+"}
            </span>
          </div>
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openLegal ? "max-h-20 opacity-100" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block mt-3 space-y-2`}>
            <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200">Refund Policy</a>
            <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* LOGO */}
      <div className="w-full flex justify-center mt-10">
        <img
          src="/logo-white.png"
          alt="Nevano Logo"
          className="h-12 opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow-md"
        />
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-xs text-gray-500 mt-8 tracking-wide">
        © 2025 Nevano. All rights reserved.
      </div>

      {/* PAYMENT ICONS */}
      <div className="w-full flex justify-center mt-6">
        <div className="bg-white/5 px-5 py-3 flex gap-6 items-center rounded-xl backdrop-blur-md border border-white/10 shadow-inner">
          <img className="h-6" src="/icons/visa-logo.svg" alt="Visa" />
          <img className="h-6" src="/icons/Mastercard-logo.svg" alt="MasterCard" />
          <img className="h-6" src="/icons/mint-pay-logo.svg" alt="MintPay" />
        </div>
      </div>
    </section>
  );
}
