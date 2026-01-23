"use client";

import React, { useState } from "react";
import Image from "next/image"; 
import Link from "next/link";
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer";

// PLUMBING SPECIFIC GALLERY DATA
const plumbingGallery = [
  { id: 1, src: "/client/one.jpeg", category: "Bathroom", alt: "Luxury Suite Installation" },
  { id: 2, src: "/client/three.jpeg", category: "Kitchen", alt: "High-End Kitchen Plumbing" },
  { id: 3, src: "/client/one.jpeg", category: "Emergency", alt: "Rapid Burst Pipe Repair" },
  { id: 4, src: "/client/three.jpeg", category: "Bathroom", alt: "Walk-in Shower Commissioning" },
  { id: 5, src: "/client/one.jpeg", category: "Kitchen", alt: "Commercial Sink Plumbing" },
  { id: 6, src: "/client/three.jpeg", category: "Emergency", alt: "Water Main Infrastructure" },
];

export default function PlumbingServicesPage() {
  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" 
    ? plumbingGallery 
    : plumbingGallery.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden font-sans text-[#12416B]">
      
      {/* --- SEO METADATA --- */}
      <head>
        <title>Expert Plumbing & Bathroom Installations Essex | 24/7 Repairs</title>
        <meta name="description" content="Premium plumbing services in Essex. From luxury bathroom refurbishments starting at £1450 to 24/7 emergency burst pipe repairs. Professional Essex plumbers." />
      </head>

      <Navbar />

      <main className="pt-32 md:pt-48 pb-24 px-4 md:px-12 lg:px-20">
        
        {/* --- HERO SECTION --- */}
        <section className="max-w-7xl mx-auto mb-24 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-5 py-2 mb-6 rounded-full bg-[#12416B] text-[#F2CF51] font-black uppercase tracking-[0.2em] text-[10px]">
                24/7 Premium Plumbing Support
              </div>
              <h1 className="text-5xl md:text-8xl lg:text-[110px] font-black text-[#12416B] mb-8 tracking-tighter uppercase leading-[0.85] italic">
                PLUMBING <br/>
                <span className="text-white drop-shadow-[3px_3px_0px_#12416B] md:drop-shadow-[5px_5px_0px_#12416B] [-webkit-text-stroke:1.5px_#12416B]">MASTERS</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-500 max-w-xl leading-relaxed mb-10 border-l-4 border-[#F2CF51] pl-6 mx-auto lg:mx-0">
                Architectural plumbing and luxury bathroom installations. From emergency leak suppression to full residential water infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
                <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-[#12416B] text-[#F2CF51] rounded-2xl font-black uppercase tracking-widest shadow-xl hover:opacity-90 transition-all text-center">
                  Get A Quote
                </Link>
                <div className="flex items-center gap-4">
                    <span className="text-5xl font-black text-[#12416B] italic leading-none">£1450</span>
                    <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest leading-none text-left">Project<br/>Minimum</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
               <div className="relative h-[350px] md:h-[550px] w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-8 md:border-[16px] border-white shadow-2xl">
                  <Image src="/client/one.jpeg" alt="Essex Plumbing Specialist" fill className="object-cover" priority />
               </div>
            </div>
          </div>
        </section>

        {/* --- SERVICE CARDS (NUMERIC DESIGN) --- */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Bathrooms", sub: "Design & Install", desc: "Complete luxury suite refurbishments, high-pressure shower systems, and premium tiling." },
              { num: "02", title: "Kitchens", sub: "Appliance Logic", desc: "Expert sink installations, waste disposal units, and integrated appliance plumbing." },
              { num: "03", title: "Emergency", sub: "Rapid Response", desc: "24/7 burst pipe suppression, leak detection, and water main repairs across Essex." }
            ].map((item, i) => (
              <div key={i} className="group bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-lg border border-slate-100 hover:bg-[#12416B] transition-all duration-500">
                <div className="text-4xl font-black text-slate-200 group-hover:text-[#F2CF51]/30 transition-colors mb-6">{item.num}</div>
                <h4 className="text-[#F2CF51] font-black uppercase text-[10px] tracking-widest mb-1">{item.sub}</h4>
                <h3 className="text-2xl md:text-3xl font-black uppercase italic text-[#12416B] group-hover:text-white transition-colors mb-4">{item.title}</h3>
                <p className="text-slate-500 group-hover:text-blue-100/70 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- CATEGORIZED GALLERY --- */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 mb-12">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-[#12416B]">Expert <span className="text-[#F2CF51] [-webkit-text-stroke:1px_#12416B]">Plumbing</span></h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100">
              {["All", "Bathroom", "Kitchen", "Emergency"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${
                    filter === cat ? "bg-[#12416B] text-[#F2CF51]" : "text-slate-400 hover:text-[#12416B]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {filteredImages.map((img) => (
              <div key={img.id} className="group relative h-[350px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border-4 border-white transition-all hover:border-[#F2CF51]">
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12416B] to-transparent opacity-0 group-hover:opacity-90 transition-opacity flex items-end p-8">
                  <div>
                    <span className="bg-[#F2CF51] text-[#12416B] px-3 py-1 rounded-full text-[9px] font-black uppercase mb-2 inline-block">{img.category}</span>
                    <p className="text-white font-black uppercase italic text-lg leading-tight">{img.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- DETAILED REPAIRS SECTION --- */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-7xl font-black uppercase italic text-[#12416B] mb-8 leading-none tracking-tighter">
                Engineering <br/><span className="text-[#F2CF51]">Reliability</span>
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                We go beyond basic repairs. Our team handles the high-pressure demands of modern Essex homes, ensuring water efficiency and structural integrity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {["Burst Pipe Repair", "Shower Pressure", "Tap & Valve Fix", "Water Mains"].map((item) => (
                   <div key={item} className="bg-white p-4 rounded-xl shadow-sm border border-slate-50 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#F2CF51] rounded-full"></div>
                      <span className="text-[9px] font-black uppercase tracking-wider text-[#12416B]">{item}</span>
                   </div>
                 ))}
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
              <Image src="/client/three.jpeg" alt="Plumbing Infrastructure" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* --- PREMIUM PRICING CARD --- */}
        <section className="max-w-7xl mx-auto">
          <div className="bg-[#12416B] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border-4 md:border-[12px] border-white">
            <div className="p-8 md:p-16 lg:w-2/3 text-white">
              <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-none tracking-tighter text-center lg:text-left">Complete <br/><span className="text-[#F2CF51]">Water Logic</span></h2>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {["Suite Installation", "Underfloor Plumbing", "Waste Management", "Emergency Coverage"].map((li) => (
                    <div key={li} className="flex items-center gap-3 text-[10px] font-black uppercase italic">
                        <span className="text-[#F2CF51]">✓</span> {li}
                    </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F2CF51] p-10 md:p-16 lg:w-1/3 flex flex-col items-center justify-center text-[#12416B]">
               <span className="font-black uppercase text-[10px] tracking-widest mb-1 opacity-60">Installations From</span>
               <div className="text-6xl md:text-8xl font-black italic mb-8">£1450</div>
               <Link href="/contact" className="w-full py-5 bg-[#12416B] text-[#F2CF51] rounded-2xl text-center font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
                  Enquire Now
               </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}