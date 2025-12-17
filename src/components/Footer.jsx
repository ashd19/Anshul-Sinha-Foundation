import React from "react";
import { motion } from "motion/react";
import { ArrowRight, MoveRight, Asterisk } from "lucide-react";

// Custom SVG for Framer Logo (not available in Lucide)
const FramerLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4 0h16v8h-8zM4 8h8l8 8h-8zM4 16h8v8z" />
  </svg>
);

export default function Footer() {
  const links = {
    navigation: ["Home", "About", "Causes", "Donate"],
    other: ["Programs", "Blogs", "Privacy policy", "Terms and Conditions"],
    social: ["Linkedin", "Instagram", "X/twitter"],
  };

  return (
    <footer className="bg-[#EBEBE3] text-black w-full min-h-screen font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-md">
            <h2 className="text-[#] text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight inter-bold">
              Careon
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg tracking-wide leading-relaxed inter-small">
              Be the first to hear how you're making a difference.
            </p>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-md">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 inter-bold">
              Newsletter
            </h3>
            <p className="text-neutral-600 text-sm sm:text-md mb-4 sm:mb-6 inter-small tracking-wider">
              Sign in to newsletter and never miss update.
            </p>

            <div className="relative ">
              <input
                type="email"
                placeholder="name@email.com"
                className="w-full bg-transparent border inter-small tracking-wide border-black/20 rounded-full py-3 sm:py-4 pl-4 sm:pl-6 pr-12 sm:pr-16 text-sm sm:text-base text-black placeholder-neutral-500 focus:outline-none focus:border-[#111111] transition-colors"
              />
              <button
                className="absolute right-1 sm:right-2 group top-1/2 -translate-y-1/2 bg-[#EBEBE3]  text-black w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-transform cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] transition-transform duration-200 ease-in group-hover:-rotate-45 " />
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-12 mb-12 sm:mb-16 md:mb-20">
          {/* Navigation */}
          <div>
            <h4 className="text-neutral-500 font-medium mb-4 sm:mb-6 inter-small tracking-wider text-sm">
              Navigation
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {links.navigation.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group hover:underline inter-small flex items-center gap-2 text-black  transition-colors text-sm sm:text-base font-medium"
                  >
                    {item}
                    {/* <MoveRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-100 ease-in group-hover:-rotate-45" /> */}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="text-neutral-500 inter-small tracking-wider font-medium mb-4 sm:mb-6 text-sm">
              Other Links
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {links.other.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group hover:underline inter-small flex items-center gap-2 text-black  transition-colors text-sm sm:text-base font-medium"
                  >
                    {item}
                    {/* <MoveRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ease-in group-hover:-rotate-45" /> */}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connect */}
          <div>
            <h4 className="text-neutral-500 font-medium mb-4 sm:mb-6 inter-small tracking-wider text-sm">
              Social Connect
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {links.social.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex hover:underline  inter-small tracking-wider items-center gap-2 text-black  transition-colors text-sm sm:text-base font-medium"
                  >
                    {item}
                    {/* <MoveRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ease-in group-hover:-rotate-45" /> */}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-neutral-500 font-medium mb-4 sm:mb-6 inter-small tracking-wider text-sm">
              Contact us
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-black font-medium inter-small tracking-wide text-sm sm:text-base">
              <li>+91 7021655417</li>
              <a
                href="mailto:info@anshulsinhafoundation.com"
                className="break-all"
              >
                info@anshulsinhafoundation.com
              </a>
              <li className="text-neutral-600 font-normal leading-relaxed">
                Kanika Paris, Bandra Kurla Complex, Mumbai-400 051
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 pt-6 sm:pt-8 flex flex-col inter-small tracking-wider md:flex-row justify-between items-center text-xs sm:text-sm text-neutral-500 gap-3 sm:gap-4 text-center md:text-left">
          <p>All copyrights reserved for @Anshul</p>
          <p className="flex items-center gap-1 flex-wrap justify-center">
            Designed by NexaCrft{" "}
            <span className="text-neutral-400">@nexcrft.com</span>
          </p>
        </div>
      </div>

      {/* Ticker Section */}
    </footer>
  );
}
