import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(277.75deg,rgba(1,178,216,0.22)_0%,rgba(1,178,216,0.07)_77%)] py-12 relative">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 pb-12 text-center lg:text-left">

          {/* Logo + About */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <img
              src="/images/logo/LeadcrmLogo.svg"
              alt="LeadCRM"
              className="h-16"
            />
            <p className="text-gray-700 max-w-xs">
              LeadCRM is LinkedIn integration tool for your CRM.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              {["facebook", "twitter", "linkedIn", "insta"].map((icon) => (
                <img
                  key={icon}
                  src={`/images/footer/${icon}.svg`}
                  className="h-10 cursor-pointer"
                  alt={icon}
                />
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-12">

            {/* Integrations */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <h4 className="font-extrabold text-[#0B1B5C] mb-2">Integrations</h4>
              <span>HubSpot</span>
              <span>Salesforce</span>
              <span>Pipedrive</span>
              <span className="flex items-center gap-2">
                Close.io
                <span className="text-xs bg-green-200 text-green-700 px-2 py-0.5 rounded-full">
                  Coming Soon
                </span>
              </span>
              <span className="flex items-center gap-2">
                Insightly
                <span className="text-xs bg-green-200 text-green-700 px-2 py-0.5 rounded-full">
                  Coming Soon
                </span>
              </span>
            </div>

            {/* Alternative */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <h4 className="font-extrabold text-[#0B1B5C] mb-2">Alternative</h4>
              <span>Surfe VS LeadCRM</span>
              <span>Linkmatch Alternative</span>
            </div>

            {/* Legal */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <h4 className="font-extrabold text-[#0B1B5C] mb-2">Legal</h4>
              <span>Privacy Policy</span>
              <span>Terms of Use</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <h4 className="font-extrabold text-[#0B1B5C] mb-2">Contact Us</h4>

            <div className="flex items-center gap-2">
              <img src="/images/footer/email.svg" className="h-6" />
              support@leadcrm.io
            </div>

            <div className="flex items-center gap-2">
              <img src="/images/footer/contact.svg" className="h-6" />
              +1 231-538-7466
            </div>

            <div className="flex items-center gap-2">
              <img src="/images/footer/help.svg" className="h-6" />
              Help Center
            </div>

            {/* Chrome Badge */}
            <div className="mt-6 lg:absolute lg:bottom-36 lg:right-24 flex justify-center">
              <div className="bg-[#242424] w-[170px] text-white rounded-xl px-3 py-2 inline-flex items-center justify-between">
                <span className="text-sm">Available in Chrome</span>
                <div className="bg-white p-1 rounded-full w-9 h-9 flex items-center justify-center">
                  <img
                    src="/images/logo/chromeLogo.svg"
                    className="h-5 w-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/20 pt-4 text-center text-sm text-gray-600">
          <p className="mb-2">
            Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
            LinkedIn™ logos and trademarks are property of LinkedIn.
          </p>
          <p>Copyright © 2025 LeadCRM. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
