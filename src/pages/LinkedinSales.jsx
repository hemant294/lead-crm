import React, { useState } from "react";

const tabs = [
  { id: "enrichment", label: "CRM Data Enrichment", icon: "/images/linkedinSales/crmDataEnhance.svg" },
  { id: "sync", label: "CRM Data Sync", icon: "/images/linkedinSales/crmDataSync.svg" },
  { id: "bulk", label: "Bulk Export & Enrichment", icon: "/images/linkedinSales/BulkExport.svg" },
  { id: "ai", label: "AI Productivity", icon: "/images/linkedinSales/ai.svg" },
];

const LinkedinSales = () => {
  const [activeTab, setActiveTab] = useState("enrichment");

  return (
    <section className="bg-white py-12 px-4 relative">
      <img
        src="/images/linkedinSales/salesMetrix.svg"
        alt="Capterra"
        className="absolute h-28 left-0 top-0"
      />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0B1B5C]">
            Complete LinkedIn Sales Solutions
          </h2>
          <p className="mt-2 text-[#4D4D4D]">
            Everything you need for professional LinkedIn prospecting
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-2 md:gap-6 border-b mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-3 font-medium flex items-center gap-2
                ${
                  activeTab === tab.id
                    ? "text-[#0B1B5C]"
                    : "text-gray-500 hover:text-[#0B1B5C]"
                }`}
            >
              <img src={tab.icon} />
              {tab.label}

              {activeTab === tab.id && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-1 bg-[#0B1B5C] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        {activeTab === "enrichment" && (
          <div>
            <h3 className="text-lg font-semibold text-[#0B1B5C] mb-4">
              It’s hard to find the accurate contact data for every prospects by{" "}
              <span className="bg-[#FFDCD4] text-sm text-[#FF4C51] p-2 rounded-[16px] ml-2">
                Incomplete Data
              </span>{" "}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Card */}
              <div className="bg-[#F3F6FD] rounded-2xl p-4 lg:p-6 sm:p-6 md:p-6">
                <h3 className="text-lg font-semibold text-[#0B1B5C] mb-2">
                  Here is how LeadCRM tackles that situation.
                </h3>

                <button className="text-green-600 font-medium flex items-center gap-1 mb-6 md:mb-10">
                  Try LeadCRM Data Enrichment →
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white flex flex-col p-4 lg:p-4 sm:p-4 md:p-4 rounded-[10px] text-center gap-4 md:gap-8 font-semibold h-[400px] md:h-[340px]">
                    <span>Varified Emails & Phone</span>
                    <img
                      src="/images/linkedinSales/verifiedMail.svg"
                      alt=""
                      className=" w-full rounded-xl bottom-0"
                    />
                  </div>
                  <div className="bg-white flex flex-col p-4 lg:p-4 sm:p-4 md:p-4 rounded-[10px] text-center gap-4 md:gap-8 font-semibold h-[400px] md:h-[340px]">
                    <span>40+ Search Filters</span>
                    <img
                      src="/images/linkedinSales/searchFilters.svg"
                      alt=""
                      className="w-full rounded-xl bottom-0"
                    />
                  </div>
                </div>
              </div>

              {/* Right Card */}
              <div className="bg-[#F3F6FD] rounded-2xl p-4 lg:p-6 sm:p-6 md:p-6">
                <h3 className="text-lg font-semibold text-[#0B1B5C] mb-2">
                  If it does not work for you! try our{" "}
                  <span className="text-green-600">
                    Advanced Waterfall Enrichment
                  </span>
                </h3>

                <button className="text-green-600 font-medium flex items-center gap-1 mb-4 md:mb-10">
                  Advanced Waterfall Enrichment →
                </button>

                <img
                  src="/images/linkedinSales/CRM-Data-Enrichment.png"
                  alt=""
                  className="w-full rounded-xl h-[220px] md:h-[338px]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Other tabs (placeholder – same structure) */}
        {activeTab !== "enrichment" && (
          <div className="bg-[#F3F6FD] rounded-2xl p-10 text-center text-gray-600">
            <p className="text-lg font-medium">
              {tabs.find((t) => t.id === activeTab)?.label} content goes here
            </p>
            <p className="text-sm mt-2">
              (You can plug real UI exactly like Enrichment tab)
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LinkedinSales;
