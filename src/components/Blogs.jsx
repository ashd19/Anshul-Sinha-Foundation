import { Eye, Heart } from "lucide-react";
import { motion } from "motion/react";

const blogPosts = [
    {
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop",
        title: "Empower Women and Children",
        description: "In the realm of social initiatives, Anshul Sinha Foundation stands out as a beacon of hope and empowerment for women and children.",
        views: 13,
        likes: 1
    },
    {
        image: "https://images.unsplash.com/photo-1464982326199-86f32f81b211?q=80&w=1974&auto=format&fit=crop",
        title: "Supporting Differently-Abled",
        description: "When it comes to supporting differently-abled individuals, the Anshul Sinha Foundation is leading the way with its diverse range of programs.",
        views: 6,
        likes: 0
    },
    {
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop",
        title: "Volunteer Opportunities",
        description: "Are you looking to make a positive impact in your community and contribute to meaningful causes? Join our volunteer program today.",
        views: 7,
        likes: 0
    },
    {
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
        title: "Community Development",
        description: "Building stronger communities through dedicated support systems and sustainable development initiatives for a better tomorrow.",
        views: 12,
        likes: 3
    }
];

const duplicatedPosts = [...blogPosts, ...blogPosts];

export default function Blogs() {
    return (
        <section className="min-h-screen w-full bg-[#EBEBE3] py-20 overflow-hidden flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 md:px-20 mb-12">
                <h1 className="inter-small text-4xl sm:text-5xl md:text-6xl text-[#111] font-light mb-8">
                    Blog
                </h1>
                <div className="w-full border-t border-black/80"></div>
            </div>

            <div className="w-full overflow-hidden">
                <motion.div
                    className="flex gap-8 w-max"
                    animate={{
                        x: "-50%"
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {duplicatedPosts.map((post, index) => (
                        <div
                            key={index}
                            className="w-[300px] sm:w-[350px] md:w-[400px] flex-shrink-0 flex flex-col gap-4 group cursor-pointer"
                        >
                            <div className="overflow-hidden w-full h-64 sm:h-72 bg-gray-200">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-col gap-2 mt-2 px-1">
                                <h3 className="inter-small text-lg md:text-xl font-normal text-[#111] leading-tight">
                                    {post.title}
                                </h3>
                                <p className="inter-small text-sm text-[#333] leading-relaxed opacity-80 line-clamp-3">
                                    {post.description}
                                </p>
                            </div>

                            <div className="w-full border-t border-black/10 mt-auto pt-3 flex justify-between items-center text-xs text-[#333] px-1">
                                <div className="flex items-center gap-1.5 opacity-70">
                                    <Eye className="w-4 h-4" />
                                    <span>{post.views}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-red-500">
                                    <span>{post.likes > 0 ? post.likes : ''}</span>
                                    <Heart className={`w-4 h-4 ${post.likes > 0 ? 'fill-current' : ''}`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}