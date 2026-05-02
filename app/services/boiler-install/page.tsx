"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookingPopup from "../../components/BookingPopup";
import { servicePagesData, portfolioProjects, portfolioSubMap } from "../../components/mockdata";

const BOILER_INSTALL_MAIN_CATEGORY = "Boiler Supply & Installation";
const PAGE_SIZE = 6;

// ── SVG ICONS ─────────────────────────────────────────────────────────────────
const IconBox = ({ size = 22, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>
  </svg>
);
const IconTool = ({ size = 22, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);
const IconStar = ({ size = 22, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
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
const IconThermometer = ({ size = 22, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
  </svg>
);
const IconGlobe = ({ size = 22, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
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

// ── Hardcoded hero image for this page ────────────────────────────────────────
const HERO_IMAGE = "/client/new/heatingtwo.jpeg";

export default function BoilerInstallPage() {
  const [activeSub, setActiveSub] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const serviceData = servicePagesData.find((s) => s.id === "3")!;

  const allProjects = portfolioProjects.filter(
    (p) => p.category === BOILER_INSTALL_MAIN_CATEGORY
  );

  const subOptions = useMemo(() => {
    const subs = (portfolioSubMap[BOILER_INSTALL_MAIN_CATEGORY] || []).map((s) => s.name);
    return ["All", ...subs];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeSub === "All") return allProjects;
    return allProjects.filter((p) => p.sub_category === activeSub);
  }, [allProjects, activeSub]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden font-sans text-[#12416B]">
      <Navbar />
      <main className="pt-28 md:pt-44 pb-24">

        {/* ── HERO SECTION ──────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 mb-24">
          <div className="relative bg-[#12416B] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)" }} />
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F2CF51]" />
            <div className="relative grid lg:grid-cols-12 gap-0 items-stretch min-h-[600px]">
              <div className="lg:col-span-7 p-8 md:p-14 lg:p-16 flex flex-col justify-between">
                <div className="flex flex-col items-start gap-8">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-[#F2CF51]/30 text-[#F2CF51] font-black uppercase tracking-[0.2em] text-[10px]">
                    <span className="w-2 h-2 rounded-full bg-[#F2CF51] animate-pulse flex-shrink-0"></span>
                    Gas Safe Registered · Essex &amp; London
                  </div>
                  <div>
                    <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black text-white uppercase leading-[0.85] tracking-tighter italic mb-4">
                      {serviceData.title}<br />
                      <span className="text-[#F2CF51]">{serviceData.subtitle}</span>
                    </h1>
                    <div className="flex items-center gap-3 mt-4">
                      <div className="h-1 w-12 bg-[#F2CF51] rounded-full"></div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{serviceData.tagline}</span>
                    </div>
                  </div>
                  <p className="text-white/70 text-lg leading-relaxed max-w-lg border-l-2 border-[#F2CF51]/40 pl-6">
                    {serviceData.description}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
                  <button onClick={() => setIsPopupOpen(true)} className="inline-flex items-center gap-3 px-10 py-4 bg-[#F2CF51] text-[#12416B] rounded-2xl font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-all text-sm">
                    Get Free Quote <IconArrow size={14} color="#12416B" />
                  </button>
                  <div className="flex flex-col">
                    <span className="text-4xl font-black italic text-[#F2CF51] leading-none">£{serviceData.price}</span>
                    <span className="text-[9px] font-black uppercase text-white/40 tracking-widest mt-1">From · Supply &amp; Fit</span>
                  </div>
                </div>
              </div>

              {/* ── Hero Image: heatingtwo.jpeg ── */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-0">
                <Image
                  src={HERO_IMAGE}
                  alt="New combi boiler installation"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#12416B] via-[#12416B]/30 to-transparent lg:from-transparent" />
                <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#12416B] flex items-center justify-center">
                      <IconShieldCheck size={18} color="#F2CF51" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-wider text-[#12416B]">Up to 10yr</div>
                      <div className="text-[9px] text-slate-400 font-bold uppercase">Warranty</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative px-8 md:px-16 pb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatBadge value="300+" label="Boilers Installed" />
              <StatBadge value="1 Day" label="Typical Install" />
              <StatBadge value="10yr"  label="Warranty Option" />
              <StatBadge value="All"   label="Major Brands" />
            </div>
          </div>
        </section>

        {/* ── WHY UPGRADE ───────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 mb-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F2CF51] mb-4 block">Upgrade Your Heating</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-[#12416B] leading-none mb-6">
                Is It Time For A <span className="text-[#F2CF51]">New Boiler?</span>
              </h2>
              <div className="space-y-4 text-slate-500 text-base leading-relaxed">
                <p>Boilers over 10–12 years old are <strong className="text-[#12416B]">significantly less efficient</strong> than modern A-rated units. Upgrading to a new combi or system boiler can reduce your heating bills by up to 30%.</p>
                <p>We supply and install boilers from Worcester Bosch, Vaillant, Baxi and Ideal — all with manufacturer warranty options of up to 10 years when registered.</p>
                <p>Our engineers complete most installations in a single day with <strong className="text-[#12416B]">minimal disruption</strong> to your home or business.</p>
              </div>
              <button onClick={() => setIsPopupOpen(true)} className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-[#12416B] text-[#F2CF51] rounded-2xl font-black uppercase tracking-widest shadow-lg hover:opacity-90 transition-all text-xs">
                Get Free Survey <IconArrow size={13} color="#F2CF51" />
              </button>
            </div>
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
              <div className="bg-[#12416B] px-8 py-6">
                <h3 className="text-white font-black uppercase italic text-xl tracking-tight">What's Included</h3>
                <p className="text-white/50 text-[11px] uppercase tracking-widest font-bold mt-1">With Every Installation</p>
              </div>
              <div className="p-8 grid gap-1">
                {[
                  { icon: <IconBox size={17} color="#12416B" />,         item: "New boiler supply & delivery",              note: "All major brands stocked" },
                  { icon: <IconTool size={17} color="#12416B" />,        item: "Full installation by Gas Safe engineer",     note: "Fitted to manufacturer spec" },
                  { icon: <IconThermometer size={17} color="#12416B" />, item: "New flue & thermostat controls",             note: "Smart thermostat options available" },
                  { icon: <IconGlobe size={17} color="#12416B" />,       item: "Magnetic system filter fitted",              note: "Protects new boiler from sludge" },
                  { icon: <IconCheckCircle size={17} color="#12416B" />, item: "System power flush (if required)",           note: "Ensures clean water circulation" },
                  { icon: <IconStar size={17} color="#12416B" />,        item: "Manufacturer warranty registered",           note: "Up to 10 years cover" },
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

        {/* ── SERVICE CARDS ──────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 mb-28">
          <div className="text-center mb-14">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-3 block">Boiler Options</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-[#12416B] leading-none">
              Premium Combi <span className="text-[#F2CF51]">Upgrades</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", icon: <IconBox size={24} />,  sub: "Most Popular", title: "Combi Boiler",   desc: "No hot water cylinder needed. Instant hot water on demand with high efficiency ratings. Ideal for most Essex homes." },
              { num: "02", icon: <IconTool size={24} />, sub: "Larger Homes", title: "System Boiler",  desc: "Separate hot water cylinder with mains pressure hot water. Perfect for homes with multiple bathrooms and high demand." },
              { num: "03", icon: <IconStar size={24} />, sub: "Full Upgrade",  title: "Full CH Install", desc: "Brand new central heating system from scratch — new boiler, radiators, pipework and controls. Full project management." },
            ].map((item) => (
              <div key={item.num} className="group bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg border border-slate-100 hover:bg-[#12416B] transition-all duration-500 cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-white/15 transition-colors flex items-center justify-center text-[#12416B] group-hover:text-[#F2CF51]">{item.icon}</div>
                  <span className="text-5xl font-black text-slate-100 group-hover:text-[#F2CF51]/20 transition-colors leading-none">{item.num}</span>
                </div>
                <span className="text-[#F2CF51] font-black uppercase text-[9px] tracking-[0.2em] mb-1 block">{item.sub}</span>
                <h3 className="text-2xl font-black uppercase italic text-[#12416B] group-hover:text-white transition-colors mb-3 leading-tight">{item.title}</h3>
                <p className="text-slate-500 group-hover:text-blue-100/70 transition-colors leading-relaxed text-sm">{item.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-[#F2CF51] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-black uppercase tracking-widest">Get Quote</span>
                  <IconArrow size={12} color="#F2CF51" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROCESS ────────────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 mb-28">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-3 block">How It Works</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-[#12416B] leading-none mb-10">New Boiler <br /><span className="text-[#F2CF51]">In 4 Steps</span></h2>
              <ProcessStep step="01" title="Free Home Survey"     desc="We visit your property to assess your current system and recommend the right boiler size and model for your home." />
              <ProcessStep step="02" title="Fixed Quote Provided" desc="You receive a detailed, fixed-price quote with no surprises. We'll advise on the best brand and warranty option for your budget." />
              <ProcessStep step="03" title="Installation Day"     desc="Our engineers arrive and complete the full installation — typically in one day. We leave your home clean and tidy." />
              <ProcessStep step="04" title="Handover & Warranty"  desc="We walk you through your new system, register your warranty with the manufacturer, and leave you with all documentation." />
            </div>
            <div className="space-y-6">
              <div className="bg-[#12416B] rounded-[2rem] p-8 text-white">
                <h3 className="font-black uppercase italic text-xl text-[#F2CF51] mb-4">Brands We Install</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Worcester Bosch","Vaillant","Baxi","Ideal Boilers","Viessmann","Potterton","Alpha Heating","Glow-worm"].map((brand) => (
                    <div key={brand} className="flex items-center gap-3 text-sm text-white/80">
                      <span className="flex-shrink-0"><IconCheck size={13} color="#F2CF51" /></span>{brand}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-[2rem] p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconStar size={19} color="#15803D" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-[#12416B] text-sm mb-2">Up to 10 Year Warranty</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">All new boilers we install come with manufacturer warranty options of up to 10 years. We handle the registration for you on installation day.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO SECTION ──────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 mb-28">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 mb-12">
            <div className="text-center lg:text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-3 block">Recent Installs</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-[#12416B] leading-none">
                Our Work <span className="text-[#F2CF51] [-webkit-text-stroke:1px_#12416B]">Portfolio</span>
              </h2>
            </div>
            {subOptions.length > 1 && (
              <div className="flex flex-wrap justify-center gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100">
                {subOptions.map((sub) => (
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
            )}
          </div>

          <p className="mb-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center lg:text-left">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
          </p>

          {visibleProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative h-[340px] md:h-[420px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white transition-all hover:border-[#F2CF51] hover:shadow-2xl"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image_base64}
                    alt={project.tagline}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12416B] via-[#12416B]/20 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-500 flex items-end p-8">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.sub_category && (
                          <span className="bg-[#F2CF51] text-[#12416B] px-3 py-1 rounded-full text-[9px] font-black uppercase">
                            {project.sub_category}
                          </span>
                        )}
                        <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-[9px] font-black uppercase border border-white/20">
                          {project.location}
                        </span>
                      </div>
                      <p className="text-white font-black uppercase italic text-lg leading-tight">{project.tagline}</p>
                      {project.created_at && (
                        <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mt-2">
                          {new Date(project.created_at).toLocaleDateString("en-GB", {
                            day: "numeric", month: "short", year: "numeric",
                          })}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-32 text-center border-2 border-dashed border-slate-200 rounded-[3rem]">
              <p className="text-slate-400 font-black uppercase tracking-widest text-xs">
                No projects found{activeSub !== "All" ? ` in "${activeSub}"` : ""}
              </p>
            </div>
          )}

          {hasMore && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="px-12 py-5 rounded-3xl bg-[#12416B] text-[#F2CF51] font-black uppercase tracking-widest text-xs hover:shadow-[0_20px_40px_rgba(18,65,107,0.3)] transition-all active:scale-95"
              >
                Load More ({filteredProjects.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </section>

        {/* ── WHY CHOOSE US ──────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 mb-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Section Image: heatingtwo.jpeg ── */}
            <div className="relative h-[400px] md:h-[560px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white order-2 lg:order-1">
              <Image
                src={HERO_IMAGE}
                alt="New boiler installation"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#12416B] flex items-center justify-center flex-shrink-0">
                    <IconCheckCircle size={22} color="#F2CF51" />
                  </div>
                  <div>
                    <div className="font-black uppercase text-[#12416B] text-sm">Installed Same Day</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">Most installations completed in one visit</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-3 block">Why Essex Trusts Us</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-[#12416B] leading-none mb-8">Installed Right <br /><span className="text-[#F2CF51]">First Time</span></h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">We don't just fit boilers — we design the right heating solution for your home. Gas Safe registered, fully insured, and backed by manufacturer warranties.</p>
              <div className="grid grid-cols-2 gap-3">
                {["Free Home Survey","Fixed-Price Quotes","Same-Day Install","10yr Warranty Option","All Major Brands","Smart Controls Available","Essex & East London","Finance Options"].map((item) => (
                  <div key={item} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F2CF51] flex-shrink-0"></div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#12416B]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING CTA ────────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
          <div className="bg-[#12416B] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border-4 md:border-[10px] border-white">
            <div className="p-10 md:p-16 lg:w-7/12 text-white text-center lg:text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F2CF51]/60 mb-3 block">Transparent Pricing</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-none tracking-tighter">Boiler Supply <br /><span className="text-[#F2CF51]">&amp; Installation</span></h2>
              <p className="text-white/60 text-base leading-relaxed max-w-md mb-10">Fixed-price supply and fit packages. No surprises, no hidden costs. Finance options available for eligible customers.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["New Boiler Supplied & Fitted","Flue & Controls Included","Magnetic Filter Installed","Warranty Registered","System Flush if Required","Finance Options Available"].map((li) => (
                  <div key={li} className="flex items-center justify-center lg:justify-start gap-3 text-[10px] font-black uppercase">
                    <span className="text-[#F2CF51] flex-shrink-0"><IconCheck size={12} color="#F2CF51" /></span>
                    <span className="text-white/80">{li}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F2CF51] p-10 md:p-16 lg:w-5/12 flex flex-col items-center justify-center text-[#12416B] gap-6">
              <div className="text-center">
                <span className="font-black uppercase text-[10px] tracking-widest opacity-60 block mb-1">Supply &amp; Fit From</span>
                <div className="text-6xl md:text-8xl font-black italic leading-none">£{serviceData.price}</div>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mt-2 block">Fully Installed · Inc. VAT</span>
              </div>
              <button onClick={() => setIsPopupOpen(true)} className="w-full py-5 bg-[#12416B] text-[#F2CF51] rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl text-sm">
                Get Free Quote
              </button>
              <p className="text-[9px] font-black uppercase tracking-wider text-[#12416B]/50 text-center">Free survey · Fixed price · Gas Safe registered</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <BookingPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}