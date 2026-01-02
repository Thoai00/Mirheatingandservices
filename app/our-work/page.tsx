import Image from "next/image";
import Navbar from "../components/Navbar"; // Adjust path based on your folder structure
import Footer from "../components/Footer";

export const metadata = {
  title: "Our Portfolio | Recent Plumbing & Heating Projects",
  description: "View our gallery of recent installations, bathroom renovations, and boiler repairs across the UK.",
};

export default function OurWorkPage() {
  // Simulating a list of projects using the same image
  const projects = Array(9).fill({
    image: "/client/one.jpeg",
  });

  return (
    <div className="min-h-screen bg-[#E9EDF2] overflow-x-hidden font-sans text-[#12416B]">
      
      {/* --- NAVBAR --- */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-40 pb-20 px-6 mt-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="max-w-7xl mx-auto mb-20 text-center md:text-left">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#F2CF51] text-[#12416B] font-black uppercase tracking-widest text-xs shadow-lg">
              Portfolio
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#12416B] mb-8 tracking-tighter drop-shadow-xl">
            OUR <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#12416B] to-[#F2CF51]">WORK</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-500 max-w-3xl leading-relaxed border-l-8 border-[#F2CF51] pl-6 md:pl-8">
            A showcase of our recent projects and craftsmanship. From luxury bathroom suites to complex heating system installations, we take pride in every job.
          </p>
        </div>

        {/* --- PORTFOLIO GRID --- */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {projects.map((project, i) => (
              <div 
                key={i} 
                className="group relative h-100 w-full rounded-[2.5rem] overflow-hidden bg-white shadow-[0_20px_40px_-10px_rgba(18,65,107,0.2)] border-4 border-white hover:border-[#F2CF51] transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Only - No Text Overlay */}
                <Image 
                  src={project.image} 
                  alt={`Project ${i + 1}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* --- LOAD MORE BUTTON --- */}
          <div className="mt-20 text-center">
            <button className="px-10 py-4 rounded-full border-2 border-[#12416B] text-[#12416B] font-bold uppercase tracking-widest hover:bg-[#12416B] hover:text-white transition-colors duration-300">
              Load More Projects
            </button>
          </div>
        </div>

      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}