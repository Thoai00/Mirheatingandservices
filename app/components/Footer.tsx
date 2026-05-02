"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ContactInfo {
  phone:   string;
  email:   string;
  address: string;
}

export default function Footer() {
  const [contact, setContact] = useState<ContactInfo>({
    phone:   "0777 111 9401",          // sensible fallbacks while loading
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
      .catch(() => {
        // silently keep fallback values on error
      });
  }, []);

  return (
    <footer className="bg-[#0e2a45] text-white pt-20 pb-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        {/* LOGO & DESCRIPTION */}
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
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-[#F2CF51] font-bold uppercase tracking-widest mb-6">Services</h4>
          <ul className="space-y-4 text-blue-200/70">
            <li>
              <Link href="/services/gas-services" className="hover:text-white transition-colors">
                Gas Services
              </Link>
            </li>
            <li>
              <Link href="/services/plumbing-services" className="hover:text-white transition-colors">
                Plumbing Services
              </Link>
            </li>
            <li>
              <Link href="/services/heating-services" className="hover:text-white transition-colors">
                Heating Services
              </Link>
            </li>
            <li>
              <Link href="/home-improvement" className="hover:text-white transition-colors">
                Home Improvement
              </Link>
            </li>
            <li>
              <Link href="/our-work" className="hover:text-white transition-colors">
                Our Portfolio
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT — live from DB */}
        <div>
          <h4 className="text-[#F2CF51] font-bold uppercase tracking-widest mb-6">Contact</h4>
          <ul className="space-y-4 text-blue-200/70">
            <li>{contact.address}</li>
            <li>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="hover:text-white transition-colors"
              >
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-white transition-colors"
              >
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/5 pt-8 mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200/40 gap-4">
        <p>&copy; {new Date().getFullYear()} MIR Heating and Services Ltd. All rights reserved.</p>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <p>UK Registered Company.</p>
          <span className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
          <p>
            Designed by <span className="text-[#F2CF51] font-bold">Aefoniq</span>
          </p>
        </div>
      </div>
    </footer>
  );
}