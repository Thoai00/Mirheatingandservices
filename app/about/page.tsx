import Image from "next/image";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

export const metadata = {
  title: "About MIR Plumbing & Heating | Trusted UK Company",
  description: "Learn about our history, our team of qualified engineers, and our commitment to customer satisfaction.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#E9EDF2] overflow-x-hidden font-sans text-[#12416B]">
      
      {/* --- NAVBAR --- */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-40 pb-20 px-6 mt-10">
        
        {/* --- HERO SECTION --- */}
        <div className="max-w-7xl mx-auto mb-24 relative">
          <div className="relative z-10">
              <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#F2CF51] text-[#12416B] font-black uppercase tracking-widest text-xs shadow-lg">
                  Est. 1995
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-[#12416B] mb-8 tracking-tighter drop-shadow-xl">
              ABOUT <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#12416B] to-[#F2CF51]">MIR PLUMBING</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-500 max-w-3xl leading-relaxed border-l-8 border-[#F2CF51] pl-6 md:pl-8 mb-10">
                With over 30 years of experience, MIR Plumbing & Heating has established itself as a leader in the industry, built on trust, transparency, and technical excellence across the UK.
              </p>
          </div>
          {/* Background decorative blob */}
          <div className="absolute top-0 right-0 w-75 md:w-125 h-75 md:h-125 bg-[#12416B]/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto space-y-24">

          {/* --- SECTION 1: WHO WE ARE (3D Card) --- */}
          <section className="relative group perspective-[2000px]">
              <div className="relative bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(18,65,107,0.15)] border border-white transform transition-transform duration-500 hover:rotate-x-1 overflow-hidden">
                  
                  <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                      {/* Image Section */}
                      <div className="relative w-full h-64 md:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
                          <Image 
                             src="/client/one.jpeg" 
                             alt="MIR Plumbing Team" 
                             fill 
                             className="object-cover"
                          />
                          {/* Badge */}
                          <div className="absolute bottom-6 right-6 w-24 h-24 bg-[#F2CF51] rounded-full flex flex-col items-center justify-center text-[#12416B] font-black shadow-lg animate-bounce-slow">
                              <span className="text-2xl leading-none">30</span>
                              <span className="text-[10px] uppercase tracking-wider">Years</span>
                          </div>
                      </div>

                      {/* Content Section */}
                      <div>
                          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 tracking-tight">Our <span className="text-[#F2CF51]">Heritage</span></h2>
                          <div className="space-y-6 text-slate-500 text-base md:text-lg leading-relaxed">
                              <p>
                                Founded in the heart of the community, MIR Plumbing began as a small, family-run operation dedicated to fixing leaks and keeping homes warm during British winters.
                              </p>
                              <p>
                                Today, we have expanded into a premier building and engineering firm. Despite our growth, we have never lost sight of our core values: <strong>honesty, punctuality, and pride in our work</strong>. We treat every property—whether it’s a studio flat in London or a detached home in Essex—with the same level of respect.
                              </p>
                              <p>
                                We are fully insured, <strong>Gas Safe Registered</strong>, and committed to British Standards in every installation we undertake.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* --- SECTION 2: WHY CHOOSE US (Grid) --- */}
          <section>
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-black uppercase text-[#12416B] mb-4">The MIR <span className="text-[#F2CF51]">Difference</span></h2>
               <p className="text-slate-500 max-w-2xl mx-auto text-lg">We don't just fix problems; we provide long-term solutions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Gas Safe Registered", icon: "🔥", desc: "Our engineers hold full accreditation, ensuring your boiler and gas appliances are legally and safely maintained." },
                 { title: "Transparent Pricing", icon: "💷", desc: "No hidden fees or surprise costs. We provide clear, written quotes before any work begins." },
                 { title: "Local Experts", icon: "📍", desc: "Based locally, we understand the specific plumbing and heating needs of UK properties and infrastructure." }
               ].map((item, i) => (
                  <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group text-center">
                      <div className="w-20 h-20 bg-[#12416B] rounded-full mx-auto flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-[#F2CF51]">
                         {item.icon}
                      </div>
                      <h3 className="text-xl font-black uppercase text-[#12416B] mb-4">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
          </section>

          {/* --- SECTION 3: ACCREDITATIONS (Dark Section) --- */}
          <section className="relative perspective-[2000px]">
              <div className="relative bg-[#12416B] rounded-[3rem] p-10 md:p-20 text-white overflow-hidden shadow-[0_50px_100px_-20px_rgba(18,65,107,0.4)] text-center">
                  {/* Abstract Background Patterns */}
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                  
                  <div className="relative z-10">
                      <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 tracking-tight">
                          Certified <span className="text-[#F2CF51]">&</span> Qualified
                      </h2>
                      <p className="text-blue-100/70 text-lg max-w-3xl mx-auto mb-12">
                          We take safety seriously. Our team undergoes rigorous training and annual assessments to ensure we remain at the forefront of the industry standards.
                      </p>
                      
                      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                          {["Gas Safe Registered", "G3 Unvented Certified", "City & Guilds Qualified", "Public Liability Insured"].map((tag, i) => (
                              <div key={i} className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 font-bold uppercase tracking-widest text-sm hover:bg-[#F2CF51] hover:text-[#12416B] transition-colors cursor-default">
                                  {tag}
                              </div>
                          ))}
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