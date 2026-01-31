import React, { useState } from "react";
import SvgIcon from "../assets/SvgIcon";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-[999]"
        />
      )}

      {/* 📱 Mobile Drawer */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-[260px] bg-white z-[1000]
          p-6 shadow-lg transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center mb-6">
          <img src="/images/logo/LeadcrmLogo.svg" alt="LeadCRM" className="h-8" />
          <button onClick={() => setOpen(false)} className="text-xl">
            ✕
          </button>
        </div>

        <ul className="space-y-5 text-lg font-medium">
          <li className="cursor-pointer">Product</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Resources</li>
          <li className="cursor-pointer">Company</li>
        </ul>

        {/* Mobile Login */}
        <button
          className="
            mt-8 w-full flex items-center justify-center gap-2
            bg-[#2D96BC] text-white
            px-4 py-3 rounded-lg font-semibold
          "
        >
          <SvgIcon name="login" size={22} strokeColor="#ffffff" />
          Login
        </button>
      </div>

      {/* Navbar */}
      <header
        className="
          flex items-center justify-between
          bg-white border-b border-[#eee]
          px-4 py-3 h-[56px]
          lg:px-10 lg:py-6 lg:h-auto
        "
      >
        {/* Left */}
        <img
          src="/images/logo/LeadcrmLogo.svg"
          alt="LeadCRM"
          className="h-10 lg:h-12"
        />

        {/* ☰ Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="text-2xl lg:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* 🖥 Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          <span className="flex items-center gap-1 text-lg font-medium cursor-pointer hover:text-[#2D96BC]">
            Product <ChevronDown size={18} />
          </span>

          <span className="text-lg font-medium cursor-pointer hover:text-[#2D96BC]">
            Pricing
          </span>

          <span className="flex items-center gap-1 text-lg font-medium cursor-pointer hover:text-[#2D96BC]">
            Resources <ChevronDown size={18} />
          </span>

          <span className="flex items-center gap-1 text-lg font-medium cursor-pointer hover:text-[#2D96BC]">
            Company <ChevronDown size={18} />
          </span>
        </nav>

        {/* 🖥 Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            className="
              relative overflow-hidden
              bg-[#2D96BC] text-white
              px-6 py-2.5 rounded-lg font-semibold
              cursor-pointer z-10
              before:content-['']
              before:absolute before:left-0 before:bottom-[-100%]
              before:w-full before:h-full
              before:bg-[#00b1d6]
              before:transition-transform before:duration-400 before:ease-in-out
              before:translate-y-0
              hover:before:-translate-y-full
            "
          >
            <span className="relative z-20">Get Your Free Account</span>
          </button>

          <button
            className="
              flex items-center gap-2
              border-2 border-[#2D96BC]
              text-[#2D96BC]
              px-4 py-2 rounded-lg font-semibold
              hover:bg-[#2D96BC] hover:text-white
              transition
            "
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <SvgIcon
              name="login"
              size={22}
              strokeColor={hover ? "#ffffff" : "#2D96BC"}
            />
            Login
          </button>
        </div>
      </header>
    </>
  );
}
