"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type FiltersProps = {
  openSections: Record<string, boolean>;
  toggleSection: (section: string) => void;
};

export default function Filters({ openSections, toggleSection }: FiltersProps) {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>("All");


  const handleSizeClick = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="bg-white text-black border-t border-b border-gray-800 text-[15px] font-medium tracking-tight">

      {/* Category */}
      <div className="px-5 py-4">
        <button
          onClick={() => toggleSection("Category")}
          className="w-full flex justify-between items-center text-left text-[16px] font-semibold text-gray-900"
        >
          <span>Category</span>
          <FaChevronDown
            className={`text-sm transition-transform duration-300 ${openSections.Category ? "rotate-180" : ""
              }`}
          />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSections.Category ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["All", "Men", "Women"].map((category) => {
              const isSelected = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(isSelected ? null : category)
                  }
                  className={`border-2 rounded-md px-3 py-2 text-sm tracking-wide flex justify-center items-center transition-all duration-200
            ${isSelected
                      ? "bg-black text-white border-black"
                      : "border-gray-300 text-gray-800 hover:border-black hover:text-black hover:bg-gray-100"}`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Size */}
      <div className="px-5 py-4 border-t border-gray-800">
        <button
          onClick={() => toggleSection("Size")}
          className="w-full flex justify-between items-center text-left text-[16px] font-semibold text-gray-900"
        >
          <span>Size</span>
          <FaChevronDown
            className={`text-sm transition-transform duration-300 ${openSections.Size ? "rotate-180" : ""
              }`}
          />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSections.Size ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["S", "M", "L"].map((size) => (
              <button
                key={size}
                onClick={() => handleSizeClick(size)}
                className={`border-2 rounded-md px-3 py-2 text-sm tracking-wide flex justify-center items-center transition-all duration-200
                    ${selectedSizes.includes(size)
                    ? "bg-black text-white border-black"
                    : "border-gray-300 text-gray-800 hover:border-black hover:text-black hover:bg-gray-100"}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sort */}
      <div className="px-5 py-4 border-t border-gray-800">
        <button
          onClick={() => toggleSection("Sort")}
          className="w-full flex justify-between items-center text-left text-[16px] font-semibold text-gray-900"
        >
          <span>Sort By</span>
          <FaChevronDown
            className={`text-sm transition-transform duration-300 ${openSections.Sort ? "rotate-180" : ""
              }`}
          />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSections.Sort ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="mt-4 space-y-3 text-sm text-gray-700" role="radiogroup" aria-label="Sort options">
            {[
              { label: "Low to High", icon: "↓", value: "low" },
              { label: "High to Low", icon: "↑", value: "high" },
            ].map(({ label, icon, value }) => {
              const isSelected = selectedSort === value;

              return (
                <button
                  key={value}
                  role="radio"
                  aria-checked={isSelected}
                  type="button"
                  onClick={() => setSelectedSort(isSelected ? null : value)}
                  className={`w-full flex items-center justify-between px-4 py-2 rounded-md border text-left transition-all duration-200 focus:outline-none
            ${isSelected
                      ? "bg-black text-white border-black"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-black hover:text-black"}
          `}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">{icon}</span>
                    {label}
                  </span>
                  {isSelected && (
                    <span className="text-xs font-medium uppercase tracking-wide">✓</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>


      </div>
    </div>
  );
}
