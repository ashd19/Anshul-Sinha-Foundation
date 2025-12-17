import React from "react";
import { motion } from "motion/react";
function Social() {
  return (
    <div className="h-screen p-3 overflow-hidden ">
      <div className="flex items-center mt-10  inter-md justify-center">
        <h1 className="text-[10rem]">Socials</h1>
      </div>
      <motion.div className="flex items-center justify-center gap-3">
        <div className="bg-red-700 h-[500px] w-[400px]"></div>
      </motion.div>
    </div>
  );
}

export default Social;
