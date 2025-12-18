import React from 'react';
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        category: "Education",
        title: "Empowering Through Knowledge",
        description: "Our educational programs focus on providing essential knowledge and skills to individuals, empowering them to build a better future.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800"
    },
    {
        category: "Healthcare",
        title: "Ensuring Universal Well-being",
        description: "We strive to enhance access to healthcare services for all, promoting well-being and a healthy lifestyle for a better quality of life.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800"
    },
    {
        category: "Senior Support",
        title: "Dignity in the Golden Years",
        description: "Providing old age homes and day-care centers where the elderly can find companionship and the care they deserve.",
        image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=800"
    }
];

export default function Projects() {
    return (
        <section id="Projects" className="bg-black text-white py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                
              
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
                    <h2 className="text-[clamp(3rem,8vw,7rem)] inter-bold  leading-none ">
                        Our Projects
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
                        Dedicated initiatives designed to address specific challenges and bring about positive, lasting change.
                    </p>
                </div>

                <div className="border-t border-white/10">
                    {projects.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="group relative border-b border-white/10"
                        >
                            <a 
                                href="#" 
                                className="flex flex-col lg:flex-row py-12 md:py-16 items-start lg:items-center justify-between gap-8 transition-all duration-500 ease-in-out px-4"
                            >
                                <div className="flex items-center gap-8 lg:w-1/4">
                                    <span className="text-sm font-mono text-[#22c55e]">0{index + 1}</span>
                                    <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">
                                        {item.category}
                                    </h3>
                                </div>

                                <div className="lg:w-2/4">
                                    <h4 className="text-3xl md:text-5xl font-bold mb-4 group-hover:translate-x-4 transition-transform duration-500 ease-out">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-500 group-hover:text-gray-300 max-w-lg transition-colors duration-500">
                                        {item.description}
                                    </p>
                                </div>

                              
                                <div className="lg:w-1/4 flex justify-end">
                                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#22c55e] group-hover:border-[#22c55e] transition-all duration-500">
                                        <ArrowUpRight className="w-6 h-6 group-hover:text-black transition-colors" />
                                    </div>
                                </div>

                            
                                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[20%] opacity-0 group-hover:opacity-100 group-hover:translate-x-[40%] pointer-events-none transition-all duration-700 ease-out z-20">
                                    <div className="w-64 h-80 rounded-2xl overflow-hidden rotate-6 group-hover:rotate-0 transition-transform duration-500">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

               
            </div>
        </section>
    );
}