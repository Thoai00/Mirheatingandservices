"use client";

import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      title: "Plumbing Services",
      icon: "💧",
      tagline: "Emergency & Maintenance",
      description: "Looking for the best plumbing services in the UK? We handle everything from burst pipes and blocked drains to luxury bathroom installations. Reliable, local plumbers ready to serve.",
      path: "/services/plumbing-services"
    },
    {
      title: "Heating Services",
      icon: "🔥",
      tagline: "Central Heating Experts",
      description: "Comprehensive heating services including radiator installation, power flushing, and smart thermostat setups. Keep your home warm with our efficient heating solutions.",
      path: "/services/heating-services"
    },
    {
      title: "Gas Services",
      icon: "⚙️",
      tagline: "Gas Safe Registered",
      description: "Certified Gas Services for landlords and homeowners. We specialize in boiler servicing, gas safety certificates (CP12), and gas leak detection and repairs.",
      path: "/services/gas-services"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white/50" id="services">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-[#12416B] text-4xl font-black uppercase tracking-tight">Best UK Services</h2>
          <div className="w-24 h-2 bg-[#F2CF51] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Providing top-tier Plumbing, Heating, and Gas engineering across the region.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((item, i) => (
            <Link 
              key={i} 
              href={item.path}
              className="group relative bg-white p-10 rounded-[3.5rem] shadow-[0_20px_60px_-15px_rgba(18,65,107,0.1)] border-b-[6px] border-slate-100 hover:border-[#F2CF51] transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl overflow-hidden cursor-pointer block"
            >
              {/* Decorative Blur */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F2CF51]/10 rounded-full blur-2xl transition-all group-hover:bg-[#F2CF51]/20"></div>
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#12416B] text-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#12416B]/20 transform group-hover:rotate-6 transition-transform duration-300">
                {item.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-black uppercase italic text-[#12416B] mb-2 leading-none">{item.title}</h3>
              <div className="text-[10px] font-bold text-[#F2CF51] uppercase tracking-widest mb-6">{item.tagline}</div>
              <p className="text-slate-500 font-medium leading-relaxed text-sm">{item.description}</p>
              
              {/* Call to Action */}
              <div className="mt-8 flex items-center gap-2 text-[#12416B] font-bold text-xs uppercase tracking-wider opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span>View Details</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}