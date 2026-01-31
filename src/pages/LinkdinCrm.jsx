import React from "react";
import Button from "../components/Button";

const LinkdinCrm = () => {
  return (
    <section
      className="
        relative w-full
        bg-[url('/images/bgImage/linkedinCrm.png')]
        bg-cover bg-center bg-no-repeat
      "
    >
      {/* overlay (very light, optional) */}
      <div className="absolute inset-0 bg-white/46" />
      {/* content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 md:py-10 text-center">
        {/* top badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9ACCFF] text-sm text-[#63657E] mb-6">
          🚀 Thousands of Professionals using LeadCRM
        </div>

        {/* heading */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold md:font-semibold leading-tight text-gray-900 md:text-gray-700">
          LinkedIn CRM Integration <br />
          Capture, Sync and Enrich in{" "}
          <span className="relative inline-block text-[#2D96BC]">
            Both Ways
            <span
              className="
    absolute left-0 -bottom-1
    w-full h-[12px]
    bg-[#FFDD60]
    rounded-sm
    [clip-path:polygon(0_0,100%_80%,100%_100%,0_100%)]
    rotate-[-2.6deg]
  "
            />
          </span>
        </h1>

        {/* description */}
        <p className="mt-6 max-w-3xl mx-auto text-sm md:text-lg text-gray-600">
          Automatically sync LinkedIn prospects to your CRM and overlay existing
          CRM contacts on LinkedIn profiles. Complete bi-directional integration
          with HubSpot, Salesforce, and Pipedrive.
        </p>

        {/* works with */}
        <div className="mt-10 flex justify-center">
          <div
            className="flex items-center gap-4 px-6 py-4 rounded-2xl
            bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 text-white"
          >
            <span className="font-semibold text-[#2E2E2E] mr-6">
              Works with
            </span>

            <div className="w-10 h-10 bg-[#FF7A59] rounded-full flex items-center justify-center border-1 border-white">
              <img
                src="/images/logo/gitLogo.svg"
                alt="HubSpot"
                className="h-5"
              />
            </div>
            <div className="w-10 h-10 bg-[#21844A] rounded-full flex items-center justify-center border-1 border-white">
              <img src="/images/logo/pLogo.svg" alt="P" className="h-5" />
            </div>
            <div className="w-10 h-10 bg-[#ffffff] rounded-full flex items-center justify-center border-1 border-white">
              <img
                src="/images/logo/salceForceLogo.svg"
                alt="Salesforce"
                className="h-5"
              />
            </div>
          </div>
        </div>

        {/* ratings */}
        <div className="mt-10 flex justify-center gap-6 md:gap-10">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-md p-1 md:p-2">
              <img
                src="/images/logo/chromeHalfLogo.svg"
                alt="Chrome"
                className="h-5 md:h-6"
              />
            </div>
            <span className="text-yellow-400">★★★★★</span>
            <span className="font-medium">5/5</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-white rounded-md p-1 md:p-2">
              <img
                src="/images/logo/capterraLogo.svg"
                alt="Chrome"
                className="h-5 md:h-6"
              />
            </div>{" "}
            <span className="text-yellow-400">★★★★★</span>
            <span className="font-medium">5/5</span>
          </div>
        </div>

        {/* CTA buttons */}
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
  {/* Chrome badge */}
  <button
    className="
      flex items-center gap-4
      px-4 sm:px-6 py-4
      rounded-2xl
      bg-[#3C3C3C]
      text-white
      shadow-md
      w-auto sm:w-auto
      justify-center sm:justify-start
    "
  >
    <div className="flex flex-col leading-tight text-left">
      <span className="text-[#DADADA] text-xs font-medium">
        Available in
      </span>
      <span className="text-lg font-semibold">
        Chrome Web Store
      </span>
    </div>

    <div className="bg-white rounded-full p-2 flex items-center justify-center">
      <img
        src="/images/logo/chromeLogo.svg"
        alt="Chrome"
        className="h-7 w-7"
      />
    </div>
  </button>

  {/* CTA */}
  <Button
    name="Get a Free Trial Now!"
    className="w-full sm:w-auto"
  />
</div>

      </div>
    </section>
  );
};

export default LinkdinCrm;
