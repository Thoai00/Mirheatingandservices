"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookingPopup from "../../components/BookingPopup";
import { portfolioProjects } from "../../components/mockdata";

const MAIN_CATEGORY = "Boiler Services & Repair";
const PAGE_SERVICE = {
  title: "Boiler Breakdown",
  subtitle: "& Emergency Repair",
  tagline: "FAST RESPONSE ACROSS ESSEX",
  price: "Free Quote",
  description:
    "No heat or hot water? Our engineers respond fast to boiler breakdowns across Essex. We carry common spare parts on every van for same-day fixes on all major brands including Worcester Bosch, Vaillant, and Baxi.",
};
const PORTFOLIO_SUB_FILTER = ["All", "Boiler Repair"];

const PAGE_SIZE = 6;

const IconWrench = ({ size = 22, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);
const IconZap = ({ size = 22, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconAlertTriangle = ({ size = 22, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconClock = ({ size = 22, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconTool = ({ size = 22, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);
const IconShieldCheck = ({ size = 20, color = "#F2CF51" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);
const IconCheck = ({ size = 14, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconArrow = ({ size = 14, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IconCheckCircle = ({ size = 22, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
      <span className="text-3xl font-black text-[#F2CF51] italic leading-none">{value}</span>
      <span className="text-[9px] font-black uppercase tracking-widest text-white/60 mt-1 text-center">{label}</span>
    </div>
  );
}

function ProcessStep({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="relative flex gap-6 items-start">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-[#12416B] border-2 border-[#F2CF51] flex items-center justify-center text-[#F2CF51] font-black text-xs flex-shrink-0 z-10">{step}</div>
        <div className="w-px flex-1 bg-gradient-to-b from-[#F2CF51]/40 to-transparent mt-2 min-h-[40px]"></div>
      </div>
      <div className="pb-10">
        <h4 className="font-black uppercase text-[#12416B] text-sm tracking-wider mb-1">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function BoilerBreakdownPage() {
  const projects = portfolioProjects.filter((p) => p.category === MAIN_CATEGORY);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeSub, setActiveSub] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredProjects = useMemo(() => {
    if (activeSub === "All") return projects.filter((p) => p.sub_category === "Boiler Repair");
    return projects.filter((p) => p.sub_category === activeSub);
  }, [projects, activeSub]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden font-sans text-[#12416B]">
      <Navbar />
      <main className="pt-28 md:pt-44 pb-24">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 mb-24">
          <div className="relative bg-[#12416B] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)" }} />
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F2CF51]" />
            <div className="relative grid lg:grid-cols-12 gap-0 items-stretch min-h-[600px]">
              <div className="lg:col-span-7 p-8 md:p-14 lg:p-16 flex flex-col justify-between">
                <div className="flex flex-col items-start gap-8">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-[#F2CF51]/30 text-[#F2CF51] font-black uppercase tracking-[0.2em] text-[10px]">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0"></span>
                    Emergency Response · Essex &amp; London
                  </div>
                  <div>
                    <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black text-white uppercase leading-[0.85] tracking-tighter italic mb-4">
                      {PAGE_SERVICE.title}<br />
                      <span className="text-[#F2CF51]">{PAGE_SERVICE.subtitle}</span>
                    </h1>
                    <div className="flex items-center gap-3 mt-4">
                      <div className="h-1 w-12 bg-[#F2CF51] rounded-full"></div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{PAGE_SERVICE.tagline}</span>
                    </div>
                  </div>
                  <p className="text-white/70 text-lg leading-relaxed max-w-lg border-l-2 border-[#F2CF51]/40 pl-6">
                    {PAGE_SERVICE.description}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
                  <button onClick={() => setIsPopupOpen(true)} className="inline-flex items-center gap-3 px-10 py-4 bg-[#F2CF51] text-[#12416B] rounded-2xl font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-all text-sm">
                    Get Emergency Help <IconArrow size={14} color="#12416B" />
                  </button>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black italic text-[#F2CF51] leading-none">{PAGE_SERVICE.price}</span>
                    <span className="text-[9px] font-black uppercase text-white/40 tracking-widest mt-1">No Call-Out Fee</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-0">
                <Image src="/client/new/heating1.jpeg" alt="Emergency boiler repair engineer" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-r from-[#12416B] via-[#12416B]/30 to-transparent lg:from-transparent" />
                <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#12416B] flex items-center justify-center">
                      <IconShieldCheck size={18} color="#F2CF51" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-wider text-[#12416B]">Same Day</div>
                      <div className="text-[9px] text-slate-400 font-bold uppercase">Response</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative px-8 md:px-16 pb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatBadge value="Same Day" label="Engineer Dispatch" />
              <StatBadge value="24/7"     label="Emergency Line" />
              <StatBadge value="All"      label="Makes & Models" />
              <StatBadge value="1st Visit" label="Fix Rate" />
            </div>
          </div>
        </section>

        {/* COMMON BREAKDOWNS */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 mb-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F2CF51] mb-4 block">We Fix It Fast</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-[#12416B] leading-none mb-6">
                Common <span className="text-[#F2CF51]">Breakdowns We Fix</span>
              </h2>
              <div className="space-y-4 text-slate-500 text-base leading-relaxed">
                <p>Our engineers carry the most common spare parts on every van — <strong className="text-[#12416B]">diverter valves, PCBs, pumps, thermistors, and igniters</strong> — so most breakdowns are fixed on the first visit.</p>
                <p>We diagnose all error codes across all major brands. Whether it's a pressure fault, ignition failure, or frozen condensate pipe, we get your heating back on fast.</p>
                <p>All repair work is fully guaranteed with <strong className="text-[#12416B]">parts and labour warranty</strong> for complete peace of mind.</p>
              </div>
              <button onClick={() => setIsPopupOpen(true)} className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-[#12416B] text-[#F2CF51] rounded-2xl font-black uppercase tracking-widest shadow-lg hover:opacity-90 transition-all text-xs">
                Call Now <IconArrow size={13} color="#F2CF51" />
              </button>
            </div>
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
              <div className="bg-[#12416B] px-8 py-6">
                <h3 className="text-white font-black uppercase italic text-xl tracking-tight">Faults We Repair</h3>
                <p className="text-white/50 text-[11px] uppercase tracking-widest font-bold mt-1">All Major Makes & Models</p>
              </div>
              <div className="p-8 grid gap-1">
                {[
                  { icon: <IconAlertTriangle size={17} color="#12416B" />, item: "No heating or hot water",         note: "Diverter valve, pump or PCB fault" },
                  { icon: <IconZap size={17} color="#12416B" />,           item: "Ignition failure & lockout",       note: "Error codes diagnosed & cleared" },
                  { icon: <IconClock size={17} color="#12416B" />,         item: "Low pressure & pressure loss",     note: "Expansion vessel & filling loop" },
                  { icon: <IconTool size={17} color="#12416B" />,          item: "Boiler making noises",             note: "Kettling, banging, vibration" },
                  { icon: <IconWrench size={17} color="#12416B" />,        item: "Leaking boiler",                   note: "Seals, heat exchanger, pump" },
                  { icon: <IconShieldCheck size={17} color="#12416B" />,   item: "Frozen condensate pipe",           note: "Thaw & insulate same visit" },
                ].map(({ icon, item, note }) => (
                  <div key={item} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">{icon}</div>
                    <div className="flex-1">
                      <span className="text-sm font-black text-[#12416B] uppercase">{item}</span>
                      <span className="block text-[10px] text-slate-400 font-semibold mt-0.5">{note}</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#F2CF51] flex-shrink-0"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BREAKDOWN RESPONSE CARDS */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 mb-28">
          <div className="text-center mb-14">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-3 block">How We Help</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-[#12416B] leading-none">
              Fast Breakdown <span className="text-[#F2CF51]">Response</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", icon: <IconClock size={24} />,         sub: "Rapid Dispatch",    title: "Same Day Response", desc: "We aim to reach you the same day you call. Our engineers cover all Essex postcodes and carry diagnostic equipment for fast fault finding." },
              { num: "02", icon: <IconWrench size={24} />,        sub: "Parts On The Van",  title: "First Visit Fix",   desc: "Common spare parts are stocked on every van. Diverter valves, PCBs, pumps and more — most jobs are completed without a second visit." },
              { num: "03", icon: <IconShieldCheck size={24} />,   sub: "Guaranteed Work",   title: "Labour Warranty",   desc: "All repair work comes with a full parts and labour guarantee. If the same fault returns, we come back and fix it at no extra cost." },
            ].map((item) => (
              <div key={item.num} className="group bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg border border-slate-100 hover:bg-[#12416B] transition-all duration-500 cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-white/15 transition-colors flex items-center justify-center text-[#12416B] group-hover:text-[#F2CF51]">{item.icon}</div>
                  <span className="text-5xl font-black text-slate-100 group-hover:text-[#F2CF51]/20 transition-colors leading-none">{item.num}</span>
                </div>
                <span className="text-[#F2CF51] font-black uppercase text-[9px] tracking-[0.2em] mb-1 block">{item.sub}</span>
                <h3 className="text-2xl font-black uppercase italic text-[#12416B] group-hover:text-white transition-colors mb-3 leading-tight">{item.title}</h3>
                <p className="text-slate-500 group-hover:text-blue-100/70 transition-colors leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 mb-28">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-3 block">What Happens Next</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-[#12416B] leading-none mb-10">Breakdown <br /><span className="text-[#F2CF51]">In 4 Steps</span></h2>
              <ProcessStep step="01" title="Call or Book Online"     desc="Contact us and describe the fault. We'll give you an estimated arrival time and send the nearest available engineer." />
              <ProcessStep step="02" title="Engineer Diagnoses"      desc="Your Gas Safe engineer carries out a full fault diagnosis using professional equipment to identify the root cause." />
              <ProcessStep step="03" title="Repair Carried Out"      desc="We carry common parts to fix most faults on the spot. You'll be given a quote before any work begins — no hidden costs." />
              <ProcessStep step="04" title="System Tested & Signed Off" desc="Once repaired, we test the full system and issue a job report. You'll receive advice on preventing the fault recurring." />
            </div>
            <div className="space-y-6">
              <div className="bg-[#12416B] rounded-[2rem] p-8 text-white">
                <h3 className="font-black uppercase italic text-xl text-[#F2CF51] mb-4">Brands We Repair</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Worcester Bosch","Vaillant","Baxi","Ideal Boilers","Viessmann","Potterton","Glow-worm","Alpha Heating"].map((brand) => (
                    <div key={brand} className="flex items-center gap-3 text-sm text-white/80">
                      <span className="flex-shrink-0"><IconCheck size={13} color="#F2CF51" /></span>{brand}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-[2rem] p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconAlertTriangle size={19} color="#DC2626" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-[#12416B] text-sm mb-2">No Heat? Don't Wait</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">A boiler breakdown in winter can be dangerous, especially for elderly residents. Call us now for priority same-day attendance across Essex.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 mb-28">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 mb-12">
            <div className="text-center lg:text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-3 block">Recent Work</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-[#12416B] leading-none">
                Our Repair <span className="text-[#F2CF51] [-webkit-text-stroke:1px_#12416B]">Portfolio</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100">
              {PORTFOLIO_SUB_FILTER.map((sub) => (
                <button
                  key={sub}
                  onClick={() => { setActiveSub(sub); setVisibleCount(PAGE_SIZE); }}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                    activeSub === sub ? "bg-[#12416B] text-[#F2CF51]" : "text-slate-400 hover:text-[#12416B]"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
          <p className="mb-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center lg:text-left">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
          </p>
          {visibleProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visibleProjects.map((project) => (
                <div key={project.id} className="group relative h-[340px] md:h-[420px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white transition-all hover:border-[#F2CF51] hover:shadow-2xl">
                  <img src={project.image_base64} alt={project.tagline} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12416B] via-[#12416B]/20 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-500 flex items-end p-8">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.sub_category && (
                          <span className="bg-[#F2CF51] text-[#12416B] px-3 py-1 rounded-full text-[9px] font-black uppercase">{project.sub_category}</span>
                        )}
                        <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-[9px] font-black uppercase border border-white/20">{project.location}</span>
                      </div>
                      <p className="text-white font-black uppercase italic text-lg leading-tight">{project.tagline}</p>
                      {project.created_at && (
                        <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mt-2">
                          {new Date(project.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-32 text-center border-2 border-dashed border-slate-200 rounded-[3rem]">
              <p className="text-slate-400 font-black uppercase tracking-widest text-xs">No repair projects found</p>
            </div>
          )}
          {hasMore && (
            <div className="mt-12 flex justify-center">
              <button onClick={() => setVisibleCount((c) => c + PAGE_SIZE)} className="px-12 py-5 rounded-3xl bg-[#12416B] text-[#F2CF51] font-black uppercase tracking-widest text-xs hover:shadow-[0_20px_40px_rgba(18,65,107,0.3)] transition-all active:scale-95">
                Load More ({filteredProjects.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </section>

        {/* WHY CHOOSE US */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 mb-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] md:h-[560px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white order-2 lg:order-1">
              <Image src="/client/new/heating1.jpeg" alt="Boiler repair engineer at work" fill className="object-cover" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#12416B] flex items-center justify-center flex-shrink-0">
                    <IconCheckCircle size={22} color="#F2CF51" />
                  </div>
                  <div>
                    <div className="font-black uppercase text-[#12416B] text-sm">Parts On Every Van</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">First-visit fix for most breakdowns</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-3 block">Why Essex Trusts Us</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-[#12416B] leading-none mb-8">Rapid Repair <br /><span className="text-[#F2CF51]">Every Time</span></h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">Gas Safe registered, fully insured engineers with parts stocked on every van. We diagnose fast and fix right first time.</p>
              <div className="grid grid-cols-2 gap-3">
                {["Same-Day Attendance","Fully Insured Engineers","Parts & Labour Warranty","All Error Codes Fixed","All Brands Covered","Parts Carried On Van","Essex & East London","No Fix No Fee Option"].map((item) => (
                  <div key={item} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F2CF51] flex-shrink-0"></div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#12416B]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICING CTA */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
          <div className="bg-[#12416B] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border-4 md:border-[10px] border-white">
            <div className="p-10 md:p-16 lg:w-7/12 text-white text-center lg:text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F2CF51]/60 mb-3 block">Transparent Pricing</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-none tracking-tighter">Emergency Repair <br /><span className="text-[#F2CF51]">Pricing</span></h2>
              <p className="text-white/60 text-base leading-relaxed max-w-md mb-10">Fixed call-out fee with no hidden extras. Parts quoted before work begins. No fix, no fee available on request.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Full Fault Diagnosis","Error Code Cleared","Parts Quoted Upfront","Parts & Labour Warranty","All Brands Covered","Same-Day Availability"].map((li) => (
                  <div key={li} className="flex items-center justify-center lg:justify-start gap-3 text-[10px] font-black uppercase">
                    <span className="text-[#F2CF51] flex-shrink-0"><IconCheck size={12} color="#F2CF51" /></span>
                    <span className="text-white/80">{li}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F2CF51] p-10 md:p-16 lg:w-5/12 flex flex-col items-center justify-center text-[#12416B] gap-6">
              <div className="text-center">
                <span className="font-black uppercase text-[10px] tracking-widest opacity-60 block mb-1">Call-Out From</span>
                <div className="text-7xl md:text-6xl font-black italic leading-none">{PAGE_SERVICE.price}</div>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mt-2 block">Inc. Diagnosis · Parts Extra</span>
              </div>
              <button onClick={() => setIsPopupOpen(true)} className="w-full py-5 bg-[#12416B] text-[#F2CF51] rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl text-sm">
                Get Emergency Help Now
              </button>
              <p className="text-[9px] font-black uppercase tracking-wider text-[#12416B]/50 text-center">No hidden fees · Same-day attendance · Gas Safe registered</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <BookingPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}