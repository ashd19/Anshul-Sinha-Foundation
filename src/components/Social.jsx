import React from "react";
import { motion } from "motion/react";
function Social() {
  return (
    <div className="min-h-[50vh] py-20 px-6 sm:px-12 md:px-20 bg-[#EBEBE3]">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl sm:text-8xl md:text-[10rem] inter-md text-[#111] leading-none mb-12">
          Socials
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg aspect-video bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group cursor-pointer"
        >
          <div className="p-8 text-white inter-small">
            <h2 className="text-2xl mb-4 font-bold">Follow Our Journey</h2>
            <p className="opacity-70">Stay updated with our latest missions and impact stories across all platforms.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Social;
