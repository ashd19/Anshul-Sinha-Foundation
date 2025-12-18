import { Plus } from "lucide-react";
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useInView,
} from "motion/react";
import { useEffect, useRef } from "react";

function Card({ number, heading, text }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, number, { duration: 4 });
      return () => controls.stop();
    }
  }, [isInView, count, number]);
  motion;
//   bg-[url('https://framerusercontent.com/images/KifZ6fUhc5ktFEqSBmYqhn0bjA.jpg?scale-down-to=2048&width=4416&height=2944')] object-center
  return (
    <div ref={ref}>
      <div 
      className="text-white py-5 px-5  relative p-   md:w-[450px]   md:h-full w-[370px] h-[420px] flex flex-col md:gap-[100px] gap-[60px] justify- rounded-xl">
        <img src="https://framerusercontent.com/images/KifZ6fUhc5ktFEqSBmYqhn0bjA.jpg?scale-down-to=2048&width=4416&height=2944" className="w-full h-full rounded-xl" alt="" />
        <div className="absolute  flex flex-col items-center justify-between h-full  ">
            <div className="flex ">
              <motion.div className="text-8xl font-medium text-white text-card inter-nav">
                {rounded}
              </motion.div>
              <Plus color="#f2ac83" className="mt-5 -ml-3" height={70} width={70} />
            </div>
            <div className="flex flex-col mb-15 bg-linear-to-t ">
              <h1 className="intercard text-3xl">{heading}</h1>
              <p className="inter-nav mt-2">{text}</p>
            </div>
                  </div>
        </div>
    </div>
  );
}

export default Card;