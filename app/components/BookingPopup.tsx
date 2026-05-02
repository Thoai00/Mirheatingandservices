"use client";

import React, { useEffect, useState, useRef } from "react";

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  "Heating and Boiler Services",
  "Gas Compliance & Safety",
  "Plumbing Services",
  "Emergency Repair",
];

export default function BookingPopup({ isOpen, onClose }: BookingPopupProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  
  // Form State
  const [name, setName] = useState(""); // New Name Field
  const [postcode, setPostcode] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

  // Submit Handler
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
          name: name, // Added Name to payload
          category: selectedCategory,
          postcode: postcode,
          phone_number: phone,
          description: description,
        }),
      });

      if (res.ok) {
        alert("Booking Request Sent!");
        // Clear form
        setName(""); // Clear Name
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
        
        {/* Close Button - Top Right */}
        <button
          onClick={onClose}
          className="absolute right-6 top-8 z-20 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all border border-slate-100 group"
        >
          <svg className="w-5 h-5 text-slate-400 group-hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Header Section */}
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
            
            {/* Custom Dropdown */}
            <div className="space-y-2" ref={dropdownRef}>
              <label className="text-[10px] font-black uppercase text-[#12416B] tracking-widest flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#F2CF51]"></span>
                Select Service
              </label>
              
              <div className="relative">
                {/* Trigger */}
                <div 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full bg-white border-2 rounded-2xl p-5 flex justify-between items-center cursor-pointer transition-all ${
                    isDropdownOpen ? 'border-[#12416B]' : 'border-slate-200'
                  }`}
                >
                  <span className={`font-bold text-sm ${selectedCategory ? 'text-[#12416B]' : 'text-slate-400'}`}>
                    {selectedCategory || "Choose a category..."}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-[#12416B] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>

                {/* Dropdown Menu */}
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

            {/* Name Input */}
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

            {/* Postcode Input */}
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

            {/* Phone Number Input with UK Country Code */}
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

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                disabled={loading}
                className="w-full py-5 bg-[#12416B] text-[#F2CF51] rounded-2xl font-black uppercase tracking-widest hover:bg-[#0d3152] transition-all transform active:scale-[0.98] shadow-lg shadow-[#12416B]/20 text-xs md:text-base disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Confirm Booking Request"}
              </button>
              <p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-4">
                Rapid response engineering team on standby
              </p>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}