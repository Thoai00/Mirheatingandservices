"use client";

import Image from "next/image";

export default function ProfessionalStandards() {
  const standards = [
    { 
      title: "Boiler Installation Essex", 
      text: "Specializing in A rated energy efficient boiler upgrades. Our Essex engineers provide future proofed heating systems with smart grid integration and extended warranties.", 
      icon: "M13 10V3L4 14h7v7l9-11h-7z" // Bolt/Power Icon
    },
    { 
      title: "Master Plumbing Systems", 
      text: "From emergency leak suppression to luxury bathroom engineering. We are the trusted local plumbers for Essex, Romford and the M25 corridor.", 
      icon: "M11 4a1 1 0 10-2 0v1a3 3 0 003 3h1a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a3 3 0 003-3v-1a1 1 0 011-1h2a1 1 0 100-2h-3a3 3 0 00-3-3h-1a1 1 0 01-1-1V4z" // Fixed Technical Plumbing Icon
    },
    { 
      title: "Certified Gas Services", 
      text: "Official Gas Safe registered engineering. Providing legal CP12 certifications and molecular safety diagnostics for Essex residential and commercial assets.", 
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" // Shield/Security Icon
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 px-6 bg-white overflow-hidden" id="standards">
      {/* 2050 Background Architecture */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#12416B] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F2CF51] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Responsive SEO Header */}
        <div className="text-center mb-16 lg:mb-24 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-[#12416B]/10 bg-slate-50">
            <span className="w-2 h-2 rounded-full bg-[#F2CF51] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#12416B]">Precision Quality Verified</span>
          </div>
          <h2 className="text-[#12416B] text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-8">
            Professional <span className="text-stroke-blue">Engineering</span> <br className="hidden md:block" /> Standards
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto italic">
            Delivering the <strong className="text-[#12416B]">best boiler, plumbing and gas services in Essex</strong>. Our multi certified team ensures safety, efficiency and industrial grade reliability for every home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Visual ID: Balanced Padding and Mobile Sizing */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0">
             {/* Orbital Tech Rings */}
             <div className="absolute inset-0 border border-[#12416B]/5 rounded-full animate-[spin_25s_linear_infinite]" />
             <div className="absolute inset-8 border border-[#F2CF51]/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

             <div className="relative h-full w-full bg-white rounded-[3.5rem] shadow-[0_40px_80px_rgba(18,65,107,0.08)] border border-slate-50 flex items-center justify-center p-12 overflow-hidden group/logo">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
                
                <div className="relative w-full h-full transform transition-all duration-700 group-hover/logo:scale-105">
                  <Image 
                    src="/log.png" 
                    alt="MIR Plumbing & Gas Safe Boiler Installation Essex" 
                    fill 
                    className="object-contain drop-shadow-2xl" 
                  />
                </div>

                {/* Cyber Seal */}
                <div className="absolute top-8 right-8 bg-[#12416B] text-[#F2CF51] w-20 h-20 rounded-2xl flex items-center justify-center text-xs font-black shadow-lg transform rotate-12">
                   15+ YEARS
                </div>
             </div>
          </div>

          {/* Service Standards List */}
          <div className="flex flex-col gap-10 lg:gap-12 px-2">
            {standards.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left group/item">
                <div className="shrink-0 w-20 h-20 relative">
                  {/* Futuristic Icon Frame */}
                  <div className="absolute inset-0 bg-slate-50 rounded-2xl border border-slate-100 group-hover/item:border-[#F2CF51]/50 group-hover/item:bg-[#12416B] transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-[#12416B] group-hover/item:text-[#F2CF51] z-10 transition-colors duration-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon}></path>
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-[#12416B] uppercase italic group-hover/item:text-[#F2CF51] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base md:border-l-2 md:border-slate-100 md:pl-6 group-hover/item:border-[#F2CF51] transition-all">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        .text-stroke-blue {
          -webkit-text-stroke: 1px #12416B;
          color: transparent;
        }
        @media (max-width: 768px) {
          .text-stroke-blue {
            color: #12416B;
            -webkit-text-stroke: 0px;
          }
        }
      `}</style>
    </section>
  );
}