import Image from "next/image";
import Navbar from "../components/Navbar"; // Adjust path based on folder structure
import Footer from "../components/Footer";

export const metadata = {
  title: "Home Improvement & Renovation Services | Builders & Landscapers UK",
  description: "Complete home improvement services: Extensions, Kitchens, Bathrooms, Landscaping, Driveways, and Painting. We deliver the 100% wow factor.",
};

export default function HomeImprovementPage() {
  
  // Data structure without icons
  const serviceCategories = [
    {
      title: "Building & Extensions",
      items: ["Builders & Building Services", "Extensions", "Garage Conversions", "Porches", "Log Cabins & Homes", "Plastering", "Property Refurbishment"]
    },
    {
      title: "Landscaping & Gardens",
      items: ["Landscape Contractors", "Artificial Lawns", "Hard Landscaping", "Decking & Turfing", "Pond Construction", "Garden Structures", "Sheds & Bases", "Drystone Walling"]
    },
    {
      title: "Patios & Driveways",
      items: ["Driveway Installation", "Patio Installation", "Natural Stone Surfacing", "Porous Surfacing", "Guttering Repair Services"]
    },
    {
      title: "Kitchens & Bathrooms",
      items: ["Kitchen Installation & Refurb", "Worktops & Tiling", "Bathroom Installation", "Wet Rooms & Showers", "Accessible Bathrooms", "Bathroom Design Services"]
    },
    {
      title: "Decorating & Maintenance",
      items: ["Painters & Decorators", "Interior & Exterior Decorating", "Wallpapering", "Handyman Services", "Home Maintenance", "Plumbing Services"]
    }
  ];

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
                  Total Property Care
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-[#12416B] mb-8 tracking-tighter drop-shadow-xl">
              HOME <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#12416B] to-[#F2CF51]">IMPROVEMENT</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-500 max-w-3xl leading-relaxed border-l-8 border-[#F2CF51] pl-6 md:pl-8 mb-10">
                Beyond plumbing, we offer high-quality home improvement services to add value and comfort to your property. From extensions to landscaping, we deliver a reliable professional service.
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

          {/* --- SECTION 1: THE WOW FACTOR (01 Curve Style) --- */}
          <section className="relative group perspective-[2000px]">
              <div className="relative bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(18,65,107,0.15)] border border-white transform transition-transform duration-500 hover:rotate-x-1 overflow-hidden">
                  
                  {/* 01 CURVED INDICATOR */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 md:w-56 md:h-56 bg-[#F2CF51]/10 rounded-full blur-2xl z-0"></div>
                  <div className="absolute top-0 right-0 bg-[#F2CF51] w-24 h-24 md:w-32 md:h-32 rounded-bl-[3rem] flex items-center justify-center shadow-lg z-10">
                      <span className="text-[#12416B] font-black text-4xl md:text-5xl">01</span>
                  </div>
                  
                  <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-8 md:pt-0">
                      <div>
                          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 tracking-tight">The <span className="text-[#F2CF51]">Wow Factor</span></h2>
                          <div className="space-y-6 text-slate-500 text-base md:text-lg leading-relaxed">
                              <p className="text-xl font-bold text-[#12416B] italic">
                                "I give 100% wow factor to every job, and have a great customer satisfaction record."
                              </p>
                              <p>
                                We deliver a reliable and professional service providing a clean and tidy workplace and great customer relations. Whether it's a small repair or a large extension, our standards remain impeccably high.
                              </p>
                          </div>
                      </div>
                      
                      {/* IMAGE SECTION */}
                      <div className="relative w-full h-64 md:h-80 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                          <Image 
                             src="/client/one.jpeg" 
                             alt="Home Improvement Renovation" 
                             fill 
                             className="object-cover"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-[#12416B]/80 to-transparent flex items-end p-8">
                             <div className="text-white">
                                <div className="font-bold uppercase tracking-widest text-sm text-[#F2CF51]">Transforming Homes</div>
                                <div className="font-black text-2xl">Quality Guaranteed</div>
                             </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* --- SECTION 2: WHAT WE DO (Grid) --- */}
          <section>
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-black uppercase text-[#12416B] mb-4">What <span className="text-[#F2CF51]">We Do</span></h2>
               <p className="text-slate-500 max-w-2xl mx-auto text-lg">Comprehensive building, landscaping, and renovation services under one roof.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {serviceCategories.map((cat, i) => (
                  <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                      <h3 className="text-xl font-black uppercase text-[#12416B] mb-6 border-b-4 border-[#F2CF51] pb-4 inline-block">{cat.title}</h3>
                      <ul className="space-y-3">
                         {cat.items.map((item, idx) => (
                             <li key={idx} className="flex items-start gap-3 text-slate-500 text-sm font-medium">
                                <div className="w-2 h-2 rounded-full bg-[#F2CF51] mt-1.5 shrink-0"></div>
                                {item}
                             </li>
                         ))}
                      </ul>
                  </div>
               ))}
            </div>
          </section>

          {/* --- SECTION 3: FEATURED SERVICES (Detailed List) --- */}
          <section className="relative perspective-[2000px]">
              <div className="relative bg-[#12416B] rounded-[3rem] p-8 md:p-16 text-white overflow-hidden shadow-[0_50px_100px_-20px_rgba(18,65,107,0.4)]">
                  {/* Abstract Background Patterns */}
                  <div className="absolute top-0 right-0 w-75 md:w-150 h-75 md:h-150 bg-[#F2CF51] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
                  
                  <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16">
                      <div className="space-y-8">
                          <div>
                            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tight leading-none">
                                Builders & <br/> <span className="text-[#F2CF51]">Renovators</span>
                            </h2>
                            <p className="text-blue-100/70 text-base md:text-lg leading-relaxed">
                                From <strong>Garage Conversions</strong> to complete <strong>House Extensions</strong>, our building team manages the entire project. We also specialize in specialized installations like <strong>Log Cabins</strong> and <strong>Porches</strong>.
                            </p>
                          </div>
                          
                          <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                              <h3 className="font-bold text-[#F2CF51] uppercase tracking-widest mb-2">Kitchens & Bathrooms</h3>
                              <p className="text-sm text-blue-100/80">
                                  We are experts in Kitchen and Bathroom refurbishment. This includes tiling, worktop fitting, wet rooms, and electric showers.
                              </p>
                          </div>
                      </div>

                      <div className="flex flex-col gap-6">
                          {/* Landscaping Card */}
                          <div className="bg-white text-[#12416B] p-8 rounded-[2.5rem] shadow-xl transform lg:translate-x-8">
                              <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                                  Landscaping
                              </h3>
                              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-semibold text-slate-600">
                                  <span>• Patios</span>
                                  <span>• Driveways</span>
                                  <span>• Decking</span>
                                  <span>• Artificial Lawns</span>
                                  <span>• Ponds</span>
                                  <span>• Shed Bases</span>
                              </div>
                          </div>

                          {/* Decorating Card */}
                          <div className="bg-[#F2CF51] text-[#12416B] p-8 rounded-[2.5rem] shadow-xl transform lg:-translate-x-4">
                              <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                                  Decorating
                              </h3>
                              <p className="text-sm font-bold mb-3 opacity-80">Interior & Exterior Specialists</p>
                              <div className="flex flex-wrap gap-2">
                                  {["Painting", "Wallpapering", "Plastering", "Tiling"].map((tag, i) => (
                                      <span key={i} className="px-3 py-1 bg-[#12416B]/10 rounded-full text-xs font-bold uppercase">{tag}</span>
                                  ))}
                              </div>
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