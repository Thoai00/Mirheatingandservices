import Image from "next/image"; 
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer";

export const metadata = {
  title: "Gas Services & Boiler Engineers | Gas Safe Registered UK",
  description: "Professional gas services including boiler installations, emergency repairs, and annual servicing. Fully qualified Gas Safe engineers available 24/7.",
};

export default function GasServicesPage() {
  return (
    <div className="min-h-screen bg-[#E9EDF2] overflow-x-hidden font-sans text-[#12416B]">
      
      {/* --- NAVBAR --- */}
      <Navbar />

      {/* Added top margin to account for fixed navbar */}
      <main className="pt-40 pb-20 px-6 mt-10">
        
        {/* --- HERO SECTION --- */}
        <div className="max-w-7xl mx-auto mb-24 relative">
          <div className="relative z-10">
              <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#F2CF51] text-[#12416B] font-black uppercase tracking-widest text-xs shadow-lg">
                  Gas Safe Registered
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-[#12416B] mb-8 tracking-tighter drop-shadow-xl">
              GAS <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#12416B] to-[#F2CF51]">SERVICES</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-500 max-w-3xl leading-relaxed border-l-8 border-[#F2CF51] pl-6 md:pl-8 mb-10">
              From boiler installations to emergency repairs, we have you covered. Our comprehensive gas services include full installations, rapid repairs, and annual servicing to keep your home safe and warm.
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
          
          {/* --- SECTION 1: BOILER INSTALLATION (01 Curve) --- */}
          <section className="relative group perspective-[2000px]">
              <div className="relative bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(18,65,107,0.15)] border border-white transform transition-transform duration-500 hover:rotate-x-1 overflow-hidden">
                  
                  {/* 01 CURVED INDICATOR */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 md:w-56 md:h-56 bg-[#F2CF51]/10 rounded-full blur-2xl z-0"></div>
                  <div className="absolute top-0 right-0 bg-[#F2CF51] w-24 h-24 md:w-32 md:h-32 rounded-bl-[3rem] flex items-center justify-center shadow-lg z-10">
                      <span className="text-[#12416B] font-black text-4xl md:text-5xl">01</span>
                  </div>
                  
                  <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-8 md:pt-0">
                      <div>
                          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 tracking-tight">Boiler <span className="text-[#F2CF51]">Installation</span></h2>
                          <div className="space-y-6 text-slate-500 text-base md:text-lg leading-relaxed">
                              <p>
                                  We understand that installing or replacing a boiler is a major task involving expense and disruption. At <strong>MIR Plumbing</strong>, we aim to minimize this by completing most boiler replacements within a single day.
                              </p>
                              <p>
                                  Our engineers respect your home. We are a family business driven by repeat custom, so cleanliness and respect for your property are core to our practice.
                              </p>
                          </div>
                      </div>
                      
                      {/* 3D List Box */}
                      <div className="relative bg-[#12416B] rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl transform lg:rotate-3 transition-transform hover:rotate-0">
                          <div className="absolute -top-6 -left-6 w-14 h-14 md:w-16 md:h-16 bg-[#F2CF51] rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg">⚙️</div>
                          <h3 className="text-xl md:text-2xl font-bold uppercase italic mb-6 border-b border-white/20 pb-4 mt-2">Types of Boiler We Install</h3>
                          <p className="mb-6 text-blue-200/80 text-sm md:text-base">Our professional engineers are qualified to work on the majority of boiler types available today:</p>
                          <ul className="space-y-4">
                              {["Gas Fired Condensing Boilers", "Combination Boilers", "System Boilers"].map((item, i) => (
                                  <li key={i} className="flex items-center gap-4 bg-white/10 p-3 md:p-4 rounded-xl backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors">
                                      <div className="h-2 w-2 rounded-full bg-[#F2CF51] shrink-0"></div>
                                      <span className="font-bold tracking-wider uppercase text-xs md:text-sm">{item}</span>
                                  </li>
                              ))}
                          </ul>
                          <div className="mt-8 text-xs text-blue-200/60 italic">
                              * We can quote for any other boiler type upon request.
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* --- SECTION 2: BOILER REPAIRS (02 Curve) --- */}
          <section className="relative group perspective-[2000px]">
              <div className="absolute inset-0 bg-[#12416B] transform rotate-2 rounded-[3rem] opacity-5 translate-y-4 hidden lg:block"></div>

              <div className="relative bg-[#E9EDF2] rounded-[3rem] p-8 md:p-16 border-4 border-white shadow-2xl overflow-hidden">
                  
                  {/* 02 CURVED INDICATOR (Top Left) */}
                  <div className="absolute top-0 left-0 bg-[#12416B] w-24 h-24 md:w-32 md:h-32 rounded-br-[3rem] flex items-center justify-center shadow-lg z-10">
                      <span className="text-white font-black text-4xl md:text-5xl">02</span>
                  </div>
                  
                  <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-12 md:pt-0">
                      {/* Left Content (Benefits) */}
                      <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                          {[
                              { title: "24/7 Emergency", desc: "Experts on hand 24/7 to carry out first-rate repairs." },
                              { title: "Trustworthy", desc: "A reputation built on honesty and transparent pricing." },
                              { title: "Any Make/Model", desc: "Qualified to repair virtually any boiler system." }
                          ].map((card, i) => (
                              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#F2CF51]">
                                  <h4 className="font-black text-[#12416B] uppercase mb-1 text-sm md:text-base">{card.title}</h4>
                                  <p className="text-xs md:text-sm text-slate-500">{card.desc}</p>
                              </div>
                          ))}
                      </div>

                      <div className="order-1 lg:order-2 pl-0 md:pl-10">
                          {/* --- IMAGE: Repair Technician --- */}
                          <div className="w-full h-48 md:h-64 bg-slate-200 rounded-2xl mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-xl border border-white/50">
                             <Image 
                                src="/client/WhatsApp Image 2025-12-23 at 7.37.27 AM.jpeg" 
                                alt="Boiler Repair Technician" 
                                fill 
                                className="object-cover"
                             />
                          </div>
                          
                          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 tracking-tight">Boiler <span className="text-[#F2CF51]">Repairs</span></h2>
                          <div className="space-y-6 text-slate-500 text-base md:text-lg leading-relaxed">
                              <p>
                                  We specialize in boiler and central heating repair, offering a <strong>low call-out fee</strong> to diagnose the problem followed by a fixed quotation for any parts and labour required.
                              </p>
                              <p>
                                  MIR Plumbing focuses on high technical expertise and customer service: prompt appointments, plain English explanations, and neat workmanship.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* --- SECTION 3: BOILER SERVICES (Maintenance) --- */}
          <section className="relative perspective-[2000px]">
              <div className="relative bg-[#12416B] rounded-[3rem] p-8 md:p-16 text-white overflow-hidden shadow-[0_50px_100px_-20px_rgba(18,65,107,0.4)]">
                  {/* Abstract Background Patterns */}
                  <div className="absolute top-0 right-0 w-75 md:w-150 h-75 md:h-150 bg-[#F2CF51] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
                  
                  <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16">
                      <div>
                          {/* --- IMAGE: Maintenance/Service --- */}
                          <div className="w-full h-48 md:h-64 bg-white/10 rounded-2xl mb-8 relative border border-white/10 overflow-hidden shadow-xl">
                              <Image 
                                src="/client/three.jpeg" 
                                alt="Annual Boiler Service" 
                                fill 
                                className="object-cover opacity-80"
                             />
                          </div>

                          <div className="inline-block mb-4 text-[#F2CF51] font-black uppercase tracking-[0.3em] text-xs md:text-sm">Annual Maintenance</div>
                          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 tracking-tight leading-none">
                              Boiler <br/> <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F2CF51] to-white">Services</span>
                          </h2>
                          <p className="text-blue-100/70 text-base md:text-lg leading-relaxed mb-8">
                              A service on your boiler every twelve months is essential for safety and efficiency. Regular servicing prevents costly breakdowns and extends the life of your system.
                          </p>
                          <p className="text-blue-100/70 text-base md:text-lg leading-relaxed">
                              <strong>Certified Staff:</strong> As leading providers in the region, our qualified staff provide professional servicing for all makes and models throughout London and surrounding areas.
                          </p>
                      </div>

                      <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 p-8 md:p-10">
                          <h3 className="text-xl md:text-2xl font-bold uppercase italic mb-8 text-[#F2CF51]">Why Regular Service?</h3>
                          <div className="space-y-8">
                              {[
                                  { title: "Identify & Fix", text: "Catch small faults before they become major, expensive issues." },
                                  { title: "Reduce Costs", text: "A clean, efficient boiler uses less energy, lowering your bills." },
                                  { title: "Safety Checks", text: "Vital checks for Carbon Monoxide leaks to keep your family safe." },
                                  { title: "Warranty", text: "Most manufacturer warranties require an annual service record." }
                              ].map((item, i) => (
                                  <div key={i} className="flex gap-4">
                                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F2CF51] text-[#12416B] flex items-center justify-center font-black text-lg shrink-0 shadow-[0_0_15px_rgba(242,207,81,0.4)]">
                                          {i + 1}
                                      </div>
                                      <div>
                                          <h4 className="font-bold text-white uppercase tracking-wider mb-1 text-sm md:text-base">{item.title}</h4>
                                          <p className="text-xs md:text-sm text-blue-200/60">{item.text}</p>
                                      </div>
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