import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    name: "David Fincher",
    source: "On Capterra",
    avatar: "/images/Testimonials/david.svg",
  },
  {
    id: 2,
    text: "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient.",
    name: "Lillian Williams",
    source: "On Capterra",
    avatar: "/images/Testimonials/lillian.svg",
  },
  {
    id: 3,
    text: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus.",
    name: "Michael",
    source: "On Capterra",
    avatar: "/images/Testimonials/michael.svg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // responsive visible cards
  const getVisibleCount = () => (window.innerWidth < 768 ? 1 : 3);

  const visibleCount = getVisibleCount();

  const handleNext = () => {
    setIndex((prev) =>
      prev + visibleCount >= testimonials.length ? 0 : prev + visibleCount,
    );
  };

  const handlePrev = () => {
    setIndex((prev) =>
      prev - visibleCount < 0
        ? testimonials.length - visibleCount
        : prev - visibleCount,
    );
  };

  const visibleTestimonials = testimonials.slice(index, index + visibleCount);

  return (
    <section className="py-28 px-4 bg-white relative">
      <img src="/images/Testimonials/Ball.png" alt="Capterra" className="absolute h-28 right-2 -top-12" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0B1B5C]">
            What people are saying about LeadCRM
          </h2>

          {/* desktop arrows */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#0B1B5C] flex items-center justify-center"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#0B1B5C] text-white flex items-center justify-center"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-300">
          {visibleTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F9F0F8] h-[360px] rounded-3xl p-8 flex flex-col justify-between"
            >
              <p className="text-gray-800 text-base leading-relaxed mb-3">
                “{item.text}”
              </p>

              <div className="flex items-center gap-2 mb-12">
                <div className="bg-white rounded-md p-2">
                  <img
                    src="/images/logo/capterraLogo.svg"
                    alt="Capterra"
                    className="h-5"
                  />
                </div>
                <div className="flex text-[#0B1B5C] text-lg">★★★★★</div>
              </div>

              <div className="bottom-0">
                <hr className="border-gray-300 mb-4" />

                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#0B1B5C]">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.source}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* mobile arrows */}
        <div className="flex md:hidden justify-end gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-[#0B1B5C] flex items-center justify-center"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-[#0B1B5C] text-white flex items-center justify-center"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
