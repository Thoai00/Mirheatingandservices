"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer";

// GALLERY DATA - Strictly Heating & Boilers
const galleryImages = [
  { id: 1, src: "/client/boiler.jpeg", category: "Boilers", alt: "New Combi Boiler Installation Essex" },
  { id: 2, src: "/client/one.jpeg", category: "Radiators", alt: "Designer Radiator System Upgrade" },
  { id: 3, src: "/client/boiler.jpeg", category: "Servicing", alt: "Annual Boiler Performance Check" },
  { id: 4, src: "/client/one.jpeg", category: "Repairs", alt: "Emergency Central Heating Repair" },
  { id: 5, src: "/client/boiler.jpeg", category: "Boilers", alt: "Full Heating System Conversion" },
  { id: 6, src: "/client/one.jpeg", category: "Repairs", alt: "System Power Flush & Cleaning" },
];

export default function HeatingBoilerPage() {
  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-[#F0F4F8] overflow-x-hidden font-sans text-[#12416B]">
      
      {/* --- SEO METADATA --- */}
      <head>
        <title>Boiler Installation & Heating Engineers Essex | Gas Safe Registered</title>
        <meta name="description" content="Essex's leading heating specialists. Expert boiler installations, annual servicing, emergency breakdown repairs, and power flushing." />
      </head>

      <Navbar />

      <main className="pt-32 md:pt-40 pb-24">
        
        {/* --- HERO SECTION --- */}
        <section className="relative px-6 md:px-16 lg:px-24 mb-24 md:mb-32 overflow-visible">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
    
    {/* TEXT CONTENT COLUMN */}
    <div className="lg:col-span-7 relative z-20 text-center lg:text-left">
      <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-2xl bg-white shadow-md border border-white/50 text-[#12416B] font-black uppercase tracking-[0.2em] text-[10px]">
        <span className="w-2 h-2 rounded-full bg-[#F2CF51] animate-pulse"></span>
        Essex Central Heating Specialists
      </div>

      {/* FIXED LINE HEIGHT (LEADING) */}
      <h1 className="text-6xl md:text-8xl lg:text-[110px] xl:text-[130px] font-black text-[#12416B] mb-10 tracking-tighter leading-[0.85] italic uppercase relative">
        HEATING <br/>
        <span className="text-white drop-shadow-[4px_4px_0px_#12416B] md:drop-shadow-[8px_8px_0px_#12416B] [-webkit-text-stroke:2px_#12416B]">
          MASTERS
        </span>
      </h1>

      <p className="text-lg md:text-2xl text-slate-500 max-w-2xl leading-relaxed mb-12 lg:border-l-4 border-[#F2CF51] lg:pl-8 mx-auto lg:mx-0">
        Premium <strong>boiler replacements</strong> and <strong>central heating</strong> solutions. We keep Essex homes efficient with precision engineering.
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap gap-8 items-center justify-center lg:justify-start">
        <Link 
          href="/contact" 
          className="w-full sm:w-auto relative px-12 py-6 bg-[#12416B] text-[#F2CF51] rounded-2xl font-black uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(18,65,107,0.3)] hover:-translate-y-1 active:translate-y-1 transition-all text-center"
        >
          Get A Heating Quote
        </Link>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase text-[#F2CF51] px-2 py-0.5 rounded mt-1 tracking-widest text-center">
              Start From
            </span>
            <span className="text-4xl md:text-5xl font-black text-[#12416B] italic leading-none">£1450</span>
            
          </div>
          <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-tight">
            Boiler<br/>Packages
          </span>
        </div>
      </div>
    </div>

    {/* IMAGE COLUMN */}
    <div className="lg:col-span-5 relative z-10">
      <div className="relative h-[450px] md:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
        <Image 
          src="/client/boiler.jpeg" 
          alt="Essex Heating Specialist Boiler Installation" 
          fill 
          priority 
          className="object-cover" 
        />
        {/* Subtle overlay to make white text pop if they overlap on small screens */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#12416B]/20 to-transparent pointer-events-none"></div>
      </div>
      
      {/* Decorative background element for "Master" feel */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F2CF51] rounded-full -z-10 opacity-50 blur-2xl"></div>
    </div>

  </div>
</section>

        {/* --- REDESIGNED SERVICE CARDS --- */}
        <section className="px-6 md:px-16 lg:px-24 mb-32">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "01", title: "Boiler Installation", desc: "Energy-efficient combi and system boiler replacements with extended warranties." },
              { id: "02", title: "Annual Servicing", desc: "Meticulous safety checks to maintain your warranty and optimize fuel consumption." },
              { id: "03", title: "Breakdown Repair", desc: "Rapid diagnostic and emergency fixes for all major heating brands and models." },
              { id: "04", title: "Radiator Fitting", desc: "Installation of designer radiators, towel rails and thermostatic valve upgrades." },
              { id: "05", title: "Power Flushing", desc: "Remove sludge and debris from your pipes to restore heat to cold radiators." },
              { id: "06", title: "Smart Controls", desc: "Installation of Nest, Hive and Tado systems for precision climate control." }
            ].map((service) => (
              <div key={service.id} className="group relative bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 hover:bg-[#12416B] transition-all duration-500 overflow-hidden">
                <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-50 group-hover:text-white/5 transition-colors pointer-events-none">
                  {service.id}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#F2CF51] rounded-2xl mb-6 flex items-center justify-center font-black text-[#12416B] group-hover:bg-white transition-colors">
                    {service.id}
                  </div>
                  <h3 className="text-2xl font-black uppercase italic mb-4 text-[#12416B] group-hover:text-[#F2CF51] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 group-hover:text-blue-100/80 transition-colors leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SYSTEM SHOWCASE WITH CATEGORY FILTER --- */}
        <section className="px-6 md:px-16 lg:px-24 mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <div>
                <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-[#12416B]">
                  System <span className="text-[#F2CF51] [-webkit-text-stroke:1px_#12416B]">Showcase</span>
                </h2>
                <p className="text-slate-400 uppercase tracking-widest text-[10px] font-bold mt-2">Our Recent Central Heating Projects</p>
              </div>

              {/* Category Filter Menu */}
              <div className="flex flex-wrap gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
                {["All", "Boilers", "Radiators", "Servicing", "Repairs"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${
                      filter === cat 
                      ? "bg-[#12416B] text-[#F2CF51] shadow-md" 
                      : "text-slate-400 hover:text-[#12416B]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((img) => (
                <div key={img.id} className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white transition-all hover:border-[#F2CF51]">
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12416B] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white font-black uppercase italic text-lg leading-tight">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- EXPERT SECTION: IMAGE AT BOTTOM ON MOBILE --- */}
        <section className="px-6 md:px-16 lg:px-24 mb-32">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content - Renders first in DOM */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8 tracking-tighter text-[#12416B]">
                Expert Heating Engineers <br/>
                <span className="text-[#F2CF51]">Serving All Essex</span>
              </h2>
              <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                <p>Is your central heating struggling? Our Essex-based <strong>heating engineers</strong> specialize in reviving inefficient systems. From noisy boilers to inconsistent hot water, we provide expert diagnostics.</p>
                <p>By focusing on <strong>system efficiency</strong>, we optimize your boiler to reduce monthly energy bills. We provide future-proof home comfort for local residents.</p>
              </div>
            </div>

            {/* Image - Renders second (appears bottom on mobile) */}
            <div className="relative rounded-[3rem] overflow-hidden h-[350px] md:h-[500px] shadow-2xl border-8 border-white lg:rotate-1">
              <Image src="/client/one.jpeg" alt="Essex Heating Maintenance Service" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* --- PRICING BOX --- */}
        <section className="px-4 md:px-16 lg:px-24">
          <div className="max-w-5xl mx-auto bg-[#12416B] rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border-[8px] border-white">
            <div className="md:w-2/3 p-10 md:p-16 text-white">
              <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6">Boiler <span className="text-[#F2CF51]">Service</span></h2>
              <p className="text-blue-100/60 mb-8 uppercase tracking-widest text-xs font-bold italic text-center md:text-left">Full Safety & Performance Audit</p>
              <div className="grid grid-cols-2 gap-4 text-[10px] md:text-xs font-bold uppercase tracking-tighter">
                <p>✓ Flue Gas Analysis</p>
                <p>✓ Component Cleaning</p>
                <p>✓ Leak Inspection</p>
                <p>✓ Warranty Validation</p>
              </div>
            </div>
            <div className="md:w-1/3 bg-[#F2CF51] p-10 flex flex-col items-center justify-center text-[#12416B]">
              <span className="font-black uppercase text-[10px] mb-2 text-center">From Only</span>
              <div className="text-7xl font-black italic mb-8">£1450</div>
              <Link href="/contact" className="bg-[#12416B] text-white px-8 py-4 rounded-xl font-black uppercase text-xs hover:scale-105 transition-transform text-center w-full md:w-auto">
                Book Service
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}