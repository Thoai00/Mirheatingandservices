"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { portfolioProjects, portfolioSubMap } from "./mockdata"; // ← static data

const MAIN_CATEGORIES = [
  "Gas Safety Certificate (CP12)",
  "Boiler Services & Repair",
  "Boiler Supply & Installation",
] as const;

type MainCategory = (typeof MAIN_CATEGORIES)[number];

export default function RecentWorks() {
  const [activeMain, setActiveMain] = useState<MainCategory>(MAIN_CATEGORIES[0]);
  const [activeSub, setActiveSub] = useState("All");

  // No fetch needed – data comes straight from mockData
  const projects = portfolioProjects;
  const subMap = portfolioSubMap;

  // Reset sub filter when main changes
  const handleMainChange = (cat: MainCategory) => {
    setActiveMain(cat);
    setActiveSub("All");
  };

  // Sub-category chips for active main
  const subOptions = useMemo(() => {
    const subs = (subMap[activeMain] || []).map((s) => s.name);
    return ["All", ...subs];
  }, [subMap, activeMain]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchMain = p.category === activeMain;
      const matchSub = activeSub === "All" || p.sub_category === activeSub;
      return matchMain && matchSub;
    });
  }, [projects, activeMain, activeSub]);

  return (
    <section className="py-28 bg-[#12416B] overflow-hidden px-4 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.85] italic">
              Recent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2CF51] to-amber-200">
                Portfolio
              </span>
            </h2>
            <p className="text-blue-100/60 mt-6 max-w-md text-lg border-l-2 border-[#F2CF51] pl-6">
              Categorized evidence of our engineering excellence across Essex and London.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-[#F2CF51] font-black text-[10px] uppercase tracking-widest">
              Showing {filteredProjects.length} Project{filteredProjects.length !== 1 ? "s" : ""}
            </span>
            <div className="w-20 h-px bg-white/20" />
          </div>
        </div>

        {/* MAIN CATEGORY TABS */}
        <div className="flex flex-wrap gap-3 mb-8 border-b border-white/10 pb-8">
          {MAIN_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleMainChange(cat)}
              className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeMain === cat
                  ? "bg-[#F2CF51] text-[#12416B] shadow-[0_10px_20px_rgba(242,207,81,0.3)]"
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SUB-CATEGORY CHIPS */}
        <div className="flex flex-wrap gap-2 mb-12">
          {subOptions.map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveSub(sub)}
              className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all border ${
                activeSub === sub
                  ? "border-[#F2CF51] text-[#F2CF51] bg-[#F2CF51]/10"
                  : "border-white/10 text-white/40 hover:text-white"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 animate-in fade-in zoom-in duration-500"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image_base64}
                  alt={project.tagline}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12416B] via-[#12416B]/20 to-transparent flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-[9px] font-black uppercase bg-[#F2CF51] text-[#12416B] px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      {project.sub_category && (
                        <span className="text-[9px] font-black uppercase bg-white/10 text-white px-3 py-1 rounded-full backdrop-blur-md">
                          {project.sub_category}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase italic">
                      {project.tagline}
                    </h3>
                    <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-2">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border-2 border-dashed border-white/10 rounded-[3rem]">
              <p className="text-white/40 font-black uppercase tracking-widest text-xs">
                No projects found in this {activeSub !== "All" ? "sub-" : ""}category
              </p>
            </div>
          )}
        </div>

        {/* VIEW ALL */}
        <div className="mt-20 text-center">
          <Link
            href="/our-work"
            className="group inline-flex items-center gap-6 px-12 py-6 rounded-full bg-white text-[#12416B] font-black uppercase tracking-widest text-xs hover:bg-[#F2CF51] transition-all duration-300 shadow-2xl"
          >
            <span>Explore Full Archive</span>
            <div className="w-8 h-8 rounded-full bg-[#12416B] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}