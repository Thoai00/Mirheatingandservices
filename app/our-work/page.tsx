"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

// --- PROJECT DATA ---
const ALL_PROJECTS = [
  { id: 1, main: "Boiler & Heating", sub: "New Installs", src: "/client/one.jpeg", title: "Eco-System Boiler Upgrade", location: "Essex" },
  { id: 2, main: "Plumbing", sub: "Bathroom", src: "/client/two.jpeg", title: "Floating Vanity & Suite", location: "Chelmsford" },
  { id: 3, main: "Gas Safety", sub: "CP12 Certs", src: "/client/three.jpeg", title: "Landlord Compliance Audit", location: "London" },
  { id: 4, main: "Boiler & Heating", sub: "Repairs", src: "/client/one.jpeg", title: "Heat Exchanger Fix", location: "Romford" },
  { id: 5, main: "Plumbing", sub: "Kitchen", src: "/client/two.jpeg", title: "Commercial Grade Plumbing", location: "Essex" },
  { id: 11, main: "Boiler & Heating", sub: "New Installs", src: "/client/one.jpeg", title: "High-Efficiency Combi", location: "Essex" },
];

const CATEGORIES = {
  "All": ["All"],
  "Boiler & Heating": ["All", "New Installs", "Repairs"],
  "Plumbing": ["All", "Bathroom", "Kitchen"],
  "Gas Safety": ["All", "CP12 Certs", "Leak Detection"],
};

export default function OurWorkPage() {
  const [activeMain, setActiveMain] = useState("All");
  const [activeSub, setActiveSub] = useState("All");

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter(project => {
      const matchMain = activeMain === "All" || project.main === activeMain;
      const matchSub = activeSub === "All" || project.sub === activeSub;
      return matchMain && matchSub;
    });
  }, [activeMain, activeSub]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden font-sans text-[#12416B]">
      
      <Navbar />

      {/* Set mobile padding to px-4 as requested */}
      <main className="pt-32 md:pt-48 pb-24 px-4 md:px-12 lg:px-20">
        
        {/* --- HEADER SECTION --- */}
        <section className="max-w-7xl mx-auto mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-full bg-[#12416B] text-[#F2CF51] font-black uppercase tracking-[0.2em] text-[10px]">
            Certified Portfolio
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-[#12416B] tracking-tighter uppercase leading-[0.8] italic mb-10">
            OUR <br/>
            <span className="text-white drop-shadow-[4px_4px_0px_#12416B] [-webkit-text-stroke:1.5px_#12416B]">PORTFOLIO</span>
          </h1>

          {/* CONTENT PLACED DIRECTLY BELOW HEADLINE */}
          <div className="max-w-4xl border-l-4 border-[#F2CF51] pl-6 md:pl-10">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic text-[#12416B] mb-4">
              Efficiency. Safety. Precision.
            </h2>
            <p className="text-slate-500 text-lg md:text-2xl leading-relaxed">
              From high-efficiency <strong>boiler installations</strong> in Essex to complex <strong>gas safety audits</strong>, we deliver certified engineering excellence that secures your home.
            </p>
          </div>
        </section>

        {/* --- FILTER NAVIGATION --- */}
        <section className="max-w-7xl mx-auto mb-12">
          {/* Main Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
            {Object.keys(CATEGORIES).map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveMain(cat); setActiveSub("All"); }}
                className={`px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeMain === cat 
                  ? "bg-[#12416B] text-[#F2CF51] shadow-2xl scale-105" 
                  : "bg-white text-slate-400 border border-slate-100 hover:border-[#12416B]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sub Category Chips */}
          {activeMain !== "All" && (
            <div className="flex flex-wrap gap-2 py-4 animate-in fade-in slide-in-from-left-4 justify-center md:justify-start">
              {CATEGORIES[activeMain as keyof typeof CATEGORIES].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSub(sub)}
                  className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all border ${
                    activeSub === sub 
                    ? "border-[#F2CF51] text-[#12416B] bg-[#F2CF51]" 
                    : "border-slate-200 text-slate-400 hover:text-[#12416B]"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </section>

        {/* --- PORTFOLIO GRID --- */}
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative h-[400px] md:h-[500px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-white shadow-xl border-4 border-white hover:border-[#F2CF51] transition-all duration-500">
                <Image 
                  src={project.src} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* Information Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12416B] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-12">
                   <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-[#F2CF51] text-[#12416B] px-3 py-1 rounded-full text-[8px] font-black uppercase">
                          {project.main}
                        </span>
                        <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-[8px] font-black uppercase border border-white/20">
                          {project.location}
                        </span>
                      </div>
                      <h3 className="text-white text-2xl md:text-3xl font-black uppercase italic leading-none tracking-tighter">
                        {project.title}
                      </h3>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- LOAD MORE / CTA --- */}
          <div className="mt-20 flex flex-col items-center">
            <button className="px-12 py-6 rounded-3xl bg-[#12416B] text-[#F2CF51] font-black uppercase tracking-widest text-xs hover:shadow-[0_20px_40px_rgba(18,65,107,0.3)] transition-all active:scale-95">
              Load More Projects
            </button>
            <p className="mt-8 text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">
              Verified Gas Safe & Insured
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}