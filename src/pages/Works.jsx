import React from "react";
import Button from "../components/Button";

const steps = [
  {
    id: "1",
    countImg: "/images/work/1.png",
    title: "Install the Extension",
    desc: "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
    img: "/images/work/work1.svg",
  },
  {
    id: "2",
    countImg: "/images/work/2.png",
    title: "Browse LinkedIn",
    desc: "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
    img: "/images/work/work2.svg",
  },
  {
    id: "3",
    countImg: "/images/work/3.png",
    title: "Get Enriched Data",
    desc: "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy.",
    img: "/images/work/work3.svg",
  },
  {
    id: "4",
    countImg: "/images/work/4.png",
    title: "Sync to CRM Instantly",
    desc: "Prospect data syncs to your CRM instantly with history, tracking, and AI insights.",
    img: "/images/work/work4.svg",
  },
];

const Works = () => {
  return (
    <section className="bg-[#EAEFFA] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0B1B5C]">
            How it Works
          </h2>
          <p className="mt-2 text-gray-600">
            From setup to success in{" "}
            <span className="font-semibold">4 simple steps</span>
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {steps.map((step, index) => (
            <div
  key={step.id}
  className="
    bg-white rounded-2xl p-6
    shadow-[0_8px_30px_rgba(0,0,0,0.08)]
    relative z-10
    flex flex-col
  "
>
  {/* Content */}
  <div className="text-center">
    <img src={step.countImg} className="h-14 mb-4 mx-auto" />

    <h3 className="text-lg font-bold text-[#0B1B5C] mb-2">
      {step.title}
    </h3>

    <p className="text-sm text-gray-600 mb-4">
      {step.desc}
    </p>
  </div>

  {/* Bottom Image */}
  <div className="mt-auto">
    <img
      src={step.img}
      alt={step.title}
      className="w-full rounded-lg"
    />
  </div>

  {/* Connector */}
  {index < steps.length - 1 && (
    <div className="hidden lg:block h-1 w-6 bg-[#2D96BC] absolute top-1/3 -right-6"></div>
  )}
</div>

          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Button name={"Try LeadCRM Now →"} />
        </div>
      </div>
    </section>
  );
};

export default Works;
