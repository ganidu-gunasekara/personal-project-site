"use client";

import { useEffect, useState } from "react";

export default function AboutPage() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev >= 100 ? -100 : prev + 0.5));
    }, 16); // 60fps smooth

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <h1
        className="text-4xl md:text-6xl font-extrabold text-white tracking-widest drop-shadow-lg animate-pulse"
        style={{
          transform: `translateX(${position}%)`,
          transition: "transform 0.01s linear",
          whiteSpace: "nowrap",
        }}
      >
        COMING SOON...
      </h1>

      {/* Optional subtle glow or blur effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-purple-400/10 via-transparent to-pink-400/10 blur-2xl opacity-20" />
      </div>
    </div>
  );
}
