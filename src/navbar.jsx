import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png';

function Navbar({ currentPage, setCurrentPage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //"isModalOpen" for the tab menu and for close open method...
  const [orderText, setOrderText] = useState("");
  const [addressText, setAddressText] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    //for scroll down effect of the navbar..
    const handleScroll = () => {
      if (window.scrollY > 20) {
        /*window.scrollY used for counting pixels down to 20 at Y-Coordinate, telling this code that
            after you scroll the screen at 20 pixels, the navbar will be shown(true)
             and the less than 20 Pixels will be hide(false)*/
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    //when the user scrolled down, setIsScrolled(true) will be initiated, otherwise setIsScrolled(false). 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    //[] means single use of window.addEventListener for the RAM usage
  }, []);

  const handleSubmit = (e) => {
    //for the Delivery message
    e.preventDefault();
    
    console.log("=== NEW ORDER SUBMITTED ===");
    console.log("Order Detail:", orderText);
    console.log("Address:", addressText);
    console.log("Delivery Time:", deliveryTime);

    alert(`Thank you! We received your order.\n\nItems: ${orderText}\nAddress: ${addressText}\nTime: ${deliveryTime}`);
    
    setOrderText("");
    setAddressText("");
    setDeliveryTime("");
    setIsModalOpen(false);
  };

  const getNavLinkClass = (pageName) => {
    const isActive = currentPage === pageName;
    return `relative py-1 transition-all duration-300 font-medium text-sm cursor-pointer ${
      isActive 
        ? 'text-amber-400 font-bold' 
        : isScrolled 
          //for the home, about us, and our menu
          ? 'text-[#D7C4B7] hover:text-[#5C4033]' // when scrolled and the navbar isn't transparent
          : 'text-white hover:scale-115'// when on top and the navbar is transparent
    }`;
  };

  return (
    <>
      <nav className={`fixed top-0 z-50 w-full py-4 px-8 flex items-center justify-between transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FDFBF7] shadow-lg border-b border-emerald-900/40 backdrop-blur-md' 
          : 'bg-transparent'
      }`}>
        
        <div 
          onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <img src={logo} alt="Brew & Chill Cafe Logo" className="w-10 h-10 rounded-full border-2 border-[#5C4033] shadow-md group-hover:scale-105 transition-transform duration-300" />
          <span className={`font-serif font-black text-2xl tracking-wider group-hover:text-[#FDFBF7] transition-colors ${
            isScrolled ? 'text-[#5C4033]' : 'text-white'
          }`}>
            BREW & CHILL CAFE
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 font-medium text-sm">
          <button 
            onClick={() => setCurrentPage('home')} 
            className={getNavLinkClass('home')}
          >
            Home
            {currentPage === 'home' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full shadow-[0_0_8px_#f59e0b]" />
            )}
          </button>

          <button 
            onClick={() => setCurrentPage('MenuPage')} 
            className={getNavLinkClass('MenuPage')}
          >
            Our Menu
            {currentPage === 'MenuPage' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#E6D5C3] rounded-full shadow-[0_0_8px_#f59e0b]" />
            )}
          </button>

          <button 
            onClick={() => setCurrentPage('about')} 
            className={getNavLinkClass('about')}
          >
            About Us
            {currentPage === 'about' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full shadow-[0_0_8px_#f59e0b]" />
            )}
          </button>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className={`font-bold py-2 px-4 rounded-xl transition-all shadow-md cursor-pointer hover:bg-[#D7C4B7] ${
              //for the order now button
              isScrolled 
                ? 'bg-[#E6D5C3] text-[#5C4033]' 
                : 'bg-[#E6D5C3] text-[#5C4033]'
            }`}
          >
            Order Now
          </button>
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden focus:outline-none p-1.5 rounded-lg bg-[#2B1E16] border border-[#E6D5C3] hover:bg-[#D7C4B7] transition-colors ${
            isScrolled ? 'text-[#D7C4B7]' : 'text-white'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      
      {/* MOBILE VIEW */}
      {isMobileMenuOpen && (
        <div className="fixed top-[72px] left-0 w-full z-40 md:hidden bg-[#2B1E16] backdrop-blur-lg border-b border-[#D7C4B7] py-6 px-8 flex flex-col gap-4 shadow-xl text-white">
          <button 
            onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }} 
            className={`text-left py-2 border-b border-[#2B1E16] font-semibold ${currentPage === 'home' ? 'text-white' : 'text-white'}`}
          >
            Home
          </button>
          <button 
            onClick={() => { setCurrentPage('MenuPage'); setIsMobileMenuOpen(false); }} 
            className={`text-left py-2 border-b border-[#2B1E16] font-semibold ${currentPage === 'MenuPage' ? 'text-white' : 'text-white'}`}
          >
            Our Menu
          </button>
          <button 
            onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); }} 
            className={`text-left py-2 border-b border-[#2B1E16] font-semibold ${currentPage === 'about' ? 'text-white' : 'text-white'}`}
          >
            About Us
          </button>
          <button 
            onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}
            className="bg-[#E6D5C3] hover:bg-[#D7C4B7] text-white font-bold py-3 text-center rounded-xl shadow-md cursor-pointer mt-2"
          >
            Order Now
          </button>
        </div>
      )}

      {/* ORDER WINDOW */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-md rounded-3xl bg-[#2B1E16] border border-white p-8 shadow-2xl text-white transform transition-all duration-300 bg-container-dots">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#2B1E16] hover:text-white transition-colors text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full bg-[#E6D5C3]"
            >
              &times;
            </button>

            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-widest text-[#E6D5C3] font-bold">Fast & Fresh</span>
              <h3 className="font-serif text-2xl font-bold text-[#E6D5C3] mt-1">Place Your Order</h3>
              <p className="text-xs text-[#E6D5C3] mt-1">Savor the authentic taste right at your doorstep.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase tracking-wider text-[#E6D5C3] mb-1.5 font-sans">
                  Your Orders
                </label>
                <textarea
                  required
                  rows="2"
                  value={orderText}
                  onChange={(e) => setOrderText(e.target.value)}
                  placeholder="e.g., 1x Barako Espresso, 2x Spanish Latte"
                  className="bg-[#E6D5C3] border border-emerald-800/80 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500/85 placeholder:text-[#2B1E16] text-[#2B1E16] resize-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase tracking-wider text-[#E6D5C3] mb-1.5 font-sans">
                  Delivery Address
                </label>
                <input
                  required
                  type="text"
                  value={addressText}
                  onChange={(e) => setAddressText(e.target.value)}
                  placeholder="Enter full delivery address"
                  className="bg-[#E6D5C3] border border-[#2B1E16] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500/85 placeholder:text-[#2B1E16] text-[#2B1E16]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase tracking-wider text-[#E6D5C3] mb-1.5 font-sans">
                  Preferred Time
                </label>
                <input
                  required
                  type="text"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  placeholder="e.g., 3:30 PM, ASAP"
                  className="bg-[#E6D5C3] border border-[#2B1E16] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500/85 placeholder:text-[#2B1E16] text-[#2B1E16]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E6D5C3] hover:bg-[#D7C4B7] text-[#2B1E16] font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-amber-600/10 active:scale-[0.98] mt-6 cursor-pointer"
              >
                Confirm Order
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;