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
        <section className="min-h-screen w-full bg-[#EBEBE3] px-4 sm:px-10 md:px-20 py-10 flex flex-col justify-center">
            <div className="w-full flex flex-col">
                <div className="flex items-center justify-center gap-20 mb-10">
                    <h1 className="inter-md text-[7rem]">Projects</h1>
                    <p className="inter-small text-[1.2rem] mt-1">Explore our ongoing projects dedicated to improving the lives of those in need. Each project is carefully designed to address specific challenges and bring about positive change</p>
                </div>

                {projects.map((item, index) => (
                    <a
                        href="#"
                        key={index}
                        className="flex flex-col  hover:scale-110 hover:bg-[rgb (215,215,183)] md:flex-row justify-between px-30 hover: transition-all ease-in duration-200  w-full border-t border-black/40 py-10 md:py- gap-"
                    >
                        <div className="w-full md:w-1/3">
                            <h2 className="inter-small text-xl md:text-2xl text-[#111] font-light tracking-wide">
                                {item.category}
                            </h2>
                        </div>


                        <div className="w-full md:w-1/2 flex flex-col gap-6">
                            <h3 className="inter-small text-2xl md:text-3xl lg:text-4xl text-[#111] font-normal leading-snug">
                                {item.title}
                            </h3>
                            <p className="inter-small text-base md:text-lg text-[#333] leading-relaxed opacity-90 max-w-2xl">
                                {item.description}
                            </p>
                        </div>
                    </a>
                ))}

            </div>
        </section >
    );
}