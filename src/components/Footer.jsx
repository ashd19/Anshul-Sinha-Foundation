import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Circle } from "lucide-react";

export default function Footer() {
  const links = {
    navigation: ["Home", "About", "Blog", "Projects", "Donate"],
    other: ["Socials", "Privacy policy", "Terms and Conditions"],
    social: ["Linkedin", "Instagram", "X/Twitter"],
  };

  const tickerText = "ANSHUL SINHA FOUNDATION • EMPOWERING LIVES • JOIN THE MISSION • ";

  return (
    <footer className="bg-black text-white w-full pt-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">

          <div className="max-w-md">

            <h2 className="text-4xl md:text-6xl inter-bold tracking-tighter leading-none mb-6">
              Anshul Sinha <br /> Foundation
            </h2>
            <p className="text-gray-400 inter-md leading-relaxed max-w-sm">
              Be the first to hear how you're making a difference. Small actions lead to massive change.
            </p>
          </div>

          <div className="">
            <h3 className="text-xl inter-bold mb-2">Newsletter</h3>
            <p className="text-gray-500 inter-small mb-6">Never miss an update on our latest projects.</p>

            <div className="relative">
              <input
                type="email"
                placeholder="name@email.com"
                className="w-full bg-transparent border border-white/10 rounded-full py-4 pl-6 pr-16 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#22c55e] transition-colors"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-[#22c55e] group"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5 transition-transform group-hover:-rotate-45" />
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {[
            { title: "Navigation", items: links.navigation },
            { title: "Legal", items: links.other },
            { title: "Social", items: links.social }
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-gray-600 inter-bold uppercase tracking-[0.2em] text-[10px] mb-8">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors inter-small">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-gray-600 inter-bold uppercase tracking-[0.2em] text-[10px] mb-8">Contact</h4>
            <div className="space-y-4 inter-small text-gray-400">
              <p className="text-white inter-bold">+91 7021655417</p>
              <a href="mailto:info@anshulsinhafoundation.com" className="hover:text-[#22c55e] block truncate">
                info@anshulsinhafoundation.com
              </a>
              <p className="leading-relaxed">Bandra Kurla Complex, Mumbai-400 051</p>
            </div>
          </div>
        </div>

        <div className=" py-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-[0.2em] gap-4">
          <p>© 2024 ANSHUL SINHA FOUNDATION</p>
          <a href="https://nexacrft.com" target="_blank" className="hover:text-white transition-colors">
            DESIGNED BY NEXACRFT
          </a>
        </div>
      </div>


    </footer>
  );
}