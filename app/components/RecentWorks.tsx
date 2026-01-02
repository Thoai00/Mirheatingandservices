"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

export default function RecentWorks() {
  // --- RECENT WORK DATA ---
  const workImage = "/client/WhatsApp%20Image%202025-12-23%20at%207.37.28%20AM%20(1).jpeg";
  
  // Total works available (for the counter display)
  const totalWorks = 18; 
  // We generate the full array but only slice 6 for this preview section
  const allWorks = Array(totalWorks).fill(workImage);
  const visibleWorks = 6;

  return (
    <section className="py-28 bg-[#12416B] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                        Recent <br/> 
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F2CF51] to-amber-200">Projects</span>
                    </h2>
                    <p className="text-blue-100/60 mt-4 max-w-md text-lg">
                        See why we are rated the best heating and plumbing service in the UK. From boiler installs to bathroom renovations.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[#F2CF51] font-bold text-xs uppercase tracking-[0.2em]">
                        {visibleWorks} / {totalWorks} Shown
                    </span>
                    <div className="w-20 h-px bg-white/20"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 perspective-[2000px]">
                {/* Only showing the first 'visibleWorks' (6) items */}
                {allWorks.slice(0, visibleWorks).map((img, i) => (
                    <div 
                        key={i} 
                        className="relative h-75 group cursor-pointer animate-in fade-in slide-in-from-bottom-8 duration-700"
                        style={{ animationDelay: `${(i % 6) * 100}ms` }}
                    >
                        <div className="relative w-full h-full transform-gpu transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:rotate-x-6 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rounded-[2.5rem] border border-white/10 bg-white/5 overflow-hidden">
                            <Image src={img} alt={`UK Plumbing Project ${i}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                    </div>
                ))}
            </div>

            {/* --- BUTTON NAVIGATES TO /our-work --- */}
            <div className="mt-16 text-center">
                <Link 
                    href="/our-work"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-[#F2CF51] hover:border-[#F2CF51] transition-all duration-300"
                >
                    <span className="text-white font-bold uppercase tracking-widest text-xs group-hover:text-[#12416B]">View All Projects</span>
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#12416B]/20 transition-colors">
                        <svg className="w-3 h-3 text-white group-hover:text-[#12416B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                </Link>
            </div>
        </div>
    </section>
  );
}