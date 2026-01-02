export default function ProtocolSection() {
    return (
      <section className="relative py-28 bg-[#0e3557] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="mb-20 text-center">
            <span className="text-[#F2CF51] font-black uppercase tracking-[0.3em] text-xs mb-4 block">Workflow</span>
            <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter">
              The MIR <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F2CF51] to-amber-200">Protocol</span>
            </h2>
            <p className="text-blue-200/60 mt-4 max-w-xl mx-auto text-lg">
              Transparent plumbing and heating services. From the first emergency call to the final safety check.
            </p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="absolute top-12 left-0 w-full h-1 bg-white/10 hidden md:block">
               <div className="absolute top-0 left-0 h-full w-full bg-linear-to-r from-[#F2CF51]/0 via-[#F2CF51] to-[#F2CF51]/0 opacity-50"></div>
            </div>
            {[
              { id: "01", title: "Rapid Contact", desc: "24/7 UK emergency line. Fast response for plumbing leaks." },
              { id: "02", title: "Diagnostic", desc: "Expert assessment for boilers and heating systems with clear pricing." },
              { id: "03", title: "Precision Fix", desc: "Gas Safe certified engineers carry out the work to British Standards." },
              { id: "04", title: "Safety Check", desc: "Rigorous post-work testing and official CP12 certification issue." },
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="relative mx-auto w-24 h-24 bg-[#12416B] border-4 border-[#F2CF51] rounded-full flex items-center justify-center text-[#F2CF51] text-2xl font-black shadow-[0_0_30px_rgba(242,207,81,0.2)] z-10 group-hover:scale-110 transition-transform duration-300">
                  {step.id}
                </div>
                <div className="mt-8 p-8 bg-white/5 border border-white/10 backdrop-blur-sm rounded-4xl text-center hover:bg-white/10 transition-colors duration-300">
                   <h3 className="text-xl font-bold text-white uppercase italic mb-3">{step.title}</h3>
                   <p className="text-blue-100/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}