"use client";

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "447951803179";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'm interested in the Summer Landlord Gas Safety Certificate (CP12) offer. Please get in touch with me."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

/* ── Animated Sun SVG ── */
function SunIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin-slow drop-shadow-[0_0_18px_rgba(251,191,36,0.9)] w-12 h-12 sm:w-16 sm:h-16"
      style={{ animation: "spin 12s linear infinite" }}
    >
      {/* Rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <line
          key={i}
          x1="32" y1="4" x2="32" y2="12"
          stroke="#FBBF24"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${deg} 32 32)`}
          opacity="0.85"
        />
      ))}
      {/* Core */}
      <circle cx="32" cy="32" r="14" fill="#FBBF24" />
      <circle cx="32" cy="32" r="10" fill="#FEF08A" />
      <circle cx="28" cy="28" r="3" fill="#FDE047" opacity="0.6" />
    </svg>
  );
}

/* ── Wave SVG divider ── */
function Wave({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-6 sm:h-8"
      style={flip ? { transform: "scaleY(-1)" } : {}}
    >
      <path
        d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
        fill="rgba(255,255,255,0.15)"
      />
    </svg>
  );
}

export default function SummerPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <>
      {/* ── Keyframes ── */}
      <style>{`
        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0.88) translateY(24px); }
          70%  { transform: scale(1.02) translateY(-3px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes popOut {
          0%   { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.9) translateY(16px); }
        }
        @keyframes floatUp {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-6px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(34,197,94,0.55); }
          70%  { box-shadow: 0 0 0 14px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
        @keyframes twinkle {
          0%,100% { opacity:1; transform: scale(1); }
          50%     { opacity:0.3; transform: scale(0.6); }
        }
        .popup-in  { animation: popIn  0.45s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .popup-out { animation: popOut 0.38s ease-in forwards; }
        .float-sun { animation: floatUp 3s ease-in-out infinite; }
        .shimmer-btn {
          background: linear-gradient(90deg, #25d366 0%, #4ade80 40%, #25d366 60%, #4ade80 100%);
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
        }
        .pulse-btn { animation: pulse-ring 2s ease-out infinite; }
        .star-1 { animation: twinkle 1.8s ease-in-out infinite 0.0s; }
        .star-2 { animation: twinkle 1.8s ease-in-out infinite 0.6s; }
        .star-3 { animation: twinkle 1.8s ease-in-out infinite 1.2s; }
      `}</style>

      {/* ── Backdrop ── */}
      <div
        className="fixed inset-0 z-[9998] flex items-center justify-center p-4 sm:p-6 md:p-8"
        style={{ backgroundColor: "rgba(18, 65, 107, 0.65)", backdropFilter: "blur(6px)" }}
        onClick={handleClose}
      >
        {/* ── Popup Card ── */}
        <div
          className={`relative max-w-sm sm:max-w-md md:max-w-lg w-full max-h-[85vh] sm:max-h-[none] overflow-y-auto sm:overflow-visible rounded-3xl shadow-2xl ${closing ? "popup-out" : "popup-in"}`}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "linear-gradient(145deg, #12416B 0%, #1D6FA8 55%, #FEF08A 100%)",
          }}
        >
          {/* ── Decorative sun and sky blobs ── */}
          <div className="absolute top-[-30px] right-[-30px] w-36 h-36 sm:w-48 sm:h-48 rounded-full opacity-30 pointer-events-none blur-xl bg-yellow-300" />
          <div className="absolute bottom-[-30px] left-[-30px] w-32 h-32 sm:w-40 sm:h-40 rounded-full opacity-40 pointer-events-none blur-lg bg-sky-300" />

          {/* ── Top wave ── */}
          <Wave />

          {/* ── Close button ── */}
          <button
            onClick={handleClose}
            aria-label="Close"
            className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* ── Content ── */}
          <div className="px-5 sm:px-7 pb-6 sm:pb-7 pt-2 text-center text-white">

            {/* Sun + Stars */}
            <div className="relative flex justify-center mb-2 sm:mb-3">
              {/* Twinkle stars */}
              <span className="star-1 absolute left-4 sm:left-6 top-1 text-yellow-300 text-lg sm:text-xl select-none">✦</span>
              <span className="star-2 absolute right-6 sm:right-8 top-0 text-yellow-200 text-xs sm:text-sm select-none">★</span>
              <span className="star-3 absolute left-10 sm:left-14 bottom-0 text-yellow-300 text-[10px] sm:text-xs select-none">✦</span>
              <div className="float-sun scale-90 sm:scale-100">
                <SunIcon />
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-yellow-300/20 border border-yellow-300/40 rounded-full px-3 py-0.5 sm:px-4 sm:py-1 mb-3 sm:mb-4">
              <span className="text-yellow-100 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.22em]">
                ☀ Summer Special Offer
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-white font-black leading-tight mb-1"
              style={{
                fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                fontFamily: "'Georgia', serif",
                letterSpacing: "-0.01em",
              }}
            >
              Summer Offer for<br />
              <span
                style={{
                  background: "linear-gradient(90deg, #FDE047, #FEF08A, #FDE047)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Landlords
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-sky-200 text-xs sm:text-sm font-bold mb-1 uppercase tracking-widest leading-relaxed">
              Landlord Gas Safety Certificate
            </p>
            <p className="text-white/80 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] mb-4 sm:mb-5">
              CP12 — Annual Inspection & Certificate
            </p>

            {/* Divider with sun motif */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent" />
              <span className="text-yellow-300 text-sm sm:text-base">☀</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent" />
            </div>

            {/* Body copy */}
            <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 px-1 sm:px-2 text-justify sm:text-center">
              Keep your property legal, safe, and compliant this summer. Our Gas Safe registered engineers provide fast, professional CP12 inspections across Essex &amp; the surrounding areas — giving you peace of mind all year round.
            </p>

            {/* CTA — WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn pulse-btn flex items-center justify-center gap-2 w-full py-3 sm:py-4 rounded-2xl text-white font-black text-xs sm:text-[15px] tracking-wide shadow-lg shadow-green-900/40 hover:opacity-90 transition-opacity"
              style={{ textDecoration: "none" }}
            >
              {/* WhatsApp icon */}
              <svg width="18" height="18" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M16 2C8.27 2 2 8.27 2 16c0 2.47.65 4.79 1.79 6.81L2 30l7.38-1.77A13.93 13.93 0 0016 30c7.73 0 14-6.27 14-14S23.73 2 16 2zm0 25.5a11.44 11.44 0 01-5.86-1.61l-.42-.25-4.38 1.05 1.08-4.27-.28-.44A11.47 11.47 0 014.5 16C4.5 9.61 9.61 4.5 16 4.5S27.5 9.61 27.5 16 22.39 27.5 16 27.5zm6.3-8.6c-.34-.17-2.02-1-2.34-1.11-.31-.11-.54-.17-.77.17s-.88 1.11-1.08 1.34c-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.05-2.55-.28-.67-.56-.58-.77-.59h-.66c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.42 3.69 5.86 5.17.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.83 2.31-1.63.28-.8.28-1.49.2-1.63-.09-.14-.31-.23-.65-.4z"/>
              </svg>
              <span>Book Service Now — Chat on WhatsApp</span>
            </a>

            {/* Fine print */}
            <p className="text-white/40 text-[9px] sm:text-[10px] mt-3 tracking-wide">
              Gas Safe Registered · Fully Insured · Essex & Surrounding Areas
            </p>
          </div>

          {/* ── Bottom wave ── */}
          <Wave flip />
        </div>
      </div>
    </>
  );
}