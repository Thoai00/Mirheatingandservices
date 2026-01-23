import Image from "next/image";
import Link from "next/link"; // Import Link

export default function AboutSection() {
    return (
        <section className="relative py-24 bg-white border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="inline-block px-4 py-2 bg-[#12416B]/10 rounded-lg border border-[#12416B]/10">
                        <span className="text-[#12416B] font-bold uppercase tracking-widest text-xs">Our Story</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#12416B] leading-tight">
                    15+ Years of <br />
                    <span className="text-[#F2CF51]">Excellence</span> in UK Plumbing.
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed">
                    MIR started as a small family operation and has grown into the region's most trusted name for complex <strong>heating and drainage services</strong>. We believe that true craftsmanship is about more than just fixing pipes; it's about respecting the homes we work in.
                    </p>

                    <div className="flex gap-8 border-t border-slate-100 pt-8 mt-8">
                        <div><div className="text-3xl font-black text-[#12416B]">2k+</div><div className="text-xs text-slate-400 uppercase tracking-wider">Jobs Done</div></div>
                        <div><div className="text-3xl font-black text-[#12416B]">100%</div><div className="text-xs text-slate-400 uppercase tracking-wider">Guaranteed</div></div>
                    </div>

                    {/* --- ADDED BUTTON HERE --- */}
                    <div className="pt-4">
                        <Link 
                            href="/about" 
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#12416B] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#F2CF51] hover:text-[#12416B] transition-all duration-300 shadow-lg hover:-translate-y-1"
                        >
                            Read Our Full Story
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </Link>
                    </div>

                </div>
                <div className="relative h-125 w-full bg-[#12416B] rounded-[3rem] overflow-hidden shadow-2xl">
                    <Image src="/client/one.jpeg" alt="MIR Team UK" fill className="object-cover opacity-80" />
                    <div className="absolute inset-0 bg-linear-to-t from-[#12416B] to-transparent"></div>
                    <div className="absolute bottom-10 left-10 z-20">
                        <div className="text-white text-3xl font-black italic">The MIR Promise</div>
                        <div className="text-[#F2CF51] uppercase tracking-widest text-sm">Quality Guaranteed</div>
                    </div>
                </div>
            </div>
        </section>
    );
}