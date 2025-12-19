import React, { useState } from 'react';
import { CircleStop, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What is your NGO's mission?",
    answer: "We empower underserved communities through education, healthcare, food, clean water, and disaster relief. Our core focus is breaking the cycle of poverty through sustainable initiatives.",
  },
  {
    id: 2,
    question: "How are donations used?",
    answer: "Donations fund essentials like food, shelter, education, and healthcare. We maintain full transparency with annual reports available for all our donors to review.",
  },
  {
    id: 3,
    question: "Can I Volunteer?",
    answer: "Absolutely! We welcome volunteers for teaching, event management, outreach, and administrative support. Join our community of change-makers today.",
  },
  {
    id: 4,
    question: "Besides donating, how else can I help?",
    answer: "You can volunteer your skills, share our mission on social media, host small community fundraising events, or even advocate for our causes in your workplace.",
  },
  {
    id: 5,
    question: "Can I sponsor a child or family?",
    answer: "Yes, our sponsorship program allows you to provide direct support for a child’s education or a family's basic needs, establishing a long-term path to stability.",
  },
];

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="">
      <button
        className="w-full py-8 flex justify-between items-center text-left group transition-all hover:cursor-pointer"
        onClick={onClick}
      >
        <h3 className={`text-xl md:text-2xl inter-md transition-colors duration-300 ${isOpen ? 'text-[#22c55e]' : 'text-white group-hover:text-gray-300'}`}>
          {question}
        </h3>
        <div className={`shrink-0 ml-4 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#22c55e] border-[#22c55e] rotate-45' : 'bg-transparent'}`}>
          <Plus className={`w-6 h-6 transition-colors ${isOpen ? 'text-black' : 'text-white'}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 inter-small leading-relaxed pb-8 max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Faq() {
  const [openId, setOpenId] = useState(0);

  return (
    <section id="FAQ" className="bg-black text-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          <div className="lg:w-1/3 flex flex-col">
            
            <h2 className="text-5xl md:text-6xl inter-bold tracking-tighter leading-tight mb-8">
              Your questions, <br />
              <span className="text-gray-500">our answers</span>
            </h2>
            
          </div>

          <div className="lg:w-2/3 border-t border-white/10 ">
            {faqs.map((faq) => (
              <FaqItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                className={openId === faq.id ? "cursor-pointer" : ""}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}