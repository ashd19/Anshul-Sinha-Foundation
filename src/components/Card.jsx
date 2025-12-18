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
  return (
    <div ref={ref}>
      <div className="py-5 px-5  bg-[#f6f7e9] md:w-[450px]   md:h-full w-[370px] h-[420px] flex flex-col md:gap-[100px] gap-[60px] justify- rounded-xl">
        <div className="flex">
          <motion.div className="text-8xl font-medium text-[#1d332c] text-card inter-nav">
            {rounded}
          </motion.div>
          <Plus color="#f2ac83" className="mt-5 -ml-3" height={70} width={70} />
        </div>
        <div className="flex flex-col">
          <h1 className="intercard text-3xl">{heading}</h1>
          <p className="inter-nav mt-2">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;