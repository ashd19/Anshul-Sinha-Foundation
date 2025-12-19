import React from 'react';
import { MoveRight, Circle, MoveRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import Card from "./Card";

const stats = [
  {
    number: 1000,
    heading: "Meals Distributed",
    text: "For families and individuals in need."
  },
  {
    number: 300,
    heading: "Homes Rebuilt",
    text: "Restoring safety and dignity to communities."
  },
  {
    number: 256,
    heading: "Projects Delivered",
    text: "Support in healthcare, education, and crisis."
  }
];

function AboutUs() {
  return (
    <div id="About" className="bg-black text-white overflow-hidden">
      {/* Upper Content Section */}
      <section className="min-h-[80vh] py-24 px-6 sm:px-12 md:px-20 lg:px-32 flex items-center">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between w-full max-w-7xl mx-auto">

          {/* Left Side: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 lg:w-1/2"
          >
            <div className="space-y-4">

              <h1 className="text-[clamp(3.5rem,8vw,7rem)] inter-bold">
                About us
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-200 inter-md">
                Anshul Sinha Foundation is a nonprofit organization dedicated
                to providing education, healthcare, and community empowerment.
              </p>
              <p className="text-lg text-gray-400 inter-small opacity-80">
                Our focus is on raising funds, awareness, and attracting
                volunteers to support our noble causes across the nation.
              </p>
            </div>

            <button className='flex rounded-full gap-3  bg-white text-black transition-colors ease-in duration-200   py-3 px-5 w-fit inter-md'>
              Learn more
              <MoveRightIcon width={20} height={20} className='mt-0.5' />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 group"
          >
            <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://static.wixstatic.com/media/11062b_f8640eae82fa4b82931eb2cc3b8b709b~mv2.jpg/v1/fill/w_1880,h_1040,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f8640eae82fa4b82931eb2cc3b8b709b~mv2.jpg"
                alt="Foundation Team"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 px-6 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card
                  number={stat.number}
                  heading={stat.heading}
                  text={stat.text}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;