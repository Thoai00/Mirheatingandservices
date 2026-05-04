"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ContactInfo {
  phone:   string;
  email:   string;
  address: string;
}

/* ═══════════════════════════════════════════════
   SVG PAYMENT ICONS
═══════════════════════════════════════════════ */

/** Visa — clean official wordmark SVG */
function VisaIcon() {
  return (
    <svg width="38" height="13" viewBox="0 0 1000 324" xmlns="http://www.w3.org/2000/svg" aria-label="Visa">
      <path fill="#fff" d="
        M651.19 0c-70.437 0-133.4 36.6-133.4 104.2 0 77.7 112.1 83.1 112.1 122.1
        0 16.4-18.8 31.1-50.9 31.1-45.6 0-79.6-20.5-79.6-20.5l-14.6 68.2
        s37.3 16.5 88.1 16.5c76.9 0 137.2-38.3 137.2-107.1 0-82.1-112.6-87.3-112.6-123.6
        0-13.6 16.4-28.5 48.4-28.5 36.3 0 65.9 15 65.9 15l14.3-65.9
        S695.9 0 651.19 0z
        M0 5.4L0 11s32.2 5.9 61.2 17.7C99.9 42.6 102.6 51 109.3 76.3L178.1 318.6h83.1
        L391.1 5.4h-82.8L225 221.2 192.9 36.8C190.1 17.8 175.9 5.4 159.6 5.4H0z
        M424.9 5.4L360.3 318.6h79L503.9 5.4H424.9z
        M862.8 5.4c-16.3 0-24.9 8.5-31.2 23.2L714.3 318.6h82.8l16.4-45.4h101.1
        l9.5 45.4H997L930.9 5.4H862.8z
        M879.4 89.5l23.8 112H838l41.4-112z
      "/>
    </svg>
  );
}

/** Mastercard — two overlapping circles */
function MastercardIcon() {
  return (
    <svg width="36" height="24" viewBox="0 0 152 100" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard">
      <circle cx="52"  cy="50" r="50" fill="#EB001B"/>
      <circle cx="100" cy="50" r="50" fill="#F79E1B"/>
      <path
        d="M76 8.6C86.5 16.7 93 29.4 93 43.5s-6.5 26.8-17 34.9C65.5 70.3 59 57.6 59 43.5S65.5 16.7 76 8.6z"
        fill="#FF5F00"
      />
    </svg>
  );
}

/** Official Google multicolour "G" */
function GoogleGIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-label="Google">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

/** Apple  */
function AppleIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.22} viewBox="0 0 814 1000" fill="white" xmlns="http://www.w3.org/2000/svg" aria-label="Apple">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.6-49 192.5-49 30.8 0 134.2 2.6 198.3 99zM540 60.6c-12.8 56.1-56.4 100.4-100.4 100.4-5.1 0-10.3-.6-15.4-1.9 1.3-53.5 47.1-104.3 103.5-117.3 5.1 18.1 12.3 18.8 12.3 18.8z"/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   PAYMENT BADGES  (exported → used in BookingPopup too)
═══════════════════════════════════════════════ */
export function PaymentBadges({ dark = true }: { dark?: boolean }) {
  const labelCls = dark
    ? "text-[10px] font-black uppercase tracking-[0.2em] text-[#F2CF51]"
    : "text-[9px]  font-black uppercase tracking-[0.2em] text-[#12416B]/60";
  const lineCls = dark
    ? "flex-1 h-px bg-gradient-to-r from-[#F2CF51]/40 to-transparent"
    : "flex-1 h-px bg-gradient-to-r from-[#12416B]/20 to-transparent";

  const pill = [
    "flex items-center gap-1.5 rounded-xl px-3 py-2",
    "shadow-md cursor-default select-none",
    "hover:-translate-y-0.5 transition-transform duration-150",
  ].join(" ");

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span className={labelCls}>We Accept</span>
        <div className={lineCls} />
      </div>

      <div className="flex flex-wrap gap-2">

        {/* Visa */}
        <div className={`${pill} bg-gradient-to-br from-[#1A1F71] to-[#2541b2]`}>
          <VisaIcon />
        </div>

        {/* Mastercard */}
        <div className={`${pill} bg-[#1a1a1a]`}>
          <MastercardIcon />
        </div>

        {/* PayPal */}
        <div className={`${pill} bg-gradient-to-br from-[#003087] to-[#0070ba]`}>
          <span className="font-black text-sm leading-none">
            <span className="text-[#79c6f0]">Pay</span>
            <span className="text-white">Pal</span>
          </span>
        </div>

        {/* Google Pay */}
        <div className={`${pill} bg-gradient-to-br from-[#1e1e1e] to-[#2c2c2c] border border-white/10`}>
          <GoogleGIcon size={15} />
          <span className="font-black text-white text-xs tracking-wide">Pay</span>
        </div>

        {/* Apple Pay */}
        <div className={`${pill} bg-gradient-to-br from-[#1c1c1e] to-[#313131]`}>
          <AppleIcon size={12} />
          <span className="font-black text-white text-xs">Pay</span>
        </div>

        {/* Pay On-Site */}
        <div className={`${pill} bg-gradient-to-br from-[#F2CF51] to-[#d4a800]`}>
          <span className="font-black text-[#0e2a45] text-[11px] uppercase tracking-wider whitespace-nowrap">
            Pay On-Site
          </span>
        </div>

      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAP SECTION
═══════════════════════════════════════════════ */
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.15!2d0.457744!3d51.743312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8eb34992ec4dd%3A0x361163303c070436!2sAartisan%20Heating%20%26%20Plumbing%20Ltd%2C%208%20Dixon%20Ave%2C%20Chelmsford%20CM1%202AQ%2C%20United%20Kingdom!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir//Aartisan+Heating+%26+Plumbing+Ltd,+8+Dixon+Ave,+Chelmsford+CM1+2AQ,+United+Kingdom/@51.7433119,0.459919,15z";

function MapSection() {
  return (
    <div className="mx-auto max-w-7xl px-6 mb-16">

      {/* Section header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          {/* pin icon */}
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F2CF51]/15 border border-[#F2CF51]/30">
            <svg className="w-4 h-4 text-[#F2CF51]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </span>
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#F2CF51]">
            Find Us
          </span>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-[#F2CF51]/30 to-transparent" />
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#F2CF51] hover:text-white transition-colors group"
        >
          Get Directions
          <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
      </div>

      {/* Map card */}
      <div className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-black/40">

        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-5 py-3 bg-gradient-to-b from-black/70 to-transparent">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] shadow-[0_0_8px_rgba(74,222,128,0.7)]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/90">
              8 Dixon Ave, Chelmsford CM1 2AQ
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white/20" />
            <span className="w-2 h-2 rounded-full bg-white/20" />
            <span className="w-2 h-2 rounded-full bg-[#F2CF51]" />
          </div>
        </div>

        {/* Corner accent lines */}
        <div className="absolute top-0 left-0 w-12 h-12 z-20 pointer-events-none">
          <div className="absolute top-3 left-3 w-6 h-px bg-[#F2CF51]" />
          <div className="absolute top-3 left-3 w-px h-6 bg-[#F2CF51]" />
        </div>
        <div className="absolute top-0 right-0 w-12 h-12 z-20 pointer-events-none">
          <div className="absolute top-3 right-3 w-6 h-px bg-[#F2CF51]" />
          <div className="absolute top-3 right-3 w-px h-6 bg-[#F2CF51]" />
        </div>
        <div className="absolute bottom-0 left-0 w-12 h-12 z-20 pointer-events-none">
          <div className="absolute bottom-3 left-3 w-6 h-px bg-[#F2CF51]" />
          <div className="absolute bottom-3 left-3 w-px h-6 bg-[#F2CF51]" />
        </div>
        <div className="absolute bottom-0 right-0 w-12 h-12 z-20 pointer-events-none">
          <div className="absolute bottom-3 right-3 w-6 h-px bg-[#F2CF51]" />
          <div className="absolute bottom-3 right-3 w-px h-6 bg-[#F2CF51]" />
        </div>

        {/* Overlay border glow on hover */}
        <div className="absolute inset-0 z-10 rounded-3xl ring-1 ring-[#F2CF51]/20 group-hover:ring-[#F2CF51]/50 transition-all duration-500 pointer-events-none" />

        {/* iframe */}
        <iframe
          src={MAP_EMBED}
          width="100%"
          height="320"
          style={{ border: 0, display: "block", filter: "grayscale(20%) contrast(1.05)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MIR Heating & Services location"
        />

        {/* Bottom CTA overlay */}
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-[#12416B] hover:bg-[#0d3152] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded-xl shadow-lg shadow-black/40 transition-all hover:-translate-y-0.5 group/btn"
        >
          <svg className="w-3.5 h-3.5 text-[#F2CF51]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.71 11.29l-9-9a1 1 0 00-1.42 0l-9 9a1 1 0 000 1.42l9 9a1 1 0 001.42 0l9-9a1 1 0 000-1.42zM14 14.5V12h-4v3H8v-4a1 1 0 011-1h5V7.5l3.5 3.5-3.5 3.5z"/>
          </svg>
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════ */
export default function Footer() {
  const [contact, setContact] = useState<ContactInfo>({
    phone:   "+44 7951 803179",
    email:   "info@mirplumbing.co.uk",
    address: "Essex, United Kingdom",
  });

  useEffect(() => {
    fetch("/api/security/contact")
      .then((r) => r.json())
      .then((json) => {
        if (json.success && json.data) {
          setContact({
            phone:   json.data.phone,
            email:   json.data.email,
            address: json.data.address,
          });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <footer className="bg-[#0e2a45] text-white pt-20 pb-12 border-t border-white/5">

      {/* ── Top 4-col grid ── */}
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        {/* LOGO + DESC + PAYMENT */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="relative w-40 h-16">
            <Link href="/">
              <Image
                src="/log.png"
                alt="MIR Logo"
                fill
                className="object-contain brightness-0 invert cursor-pointer"
              />
            </Link>
          </div>

          <p className="text-blue-200/50 max-w-sm leading-relaxed">
            Setting the gold standard in heating, drainage, and plumbing services across the
            region. Gas Safe registered and fully insured UK company.
          </p>

          <PaymentBadges dark={true} />
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-[#F2CF51] font-bold uppercase tracking-widest mb-6">Services</h4>
          <ul className="space-y-4 text-blue-200/70">
            {[
              { label: "Gas Safety Certificate(CP12)",      href: "/services/gas-services"     },
              { label: "Boiler Services & Annual Servicing", href: "/services/heating-services" },
              { label: "Boiler Breakdown & Repair",  href: "/services/boiler-breakdown"  },
              { label: "Boiler Supply & Installation",  href: "/services/boiler-install"  },
              { label: "Home Improvement",  href: "/home-improvement"           },
              { label: "Our Portfolio",     href: "/our-work"                   },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-[#F2CF51] font-bold uppercase tracking-widest mb-6">Contact</h4>
          <ul className="space-y-4 text-blue-200/70">
            <li>{contact.address}</li>
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* ── MAP ── */}
      <div className="border-t border-white/5 pt-16">
        <MapSection />
      </div>

      {/* ── COPYRIGHT ── */}
      <div className="border-t border-white/5 pt-8 mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200/40 gap-4">
        <p>&copy; {new Date().getFullYear()} MIR Heating and Services Ltd. All rights reserved.</p>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <p>UK Registered Company.</p>
          <span className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
          <p>Designed by <span className="text-[#F2CF51] font-bold">Aefoniq</span></p>
        </div>
      </div>

    </footer>
  );
}