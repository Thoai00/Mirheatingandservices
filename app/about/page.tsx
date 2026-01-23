"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

const CONTACT_NUMBER = "0777 111 9401";
const DIAL_NUMBER = "07771119401";
const SERVICES = [
  { title: "Gas Safety Inspection", desc: "Certified CP12 landlord safety certificates and home buyer inspections." },
  { title: "Boiler Services", desc: "Annual maintenance to ensure high-efficiency performance and warranty protection." },
  { title: "Gas Cooker & Hob", desc: "Professional installation and testing of gas-powered kitchen appliances." },
  { title: "Gas Escape Detection", desc: "Emergency trace and access for gas leaks to secure your property immediately." },
  { title: "Boiler Breakdown", desc: "Rapid response repair for all major brands including Worcester Bosch and Vaillant." },
  { title: "Radiator Experts", desc: "Installation of designer radiators and repair of central heating distribution." },
  { title: "Hot & Cold Water", desc: "Installation and repair of sinks, taps, and high-pressure water systems." },
  { title: "Pipework & Infrastructure", desc: "Full copper and plastic pipework solutions for new builds and renovations." }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden font-sans text-[#12416B]">
      
      <Navbar />

      {/* Increased horizontal padding for mobile (px-6) and scaled for larger screens */}
      <main className="pt-32 md:pt-48 pb-24 px-6 md:px-12 lg:px-20">
        
        {/* --- HERO SECTION --- */}
        <section className="max-w-7xl mx-auto mb-20 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-6 rounded-full bg-[#12416B] text-[#F2CF51] font-black uppercase tracking-[0.2em] text-[10px]">
            Mastering UK Infrastructure
          </div>
          {/* Adjusted font sizes for mobile to prevent overflow */}
          <h1 className="text-5xl md:text-9xl font-black text-[#12416B] tracking-tighter uppercase leading-[0.85] md:leading-[0.8] italic mb-8">
            ENGINEERING <br/>
            <span className="text-white drop-shadow-[2px_2px_0px_#12416B] md:drop-shadow-[4px_4px_0px_#12416B] [-webkit-text-stroke:1px_#12416B] md:[-webkit-text-stroke:1.5px_#12416B]">EXCELLENCE</span>
          </h1>
        </section>

        {/* --- SECTION 1: THE JOURNEY --- */}
        <section className="max-w-7xl mx-auto mb-32 md:mb-48">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1 mb-4 rounded bg-[#F2CF51] text-[#12416B] font-black uppercase text-[10px] tracking-widest">
                Our History
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic text-[#12416B] mb-8 leading-[0.9]">
                The MIR <br/><span className="text-[#F2CF51]">Journey</span>
              </h2>
              <div className="space-y-6 text-slate-500 text-lg md:text-xl leading-relaxed">
                <p>
                  Established over 15 years ago, MIR Plumbing & Heating began with a mission to bring high-level engineering standards to domestic properties across the <strong>UK</strong>. What started as a local Essex-based repair service has evolved into a premier firm recognized for technical excellence in <strong>London</strong> and beyond.
                </p>
                <p>
                  Our history is built on the foundation of <strong>2,000+ successfully delivered jobs</strong>, ranging from high-efficiency boiler installations to complex gas safety infrastructure.
                </p>
              </div>
            </div>
            {/* Image - Adjusted shadow for mobile */}
            <div className="order-1 lg:order-2">
              <div className="relative h-87.5 md:h-137.5 w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[15px_15px_0px_0px_rgba(18,65,107,1)] md:shadow-[30px_30px_0px_0px_rgba(18,65,107,1)] border-4 border-[#12416B]">
                <Image 
                  src="/client/one.jpeg" 
                  alt="MIR Plumbing Engineering History" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: THE MISSION --- */}
        <section className="max-w-7xl mx-auto mb-32 md:mb-48">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image - Adjusted shadow for mobile */}
            <div className="relative h-87.5 md:h-137.5 w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[-15px_15px_0px_0px_rgba(242,207,81,1)] md:shadow-[-30px_30px_0px_0px_rgba(242,207,81,1)] border-4 border-[#F2CF51]">
              <Image 
                src="/client/three.jpeg" 
                alt="MIR Plumbing Mission and Safety" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Content */}
            <div className="mt-8 lg:mt-0">
              <div className="inline-block px-4 py-1 mb-4 rounded bg-[#12416B] text-white font-black uppercase text-[10px] tracking-widest">
                Our Standard
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic text-[#12416B] mb-8 leading-[0.9]">
                Our <br/><span className="text-[#F2CF51]">Mission</span>
              </h2>
              <div className="space-y-6 text-slate-500 text-lg md:text-xl leading-relaxed">
                <p>
                  Our mission is simple: To provide the most reliable heating and plumbing services in the UK through continuous education and rigorous safety standards.
                </p>
                <p>
                  We aim to reduce the carbon footprint of UK homes by installing the latest energy-efficient technologies, helping our clients in <strong>Essex and London</strong> save on energy bills.
                </p>
              </div>
              <div className="mt-10">
                <a 
                  href={`tel:${DIAL_NUMBER}`}
                  className="inline-flex w-full md:w-auto justify-center items-center gap-4 px-10 py-5 bg-[#12416B] text-[#F2CF51] rounded-2xl font-black uppercase tracking-widest hover:bg-[#12416B]/90 transition-all shadow-xl"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  {CONTACT_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- STATS STRIP --- */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="bg-[#12416B] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-[#F2CF51] text-5xl font-black italic mb-2">15+</div>
              <div className="text-white font-bold uppercase tracking-widest text-[10px]">Years Experience</div>
            </div>
            <div className="border-y md:border-y-0 md:border-x border-white/10 py-10 md:py-0">
              <div className="text-[#F2CF51] text-5xl font-black italic mb-2">2K+</div>
              <div className="text-white font-bold uppercase tracking-widest text-[10px]">Jobs Completed</div>
            </div>
            <div>
              <div className="text-[#F2CF51] text-5xl font-black italic mb-2">100%</div>
              <div className="text-white font-bold uppercase tracking-widest text-[10px]">Gas Safe Certified</div>
            </div>
          </div>
        </section>

        {/* --- DETAILED SERVICES GRID --- */}
        <section className="max-w-7xl mx-auto mb-32">
           <div className="text-center mb-16 px-2">
              <h2 className="text-4xl md:text-6xl font-black uppercase italic text-[#12416B]">Our <span className="text-[#F2CF51]">Expertise</span></h2>
              <p className="text-slate-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mt-4 text-[10px] md:text-sm">Full-Spectrum Engineering Solutions</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {SERVICES.map((item, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-4xl border-2 border-slate-50 hover:border-[#F2CF51] transition-all group">
                   <div className="text-2xl font-black text-slate-100 group-hover:text-[#F2CF51] mb-4 transition-colors">0{i+1}</div>
                   <h3 className="text-[#12416B] font-black uppercase text-sm mb-3 tracking-wider leading-tight">{item.title}</h3>
                   <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* --- FINAL CONVERSION SECTION --- */}
        <section className="max-w-7xl mx-auto">
           <div className="bg-[#12416B] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
              
              <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-8 relative z-10">
                Ready to Secure <br className="hidden md:block"/>Your Home?
              </h2>
              <p className="text-blue-100/60 max-w-2xl mx-auto text-lg md:text-xl mb-12 relative z-10 px-4">
                Don't wait for a breakdown. Join 2,000+ satisfied clients in <strong>Essex and London</strong>.
              </p>
              
              <a 
                href={`tel:${DIAL_NUMBER}`}
                className="inline-flex w-full md:w-auto items-center justify-center gap-5 px-10 md:px-14 py-6 md:py-7 bg-[#F2CF51] text-[#12416B] rounded-2xl md:rounded-3xl font-black uppercase tracking-widest md:tracking-[0.2em] text-xs md:text-sm hover:scale-105 transition-all shadow-[0_20px_50px_rgba(242,207,81,0.3)] relative z-10"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7.59 1 1 0 011 1V20a1 1 0 01-1 1A15 15 0 013 6a1 1 0 011-1h3.41a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.27 1.11l-2.2 2.2z"/></svg>
                Call Engineer Now
              </a>
              
              <div className="mt-12 flex justify-center items-center gap-4 md:gap-8">
                <div className="h-px w-8 md:w-12 bg-white/20"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-white/30 italic">UK Certified</span>
                <div className="h-px w-8 md:w-12 bg-white/20"></div>
              </div>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}