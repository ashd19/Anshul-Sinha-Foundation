import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MoveRight, Asterisk } from 'lucide-react';

// Custom SVG for Framer Logo (not available in Lucide)
const FramerLogo = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M4 0h16v8h-8zM4 8h8l8 8h-8zM4 16h8v8z" />
    </svg>
)

export default function Footer() {
    const links = {
        navigation: ["Home", "About", "Causes", "Donate"],
        other: ["Programs", "Blogs", "Privacy policy", "Terms and Conditions"],
        social: ["Linkedin", "Instagram", "X/twitter"]
    };

    return (
        <footer className="bg-black text-white w-full h-screen font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
                    {/* Logo & Tagline */}
                    <div className="max-w-md">
                        <h2 className="text-[#22E56D] text-6xl font-extrabold mb-6 tracking-tight inter-bold">Careon</h2>
                        <p className="text-gray-400 text-lg tracking-wide leading-relaxed inter-small">
                            Be the first to hear how you're <br className="hidden md:block" /> making a difference.
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div className="w-full max-w-md">
                        <h3 className="text-3xl font-bold mb-2 inter-bold">Newsletter</h3>
                        <p className="text-gray-400 text-md mb-6 inter-small tracking-wider">Sign in to newsletter and never miss update.</p>

                        <div className="relative ">
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="w-full bg-transparent border inter-small tracking-wide border-gray-800 rounded-full py-4 pl-6 pr-16 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-[#22E56D] transition-colors"
                            />
                            <button
                                className="absolute right-2 group top-1/2 -translate-y-1/2 bg-[#22E56D] hover:bg-[#1fb858] text-black w-10 h-10 rounded-full flex items-center justify-center transition-transform  cursor-pointer"
                                aria-label="Subscribe"
                            >
                                <ArrowRight className="w-5 h-5 stroke-[2.5] group-hover:rotate-315" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-20">
                    {/* Navigation */}
                    <div>
                        <h4 className="text-gray-500 font-medium mb-6 inter-small tracking-wider">Navigation</h4>
                        <ul className="space-y-4">
                            {links.navigation.map((item) => (
                                <li key={item}>
                                    <a href="#" className="group inter-small flex items-center gap-2 text-white hover:text-[#22E56D] transition-colors text-base font-medium">
                                        {item}
                                        <MoveRight className="w-4 h-4 transition-transform group-hover:rotate-315" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Other Links */}
                    <div>
                        <h4 className="text-gray-500 inter-small tracking-wider font-medium mb-6">Other Links</h4>
                        <ul className="space-y-4">
                            {links.other.map((item) => (
                                <li key={item}>
                                    <a href="#" className="group inter-small flex items-center gap-2 text-white hover:text-[#22E56D] transition-colors text-base font-medium">
                                        {item}
                                        <MoveRight className="w-4 h-4 transition-transform group-hover:rotate-315" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Connect */}
                    <div>
                        <h4 className="text-gray-500 font-medium mb-6 inter-small tracking-wider">Social Connect</h4>
                        <ul className="space-y-4">
                            {links.social.map((item) => (
                                <li key={item}>
                                    <a href="#" className="group flex inter-small tracking-wider items-center gap-2 text-white hover:text-[#22E56D] transition-colors text-base font-medium">
                                        {item}
                                        <MoveRight className="w-4 h-4 transition-transform group-hover:rotate-315" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-gray-500 font-medium mb-6 inter-small tracking-wider">Contact us</h4>
                        <ul className="space-y-4 text-white font-medium inter-small tracking-wide">
                            <li>+91 7021655417</li>
                            <a href='mailto:info@anshulsinhafoundation.com' className="break-all">info@anshulsinhafoundation.com</a>
                            <li className="text-gray-300 font-normal leading-relaxed">Kanika Paris, Bandra Kurla Complex,

                                Mumbai-400 051</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-900 pt-8 flex flex-col inter-small tracking-wider  md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
                    <p>All copyrights reserved for @Anshul</p>
                    <p className="flex items-center gap-1">
                        Designed by  NexaCrft <span className="text-gray-400">@nexcrft.com</span>
                    </p>
                </div>
            </div>

            {/* Ticker Section */}

        </footer>
    );
}