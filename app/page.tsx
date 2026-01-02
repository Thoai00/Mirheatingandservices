import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import RecentWorks from "./components/RecentWorks";
import ProfessionalStandards from "./components/ProfessionalStandards";
import PartnersSection from "./components/PartnersSection";
import ProtocolSection from "./components/ProtocolSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import JsonLdSchema from "./components/JsonLdSchema";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E9EDF2] font-sans text-[#12416B] antialiased">
      {/* --- INJECT CSS FOR ANIMATIONS --- */}
      <style>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left 30s linear infinite; }
        .animate-scroll-right { animation: scroll-right 30s linear infinite; }
      `}</style>

      {/* --- SEO SCHEMA --- */}
      <JsonLdSchema />

      {/* --- PAGE CONTENT --- */}
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <RecentWorks />
      <ProfessionalStandards />
      <PartnersSection />
      <ProtocolSection />
      <AboutSection />
      <Footer />
    </div>
  );
}