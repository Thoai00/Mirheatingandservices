import Image from "next/image";

export default function ProfessionalStandards() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#E9EDF2]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-[#12416B] text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Professional Standards</h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
            We are proud to provide the <strong>best plumbing and heating services</strong> in the region. Our team consists of fully qualified professionals dedicated to safety and quality.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-112.5 w-full bg-white rounded-[3rem] shadow-2xl border border-white/50 flex items-center justify-center p-10 overflow-hidden group">
             <div className="absolute inset-0 bg-linear-to-br from-[#E9EDF2] to-white opacity-50" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#12416B]/5 rounded-full blur-3xl" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#F2CF51]/10 rounded-full blur-2xl" />
             <div className="relative w-full h-full max-w-75 max-h-75 transform transition-transform duration-700 group-hover:scale-110">
               <Image src="/log.png" alt="MIR Plumbing Logo UK" fill className="object-contain drop-shadow-xl" />
             </div>
          </div>
          <div className="space-y-10">
            {[
              { title: "UK Based Service", text: "We offer gas, heating and plumbing services throughout London, Essex, Romford & the M25 corridor.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
              { title: "Fully Qualified & Insured", text: "We are Gas Safe registered and Blue Flame accredited, ensuring your gas services are legally compliant and safe.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Best Plumbing Services", text: "Rapid response times for emergency plumbing and heating issues. We are the trusted local experts.", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="shrink-0 w-20 h-20 rounded-full border-4 border-[#F2CF51] bg-white text-[#F2CF51] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#12416B] mb-2 group-hover:text-[#245b8d] transition-colors">{item.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}