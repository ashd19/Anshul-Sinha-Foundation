import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const causes = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    title: "Fundraising for Education Equality and Access",
    raised: "$40,000",
    goal: "$65,200",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800",
    title: "Building Stronger Futures Through Healthcare Access",
    raised: "$52,000",
    goal: "$75,200",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800",
    title: "Empowering Women and Girls Through Education",
    raised: "$80,000",
    goal: "$85,000",
  },
];

const Causes = () => {
  return (
    <section id="Donate" className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Top Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl inter-bold mb-6">Causes That Inspire</h2>
            <p className="text-gray-400 inter-md leading-relaxed">
              Explore all causes and join us in making a meaningful impact. From education to
              relief efforts, every cause is a shared mission to empower.
            </p>
          </div>
          <a href="#" className="flex items-center text-[#22c55e] hover:underline inter-md">
            View All Causes <ArrowUpRight className="ml-1 w-5 h-5" />
          </a>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {causes.map((cause) => (
            <div
              key={cause.id}
              className="bg-[#121212] border border-gray-800 rounded-4xl p-6 flex flex-col transition-transform hover:scale-[1.02]"
            >
              {/* Image Container */}
              <div className="w-full h-56 overflow-hidden rounded-2xl mb-6">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-xl inter-md mb-8 leading-snug min-h-14">
                {cause.title}
              </h3>

              {/* Progress/Amount Section */}
              <div className="flex justify-between mb-8">
                <div>
                  <p className="text-gray-500 inter-small mb-1">Raised Amount</p>
                  <p className="text-xl inter-bold">{cause.raised}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 inter-small mb-1">Goal Amount</p>
                  <p className="text-xl inter-bold">{cause.goal}</p>
                </div>
              </div>

              <button className="w-full bg-white hover:cursor-pointer text-black py-4 rounded-full inter-bold flex items-center justify-center gap-2 hover:bg-[#22E56D] transition-colors mt-auto">
                Learn More <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Causes;