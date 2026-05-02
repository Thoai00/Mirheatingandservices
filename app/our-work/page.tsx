"use client";

import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { portfolioProjects, portfolioSubMap } from "../components/mockdata"; 

const MAIN_CATEGORIES = [
  "Gas Safety Certificate (CP12)",
  "Boiler Services & Repair",
  "Boiler Supply & Installation",
] as const;

type MainCategory = (typeof MAIN_CATEGORIES)[number];

const PAGE_SIZE = 9;

export default function OurWorkPage() {
  const [activeMain, setActiveMain] = useState<MainCategory | "All">("All");
  const [activeSub, setActiveSub] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // No fetch needed – data comes straight from mockData
  const projects = portfolioProjects;
  const subMap = portfolioSubMap;

  // ── RESET filters on main change ──────────────────────────────────────────
  const handleMainChange = (cat: MainCategory | "All") => {
    setActiveMain(cat);
    setActiveSub("All");
    setVisibleCount(PAGE_SIZE);
  };

  // ── SUB-CATEGORY chips for the selected main ───────────────────────────────
  const subOptions = useMemo(() => {
    if (activeMain === "All") return [];
    const subs = (subMap[activeMain] || []).map((s) => s.name);
    return ["All", ...subs];
  }, [subMap, activeMain]);

  // ── FILTERED PROJECTS ──────────────────────────────────────────────────────
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchMain = activeMain === "All" || p.category === activeMain;
      const matchSub  = activeSub === "All" || p.sub_category === activeSub;
      return matchMain && matchSub;
    });
  }, [projects, activeMain, activeSub]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden font-sans text-[#12416B]">
      <Navbar />

      <main className="pt-32 md:pt-48 pb-24 px-4 md:px-12 lg:px-20">

        {/* HEADER */}
        <section className="max-w-7xl mx-auto mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-full bg-[#12416B] text-[#F2CF51] font-black uppercase tracking-[0.2em] text-[10px]">
            Certified Portfolio
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-[#12416B] tracking-tighter uppercase leading-[0.8] italic mb-10">
            OUR <br />
            <span className="text-white drop-shadow-[4px_4px_0px_#12416B] [-webkit-text-stroke:1.5px_#12416B]">
              PORTFOLIO
            </span>
          </h1>
          <div className="max-w-4xl border-l-4 border-[#F2CF51] pl-6 md:pl-10">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic text-[#12416B] mb-4">
              Efficiency. Safety. Precision.
            </h2>
            <p className="text-slate-500 text-lg md:text-2xl leading-relaxed">
              From high-efficiency <strong>boiler installations</strong> in Essex to complex{" "}
              <strong>gas safety audits</strong>, we deliver certified engineering excellence that
              secures your home.
            </p>
          </div>
        </section>

        {/* FILTER */}
        <section className="max-w-7xl mx-auto mb-12">

          {/* Main category tabs */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
            <button
              onClick={() => handleMainChange("All")}
              className={`px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeMain === "All"
                  ? "bg-[#12416B] text-[#F2CF51] shadow-2xl scale-105"
                  : "bg-white text-slate-400 border border-slate-100 hover:border-[#12416B]"
              }`}
            >
              All
            </button>
            {MAIN_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleMainChange(cat)}
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

          {/* Sub-category chips */}
          {activeMain !== "All" && subOptions.length > 0 && (
            <div className="flex flex-wrap gap-2 py-4 animate-in fade-in slide-in-from-left-4 justify-center md:justify-start">
              {subOptions.map((sub) => (
                <button
                  key={sub}
                  onClick={() => { setActiveSub(sub); setVisibleCount(PAGE_SIZE); }}
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

          {/* Results count */}
          <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center md:text-left">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
          </p>
        </section>

        {/* GRID */}
        <section className="max-w-7xl mx-auto">
          {visibleProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative h-[400px] md:h-[500px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-white shadow-xl border-4 border-white hover:border-[#F2CF51] transition-all duration-500"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image_base64}
                    alt={project.tagline}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12416B] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-12">
                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-[#F2CF51] text-[#12416B] px-3 py-1 rounded-full text-[8px] font-black uppercase">
                          {project.category}
                        </span>
                        <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-[8px] font-black uppercase border border-white/20">
                          {project.location}
                        </span>
                        {project.sub_category && (
                          <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-[8px] font-black uppercase border border-white/20">
                            {project.sub_category}
                          </span>
                        )}
                      </div>
                      <h3 className="text-white text-2xl md:text-3xl font-black uppercase italic leading-none tracking-tighter">
                        {project.tagline}
                      </h3>
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
                No projects found in this {activeSub !== "All" ? "sub-" : ""}category
              </p>
            </div>
          )}

          {/* LOAD MORE */}
          <div className="mt-20 flex flex-col items-center gap-4">
            {hasMore && (
              <button
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="px-12 py-6 rounded-3xl bg-[#12416B] text-[#F2CF51] font-black uppercase tracking-widest text-xs hover:shadow-[0_20px_40px_rgba(18,65,107,0.3)] transition-all active:scale-95"
              >
                Load More Projects ({filteredProjects.length - visibleCount} remaining)
              </button>
            )}
            <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">
              Verified Gas Safe &amp; Insured
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}