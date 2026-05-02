"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { servicesData } from "./mockdata"; // ← static data

export default function ServicesGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Interactive grid mouse tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // No fetch needed – data comes straight from mockData
  const services = servicesData;

  // SEO SCHEMA (generated from static data)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Essex Plumbing & Heating Specialists",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Essex",
      addressCountry: "GB",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Engineering Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${s.title} ${s.subtitle} Essex`,
        },
        price: s.price?.replace(",", ""),
        priceCurrency: "GBP",
      })),
    },
  };

  return (
    <section
      className="py-32 px-4 bg-white relative overflow-hidden group/section"
      id="services"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* GLOBAL INTERACTIVE GRID */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, #F2CF51 0%, transparent 400px), 
                            radial-gradient(#12416B 1px, transparent 1px)`,
          backgroundSize: "100% 100%, 40px 40px",
        }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="relative mb-32 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[2px] w-12 bg-[#12416B]"></span>
            <span className="text-[#12416B] font-black uppercase tracking-[0.6em] text-[10px]">
              Premium Essex Engineering
            </span>
            <span className="h-[2px] w-12 bg-[#12416B]"></span>
          </div>
          <h2 className="text-[#12416B] text-6xl md:text-9xl font-black uppercase italic leading-none tracking-tighter text-center">
            EXPERT <span className="text-stroke-2">SERVICES</span>
          </h2>
          <p className="mt-8 text-slate-500 font-bold uppercase tracking-[0.2em] text-[11px] max-w-md text-center leading-relaxed">
            From emergency gas repairs to bespoke boiler installations. The standard in local
            engineering for modern Essex homes.
          </p>
        </div>

        {/* Service Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">
          {services.map((item) => (
            <div key={item.id} className="group relative flex flex-col h-[700px]">
              {/* Image Frame */}
              <div className="relative h-[65%] w-full rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white transition-all duration-700 group-hover:rounded-[2rem] group-hover:rotate-1">
                <Image
                  src={item.image_path}
                  alt={`${item.title} ${item.subtitle} Essex`}
                  fill
                  className="object-cover transition-transform duration-[3s] group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#12416B]/80 opacity-60"></div>

                {/* Scanner Laser */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
                  <div className="w-full h-[2px] bg-[#F2CF51] shadow-[0_0_20px_#F2CF51] animate-laser"></div>
                </div>

                {/* Status Indicator */}
                <div className="absolute top-8 left-8 flex items-center gap-2 bg-[#12416B]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <div className="w-2 h-2 rounded-full bg-[#F2CF51] animate-pulse"></div>
                  <span className="text-white text-[8px] font-black uppercase tracking-widest">
                    Technician Available
                  </span>
                </div>
              </div>

              {/* Price Seal */}
              <div className="absolute top-[55%] right-6 z-30 transform group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-500">
                <div className="w-28 h-28 rounded-full bg-[#F2CF51] flex flex-col items-center justify-center border-8 border-white shadow-[0_20px_40px_rgba(242,207,81,0.3)]">
                  <span className="text-[10px] font-black text-[#12416B] uppercase leading-none mb-1 text-center">
                    From
                  </span>
                  <span className="text-2xl font-black text-[#12416B] italic">£{item.price}</span>
                </div>
              </div>

              {/* Glass Content Card */}
              <div className="absolute bottom-0 left-0 right-10 bg-white/95 backdrop-blur-xl p-10 rounded-[3.5rem] shadow-[0_30px_60px_rgba(18,65,107,0.1)] border border-slate-100 transition-all duration-500 group-hover:-translate-y-6 group-hover:bg-white group-hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#12416B] rounded-xl flex items-center justify-center text-xl shadow-lg transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="h-[1px] flex-grow bg-slate-100"></div>
                </div>

                <h3 className="text-3xl font-black uppercase italic text-[#12416B] leading-none mb-1 tracking-tighter">
                  {item.title}{" "}
                  <span className="text-slate-200 block text-xl group-hover:text-[#F2CF51] transition-colors">
                    {item.subtitle}
                  </span>
                </h3>
                <p className="text-[#12416B]/30 text-[9px] font-black uppercase tracking-[0.4em] mb-4">
                  {item.tagline}
                </p>
                <p className="text-slate-500 text-xs font-medium leading-relaxed mb-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {item.description}
                </p>

                <Link
                  href={item.path}
                  className="group/btn relative inline-flex items-center gap-4 bg-[#12416B] text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 hover:pr-12"
                >
                  <span className="relative z-10">Book Inspection</span>
                  <svg
                    className="w-4 h-4 relative z-10 transform group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                  <div className="absolute top-0 left-[-100%] group-hover/btn:left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] transition-all duration-700"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .text-stroke-2 {
          -webkit-text-stroke: 1.5px #12416B;
          color: transparent;
        }
        @keyframes laser {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        .animate-laser {
          animation: laser 4s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .text-stroke-2 {
            -webkit-text-stroke: 1px #12416B;
          }
        }
      `}</style>
    </section>
  );
}