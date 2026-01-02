"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  // --- STATE MANAGEMENT ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // --- HERO SLIDER LOGIC ---
  const heroImages = [
    "/client/one.jpeg", 
    "/client/two.jpeg",
    "/client/three.jpeg"
  ];

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // --- HANDLERS ---
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  // Prevent scrolling when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isPopupOpen]);

  return (
    <>
      <header className="relative pt-32 md:pt-48 pb-20 overflow-hidden">
          <div className="absolute top-20 -left-20 w-150 h-150 bg-[#12416B]/10 rounded-full blur-[150px] -z-10" />
          <div className="absolute top-0 right-0 w-100 h-100 bg-[#F2CF51]/20 rounded-full blur-[120px] -z-10" />

          <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-24 lg:px-12">
            <div className="flex-1 space-y-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05)] text-[#12416B] font-black text-[10px] uppercase tracking-widest border border-white">
                <span className="flex h-2 w-2 rounded-full bg-[#F2CF51]"></span>
                Gas Safe Registered • UK Nationwide Service
              </div>
              <h1 className="text-6xl md:text-[90px] font-black text-[#12416B] leading-[0.85] tracking-tighter drop-shadow-2xl">
                MIR <br />
                <span className="italic text-transparent bg-clip-text bg-linear-to-r from-[#12416B] via-[#245b8d] to-[#F2CF51]">
                  PLUMBING &
                  HEATING UK
                </span>
              </h1>
              <p className="max-w-xl text-lg md:text-xl text-slate-500/90 leading-relaxed mx-auto lg:mx-0 font-medium border-l-8 border-[#F2CF51] pl-8">
                The UK's premier choice for comprehensive <strong>Gas, Heating, and Plumbing Services</strong>. From emergency leak repairs in London to full central heating installations in Essex. We are your local experts.
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                {/* --- BOOK SERVICE BUTTON --- */}
                <button 
                  onClick={handleOpenPopup}
                  className="h-20 px-12 rounded-3xl bg-[#F2CF51] text-[#12416B] font-black text-lg shadow-[0_16px_0_#d4b33c,0_40px_50px_rgba(242,207,81,0.3)] hover:-translate-y-1 active:translate-y-4 transition-all uppercase"
                >
                  Book Service
                </button>
                
                <div className="flex items-center gap-4 px-6 rounded-3xl bg-white border border-white shadow-lg">
                  <div className="text-left">
                    <div className="text-[#12416B] font-black text-xl leading-none">5-Star</div>
                    <div className="text-[10px] font-bold uppercase text-slate-400">Rated in UK</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 flex-1 lg:mt-0 perspective-[3000px]">
              <div className="relative w-full aspect-4/5 max-w-125 mx-auto transform-gpu rotate-y-[-15deg] rotate-x-10 hover:rotate-0 transition-all duration-1000 group">
                <div className="absolute -inset-6 bg-[#12416B]/10 blur-[50px] rounded-full opacity-50"></div>
                <div 
                  className="absolute inset-0 bg-[#12416B] rounded-[4rem] shadow-[50px_80px_100px_rgba(18,65,107,0.3)] overflow-hidden border-2 border-white/20"
                  style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
                >
                  {heroImages.map((src, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                      <Image src={src} alt={`Best Plumbing and Heating Service UK ${index + 1}`} fill className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-2000" priority={index === 0} />
                    </div>
                  ))}
                  <div className="absolute inset-x-8 bottom-8 h-44 bg-white/10 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 p-8 flex flex-col justify-center shadow-2xl z-20">
                      <div className="w-16 h-1.5 bg-[#F2CF51] mb-4 rounded-full shadow-[0_0_15px_#F2CF51]" />
                      <h3 className="text-white text-3xl font-black italic uppercase tracking-tighter">Emergency</h3>
                      <p className="text-[#F2CF51] font-bold uppercase tracking-[0.4em] text-[10px] mt-2">Plumbing & Gas Repairs</p>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 bg-white p-10 rounded-[3.5rem] shadow-2xl border-b-8 border-slate-200 hidden md:block animate-bounce-slow z-30">
                    <div className="text-4xl font-black text-[#12416B]">24/7</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Premium Services</div>
                </div>
              </div>
            </div>
          </div>
      </header>

      {/* --- BOOKING POPUP OVERLAY --- */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-200 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#12416B]/80 backdrop-blur-md transition-opacity" 
            onClick={handleClosePopup}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 animate-in fade-in zoom-in duration-300">
            
            {/* Close Button */}
            <button 
              onClick={handleClosePopup}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-[#F2CF51] transition-colors text-[#12416B]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-[#12416B] uppercase mb-2">Book a Service</h2>
              <p className="text-slate-500 text-sm">Fill in your details and we'll get back to you immediately.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Service Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-[#12416B] tracking-widest ml-2">Select Service</label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border border-slate-200 text-[#12416B] font-bold rounded-2xl p-4 focus:outline-none focus:border-[#F2CF51] appearance-none cursor-pointer">
                    <option>Gas Services</option>
                    <option>Plumbing Services</option>
                    <option>Heating Services</option>
                    <option>Boiler Repair</option>
                    <option>Emergency Callout</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#12416B]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-[#12416B] tracking-widest ml-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="e.g. 07700 900000"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:outline-none focus:border-[#F2CF51] font-medium"
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-[#12416B] tracking-widest ml-2">Location / Postcode</label>
                <input 
                  type="text" 
                  placeholder="e.g. 123 High St, London"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:outline-none focus:border-[#F2CF51] font-medium"
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-[#12416B] tracking-widest ml-2">Upload Image (Optional)</label>
                <div className="relative border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                  <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" />
                  <div className="text-slate-400 group-hover:text-[#12416B] transition-colors">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <span className="text-sm font-bold">Click to upload photo of issue</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full py-5 bg-[#12416B] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#F2CF51] hover:text-[#12416B] shadow-lg transition-all transform active:scale-95 mt-4">
                Confirm Booking
              </button>

            </form>
          </div>
        </div>
      )}
    </>
  );
}