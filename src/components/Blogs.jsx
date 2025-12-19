import React from 'react';
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
    {
        category: "Community",
        date: "Dec 12, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800",
        title: "The Ripple Effect: How Education Changes Generations",
        description: "Exploring the long-term impact of scholarship programs on rural communities and local economies.",
    },
    {
        category: "Healthcare",
        date: "Nov 28, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800",
        title: "Bridging the Gap in Rural Medical Access",
        description: "A deep dive into our mobile clinic initiatives and the volunteers making healthcare a reality for all.",
    },
    {
        category: "Empowerment",
        date: "Nov 15, 2024",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800",
        title: "Voices of Strength: Stories from Our Women's Center",
        description: "Highlighting the personal journeys of three women who transformed their lives through vocational training.",
    }
];

export default function Blogs() {
    return (
        <section id="Blog" className="bg-[#050505] text-white py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1400px] mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[#22c55e] inter-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                            Our Journal
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,4rem)] inter-bold tracking-tight leading-[1.1]">
                            Latest Insights & Stories
                        </h2>
                    </div>
                    <motion.a
                        whileHover={{ x: 5 }}
                        href="#"
                        className="flex items-center text-white/60 hover:text-[#22c55e] inter-bold text-lg transition-colors pb-2 border-b border-white/10"
                    >
                        View All Posts <ArrowUpRight className="ml-2 w-5 h-5" />
                    </motion.a>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            {/* Featured Image */}
                            <div className="relative overflow-hidden rounded-[2rem] aspect-[16/10] mb-6">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs inter-bold px-4 py-2 rounded-full uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Post Meta */}
                            <div className="flex items-center gap-4 text-gray-500 text-sm mb-4 inter-small">
                                <span>{post.date}</span>
                                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                                <span>{post.readTime}</span>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl inter-bold leading-tight mb-4 group-hover:text-[#22c55e] transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-gray-400 inter-small leading-relaxed mb-6 line-clamp-2">
                                {post.description}
                            </p>

                            {/* Read More Link */}
                            <div className="flex items-center gap-2 text-white inter-bold group-hover:gap-4 transition-all uppercase text-xs tracking-[0.2em]">
                                Read Article <ArrowRight className="w-4 h-4 text-[#22c55e]" />
                            </div>
                        </motion.article>
                    ))}
                </div>


            </div>
        </section>
    );
}