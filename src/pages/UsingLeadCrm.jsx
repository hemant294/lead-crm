import React from "react";

const UsingLeadCrm = () => {
  return (
    <div className="bg-[#EAEFFA] py-12 px-4 z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <h2 className="text-md md:text-2xl lg:text-4xl font-bold text-[#0B1B5C]">
          Join Thousands of Professionals Using LeadCRM
        </h2>
        <div className="relative text-center">
        <span className="font-semibold text-white text-sm md:text-4xl absolute left-4  md:left-[13.8%] top-3 md:top-10">Your LinkedIn Powerhouse for Smarter Lead Management</span>
         <img
  src="/images/footer/Product-hunt-banner-image.png"
  alt=""
  className="w-full h-[180px] md:h-[400px] rounded-xl object-cover md:object-contain"
/>

        </div>
        <div className="mt-6 flex justify-center">
          <button className="bg-lime-400 hover:bg-lime-500 transition px-8 py-4 rounded-xl font-semibold text-gray-900 flex items-center gap-2">
            Get Started Today →
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsingLeadCrm;
