"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const servicesLinks = [
     { name: "Gas Safety Certificate (CP12)", path: "/services/gas-services" },
    { name: "Boiler Services & Annual Servicing", path: "/services/heating-services" },
    { name: "Boiler Breakdown & Emergency Repairs", path: "/services/boiler-breakdown" },
    { name: "Boiler Supply & Installation", path: "/services/boiler-install" },
  ];

  const mainLinks = [
    { name: "Home Improvement", path: "/home-improvement" },
    { name: "Our Work", path: "/our-work" },
    { name: "About MIR", path: "/about" }
  ];

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <nav className="fixed top-6 left-1/2 z-100 w-[95%] max-w-7xl -translate-x-1/2 hidden md:block">
        <div className="relative flex items-center justify-between px-10 h-24 bg-white/50 backdrop-blur-[20px] rounded-[2.5rem] border border-white/60 shadow-[0_25px_50px_-12px_rgba(18,65,107,0.2)]">
          <div className="relative h-full py-4 flex items-center gap-8">
            {/* UPDATED: LOGO LINK */}
            <Link href="/" className="relative h-full w-64 transform hover:scale-105 transition-transform duration-500 drop-shadow-xl cursor-pointer">
              <Image src="/log.png" alt="MIR Plumbing & Heating UK Logo" fill className="object-contain" priority />
            </Link>
          </div>
          
          <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#F2CF51] transition-all py-4 text-[11px] font-black uppercase tracking-[0.2em]">
                  Expert Services
                  <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-100 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden flex flex-col p-2">
                  {servicesLinks.map((service) => (
                      <Link key={service.name} href={service.path} className="block px-6 py-4 hover:bg-[#12416B]/5 rounded-xl text-center hover:text-[#F2CF51] transition-colors text-[11px] font-black uppercase tracking-[0.2em]">
                          {service.name}
                      </Link>
                  ))}
              </div>
            </div>

            {/* STANDARD LINKS */}
            {mainLinks.map((link) => (
              <Link key={link.name} href={link.path} className="hover:text-[#F2CF51] transition-all relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F2CF51] transition-all group-hover:w-full"></span>
              </Link>
            ))}

            <a href="tel:+44 7951 803179" className="rounded-2xl bg-[#12416B] px-8 py-4 text-[#F2CF51] shadow-[0_15px_30px_rgba(18,65,107,0.3),inset_0_-4px_0_rgba(0,0,0,0.2)] hover:-translate-y-1 active:translate-y-px transition-all">
                GET Free QUOTE
            </a>
          </div>
        </div>
      </nav>

      {/* --- MOBILE NAVBAR --- */}
      <div className="fixed top-0 left-0 right-0 z-150 p-4 md:hidden">
        <div className="flex items-center justify-between bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl px-6 py-3 shadow-lg">
           {/* UPDATED: MOBILE LOGO LINK */}
           <Link href="/" className="relative w-24 h-10 cursor-pointer">
              <Image src="/log.png" alt="MIR Plumbing Logo" fill className="object-contain" />
           </Link>

           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#12416B] p-2 focus:outline-none">
             {mobileMenuOpen ? (
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
             ) : (
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
             )}
           </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 bg-[#12416B]/95 backdrop-blur-xl rounded-4xl border border-white/10 shadow-2xl overflow-hidden p-8 animate-in slide-in-from-top-4 fade-in duration-300 max-h-[85vh] overflow-y-auto">
              <div className="flex flex-col gap-6 text-center">
                 <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl font-bold uppercase tracking-widest hover:text-[#F2CF51] transition-colors">Home</Link>
                 
                 <div className="flex flex-col items-center">
                    <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-center gap-2 text-white text-xl font-bold uppercase tracking-widest hover:text-[#F2CF51] transition-colors">
                        Services
                        <svg className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    
                    {mobileServicesOpen && (
                        <div className="flex flex-col gap-4 mt-4 bg-white/5 w-full rounded-2xl py-4 animate-in slide-in-from-top-2 fade-in">
                             {servicesLinks.map((item) => (
                                <Link key={item.name} href={item.path} onClick={() => setMobileMenuOpen(false)} className="text-[#F2CF51] text-sm font-bold uppercase tracking-[0.2em] hover:text-white transition-colors">
                                    {item.name}
                                </Link>
                             ))}
                        </div>
                    )}
                 </div>

                 {mainLinks.map((item) => (
                   <Link key={item.name} href={item.path} onClick={() => setMobileMenuOpen(false)} className="text-white text-xl font-bold uppercase tracking-widest hover:text-[#F2CF51] transition-colors">
                     {item.name}
                   </Link>
                 ))}
                 
                 <div className="w-full h-px bg-white/10 my-2"></div>
                 <a href="tel:07771119401" className="bg-[#F2CF51] text-[#12416B] font-black py-4 rounded-xl uppercase tracking-widest shadow-lg">
                   GET A QUOTE
                 </a>
              </div>
          </div>
        )}
      </div>
    </>
  );
}