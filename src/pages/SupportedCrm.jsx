import React from "react";

const SupportedCrm = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 relative">
      <div className="absolute top-6 right-6 md:top-0 md:right-82">
        <img src="/images/icons/messageIcon.svg" className="h-18 md:h-28" />
      </div>
      <div className="absolute z-0 -bottom-4 right-0 md:-bottom-30 md:-right-24">
        <img src="/images/icons/messageIcon2.svg" className="h-18 md:h-28" />
      </div>
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-[#0B1B5C]">
          Our Supported LeadCRM{" "}
        </h2>
        <p className="mt-3 w-[90%] md:w-[70%] mx-auto text-[#4D4D4D]">
          LeadCRM provides Native Integrations with popular CRM tools to make
          the most out of your LinkedIn prospecting. We don’t want you to miss
          any revenue opportunity on the internet!{" "}
        </p>
      </div>
      <div className="mx-4 md:mx-auto">
        <img
          src="/images/supportedCrm.png"
          className="h-[170px] md:h-[500px] md:w-full"
        />
      </div>
      <div className="mt-6 flex justify-center">
        <button className="bg-[#B3FC6A] hover:bg-lime-500 transition px-8 py-4 rounded-xl font-semibold text-gray-900 flex items-center gap-2">
          Lets Integrate your CRM Now!
        </button>
      </div>{" "}
    </div>
  );
};

export default SupportedCrm;
