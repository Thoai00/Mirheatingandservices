"use client";

import React, { useEffect, useState, useRef } from "react";
import { servicesData } from "../components/mockdata";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose, IoChevronDown } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { BsPerson, BsChatLeftText } from "react-icons/bs";
import { HiOutlinePhone } from "react-icons/hi2";
import { PiEngine } from "react-icons/pi";
import { HiShieldCheck } from "react-icons/hi2";

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = servicesData.map((s) => `${s.title} ${s.subtitle}`.trim());

const BOILER_KEYWORDS = ["boiler", "supply", "installation"];
const WHATSAPP_NUMBER = "447951803179";

function isBoilerCategory(cat: string) {
  const lower = cat.toLowerCase();
  return BOILER_KEYWORDS.some((kw) => lower.includes(kw));
}

// ─── Individual payment method card ──────────────────────────────────────────
interface PaymentCardProps {
  label: string;
  logo: React.ReactNode;
  bg: string;
}
function PaymentCard({ label, logo, bg }: PaymentCardProps) {
  return (
    <div
      title={label}
      className="relative flex flex-col items-center justify-center gap-1.5 rounded-2xl px-3 py-2.5 cursor-default select-none transition-transform hover:-translate-y-0.5 shadow-sm"
      style={{ background: bg, minWidth: 56 }}
    >
      {logo}
    </div>
  );
}

// ─── Full payment section ─────────────────────────────────────────────────────
function PaymentBadges() {
  const methods = [
    {
      label: "Visa",
      bg: "linear-gradient(135deg,#1A1F71 0%,#2541b2 100%)",
      logo: (
        <span className="font-black text-white text-sm tracking-[0.18em] italic leading-none drop-shadow">
          VISA
        </span>
      ),
    },
    {
      label: "Mastercard",
      bg: "linear-gradient(135deg,#1a1a1a 0%,#333 100%)",
      logo: (
        <div className="relative flex items-center justify-center w-8 h-5 flex-shrink-0">
          <span className="absolute left-0 w-5 h-5 rounded-full bg-[#EB001B] opacity-95" />
          <span className="absolute right-0 w-5 h-5 rounded-full bg-[#F79E1B] opacity-95" />
          <span className="absolute left-[7px] right-[7px] top-0 bottom-0 bg-[#FF5F00] opacity-80" />
        </div>
      ),
    },
    {
      label: "PayPal",
      bg: "linear-gradient(135deg,#003087 0%,#0070ba 100%)",
      logo: (
        <span className="font-black text-sm leading-none">
          <span className="text-[#79c6f0]">Pay</span>
          <span className="text-white">Pal</span>
        </span>
      ),
    },
    {
      label: "Google Pay",
      bg: "linear-gradient(135deg,#1c1c1e 0%,#2e2e2e 100%)",
      logo: (
        <span className="font-black text-sm leading-none">
          <span className="text-[#4285F4]">G</span>
          <span className="text-white"> Pay</span>
        </span>
      ),
    },
    {
      label: "Apple Pay",
      bg: "linear-gradient(135deg,#1c1c1e 0%,#313131 100%)",
      logo: (
        <div className="flex items-center gap-1.5">
          <svg className="w-3 h-3.5 fill-white flex-shrink-0" viewBox="0 0 814 1000">
            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.6-49 192.5-49 30.8 0 134.2 2.6 198.3 99zM540 60.6c-12.8 56.1-56.4 100.4-100.4 100.4-5.1 0-10.3-.6-15.4-1.9 1.3-53.5 47.1-104.3 103.5-117.3 5.1 18.1 12.3 18.8 12.3 18.8z" />
          </svg>
          <span className="font-black text-white text-sm">Pay</span>
        </div>
      ),
    },
    {
      label: "Pay On-Site",
      bg: "linear-gradient(135deg,#F2CF51 0%,#d4a800 100%)",
      logo: (
        <span className="font-black text-[#0e2a45] text-[10px] uppercase tracking-wide whitespace-nowrap leading-none">
          On-Site
        </span>
      ),
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 space-y-3">
      {/* Header row */}
      <div className="flex items-center gap-2">
        <HiShieldCheck className="text-[#4ADE80] text-base flex-shrink-0" />
        <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#12416B]/60 flex-1">
          Secure Payments — We Accept
        </span>
        {/* SSL badge */}
        <div className="flex items-center gap-1 bg-[#12416B]/6 rounded-full px-2 py-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
          <span className="text-[8px] font-black text-[#12416B]/60 uppercase tracking-wider">SSL</span>
        </div>
      </div>

      {/* Cards row */}
      <div className="flex flex-wrap gap-2">
        {methods.map((m) => (
          <PaymentCard key={m.label} {...m} />
        ))}
      </div>

      {/* Footnote */}
      <p className="text-[9px] text-slate-400 font-semibold leading-tight">
        All transactions are encrypted and processed securely.
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function BookingPopup({ isOpen, onClose }: BookingPopupProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [boilerModel, setBoilerModel] = useState("");

  const showBoilerFields = isBoilerCategory(selectedCategory);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setIsDropdownOpen(false);
    if (!isBoilerCategory(cat)) setBoilerModel("");
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `New Booking Request`,
      ``,
      `Service: ${selectedCategory || "Not selected"}`,
      `Name: ${name || "Not provided"}`,
      `Address: ${address || "Not provided"}`,
      `Phone: +44${phone || "Not provided"}`,
      ...(showBoilerFields ? [`⚙️ Boiler Model: ${boilerModel || "Not provided"}`] : []),
      `Issue: ${description || "No description provided"}`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const validateForm = () => {
    if (!selectedCategory) { alert("Please select a service category."); return false; }
    if (!name.trim()) { alert("Please enter your full name."); return false; }
    if (!address.trim()) { alert("Please enter your address."); return false; }
    if (!phone.trim()) { alert("Please enter your phone number."); return false; }
    if (showBoilerFields && !boilerModel.trim()) { alert("Please enter the boiler model."); return false; }
    return true;
  };

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) return;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#12416B]/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-7 z-20 p-2.5 rounded-xl bg-slate-50 hover:bg-red-50 border border-slate-100 group transition-all"
        >
          <IoClose className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />
        </button>

        {/* Header */}
        <div className="pt-10 pb-6 px-8 text-center border-b border-slate-100">
          <h2 className="text-3xl font-black text-[#12416B] italic tracking-tighter uppercase">
            BOOK <span className="text-[#F2CF51]">ENGINEER</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
            <p className="text-[#8E9AAF] text-[10px] font-black uppercase tracking-[0.15em]">
              Essex & London Coverage
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
          <div className="space-y-5">

            {/* ── Service Dropdown ── */}
            <div className="space-y-2" ref={dropdownRef}>
              <label className="text-[10px] font-black uppercase text-[#12416B] tracking-widest flex items-center gap-2">
                <MdMiscellaneousServices className="text-[#F2CF51] text-base" />
                Select Service
              </label>
              <div className="relative">
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full bg-white border-2 rounded-2xl px-5 py-4 flex justify-between items-center cursor-pointer transition-all ${
                    isDropdownOpen ? "border-[#12416B]" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span className={`font-bold text-sm ${selectedCategory ? "text-[#12416B]" : "text-slate-400"}`}>
                    {selectedCategory || "Choose a service..."}
                  </span>
                  <IoChevronDown
                    className={`text-[#12416B] text-lg transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </div>

                {isDropdownOpen && (
                  <div className="absolute z-50 left-0 right-0 top-[calc(100%+6px)] bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="bg-slate-50 px-5 py-3 border-b border-slate-100">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Available Services
                      </span>
                    </div>
                    {categories.map((cat, i) => (
                      <div
                        key={cat}
                        onClick={() => handleCategorySelect(cat)}
                        className={`px-5 py-3.5 flex items-center gap-3 cursor-pointer transition-colors hover:bg-blue-50 group ${
                          i !== categories.length - 1 ? "border-b border-slate-50" : ""
                        } ${selectedCategory === cat ? "bg-blue-50" : ""}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F2CF51] flex-shrink-0" />
                        <span className="text-sm font-semibold text-[#12416B] group-hover:font-bold transition-all">
                          {cat}
                        </span>
                        {selectedCategory === cat && (
                          <span className="ml-auto text-[10px] font-black text-[#12416B]">✓</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ── Boiler Extra Fields ── */}
            {showBoilerFields && (
              <div className="rounded-2xl border-2 border-[#F2CF51]/40 bg-amber-50/50 p-5 space-y-4">
                <div className="flex items-center gap-2">
                  <PiEngine className="text-[#12416B] text-lg flex-shrink-0" />
                  <span className="text-[10px] font-black uppercase text-[#12416B] tracking-widest">
                    Boiler Installation Details
                  </span>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-[#12416B] tracking-widest">
                    Boiler Model
                  </label>
                  <input
                    type="text"
                    value={boilerModel}
                    onChange={(e) => setBoilerModel(e.target.value)}
                    placeholder="E.G. Worcester Bosch 4000"
                    className="w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#12416B] font-bold text-sm transition-all placeholder:text-slate-300"
                  />
                  <p className="text-[9px] text-slate-400 font-semibold pl-1">
                    Enter your current or preferred boiler model
                  </p>
                </div>
              </div>
            )}

            {/* ── Full Name ── */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-[#12416B] tracking-widest flex items-center gap-2">
                <BsPerson className="text-[#F2CF51] text-base" />
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="E.g. John Smith"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#12416B] focus:bg-white font-bold text-sm transition-all placeholder:text-slate-300"
              />
            </div>

            {/* ── Address ── */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-[#12416B] tracking-widest">
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="E.g. 12 High Street, Chelmsford, CM1 1AA"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#12416B] focus:bg-white font-bold text-sm transition-all placeholder:text-slate-300"
              />
            </div>

            {/* ── Phone ── */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-[#12416B] tracking-widest flex items-center gap-2">
                <HiOutlinePhone className="text-[#F2CF51] text-base" />
                Phone Number
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-5 flex items-center gap-2 border-r border-slate-200 pr-3 pointer-events-none">
                  <span className="text-sm">🇬🇧</span>
                  <span className="text-sm font-black text-[#12416B]">+44</span>
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="7123 456789"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 pl-24 focus:outline-none focus:border-[#12416B] focus:bg-white font-bold text-sm transition-all placeholder:text-slate-300"
                />
              </div>
            </div>

            {/* ── Description ── */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-[#12416B] tracking-widest flex items-center gap-2">
                <BsChatLeftText className="text-[#F2CF51] text-sm" />
                Describe the Issue
              </label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Briefly describe the fault or project requirements..."
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#12416B] focus:bg-white font-medium text-sm transition-all resize-none placeholder:text-slate-300"
              />
            </div>

            {/* ── Payment Badges ── */}
            <div className="pt-1">
              <PaymentBadges />
            </div>

            {/* ── WhatsApp Button ── */}
            <div className="pt-1">
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="w-full py-4 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#1ebe5d] active:scale-[0.98] transition-all shadow-lg shadow-[#25D366]/30 text-sm flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-2xl" />
                Book via WhatsApp
              </button>
              <p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-wider pt-3">
                Rapid response engineering team on standby
              </p>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}</style>
    </div>
  );
}