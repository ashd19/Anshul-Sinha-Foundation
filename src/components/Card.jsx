import { Plus } from "lucide-react";
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useInView,
} from "framer-motion"; // Note: changed from motion/react for standard compatibility
import { useEffect, useRef } from "react";

function Card({ number, heading, text, image }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, number, { 
        duration: 2.5, 
        ease: "easeOut" 
      });
      return () => controls.stop();
    }
  }, [isInView, count, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-[450px] aspect-[4/5] overflow-hidden rounded-[2rem] group cursor-default"
    >
      {/* Background Image with Hover Zoom */}
      <img
        src={image || "https://framerusercontent.com/images/KifZ6fUhc5ktFEqSBmYqhn0bjA.jpg"}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        alt={heading}
      />

      {/* Gradient Overlay for Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Content Container */}
      <div className="relative h-full w-full p-8 flex flex-col justify-between z-10">
        
        {/* Counter Section */}
        <div className="flex items-start">
          <motion.span className="text-8xl font-bold text-white tracking-tighter">
            {rounded}
          </motion.span>
          <Plus 
            className="mt-4 -ml-2 text-[#f2ac83]" 
            strokeWidth={3}
            size={48} 
          />
        </div>

        {/* Text Section */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-white leading-tight">
            {heading}
          </h2>
          <p className="text-gray-200 text-lg font-medium opacity-90 leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Example usage:
// <Card 
//   number={150} 
//   heading="Successful Projects" 
//   text="Empowering local communities through sustainable architecture and design."
//   image="..."
// />

export default Card;