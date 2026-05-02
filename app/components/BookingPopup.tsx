"use client";

import React, { useEffect, useState, useRef } from "react";
import { servicesData } from "../components/mockdata";

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

// Build categories from mockData
const categories = servicesData.map(
  (s) => `${s.title} ${s.subtitle}`.trim()
);

const WHATSAPP_NUMBER = "447951803179"; // 🔁 Replace with your real WhatsApp number (no + or spaces)

export default function BookingPopup({ isOpen, onClose }: BookingPopupProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Form State
  const [name, setName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Build WhatsApp message from form fields
  const buildWhatsAppMessage = () => {
    const lines = [
      `New Booking Request`,
      ``,
      ` Service: ${selectedCategory || "Not selected"}`,
      ` Name: ${name || "Not provided"}`,
      ` Area/Postcode: ${postcode || "Not provided"}`,
      ` Phone: +44${phone || "Not provided"}`,
      ` Issue: ${description || "No description provided"}`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  // WhatsApp submit — validates then opens WhatsApp
  const handleWhatsAppSubmit = () => {
    if (!selectedCategory) {
      alert("Please select a service category.");
      return;
    }
    if (!name.trim()) {
      alert("Please enter your full name.");
      return;
    }
    if (!postcode.trim()) {
      alert("Please enter your postcode.");
      return;
    }
    if (!phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`;
    window.open(url, "_blank");
  };

  // Regular form submit (API)
  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory) {
      alert("Please select a service category.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          category: selectedCategory,
          postcode,
          phone_number: phone,
          description,
        }),
      });

      if (res.ok) {
        alert("Booking Request Sent!");
        setName("");
        setPostcode("");
        setPhone("");
        setDescription("");
        setSelectedCategory("");
        onClose();
      } else {
        alert("Failed to send request. Please try again.");
      }
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#12416B]/90 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      ></div>

      {/* Popup Container */}
      <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in slide-in-from-bottom-4 duration-400 flex flex-col max-h-[90vh]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-8 z-20 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all border border-slate-100 group"
        >
          <svg className="w-5 h-5 text-slate-400 group-hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Header */}
        <div className="pt-10 pb-6 px-8 text-center border-b border-slate-50">
          <h2 className="text-3xl font-black text-[#12416B] italic tracking-tighter uppercase">
            BOOK <span className="text-[#F2CF51]">ENGINEER</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
            <p className="text-[#8E9AAF] text-[10px] font-black uppercase tracking-[0.15em]">
              Essex & London Coverage
            </p>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
          <form className="space-y-6" onSubmit={handleBookingSubmit}>

            {/* Service Dropdown — from mockData */}
            <div className="space-y-2" ref={dropdownRef}>
              <label className="text-[10px] font-black uppercase text-[#12416B] tracking-widest flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#F2CF51]"></span>
                Select Service
              </label>
              <div className="relative">
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full bg-white border-2 rounded-2xl p-5 flex justify-between items-center cursor-pointer transition-all ${
                    isDropdownOpen ? "border-[#12416B]" : "border-slate-200"
                  }`}
                >
                  <span className={`font-bold text-sm ${selectedCategory ? "text-[#12416B]" : "text-slate-400"}`}>
                    {selectedCategory || "Choose a category..."}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#12416B] transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>

                {isDropdownOpen && (
                  <div className="absolute z-50 left-0 right-0 top-[110%] bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-[#D1D5DB] px-5 py-3 text-[#374151] font-bold text-sm">
                      Choose a category...
                    </div>
                    {categories.map((cat) => (
                      <div
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsDropdownOpen(false);
                        }}
                        className="px-5 py-4 text-[#12416B] font-semibold text-sm hover:bg-slate-50 border-b border-slate-50 cursor-pointer transition-colors last:border-0"
                      >
                        {cat}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-[#12416B] tracking-widest ml-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="E.G. JOHN SMITH"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-5 focus:outline-none focus:border-[#12416B] focus:bg-white font-bold text-sm transition-all uppercase placeholder:text-slate-300"
              />
            </div>

            {/* Postcode */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-[#12416B] tracking-widest ml-1">
                Your Area/Postcode
              </label>
              <input
                type="text"
                required
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="E.G. CM1"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-5 focus:outline-none focus:border-[#12416B] focus:bg-white font-bold text-sm transition-all uppercase placeholder:text-slate-300"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-[#12416B] tracking-widest ml-1">
                Phone Number
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-5 flex items-center gap-2 border-r border-slate-200 pr-3 pointer-events-none">
                  <span className="text-sm">🇬🇧</span>
                  <span className="text-sm font-bold text-[#12416B]">+44</span>
                </div>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="7123 456789"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-5 pl-24 focus:outline-none focus:border-[#12416B] focus:bg-white font-bold text-sm transition-all placeholder:text-slate-300"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-[#12416B] tracking-widest ml-1">
                Describe the Issue
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Please briefly describe the fault or project requirements..."
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-5 focus:outline-none focus:border-[#12416B] focus:bg-white font-medium text-sm transition-all resize-none placeholder:text-slate-300"
              ></textarea>
            </div>

            {/* ── SUBMIT BUTTONS ── */}
            <div className="pt-2 space-y-3">

              {/* Primary: Book via API */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-[#12416B] text-[#F2CF51] rounded-2xl font-black uppercase tracking-widest hover:bg-[#0d3152] transition-all transform active:scale-[0.98] shadow-lg shadow-[#12416B]/20 text-xs md:text-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Confirm Booking Request"}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-100"></div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">or</span>
                <div className="flex-1 h-px bg-slate-100"></div>
              </div>

              {/* WhatsApp Button */}
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="w-full py-5 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#1ebe5d] transition-all transform active:scale-[0.98] shadow-lg shadow-[#25D366]/20 text-xs md:text-sm flex items-center justify-center gap-3"
              >
                {/* WhatsApp SVG icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book via WhatsApp
              </button>

              <p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                Rapid response engineering team on standby
              </p>
            </div>
          </form>
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