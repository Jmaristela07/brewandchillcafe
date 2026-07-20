import React, { useState } from 'react';
import Barako from './assets/Barako-Espresso.png';
import Caramel from './assets/Caramel-Macchiato.png';
import Matcha from './assets/Matcha-Oat-Latte.png';
import IcedMatcha from './assets/Iced-Oreo-Matcha.png';
import logo from './assets/logo.png';

// 1. EXTENDED MENU DATA (13 premium items)
const menuData = [
  { id: 1, name: "Signature Espresso", category: "coffee", type: "hot", price: "₱140", desc: "Rich espresso shot pulled over smooth, velvety microfoam.", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=500" },
  { id: 2, name: "Iced Spanish Latte", category: "coffee", type: "iced", price: "₱160", desc: "Our best-seller. Sweetened condensed milk with premium espresso and fresh milk.", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=500" },
  { id: 3, name: "Iced Oreo Matcha", category: "non-coffee", type: "iced", price: "₱150", desc: "Pure matcha with steamed milk layered with vanilla ice cream and oreo on top.", img: IcedMatcha },
  { id: 4, name: "Croissant Supreme", category: "pastries", type: "hot", price: "₱120", desc: "Flaky, buttery French pastry baked fresh every single morning.", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=500" },
  { id: 5, name: "Dark Chocolate Brownie", category: "pastries", type: "all", price: "₱95", desc: "Fudgy, decadent dark chocolate square topped with sea salt flakes.", img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=500" },
  { id: 6, name: "Barako Espresso", category: "coffee", type: "hot", price: "₱120", desc: "Strong, aromatic, and pure kick of traditional barako coffee for those in need of a boost.", img: Barako },
  { id: 7, name: "Caramel Macchiato", category: "coffee", type: "all", price: "₱150", desc: "Creamy espresso layered with steamed milk and topped with a rich caramel drizzle. A sweet indulgence for coffee lovers.", img: Caramel },
  { id: 8, name: "Matcha Oat Latte", category: "coffee", price: "₱160", type: "all", desc: "Authentic Japanese uji matcha blended with creamy oat milk. Perfect for those seeking smooth energy.", img: Matcha },
  ];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeType, setActiveType] = useState('all');

  const filteredMenu = menuData.filter(item => {
    const matchCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchType = activeType === 'all' || item.type === activeType || item.type === 'all';
    return matchCategory && matchType;
  });

  return (
    <>
      {/* MAIN PADDED CONTAINER FOR MENU HEADERS AND CARDS */}
      <div className="bg-gradient-to-tr coffee-animated-bg from-green-900 via-green-800 to-amber-950 min-h-screen w-full pt-24 pb-16 px-6 md:px-12 text-white">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-black text-[#5C4033] tracking-wide mb-4">
            Our Crafted Menu
          </h1>
          <p className="font-sans text-sm md:text-base text-[#5C4033]">
            Sip, chill, and repeat. Explore our handpicked selection of premium blends and freshly baked pastries.
          </p>
        </div>

        {/* 1. MAIN CATEGORY FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-6 max-w-xl mx-auto">
          {['all', 'coffee', 'non-coffee', 'pastries'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveType('all');
              }}
              className={`px-5 py-2 rounded-full font-sans text-xs md:text-sm font-semibold capitalize transition-all duration-300 cursor-pointer ${
                activeCategory === cat ? 'bg-[#5C4033] text-[#E6D5C3] font-bold' : 'bg-white text-[#5C4033]'
              }`}
            >
              {cat === 'all' ? 'View All' : cat}
            </button>
          ))}
        </div>

        {/* 2. SUB-FILTER: HOT & ICED TOGGLE */}
        {activeCategory !== 'pastries' && (
          <div className="flex justify-center gap-2 mb-12">
            <div className="bg-white p-1 rounded-xl border border-[#5C4033] flex shadow-inner">
              {[
                { value: 'all', label: 'All Brews' },
                { value: 'hot', label: 'Hot' },
                { value: 'iced', label: 'Iced' }
              ].map((type) => (
                <button
                  key={type.value}
                  onClick={() => setActiveType(type.value)}
                  className={`px-4 py-1.5 rounded-lg font-sans text-xs font-medium transition-all duration-200 cursor-pointer ${
                    activeType === type.value
                      ? 'bg-[#5C4033] text-[#E6D5C3] font-bold shadow-md'
                      : 'text-[#5C4033] hover:text-white'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 3. MENU CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredMenu.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#2B1E16] border border-[#5C4033] rounded-2xl overflow-hidden backdrop-blur-md hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image Wrapper */}
              <div className="h-48 w-full overflow-hidden relative">
                <img 
                  src={item.img} 
                  srcSet={item.img}
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-white text-[#2B1E16] font-black text-sm px-3 py-1 rounded-full shadow-md">
                  {item.price}
                </span>
              </div>

              {/* Content Wrapper */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-[#E6D5C3] mb-2 group-hover:text-[#D7C4B7] transition-colors">
                  {item.name}
                </h3>
                <p className="font-sans text-xs text-white leading-relaxed flex-grow">
                  {item.desc}
                </p>
                
                <button className="mt-4 w-full bg-[#E6D5C3] hover:bg-[#D7C4B7]  text-[#5C4033] font-sans text-xs font-bold py-2.5 px-4 rounded-xl transition-all duration-300 tracking-wider shadow-md cursor-pointer">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= FOOTER ================= */}
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