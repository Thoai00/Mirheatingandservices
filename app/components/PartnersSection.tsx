import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    "/b1.png", "/b2.png", "/b3.png", "/b4.png", 
    "/b5.png", "/b6.png", "/b7.png", "/b8.png"
  ];

  return (
    <section className="relative py-24 bg-[#E9EDF2] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#12416B_1px,transparent_1px)] bg-size-[20px_20px]"></div>
        
        <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl font-black uppercase text-[#12416B] tracking-widest">
                Trusted Partners <span className="text-[#F2CF51]"> & </span> UK Accreditations
            </h2>
        </div>
        
        <div className="relative w-full -rotate-3 scale-110 flex flex-col gap-6">
            <div className="relative w-full flex bg-slate-50 border-y border-slate-200 backdrop-blur-sm py-4">
                <div className="flex gap-20 min-w-full animate-scroll-left items-center px-10">
                    {[...partners, ...partners].map((logo, index) => (
                    <div key={`r1-${index}`} className="relative w-48 h-20 shrink-0 transition-all duration-300 hover:scale-110 cursor-pointer">
                        <Image src={logo} alt="Partner Logo" fill className="object-contain" />
                    </div>
                    ))}
                </div>
            </div>
            <div className="relative w-full flex bg-slate-50 border-y border-slate-200 backdrop-blur-sm py-4">
                <div className="flex gap-20 min-w-full animate-scroll-right items-center px-10">
                    {[...partners, ...partners].map((logo, index) => (
                    <div key={`r2-${index}`} className="relative w-48 h-20 shrink-0 transition-all duration-300 hover:scale-110 cursor-pointer">
                        <Image src={logo} alt="Partner Logo" fill className="object-contain" />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}