import React from 'react';
import logo from './assets/logo.png';

export default function AboutPage() {
  return (
    <>
      {/* KONTENYER NG BUONG CONTENT (Naka-padding) */}
      <div className="bg-gradient-to-br coffee-animated-bg from-green-950 via-green-900 to-amber-950 min-h-screen w-full pt-24 pb-16 px-6 md:px-12 text-white">
        
        {/* 1. HERO HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-black text-[#5C4033] tracking-wide mb-4">
            Our Story
          </h1>
          <p className="font-sans text-sm md:text-base text-[#5C4033]">
            Behind every great brew is a passion for craft and a commitment to creating the perfect space to unwind.
          </p>
        </div>

        {/* 2. MAIN STORY SECTION (Split Grid) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#5C4033]">
              How Brew & Chill Began
            </h2>
            <p className="font-sans text-sm md:text-base text-[#5C4033] leading-relaxed">
              Founded with a simple vision, our cafe was built to be a sanctuary for coffee lovers and overthinkers alike. We wanted to merge the rich, bold traditional flavors of local coffee like our standout Barako espresso with a modern, relaxed urban ambiance.
            </p>
            <p className="font-sans text-sm md:text-base text-[#5C4033] leading-relaxed">
              We meticulously source our beans from local farmers, ensuring that every shot pulled and every milk textured meets our high standard of craftsmanship. For us, it's not just about standard caffeine delivery; it's about the experience of slow brewing and deep chilling.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-[#2B1E16] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-[#2B1E16] border border-green-800/30 p-8 rounded-3xl backdrop-blur-md">
              <h3 className="font-serif text-xl font-bold text-white mb-4">The Coffee Philosophy</h3>
              <ul className="space-y-4 font-sans text-sm text-white">
                <li className="flex gap-3">
                  <span><strong>Ethically Sourced:</strong> Supporting local growers and picking only top-tier beans.</span>
                </li>
                <li className="flex gap-3">
                  <span><strong>Artisan Roasting:</strong> Tailoring specific profiles to bring out natural sweet, fruity, or nutty notes.</span>
                </li>
                <li className="flex gap-3">
                  <span><strong>The Chill Factor:</strong> Creating a cozy environment with soundscapes perfect for studying, working, or unwinding.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. CORE VALUES / STATS SECTION */}
        <div className="max-w-5xl mx-auto border-t border-green-800/20 pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 bg-[#2B1E16] rounded-2xl border border-green-900/30">
              <h4 className="font-serif text-3xl font-black text-white mb-1">100%</h4>
              <p className="font-sans text-xs text-white uppercase tracking-widest">Local Beans</p>
            </div>
            <div className="p-4 bg-[#2B1E16] rounded-2xl border border-green-900/30">
              <h4 className="font-serif text-3xl font-black text-white mb-1">20+</h4>
              <p className="font-sans text-xs text-white uppercase tracking-widest">Signature Blends</p>
            </div>
            <div className="p-4 bg-[#2B1E16] rounded-2xl border border-green-900/30">
              <h4 className="font-serif text-3xl font-black text-white mb-1">5k+</h4>
              <p className="font-sans text-xs text-white uppercase tracking-widest">Happy Chilled Cups</p>
            </div>
            <div className="p-4 bg-[#2B1E16] rounded-2xl border border-green-900/30">
              <h4 className="font-serif text-3xl font-black text-white mb-1">1</h4>
              <p className="font-sans text-xs text-white uppercase tracking-widest">Cozy Community</p>
            </div>
          </div>
        </div>

      </div>

      {/* ================= 🚀 NASA LABAS NA ANG FOOTER: RE-ALIGNED & FULL WIDTH ================= */}
      <footer className="w-full bg-[#2B1E16] border-t border-green-900 py-8 px-8 text-center text-xs text-green-500 space-y-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            
          {/* Brand Name */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Brew & Chill Cafe Logo" className="w-8 h-8 rounded-full border-2 border-[#E6D5C3] shadow-md" />
            <span className="font-bold text-white tracking-wider">BREW & CHILL CAFE</span>
          </div>
            
          {/* Links */}
          <div className="flex gap-6 text-white text-sm font-medium">
            <a href="#" className="hover:text-[#E6D5C3] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#E6D5C3] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#E6D5C3] transition-colors">Contact Us</a>
          </div>
            
          {/* Copyright */}
          <p className="text-white text-xs">
            © 2026 Brew & Chill Cafe. All rights reserved.
          </p>
        
        </div>
      </footer>
    </>
  );
}