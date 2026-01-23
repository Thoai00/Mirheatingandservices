"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

/**
 * SEO & Meta Data Strategy:
 * - Primary Keyword: Plumbing and Heating Essex
 * - Secondary Keywords: Boiler Repair Essex, Gas Safe Engineer, Emergency Plumber Essex
 * - Local Focus: Essex, Chelmsford, Colchester, Southend, Basildon.
 */

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
      <header className="relative pt-24 md:pt-48 pb-12 md:pb-20 overflow-hidden">
          {/* SEO Hidden H1 */}
          <h1 className="sr-only">Expert Plumbing, Gas & Heating Services in Essex | Mir Heating & Maintenance</h1>

          {/* Background Blobs - Slightly toned down for mobile */}
          <div className="absolute top-10 -left-20 w-72 h-72 md:w-150 md:h-150 bg-[#12416B]/10 rounded-full blur-[80px] md:blur-[150px] -z-10" />
          <div className="absolute top-0 right-0 w-60 h-60 md:w-100 md:h-100 bg-[#F2CF51]/20 rounded-full blur-[80px] md:blur-[120px] -z-10" />

          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:flex lg:items-center lg:gap-24">
            <div className="flex-1 space-y-8 md:space-y-10 text-center lg:text-left">
              {/* Local SEO Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white shadow-sm text-[#12416B] font-black text-[9px] md:text-[10px] uppercase tracking-widest border border-slate-100">
                <span className="flex h-2 w-2 rounded-full bg-[#F2CF51] animate-pulse"></span>
                Gas Safe Registered • Local Essex Experts
              </div>

              <div className="space-y-4">
                <h2 className="text-5xl md:text-[90px] font-black text-[#12416B] leading-[0.9] md:leading-[0.85] tracking-tighter">
                  MIR <br />
                  <span className="italic text-transparent bg-clip-text bg-linear-to-r from-[#12416B] via-[#245b8d] to-[#F2CF51]">
                    Heating & <br className="md:hidden" /> Maintenance ESSEX
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-base md:text-xl text-slate-500/90 leading-relaxed mx-auto lg:mx-0 font-medium border-l-4 md:border-l-8 border-[#F2CF51] pl-5 md:pl-8 text-left">
                Your trusted local experts for <strong>Boiler Repairs, Gas Safety and Heating Maintenance across Essex</strong>. We keep Essex homes warm and safe.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <button 
                  onClick={handleOpenPopup}
                  className="h-16 md:h-20 px-10 md:px-12 rounded-2xl md:rounded-3xl bg-[#F2CF51] text-[#12416B] font-black text-base md:text-lg shadow-[0_10px_0_#d4b33c] hover:shadow-[0_5px_0_#d4b33c] hover:translate-y-[5px] active:translate-y-[10px] active:shadow-none transition-all uppercase"
                >
                  Book Service
                </button>
                
                <div className="flex items-center justify-center gap-4 px-6 py-4 md:py-0 rounded-2xl md:rounded-3xl bg-white border border-slate-100 shadow-md">
                  <div className="text-left">
                    <div className="text-[#12416B] font-black text-lg md:text-xl leading-none">5-Star</div>
                    <div className="text-[9px] font-bold uppercase text-slate-400">Essex Service Rated</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Section - Adjusted for Mobile Perspective */}
            <div className="mt-16 flex-1 lg:mt-0 perspective-[2000px]">
              <div className="relative w-full aspect-[4/5] max-w-[320px] md:max-w-125 mx-auto transform-gpu rotate-y-0 md:rotate-y-[-15deg] md:rotate-x-10 hover:rotate-0 transition-all duration-1000 group">
                <div className="absolute -inset-6 bg-[#12416B]/10 blur-[40px] rounded-full opacity-50"></div>
                <div 
                  className="absolute inset-0 bg-[#12416B] rounded-[3rem] md:rounded-[4rem] shadow-2xl overflow-hidden border-2 border-white/20"
                >
                  {heroImages.map((src, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                      <Image 
                        src={src} 
                        alt={`Reliable Plumber and Heating Engineer in Essex - Project ${index + 1}`} 
                        fill 
                        className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-2000" 
                        priority={index === 0} 
                      />
                    </div>
                  ))}
                  {/* Floating Label in Image */}
                  <div className="absolute inset-x-4 md:inset-x-8 bottom-4 md:bottom-8 h-32 md:h-44 bg-white/10 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] border border-white/20 p-6 md:p-8 flex flex-col justify-center shadow-2xl z-20">
                      <div className="w-12 md:w-16 h-1 bg-[#F2CF51] mb-3 md:mb-4 rounded-full shadow-[0_0_15px_#F2CF51]" />
                      <h3 className="text-white text-xl md:text-3xl font-black italic uppercase tracking-tighter">Essex Emergency</h3>
                      <p className="text-[#F2CF51] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-[8px] md:text-[10px] mt-1">24/7 Heating & Gas Repairs</p>
                  </div>
                </div>
                {/* 24/7 Badge - Smaller on Mobile */}
                <div className="absolute -top-6 -right-4 md:-top-10 md:-right-10 bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl border-b-4 md:border-b-8 border-slate-200 animate-bounce-slow z-30">
                    <div className="text-2xl md:text-4xl font-black text-[#12416B]">24/7</div>
                    <div className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Essex Coverage</div>
                </div>
              </div>
            </div>
          </div>
      </header>

      {/* --- BOOKING POPUP OVERLAY --- */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
          <div 
            className="absolute inset-0 bg-[#12416B]/90 backdrop-blur-sm transition-opacity" 
            onClick={handleClosePopup}
          ></div>

          <div className="relative w-full max-w-lg bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
            
            {/* Header Sticky */}
            <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <div className="text-left">
                <h2 className="text-xl md:text-2xl font-black text-[#12416B] uppercase leading-none">Book Engineer</h2>
                <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mt-1">Essex & Surrounding Areas</p>
              </div>
              <button 
                onClick={handleClosePopup}
                className="p-3 rounded-xl bg-slate-100 hover:bg-[#F2CF51] transition-colors text-[#12416B]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-6 md:p-10 overflow-y-auto">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-[#12416B] tracking-widest ml-1">Service Required</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border border-slate-200 text-[#12416B] font-bold rounded-xl p-4 focus:outline-none focus:border-[#F2CF51] appearance-none cursor-pointer text-sm">
                      <option>Annual Boiler Service</option>
                      <option>Gas Safety Certificate (CP12)</option>
                      <option>Emergency Plumbing Repair</option>
                      <option>Central Heating Installation</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#12416B]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-[#12416B] tracking-widest ml-1">Contact Number</label>
                  <input 
                    type="tel" 
                    placeholder="Enter Phone Number"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-[#F2CF51] font-medium text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-[#12416B] tracking-widest ml-1">Postcode / Area</label>
                  <input 
                    type="text" 
                    placeholder="e.g. CM1, SS0"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-[#F2CF51] font-medium text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-[#12416B] tracking-widest ml-1">Photo (Optional)</label>
                  <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-4 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" />
                    <div className="text-slate-400 group-hover:text-[#12416B] transition-colors flex flex-col items-center">
                      <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      <span className="text-[10px] font-bold">Fast-track quote with a photo</span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-5 bg-[#12416B] text-[#F2CF51] rounded-xl font-black uppercase tracking-widest hover:bg-[#12416B]/90 shadow-lg transition-all transform active:scale-95 mt-2 text-sm">
                  Confirm Essex Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}