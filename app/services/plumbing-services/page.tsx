import Image from "next/image";
import Navbar from "../../components/Navbar"; // Adjust path if using @/ alias
import Footer from "../../components/Footer";

export const metadata = {
  title: "Expert Plumbing Services | Bathroom Installation & Repairs UK",
  description: "Reliable 24/7 plumbing services for residential and commercial properties. Bathroom installations, leak repairs, burst pipes, and kitchen plumbing.",
};

export default function PlumbingServicesPage() {
  return (
    <div className="min-h-screen bg-[#E9EDF2] overflow-x-hidden font-sans text-[#12416B]">
      
      {/* --- NAVBAR --- */}
      <Navbar />

      {/* Main Content with top margin for fixed navbar */}
      <main className="pt-40 pb-20 px-6 mt-10">
        
        {/* --- HERO SECTION --- */}
        <div className="max-w-7xl mx-auto mb-24 relative">
          <div className="relative z-10">
              <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#F2CF51] text-[#12416B] font-black uppercase tracking-widest text-xs shadow-lg">
                  24/7 Emergency Service
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-[#12416B] mb-8 tracking-tighter drop-shadow-xl">
              PLUMBING <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#12416B] to-[#F2CF51]">SERVICES</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-500 max-w-3xl leading-relaxed border-l-8 border-[#F2CF51] pl-6 md:pl-8 mb-10">
                We offer 24-hour services for installation, maintenance and repairs, adjusting the pressure of your shower, or large jobs like helping you to refurbish your bathroom.
              </p>
              
              {/* --- CTA BUTTON --- */}
              <a href="tel:0123456789" className="inline-flex items-center gap-3 px-10 py-5 bg-[#12416B] text-[#F2CF51] rounded-2xl font-black uppercase tracking-widest shadow-[0_15px_30px_rgba(18,65,107,0.3)] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group">
                  <span>Get A Quote</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
          </div>
          {/* Background decorative blob */}
          <div className="absolute top-0 right-0 w-75 md:w-125 h-75 md:h-125 bg-[#12416B]/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* --- SECTION 1: BATHROOM INSTALLATION (01 Curve) --- */}
          <section className="relative group perspective-[2000px]">
              <div className="relative bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(18,65,107,0.15)] border border-white transform transition-transform duration-500 hover:rotate-x-1 overflow-hidden">
                  
                  {/* 01 CURVED INDICATOR */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 md:w-56 md:h-56 bg-[#F2CF51]/10 rounded-full blur-2xl z-0"></div>
                  <div className="absolute top-0 right-0 bg-[#F2CF51] w-24 h-24 md:w-32 md:h-32 rounded-bl-[3rem] flex items-center justify-center shadow-lg z-10">
                      <span className="text-[#12416B] font-black text-4xl md:text-5xl">01</span>
                  </div>
                  
                  <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-8 md:pt-0">
                      <div>
                          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 tracking-tight">Bathroom <span className="text-[#F2CF51]">Installation</span></h2>
                          <div className="space-y-6 text-slate-500 text-base md:text-lg leading-relaxed">
                              <p>
                                Our team of specialist bathroom plumbers can help you plan, design and install your new bathroom suite without all the hassle! We can provide a fully tailored solution to meet your requirements.
                              </p>
                              <p>
                                Whether it's refurbishing an existing suite, repairing leaks, or installing new baths, showers, toilet cisterns, and wash basins, our local plumbers can tackle any bathroom project.
                              </p>
                          </div>
                      </div>
                      
                      {/* 3D Image Box */}
                      <div className="relative bg-[#12416B] rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl transform lg:rotate-3 transition-transform hover:rotate-0">
                          <div className="absolute -top-6 -left-6 w-14 h-14 md:w-16 md:h-16 bg-[#F2CF51] rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg">🛁</div>
                          
                          <h3 className="text-xl md:text-2xl font-bold uppercase italic mb-6 border-b border-white/20 pb-4 mt-2">Design & Refurbish</h3>
                          
                          {/* --- IMAGE 1 --- */}
                          <div className="relative w-full h-40 md:h-56 mb-6 rounded-xl overflow-hidden border border-white/10 bg-white/5">
                             <Image 
                                 src="/client/one.jpeg"
                                 alt="Bathroom Installation"
                                 fill
                                 className="object-cover opacity-90"
                             />
                          </div>

                          <div className="flex flex-col gap-3">
                              <div className="flex items-center gap-4 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5">
                                  <span className="font-bold tracking-wider uppercase text-xs md:text-sm">Complete Suite Fitting</span>
                              </div>
                              <div className="flex items-center gap-4 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5">
                                  <span className="font-bold tracking-wider uppercase text-xs md:text-sm">Tiling & Grouting Included</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* --- SECTION 2: REPAIRS & BURST PIPES (02 Curve) --- */}
          <section className="relative group perspective-[2000px]">
              <div className="absolute inset-0 bg-[#12416B] transform rotate-2 rounded-[3rem] opacity-5 translate-y-4 hidden lg:block"></div>

              <div className="relative bg-[#E9EDF2] rounded-[3rem] p-8 md:p-16 border-4 border-white shadow-2xl overflow-hidden">
                  
                  {/* 02 CURVED INDICATOR (Top Left) */}
                  <div className="absolute top-0 left-0 bg-[#12416B] w-24 h-24 md:w-32 md:h-32 rounded-br-[3rem] flex items-center justify-center shadow-lg z-10">
                      <span className="text-white font-black text-4xl md:text-5xl">02</span>
                  </div>
                  
                  <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-12 md:pt-0">
                      {/* Left Content (Grid of Cards) */}
                      <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                          {[
                              { title: "Plumbing Repairs", desc: "Shower plumbing, toilets, leaks, and burst pipes repairs." },
                              { title: "Burst Pipes", desc: "Emergency response usually within 1 hour to prevent damage." },
                              { title: "12 Month Warranty", desc: "On all parts and labour for your peace of mind." }
                          ].map((card, i) => (
                              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#F2CF51]">
                                  <h4 className="font-black text-[#12416B] uppercase mb-1 text-sm md:text-base">{card.title}</h4>
                                  <p className="text-xs md:text-sm text-slate-500">{card.desc}</p>
                              </div>
                          ))}
                      </div>

                      <div className="order-1 lg:order-2 pl-0 md:pl-10">
                          {/* --- IMAGE 2 --- */}
                          <div className="w-full h-48 md:h-64 bg-slate-200 rounded-2xl mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-xl border border-white/50">
                             <Image 
                                 src="/client/one.jpeg"
                                 alt="Emergency Plumbing Repair"
                                 fill
                                 className="object-cover"
                             />
                          </div>
                          
                          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 tracking-tight">Emergency <span className="text-[#F2CF51]">Repairs</span></h2>
                          <div className="space-y-6 text-slate-500 text-base md:text-lg leading-relaxed">
                              <p>
                                Burst pipes can cause expensive damage. J&SPH Services have a dedicated team of emergency plumbers who can attend your property usually within <strong>1 hour</strong> of your call.
                              </p>
                              <p>
                                We carry out a wide range of comprehensive plumbing services, including fixing leaks, burst pipes, and boiler breakdowns available 24/7 across London.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* --- SECTION 3: KITCHEN PLUMBING (Dark Card) --- */}
          <section className="relative perspective-[2000px]">
              <div className="relative bg-[#12416B] rounded-[3rem] p-8 md:p-16 text-white overflow-hidden shadow-[0_50px_100px_-20px_rgba(18,65,107,0.4)]">
                  {/* Abstract Background Patterns */}
                  <div className="absolute top-0 right-0 w-75 md:w-150 h-75 md:h-150 bg-[#F2CF51] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
                  
                  <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16">
                      <div>
                          {/* --- IMAGE 3 --- */}
                          <div className="w-full h-48 md:h-64 bg-white/10 rounded-2xl mb-8 relative border border-white/10 overflow-hidden shadow-xl">
                             <Image 
                                 src="/client/one.jpeg"
                                 alt="Kitchen Plumbing Services"
                                 fill
                                 className="object-cover opacity-80"
                             />
                          </div>

                          <div className="inline-block mb-4 text-[#F2CF51] font-black uppercase tracking-[0.3em] text-xs md:text-sm">Kitchen Services</div>
                          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 tracking-tight leading-none">
                              Kitchen <br/> <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F2CF51] to-white">Plumbing</span>
                          </h2>
                          <p className="text-blue-100/70 text-base md:text-lg leading-relaxed mb-8">
                             Whether you have moved home or installed a new kitchen, we fulfill all kitchen plumbing needs. From installing a new kitchen sink to fitting a washing machine or dishwasher.
                          </p>
                      </div>

                      <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 p-8 md:p-10 flex flex-col justify-center">
                          <h3 className="text-xl md:text-2xl font-bold uppercase italic mb-8 text-[#F2CF51]">Kitchen Repairs</h3>
                          
                          <p className="text-blue-100/80 mb-8 leading-relaxed">
                            We repair existing kitchen plumbing problems, from leaking sinks and dripping taps to damaged pipes and poor water flow. Our team will fix any issue you are encountering.
                          </p>

                          <div className="space-y-6">
                              {[
                                  { title: "Sink Installation", icon: "🚰" },
                                  { title: "Appliance Fitting", icon: "🧺" },
                                  { title: "Leak Fixing", icon: "🔧" }
                              ].map((item, i) => (
                                  <div key={i} className="flex items-center gap-6 group cursor-pointer">
                                      <div className="w-12 h-12 rounded-2xl bg-[#F2CF51] text-[#12416B] flex items-center justify-center font-black text-xl shadow-[0_0_15px_rgba(242,207,81,0.2)] group-hover:scale-110 transition-transform">
                                          {item.icon}
                                      </div>
                                      <h4 className="font-bold text-white uppercase tracking-wider text-sm md:text-base group-hover:text-[#F2CF51] transition-colors">{item.title}</h4>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </section>

        </div>
      </main>

      {/* --- FOOTER --- */}
      <Footer />
      
    </div>
  );
}