import React from 'react'

const marqueMap = [
    {
        id: 1,
        name: "Access to 700M+ Contacts",
        icon: "/images/icons/contacts.svg",
    },
    {
        id: 2,
        name: "One click push to CRM",
        icon: "/images/icons/pointer.svg",
    },
    {
        id: 3,
        name: "Custom Field Mapping",
        icon: "/images/icons/mapping.svg",
    },
    {
        id: 4,
        name: "Advanced Waterfall Enrichment",
        icon: "/images/icons/waterfall.svg",
    },
    {
        id: 5,
        name: "Instent Email Finder",
        icon: "/images/icons/contacts.svg",
    },
    {
        id: 6,
        name: "Seamless Deal Management",
        icon: "/images/icons/feature.png",
    },
    {
        id: 7,
        name: "Advanced AI Product",
        icon: "/images/icons/contacts.svg",
    }
]

const Marque = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-6 md:py-12">
      <div className="relative flex">
        {/* marquee track */}
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {[...marqueMap, ...marqueMap].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-3
              rounded-full  text-gray-800 font-medium text-sm sm:text-md"
            >
              <img src={item.icon} />
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Marque