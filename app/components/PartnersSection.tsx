import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    "/b1.png", "/b2.png", "/b3.png", "/b4.png", 
    "/b5.png", "/b6.png", "/b7.png", "/b8.png"
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#E9EDF2] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#12416B_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Header Section */}
        <div className="relative z-10 text-center mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-3xl font-black uppercase text-[#12416B] tracking-widest leading-tight">
                Trusted Partners <span className="text-[#F2CF51]"> & </span> <br className="block md:hidden" /> UK Accreditations
            </h2>
        </div>
        
        {/* Animated Rows Container */}
        {/* -rotate-3 and scale applied to all screen sizes */}
        <div className="relative w-full -rotate-3 scale-125 md:scale-110 flex flex-col gap-4 md:gap-6">
            
            {/* First Row: Scrolling Left */}
            <div className="relative w-full flex bg-slate-50 border-y border-slate-200 backdrop-blur-sm py-3 md:py-4">
                <div className="flex gap-10 md:gap-20 min-w-full animate-scroll-left items-center px-10">
                    {[...partners, ...partners].map((logo, index) => (
                    <div 
                        key={`r1-${index}`} 
                        className="relative w-32 h-12 md:w-48 md:h-20 shrink-0 transition-all duration-300 hover:scale-110 cursor-pointer"
                    >
                        <Image 
                            src={logo} 
                            alt="Partner Logo" 
                            fill 
                            className="object-contain" 
                        />
                    </div>
                    ))}
                </div>
            </div>

            {/* Second Row: Scrolling Right */}
            <div className="relative w-full flex bg-slate-50 border-y border-slate-200 backdrop-blur-sm py-3 md:py-4">
                <div className="flex gap-10 md:gap-20 min-w-full animate-scroll-right items-center px-10">
                    {[...partners, ...partners].map((logo, index) => (
                    <div 
                        key={`r2-${index}`} 
                        className="relative w-32 h-12 md:w-48 md:h-20 shrink-0 transition-all duration-300 hover:scale-110 cursor-pointer"
                    >
                        <Image 
                            src={logo} 
                            alt="Partner Logo" 
                            fill 
                            className="object-contain" 
                        />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}