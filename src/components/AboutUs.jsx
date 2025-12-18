import { MoveRight } from "lucide-react";
function AboutUs() {
  return (
    <div className="bg-[#EBEBE3] min-h-screen py-16 px-6 sm:px-12 md:px-20 lg:px-32 flex items-center">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <h1 className="inter-small text-5xl sm:text-7xl lg:text-[7rem] leading-none text-[#111]">
            About us
          </h1>
          <p className="inter-small text-lg sm:text-xl md:text-2xl text-neutral-800 leading-relaxed max-w-2xl">
            Anshul Sinha Foundation is a nonprofit organization dedicated
            to providing education, healthcare, women empowerment, child
            welfare, community development, support for
            differently-abled individuals, and senior citizen support.
          </p>
          <p className="inter-small text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl opacity-80">
            Our focus is on raising funds, awareness, and attracting
            volunteers to support our noble causes.
          </p>
          <div className="flex w-fit px-6 py-3.5 md:px-7 md:py-4 rounded-3xl text-black bg-white border border-black/5 shadow-sm hover:text-white hover:bg-black transition-all duration-300 gap-2 items-center cursor-pointer mt-4">
            <h1 className="text-sm md:text-base inter-md">Learn More</h1>{" "}
            <MoveRight className="w-5 h-5" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            className="w-full h-auto max-w-[660px] aspect-[4/3] object-cover rounded-2xl shadow-xl"
            src="https://static.wixstatic.com/media/11062b_f8640eae82fa4b82931eb2cc3b8b709b~mv2.jpg/v1/fill/w_1880,h_1040,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f8640eae82fa4b82931eb2cc3b8b709b~mv2.jpg"
            alt="About Anshul Sinha Foundation"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
