import React from "react";
import Button from "../components/Button";

const ProspectorFace = () => {
  return (
    <section className="w-full bg-white py-8 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-xl md:text-3xl lg:text-4xl font-black md:font-semibold text-[#0B1B5C] mb-8 md:mb-14">
          {" "}
          Every LinkedIn Prospector faces these daily challenges
        </h2>

        {/* Comparison Grid */}
        <div className="grid mx-2 md:mx-12 grid-cols-1 lg:grid-cols-[5fr_auto_5fr] gap-6 md:gap-1 items-start">
          {/* ❌ Without LeadCRM */}
          <div className="bg-[#FFF5F5] rounded-3xl p-8 shadow-sm max-w-[524px] mx-auto w-full border-1 border-red-300">
            {" "}
            <div className="">
              <img
                src="/images/icons/withoutLeadCrm.svg"
                alt="HubSpot"
                // className="h-5"
              />
            </div>
            <p className="text-red-500 font-semibold my-6">Without LeadCRM</p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-red-500 text-xl">✕</span>
                <div>
                  <p className="font-semibold">
                    Manual Data Entry
                    <span className="ml-2 text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full">
                      3+ Hours wasted daily
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Copying LinkedIn contacts to CRM manually plus losing
                    conversation history
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="text-red-500 text-xl">✕</span>
                <div>
                  <p className="font-semibold">
                    Incomplete Data
                    <span className="ml-2 text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full">
                      60% Data Incomplete
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    LinkedIn profiles missing Email and Phones from 700M+
                    database
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="text-red-500 text-xl">✕</span>
                <div>
                  <p className="font-semibold">
                    No CRM Visibility
                    <span className="ml-2 text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full">
                      Zero context available
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Can’t see existing CRM contacts while browsing LinkedIn
                    profiles
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="text-red-500 text-xl">✕</span>
                <div>
                  <p className="font-semibold">
                    Limited Productivity
                    <span className="ml-2 text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full">
                      No smart assistance
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    No AI help for replies, invites or comments
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* VS */}
          <div className="hidden sm:flex flex-col items-center justify-center my-3 gap-3">
            {/* top line */}
            <span className="w-px h-66 bg-gray-300"></span>

            {/* VS text */}
            <span className="font-semibold text-gray-500">VS</span>

            {/* bottom line */}
            <span className="w-px h-66 bg-gray-300"></span>
          </div>

          {/* ✅ With LeadCRM */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-w-[524px] mx-auto w-full">
            {" "}
            <div className="">
              <img src="/images/icons/withLadCrm.svg" alt="HubSpot" />
            </div>
            <div className="flex items-center gap-3 my-6">
              <p className="text-green-600 font-semibold">With LeadCRM</p>
              <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                4+ Hours/day Saved
              </span>
            </div>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-green-500 text-xl">
                  <img
                    src="/images/icons/completeBi.svg"
                    alt="HubSpot"
                    className="h-12"
                  />
                </span>
                <div>
                  <p className="font-semibold">Complete Bi-Directional Sync</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Automatically sync contacts, messages, and notes between
                    LinkedIn and CRM
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="text-green-500 text-xl">
                  <img
                    src="/images/icons/contacts.svg"
                    alt="HubSpot"
                    className="h-12"
                  />
                </span>
                <div>
                  <p className="font-semibold">700M+ Contacts + Enrichment</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Get verified emails and phone numbers from a global database
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="text-green-500 text-xl">
                  <img
                    src="/images/icons/crmOverlay.svg"
                    alt="HubSpot"
                    className="h-10"
                  />
                </span>
                <div>
                  <p className="font-semibold">CRM Overlay on LinkedIn</p>
                  <p className="text-sm text-gray-600 mt-1">
                    View CRM insights directly on LinkedIn profiles
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="text-green-500 text-xl">
                  <img
                    src="/images/icons/aiResponse.svg"
                    alt="HubSpot"
                    className="h-10"
                  />
                </span>
                <div>
                  <p className="font-semibold">AI Responses + Templates</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Save time with AI replies, templates, and bulk exports
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-18 text-center gap-4 relative">
          <Button name={" Start Using LeadCRM Now"} />

          <img src="/images/saveHoursImg.png" alt="HubSpot" className="hidden md:block absolute -top-14 right-68 h-32" />
        </div>
      </div>
    </section>
  );
};

export default ProspectorFace;