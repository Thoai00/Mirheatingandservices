"use client";

import { useState } from "react";

const offers = [
  {
    id: 1,
    badge: "🔥 Most Popular",
    badgeColor: "bg-orange-500",
    title: "Landlord Gas Safety Certificate",
    subtitle: "CP12 Certificate — Legal Requirement",
    price: "£49",
    originalPrice: "£75",
    unit: "per property",
    highlight: true,
    description:
      "Stay legally compliant this summer. Every landlord must have a valid Gas Safety Record (CP12) renewed annually. Our Gas Safe engineers visit at your convenience.",
    features: [
      "✅ Gas Safe Registered Engineer",
      "✅ Certificate issued same day",
      "✅ Covers all gas appliances",
      "✅ Digital & printed copy",
      "✅ Reminder service included",
      "✅ Landlord & tenant copies",
    ],
    cta: "Book CP12 Now",
    urgency: "⏳ Summer slots filling fast!",
  },
  {
    id: 2,
    badge: "☀️ Summer Deal",
    badgeColor: "bg-blue-500",
    title: "Boiler Service & Safety Check",
    subtitle: "Pre-Winter Preparation",
    price: "£59",
    originalPrice: "£90",
    unit: "per boiler",
    highlight: false,
    description:
      "Service your boiler now before the winter rush. Includes full safety inspection, efficiency check, and fault diagnosis.",
    features: [
      "✅ Full boiler inspection",
      "✅ Flue gas analysis",
      "✅ Pressure & safety checks",
      "✅ Efficiency report",
      "✅ Priority winter support",
      "✅ Parts discount if needed",
    ],
    cta: "Book Boiler Service",
    urgency: "📅 Book now, save later",
  },
  {
    id: 3,
    badge: "🏠 Bundle Deal",
    badgeColor: "bg-green-600",
    title: "CP12 + Boiler Service Bundle",
    subtitle: "Best Value Package",
    price: "£99",
    originalPrice: "£165",
    unit: "both together",
    highlight: false,
    description:
      "Get your CP12 certificate AND boiler service together at our best price. Perfect for landlords wanting full peace of mind.",
    features: [
      "✅ Everything in CP12 plan",
      "✅ Everything in Boiler Service",
      "✅ Single visit — saves your time",
      "✅ £66 saving vs booking separately",
      "✅ Free carbon monoxide check",
      "✅ Dedicated account manager",
    ],
    cta: "Get Bundle Deal",
    urgency: "💰 Save £66 today",
  },
];

export default function SummerOffersSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleBooking = (offerTitle: string) => {
    const message = `Hi, I'd like to book: ${offerTitle}`;
    const phone = "YOUR_WHATSAPP_NUMBER"; // 👈 Replace with your number e.g. 447911123456
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0d2d4a] to-[#12416B] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            ☀️ Summer 2025 Special Offers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Landlord Gas Safety <br />
            <span className="text-orange-400">Certificates from £49</span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Gas Safe registered engineers across London & surrounding areas.
            Stay compliant, stay safe — book your CP12 today.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {[
              "🔐 Gas Safe Registered",
              "⭐ 5-Star Rated",
              "📍 London Based",
              "📞 Same Day Available",
            ].map((badge) => (
              <span
                key={badge}
                className="bg-white/10 text-white text-sm px-4 py-1.5 rounded-full border border-white/20"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              onMouseEnter={() => setHoveredId(offer.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 cursor-default
                ${
                  offer.highlight
                    ? "bg-white shadow-2xl scale-105 border-2 border-orange-400"
                    : "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15"
                }
                ${hoveredId === offer.id && !offer.highlight ? "scale-102 shadow-xl" : ""}
              `}
            >
              {/* Badge */}
              <span
                className={`inline-block ${offer.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit`}
              >
                {offer.badge}
              </span>

              {/* Title */}
              <h3
                className={`text-xl font-bold mb-1 ${offer.highlight ? "text-[#12416B]" : "text-white"}`}
              >
                {offer.title}
              </h3>
              <p
                className={`text-sm mb-4 ${offer.highlight ? "text-gray-500" : "text-blue-200"}`}
              >
                {offer.subtitle}
              </p>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-4xl font-extrabold ${offer.highlight ? "text-orange-500" : "text-orange-400"}`}
                  >
                    {offer.price}
                  </span>
                  <span
                    className={`text-lg line-through ${offer.highlight ? "text-gray-400" : "text-blue-300"}`}
                  >
                    {offer.originalPrice}
                  </span>
                </div>
                <p
                  className={`text-xs mt-1 ${offer.highlight ? "text-gray-500" : "text-blue-200"}`}
                >
                  {offer.unit}
                </p>
              </div>

              {/* Description */}
              <p
                className={`text-sm mb-5 leading-relaxed ${offer.highlight ? "text-gray-600" : "text-blue-100"}`}
              >
                {offer.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-1">
                {offer.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-sm ${offer.highlight ? "text-gray-700" : "text-blue-100"}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Urgency */}
              <p
                className={`text-xs font-semibold mb-3 ${offer.highlight ? "text-orange-500" : "text-orange-300"}`}
              >
                {offer.urgency}
              </p>

              {/* CTA Button */}
              <button
                onClick={() => handleBooking(offer.title)}
                className={`w-full py-3 px-6 rounded-xl font-bold text-sm transition-all duration-200 active:scale-95
                  ${
                    offer.highlight
                      ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30"
                      : "bg-white text-[#12416B] hover:bg-orange-50"
                  }
                `}
              >
                {offer.cta} →
              </button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-blue-300 text-sm mt-10">
          All prices include VAT. No hidden charges. Cancel or reschedule up to
          24 hours before appointment.{" "}
          <span className="text-white font-semibold">
            Questions? Call us or WhatsApp anytime.
          </span>
        </p>
      </div>
    </section>
  );
}