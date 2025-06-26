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
    <section className="bg-zinc-900 text-gray-300 w-full h-auto pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* ABOUT */}
        <div className="border-t border-gray-700 py-4 md:border-none">
          <div
            className="flex justify-between items-center md:block"
            onClick={() => setOpenAbout(!openAbout)}
          >
            <h3
              className="text-base font-semibold uppercase tracking-wider text-white cursor-pointer"
            >
              About
            </h3>
            <span className="md:hidden text-hiddenwhite text-xl">
              {openAbout ? "−" : "+"}
            </span>
          </div>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden md:block ${openAbout ? "max-h-20 opacity-100" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}
          >
            <a href="#" className="block hover:text-white transition-colors">About Us</a>
            <a href="#" className="block hover:text-white transition-colors">Contact Us</a>
          </div>

        </div>

        {/* HELP */}
        <div className="border-t border-gray-700 py-4 md:border-none">
          <div
            className="flex justify-between items-center md:block"
            onClick={() => setOpenHelp(!openHelp)}
          >
            <h3
              className="text-base font-semibold uppercase tracking-wider text-white cursor-pointer"
            >
              Help
            </h3>
            <span className="md:hidden text-hiddenwhite text-xl">
              {openHelp ? "−" : "+"}
            </span>
          </div>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${openHelp ? "max-h-20 opacity-100" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
            <a href="#" className="block hover:text-white transition-colors">FAQs</a>
            <a href="#" className="block hover:text-white transition-colors">Returns & Exchanges</a>
          </div>
        </div>

        {/* CONNECT */}
        <div className="border-t border-gray-700 py-4 md:border-none bg">
          <div
            className="flex justify-between items-center md:block"
            onClick={() => setOpenConnect(!openConnect)}
          >
            <h3
              className="text-base font-semibold uppercase tracking-wider text-white cursor-pointer"
            >
              Connect
            </h3>
            <span className="md:hidden text-white text-xl">
              {openConnect ? "−" : "+"}
            </span>
          </div>
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openConnect ? "max-h-20 opacity-100" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <FaInstagram /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <FaFacebook /> Facebook
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white">
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
            <h3
              className="text-base font-semibold uppercase tracking-wider text-white cursor-pointer"
            >
              Legal
            </h3>
            <span className="md:hidden text-white text-xl">
              {openLegal ? "−" : "+"}
            </span>
          </div>
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openLegal ? "max-h-20 opacity-100" : "max-h-0 opacity-0"} md:max-h-full md:opacity-100 md:block`}>
            <a href="#" className="block hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="block hover:text-white transition-colors">Refund Policy</a>
            <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © 2025 Nevano. All rights reserved.
      </div>

      {/* PAYMENT ICONS */}
      <div className="w-full flex justify-center mt-6">
        <div className="bg-slate-200 px-4 py-2 flex gap-6 items-center rounded">
          <img className="h-6" src="/icons/visa-logo.svg" alt="Visa" />
          <img className="h-6" src="/icons/Mastercard-logo.svg" alt="MasterCard" />
          <img className="h-6" src="/icons/mint-pay-logo.svg" alt="MintPay" />
        </div>
      </div>
    </section>
  );
}
