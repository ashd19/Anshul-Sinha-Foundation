const projects = [
    {
        category: "Education",
        title: "Empowering Through Knowledge",
        description: "Our educational programs focus on providing essential knowledge and skills to individuals, empowering them to build a better future for themselves and their communities."
    },
    {
        category: "Healthcare for All",
        title: "Ensuring Well-being",
        description: "We strive to enhance access to healthcare services for all, promoting well-being and a healthy lifestyle for a better quality of life. We offer healthcare services for women and children who do not have access to basic medical care. From organizing health camps to providing necessary treatments, we strive to ensure that health is a right, not a privilege."
    },
    {
        category: "Senior Citizen Support",
        title: "Building Strong Support System to our Senior Citizens",
        description: "We provide old age homes and day-care centers where the elderly can find companionship and care. We aim to ensure they live with dignity and receive the love they deserve in their golden years."
    }
];

export default function Projects() {
    return (
        <section
        id="Projects"
        className="min-h-screen w-full  px-6 sm:px-12 md:px-20 py-20 flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto flex flex-col">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-16 md:mb-24">
                    <h1 className="inter-md text-5xl sm:text-7xl lg:text-[7rem] leading-none text-[#111]">Projects</h1>
                    <p className="inter-small text-lg md:text-xl text-neutral-700 max-w-xl opacity-80">Explore our ongoing projects dedicated to improving the lives of those in need. Each project is carefully designed to address specific challenges and bring about positive change.</p>
                </div>

                <div className="flex flex-col border-b border-black/10">
                    {projects.map((item, index) => (
                        <a
                            href="#"
                            key={index}
                            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-20 w-full border-t border-black/10 py-10 md:py-16 hover:bg-neutral-200/50 transition-all duration-500 ease-out group px-4 -mx-4 rounded-xl"
                        >
                            <div className="w-full lg:w-1/3">
                                <h2 className="inter-small text-xl md:text-2xl text-[#111] font-light tracking-wide opacity-60 group-hover:opacity-100 transition-opacity">
                                    {item.category}
                                </h2>
                            </div>


                            <div className="w-full lg:w-2/3 flex flex-col gap-4 lg:gap-6">
                                <h3 className="inter-small text-2xl sm:text-3xl md:text-4xl text-[#111] font-normal leading-tight group-hover:translate-x-2 transition-transform duration-500">
                                    {item.title}
                                </h3>
                                <p className="inter-small text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl">
                                    {item.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section >
    );
}