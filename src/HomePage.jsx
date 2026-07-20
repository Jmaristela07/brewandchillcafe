import React from 'react';
import logo from './assets/logo.png';
import coffeeImage from './assets/coffee-image.png';
import BarakoEspresso from './assets/Barako-Espresso.png';
import CaramelMacchiato from './assets/Caramel-Macchiato.png';
import Matcha from './assets/Matcha-Oat-Latte.png' ;
import {anim} from './utils/animations.jsx';

function HomePage() {
  return (
    <div className="bg-[#FDFBF7] coffee-animated-bg w-full h-full flex flex-col animate-fade-in-up">
          <section id="hero" className="bg-[#2B1E16] py-16 flex flex-col md:flex-row items-center justify-between gap-12 rounded-2xl mx-8 my-10 shadow-2xl overflow-hidden">
              <div className="max-w-xl text-left space-y-6 px-12">
                  <span className="bg-[#E6D5C3] text-[#5C4033] text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full border border-[#5C4033]">Freshly Brewed Daily</span>
                  <h1 className="font-serif text-6xl font-black leading-tight text-white force-fade-in">Start Your Day with Real Coffee Energy</h1>
                  <p className="font-sans text-stone-200 text-lg leading-relaxed force-fade-in">Made from the finest coffee beans sourced directly from local farmers. Experience the true taste and aroma that energizes your day.</p>
                  <div className="flex flex-wrap gap-4 pt-2">
                      <a href="#" className="bg-[#E6D5C3] hover:bg-[#D7C4B7] text-black font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:scale-105 force-fade-in">Explore Menu</a>
                      <a href="#" className="border-2 border-[#E6D5C3] hover:bg-[#5C4033] hover:scale-105 text-white font-bold py-3 px-6 rounded-xl transition-all force-fade-in">Our Story</a>
                  </div>
              </div>
    
              <div className="w-full md:w-2/5 flex justify-center items-center pr-12">
                  <img 
                    src={coffeeImage} 
                    alt="Coffee Mug" 
                    className="w-full max-w-m h-auto rounded-3xl force-float object-cover shadow-2xl border-4 border-[#2B1E16]/30 hover:scale-105 transition-all duration-300" 
                  />
              </div>
          </section>

        <section className="py-20 px-8 max-w-7xl mx-auto w-full">
        <div className="text-center space-y-3 mb-16">
          <span className="text-[#E6D5C3] font-bold uppercase tracking-widest text-xs bg-[#5C4033] py-1.5 px-4 rounded-full border border-[#5C4033]">
            Our Top Picks
          </span>
          <h2 className="font-serif text-4xl font-black text-[#5C4033] tracking-tight py-2 force-fade-in">
          Explore Our Best Sellers
          </h2>
          <p className="font-sans text-[#5C4033] max-w-md mx-auto text-m leading-relaxed force-fade-in">
            Handpicked selections of our most popular beverages, crafted to perfection for your ultimate coffee experience.
          </p>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 force-fade-in">
        
        <div className="bg-[#2B1E16] border border-stone-800 rounded-3xl p-6 flex flex-col justify-between hover:border-[#606C38]/50 hover:bg-[#3d2b20] transition-all duration-300 group shadow-xl hover:-translate-y-2">
          <div className="space-y-4">
            <div className="w-full h-48 bg-[#FDFBF7]/5 rounded-2xl flex items-center justify-center overflow-hidden border border-stone-800">
              <img src={CaramelMacchiato} alt="Caramel Macchiato" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D7C4B7] transition-colors">
                Caramel Macchiato
              </h3>
              <p className="font-sans text-stone-200 text-sm leading-relaxed">
                Creamy espresso layered with steamed milk and topped with a rich caramel drizzle. A sweet indulgence for coffee lovers.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6 mt-4 border-t border-stone-800">
            <span className="text-xl font-black text-white">₱150.00</span>
            <button className="bg-[#E6D5C3] hover:bg-[#D7C4B7] hover:scale-105 text-[#5C4033] font-bold py-2 px-4 rounded-xl text-xs transition-all shadow-md">
              Add to Order
            </button>
          </div>
        </div>
    
        <div className="bg-[#2B1E16] border border-stone-800 rounded-3xl p-6 flex flex-col justify-between hover:border-[#606C38]/50 hover:bg-[#3d2b20] transition-all duration-300 group shadow-xl hover:-translate-y-2">
          <div className="space-y-4">
            <div className="w-full h-48 bg-[#FDFBF7]/5 rounded-2xl flex items-center justify-center overflow-hidden border border-stone-800">
              <img src={BarakoEspresso} alt="Barako Espresso" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D7C4B7] transition-colors">
                Barako Espresso
              </h3>
              <p className="font-sans text-stone-200 text-sm leading-relaxed">
                Strong, aromatic, and pure kick of traditional barako coffee for those in need of a boost.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6 mt-4 border-t border-stone-800">
            <span className="text-xl font-black text-white">₱120.00</span>
            <button className="bg-[#E6D5C3] hover:bg-[#D7C4B7] hover:scale-105 text-[#5C4033] font-bold py-2 px-4 rounded-xl text-xs transition-all shadow-md">
              Add to Order
            </button>
          </div>
        </div>
    
        <div className="bg-[#2B1E16] border border-stone-800 rounded-3xl p-6 flex flex-col justify-between hover:border-[#606C38]/50 hover:bg-[#3d2b20] transition-all duration-300 group shadow-xl hover:-translate-y-2">
          <div className="space-y-4">
            <div className="w-full h-48 bg-[#FDFBF7]/5 rounded-2xl flex items-center justify-center overflow-hidden border border-stone-800">
              <img src={Matcha} alt="Matcha Oat Latte" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D7C4B7] transition-colors">
                Matcha Oat Latte
              </h3>
              <p className="font-sans text-stone-200 text-sm leading-relaxed">
                Authentic Japanese uji matcha blended with creamy oat milk. Perfect for those seeking smooth energy.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6 mt-4 border-t border-stone-800">
            <span className="text-xl font-black text-white">₱160.00</span>
            <button className="bg-[#E6D5C3] hover:bg-[#D7C4B7] hover:scale-105 text-[#5C4033] font-bold py-2 px-4 rounded-xl text-xs transition-all shadow-md">
              Add to Order
            </button>
          </div>
        </div>
    
        </div>
        </section>

      <section className="py-20 bg-[#2B1E16]/90 border-t border-b border-stone-800 px-8 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#5C4033] font-bold uppercase tracking-widest text-xs bg-[#E6D5C3] py-1.5 px-4 rounded-full border border-[#5C4033]">
            Our Core Values
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Crafting Coffee with <span className="font-serif text-[#E6D5C3]">Purpose</span> and Passion
            </h2>
            <p className="font-sans text-stone-300 leading-relaxed text-base">
            In brewing every cup, we prioritize quality, sustainability, and community. Our beans are sourced from local farmers, roasted to perfection, and served with care to ensure every sip is a delightful experience.
            </p>
          
            <div className="p-6 bg-[#E6D5C3] rounded-2xl border border-stone-800 flex items-center gap-4">
              <span className="text-4xl"></span>
              <div>
              <h4 className="font-bold text-[#5C4033] text-sm">100% Locally Sourced</h4>
              <p className="text-xs text-[#5C4033]">Directly supporting local farmers in the Philippines.</p>
              </div>
            </div>
          </div>
    
          <div className="space-y-6">
          
            <div className="flex gap-4 p-6 rounded-2xl hover:bg-[#2B1E16] border border-transparent hover:border-stone-800 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#E6D5C3] flex items-center justify-center text-xl shrink-0 group-hover:bg-[#E6D5C3] group-hover:text-slate-950 transition-all duration-300">
              
            </div>
            <div className="space-y-1">
              <h3 className="font-bold font-serif text-white text-lg group-hover:text-white transition-colors">Artisanal Roasting</h3>
              <p className="font-sans text-stone-300 text-sm leading-relaxed">
                Carefully and perfectly roasted to bring out the true sweetness and aroma of our beans.
              </p>
            </div>
          </div>
    
          <div className="flex gap-4 p-6 rounded-2xl hover:bg-[#2B1E16] border border-transparent hover:border-stone-800 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#E6D5C3] flex items-center justify-center text-xl shrink-0 group-hover:bg-[#E6D5C3] group-hover:text-white transition-all duration-300">
              
            </div>
            <div className="space-y-1">
              <h3 className="font-bold font-serif text-white text-lg group-hover:text-white transition-colors">Eco-Friendly Process</h3>
              <p className="font-sans text-stone-300 text-sm leading-relaxed">
                From packaging to operation, we minimize waste to create a cleaner community.
              </p>
            </div>
          </div>
    
          <div className="flex gap-4 p-6 rounded-2xl hover:bg-[#2B1E16] border border-transparent hover:border-stone-800 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#E6D5C3] flex items-center justify-center text-xl shrink-0 group-hover:bg-[#E6D5C3] group-hover:text-slate-950 transition-all duration-300">
              
            </div>
            <div className="space-y-1">
              <h3 className="font-bold font-serif text-white text-lg group-hover:text-white transition-colors">The Perfect Workplace</h3>
              <p className="font-sans text-stone-300 text-sm leading-relaxed">
                A cozy and quiet environment for studying, working, or simply enjoying your favorite brew.
              </p>
            </div>
          </div>
    
          </div>
    
        </div>
        </section>

    <section className="py-16 px-8 max-w-7xl mx-auto w-full">
      <div className="bg-[#2B1E16] rounded-3xl p-8 md:p-12 shadow-2xl border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="space-y-6 max-w-xl text-left">
          <h2 className="font-serif text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Visit Our Cozy Corner or Order to Your Doorstep
          </h2>
          <p className="font-sans text-stone-200 text-sm md:text-base leading-relaxed">
            Whether you want to enjoy a cup in our welcoming cafe or have it delivered, we ensure a delightful experience every time.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs md:text-sm text-white">
            <div className="flex items-center gap-3 bg-[#FDFBF7]/5 p-3 rounded-xl border border-stone-800">
              <span className="text-xl"></span>
              <div>
                <p className="font-bold text-[#E6D5C3]">Our Location</p>
                <p className="text-stone-200">Buenavista West, Candelaria, Quezon</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#FDFBF7]/5 p-3 rounded-xl border border-stone-800">
              <span className="text-xl"></span>
              <div>
                <p className="font-bold text-[#E6D5C3]">Business Hours</p>
                <p className="text-stone-200">Mon - Sun: 10:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
    
        <div className="w-full md:w-auto shrink-0 bg-[#FDFBF7]/5 p-6 md:p-8 rounded-2xl border border-stone-800 text-center space-y-4 max-w-sm mx-auto">
          <h3 className="font-bold text-white text-lg">Get 10% Off Your First Order</h3>
          <p className="text-stone-300 text-xs leading-relaxed">
            Subscribe to our newsletter to receive special discounts and the latest menu updates!
          </p>
          <div className="space-y-2 pt-2">
            <input 
              type="email" 
              placeholder="Enter your email, e.g., you@example.com" 
              className="w-full px-4 py-2.5 bg-[#D7C4B7] text-[#2B1E16] text-sm rounded-xl border border-stone-800 focus:outline-none focus:border-[#606C38] placeholder:text-stone-500"
            />
            <button className="w-full bg-[#E6D5C3] hover:bg-[#D7C4B7] hover:scale-105 text-[#5C4033] font-bold py-2.5 px-4 rounded-xl text-sm transition-all shadow-md active:scale-95">
              Claim My Discount
            </button>
          </div>
        </div>
    
      </div>
    </section>

      <footer className="w-full bg-[#2B1E16] border-t border-stone-800 py-8 px-8 text-center text-xs text-stone-400 space-y-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
          <div className="flex items-center gap-2">
            <img src={logo} alt="Brew & Chill Cafe Logo" className="w-8 h-8 rounded-full border-2 border-[#E6D5C3] shadow-md" />
            <span className="font-bold text-white tracking-wider">BREW & CHILL CAFE</span>
          </div>
        
          <div className="flex gap-6 text-white text-sm font-medium">
            <a href="#" className="hover:text-[#E6D5C3] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#E6D5C3] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#E6D5C3] transition-colors">Contact Us</a>
          </div>
        
          <p className="text-white text-xs">
            © 2026 Brew & Chill Cafe. All rights reserved.
          </p>
    
      </div>
      </footer>
      </div>
    
  );
}

export default HomePage;