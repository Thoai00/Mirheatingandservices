"use client";

import React, { useState } from "react";
import { FaStar, FaGoogle, FaQuoteLeft } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { HiShieldCheck } from "react-icons/hi2";

// ─── All real Google Maps reviews for Aartisan Heating & Plumbing Ltd ────────
const ALL_REVIEWS = [
  {
    id: 1,
    name: "Shimul Sarkar",
    initials: "SS",
    color: "#12416B",
    rating: 5,
    date: "4 months ago",
    badge: "Local Guide · 15 reviews",
    text: "The engineer was highly skilled and professional. Others couldn't find the problem, but he diagnosed everything perfectly. He fixed the boiler, the shower, and restored hot water throughout the whole house. I'm extremely happy with his work. Truly reliable and talented — highly recommended!",
  },
  {
    id: 2,
    name: "Aowlad Rakib",
    initials: "AR",
    color: "#1a6e3c",
    rating: 5,
    date: "5 months ago",
    badge: "5 reviews · 24 photos",
    text: "Great service! Very professional, skilled, and reliable gas engineer. Work was done safely, quickly, and with excellent quality. Highly recommended!",
  },
  {
    id: 3,
    name: "MD Abdullah",
    initials: "MA",
    color: "#6b2112",
    rating: 5,
    date: "3 months ago",
    badge: "4 reviews",
    text: "Excellent job. Very helpful. I will recommend Mr Azam.",
  },
  {
    id: 4,
    name: "Abdul Karim",
    initials: "AK",
    color: "#7c3d12",
    rating: 5,
    date: "a year ago",
    badge: "Local Guide · 28 reviews",
    text: "We recently had a new gas line installed for our cooker and the work was carried out professionally and with the minimal of fuss. We are so happy and pleased with the work and can highly recommend Aartisan for any and all gas and heating work. Excellent workmanship carried out quickly, safely and professionally.",
  },
  {
    id: 5,
    name: "Rupok Kamruzzaman",
    initials: "RK",
    color: "#1b4d7e",
    rating: 5,
    date: "11 months ago",
    badge: "5 reviews",
    text: "Excellent service! The gas engineer was professional, punctual, and very knowledgeable. Everything was explained clearly, and the work was completed efficiently and safely. Highly recommended!",
  },
  {
    id: 6,
    name: "Harun Rashid",
    initials: "HR",
    color: "#4a1d6e",
    rating: 5,
    date: "9 months ago",
    badge: "8 reviews",
    text: "Excellent Service, very professional, clean and tidy. Quick response as well as knowledgeable. Competitive price. Highly recommended.",
  },
  {
    id: 7,
    name: "Md Rahman",
    initials: "MR",
    color: "#0e5e4e",
    rating: 5,
    date: "5 months ago",
    badge: "2 reviews",
    text: "Extremely efficient and quality service. I would highly recommend for this service.",
  },
  {
    id: 8,
    name: "Saiful Islam",
    initials: "SI",
    color: "#5a1a1a",
    rating: 5,
    date: "a year ago",
    badge: "Local Guide · 47 reviews",
    text: "Absolutely brilliant service from Mr. Mir. He rescued me quickly and sorted my heating problem. He's very efficient and knowledgeable in his business. Don't hesitate to call him for your heating service.",
  },
  {
    id: 9,
    name: "Angela Farrell",
    initials: "AF",
    color: "#1a3a5e",
    rating: 5,
    date: "a year ago",
    badge: "7 reviews",
    text: "Very helpful, professional. Came quickly and installed new boiler. Left everywhere tidy, even hoovered. Very happy with the service we got and would definitely use in future, can highly recommend.",
  },
  {
    id: 10,
    name: "Rohit Bhatt",
    initials: "RB",
    color: "#3d5a1a",
    rating: 5,
    date: "2 months ago",
    badge: "3 reviews",
    text: "Impressed with excellent, professional service by Azam.",
  },
  {
    id: 11,
    name: "Mohammad Bari",
    initials: "MB",
    color: "#5c3a1a",
    rating: 5,
    date: "5 months ago",
    badge: "2 reviews · 1 photo",
    text: "Outstanding service. On scheduled. Highly recommended.",
  },
  {
    id: 12,
    name: "Maggie R",
    initials: "MG",
    color: "#1a4e5c",
    rating: 5,
    date: "a year ago",
    badge: "Local Guide · 18 reviews",
    text: "Professionalism. Friendly and efficient service. I was quite impressed how quick but well-done work they have given when I asked them to check what was wrong with my heating system. I will definitely recommend Azam, especially.",
  },
  {
    id: 13,
    name: "Toma Saha",
    initials: "TS",
    color: "#2d4a1e",
    rating: 5,
    date: "a year ago",
    badge: "2 reviews",
    text: "Great Service from Azam, he was very professional and reasonable for the job. Did job very tidy and very good as well — definitely recommend him for any plumbing, boiler service.",
  },
  {
    id: 14,
    name: "Adrian Roman",
    initials: "AR",
    color: "#4a2d6e",
    rating: 5,
    date: "a year ago",
    badge: "Local Guide · 33 reviews",
    text: "Best experience ever. I'm talking about the quality of their services but also affordable prices. They fixed my boiler after I tried with other 2 companies who couldn't do it. Thank you, Azam.",
  },
  {
    id: 15,
    name: "Michael Farrell",
    initials: "MF",
    color: "#6e2d1a",
    rating: 5,
    date: "a year ago",
    badge: "2 reviews",
    text: "Aartisan just installed new boiler. Explained everything to us. Carried out the job in a very professional and polite manner. Left everywhere tidy. Took away all rubbish. Would highly recommend.",
  },
  {
    id: 16,
    name: "Saiyara Zaman",
    initials: "SZ",
    color: "#1a5c4a",
    rating: 5,
    date: "a year ago",
    badge: "2 reviews",
    text: "Very good customer service, communicated everything efficiently. The job was done in a timely manner with no issues. Thanks a lot.",
  },
  {
    id: 17,
    name: "Mat Patwary",
    initials: "MP",
    color: "#3a3a6e",
    rating: 5,
    date: "2 years ago",
    badge: "Local Guide · 11 reviews",
    text: "Efficient and professional. The person was very professional, explained things clearly, and worked quickly.",
  },
  {
    id: 18,
    name: "Chris Kleanthous",
    initials: "CK",
    color: "#2e5c1a",
    rating: 5,
    date: "3 months ago",
    badge: "5 reviews",
    text: "Top Gas Engineer — very thoughtful.",
  },
  {
    id: 19,
    name: "Shahinur Akter",
    initials: "SA",
    color: "#6e1a4a",
    rating: 5,
    date: "3 years ago",
    badge: "3 reviews",
    text: "Excellent Service! Mr Mir did a fantastic job and carried out his work in a friendly and enthusiastic way — I would highly recommend!",
  },
  {
    id: 20,
    name: "Anisul Bhuiyan",
    initials: "AB",
    color: "#1a2e6e",
    rating: 5,
    date: "3 years ago",
    badge: "5 reviews",
    text: "Engineer was friendly. I am 60+. He came to install my boiler and showed me how to use it. It was very helpful for me. Would highly recommend.",
  },
  {
    id: 21,
    name: "Md Nazrul Islam",
    initials: "NI",
    color: "#5c1a2e",
    rating: 5,
    date: "2 years ago",
    badge: "1 review",
    text: "Very professional and skilled. Repaired my 10-year-old boiler and it is working smoothly.",
  },
  {
    id: 22,
    name: "Md Minul Islam",
    initials: "MI",
    color: "#1a5c2e",
    rating: 5,
    date: "a year ago",
    badge: "1 review",
    text: "Excellent service. Engineer was friendly — done all safety checks.",
  },
  {
    id: 23,
    name: "Stephen McCabe",
    initials: "SM",
    color: "#6e4a1a",
    rating: 5,
    date: "a year ago",
    badge: "2 reviews",
    text: "Fast and reliable. Would definitely use again.",
  },
  {
    id: 24,
    name: "Rajib Hasan",
    initials: "RH",
    color: "#1a4a6e",
    rating: 5,
    date: "2 years ago",
    badge: "Local Guide · 24 reviews",
    text: "Excellent and professional service. Very reasonable price.",
  },
  {
    id: 25,
    name: "A J Uddin",
    initials: "AU",
    color: "#4e1a6e",
    rating: 5,
    date: "2 years ago",
    badge: "2 reviews · 8 photos",
    text: "Professional and job well done. Great value.",
  },
  {
    id: 26,
    name: "Saiful Hassan",
    initials: "SH",
    color: "#1a6e5c",
    rating: 5,
    date: "a year ago",
    badge: "4 reviews",
    text: "Very professional and clean service.",
  },
  {
    id: 27,
    name: "S.G. Robbany",
    initials: "SR",
    color: "#3a1a6e",
    rating: 5,
    date: "3 years ago",
    badge: "3 reviews · 1 photo",
    text: "Excellent life saver in winter.",
  },
  {
    id: 28,
    name: "Khaled Chayon",
    initials: "KC",
    color: "#1a6e3a",
    rating: 5,
    date: "3 years ago",
    badge: "3 reviews",
    text: "Excellent installation.",
  },
  {
    id: 29,
    name: "Daud Haydari",
    initials: "DH",
    color: "#6e3a1a",
    rating: 5,
    date: "3 years ago",
    badge: "2 reviews · 10 photos",
    text: "Very professional work done. I am very pleased with the work done.",
  },
  {
    id: 30,
    name: "Shah Md. Anowar Hossain",
    initials: "AH",
    color: "#1a3a6e",
    rating: 5,
    date: "4 months ago",
    badge: "3 reviews · 2 photos",
    text: "Best service.",
  },
  {
    id: 31,
    name: "Khondokar Rahman",
    initials: "KR",
    color: "#5c2e1a",
    rating: 5,
    date: "a year ago",
    badge: "2 reviews",
    text: "Excellent fast service.",
  },
  {
    id: 32,
    name: "Aahnaf Mir",
    initials: "AM",
    color: "#2e1a5c",
    rating: 5,
    date: "5 months ago",
    badge: "2 reviews",
    text: "Excellent service.",
  },
  {
    id: 33,
    name: "MD Mahedi Hasan Shanto",
    initials: "MH",
    color: "#1a5c5c",
    rating: 5,
    date: "5 months ago",
    badge: "1 review",
    text: "Very good service.",
  },
];

const INITIAL_SHOW = 6;
const LOAD_MORE_COUNT = 6;

// ─── Star Rating ─────────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <FaStar
          key={i}
          className={i <= rating ? "text-[#F2CF51]" : "text-slate-200"}
          size={12}
        />
      ))}
    </div>
  );
}

// ─── Single Review Card ───────────────────────────────────────────────────────
function ReviewCard({
  review,
  index,
}: {
  review: (typeof ALL_REVIEWS)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const CHAR_LIMIT = 160;
  const isLong = review.text.length > CHAR_LIMIT;
  const displayText =
    isLong && !expanded ? review.text.slice(0, CHAR_LIMIT) + "…" : review.text;

  return (
    <div
      className="group relative bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col gap-3"
      style={{ animationDelay: `${(index % LOAD_MORE_COUNT) * 55}ms` }}
    >
      {/* Google watermark */}
      <div className="absolute top-5 right-5 opacity-10 group-hover:opacity-25 transition-opacity duration-300">
        <FaGoogle className="text-[#4285F4] text-xl" />
      </div>

      {/* Opening quote */}
      <FaQuoteLeft className="text-[#F2CF51]/25 text-2xl flex-shrink-0" />

      {/* Text */}
      <p className="text-[#2d4a6e] text-sm leading-relaxed font-medium flex-1">
        {displayText}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-1 text-[#12416B] font-black text-[11px] underline underline-offset-2 hover:text-[#F2CF51] transition-colors"
          >
            {expanded ? "show less" : "read more"}
          </button>
        )}
      </p>

      {/* Divider */}
      <div className="h-px bg-slate-100" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-sm"
          style={{ background: review.color }}
        >
          {review.initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[#12416B] font-black text-sm truncate">
            {review.name}
          </p>
          <div className="flex items-center gap-2 mt-0.5">
            <StarRating rating={review.rating} />
            <span className="text-[9px] text-slate-400 font-bold">
              {review.date}
            </span>
          </div>
          {review.badge && (
            <p className="text-[9px] text-[#12416B]/40 font-semibold mt-0.5 truncate">
              {review.badge}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function ReviewsSection() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_SHOW);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((c) => Math.min(c + LOAD_MORE_COUNT, ALL_REVIEWS.length));
      setLoading(false);
    }, 500);
  };

  const visibleReviews = ALL_REVIEWS.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_REVIEWS.length;

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-[#E9EDF2]">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #12416B 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#12416B]/5 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-[#F2CF51]/6 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          {/* Google pill */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-slate-100 mb-6">
            <FaGoogle className="text-[#4285F4] text-sm" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              Verified Google Reviews
            </span>
            <HiShieldCheck className="text-[#4ADE80] text-sm" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-[#12416B] italic tracking-tighter uppercase leading-none">
            WHAT OUR{" "}
            <span className="relative inline-block">
              <span className="text-[#F2CF51]">CUSTOMERS</span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#F2CF51]/30 rounded-full" />
            </span>{" "}
            SAY
          </h2>

          <p className="text-[#8E9AAF] text-sm font-semibold mt-4 max-w-md mx-auto">
            Real feedback from homeowners across Essex &amp; London
          </p>

          {/* Stats */}
          <div className="inline-flex flex-wrap justify-center bg-white rounded-2xl shadow-sm border border-slate-100 mt-8 overflow-hidden divide-x divide-slate-100">
            <div className="px-8 py-5 text-center">
              <div className="text-3xl font-black text-[#12416B] tracking-tighter">5.0</div>
              <div className="flex justify-center mt-1">
                <StarRating rating={5} />
              </div>
              <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">
                Avg Rating
              </div>
            </div>
            <div className="px-8 py-5 text-center">
              <div className="text-3xl font-black text-[#12416B] tracking-tighter">46</div>
              <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-2">
                Google Reviews
              </div>
            </div>
            <div className="px-8 py-5 text-center">
              <div className="text-3xl font-black text-[#12416B] tracking-tighter">100%</div>
              <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-2">
                5★ Rated
              </div>
            </div>
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleReviews.map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>

        {/* ── Load More ── */}
        {hasMore && (
          <div className="flex flex-col items-center gap-3 mt-12">
            <div className="w-56 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#12416B] to-[#F2CF51] rounded-full transition-all duration-700"
                style={{ width: `${(visibleCount / ALL_REVIEWS.length) * 100}%` }}
              />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Showing {visibleCount} of {ALL_REVIEWS.length} reviews
            </p>
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="mt-2 group flex items-center gap-3 bg-white border-2 border-[#12416B]/20 hover:border-[#12416B] text-[#12416B] rounded-2xl px-8 py-4 font-black uppercase tracking-widest text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#12416B]/10 active:scale-[0.97] disabled:opacity-50"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#12416B]/30 border-t-[#12416B] rounded-full animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  Load More Reviews
                  <IoChevronDown className="text-lg group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

        {/* ── All displayed ── */}
        {!hasMore && ALL_REVIEWS.length > INITIAL_SHOW && (
          <div className="flex flex-col items-center gap-3 mt-12">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[#F2CF51]" size={16} />
              ))}
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              All {ALL_REVIEWS.length} reviews displayed
            </p>
            <a
              href="https://www.google.com/maps/place/Aartisan+Heating+%26+Plumbing+Ltd/@51.7433119,0.459919"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#4285F4] hover:underline transition-all"
            >
              <FaGoogle />
              View all on Google Maps
            </a>
          </div>
        )}

      </div>
    </section>
  );
}