import { MoveRight } from "lucide-react";
function AboutUs() {
  return (
    <div className="bg-[#EBEBE3] h-screen p-10">
      <div className="flex gap-10 ">
        <div className="flex flex-col gap-5">
          <h1 className="inter-small text-[7rem]">About us</h1>
          <p className="inter-small text-2xl whitespace-nowrap">
            Anshul Sinha Foundation is a nonprofit organization <br /> dedicated
            to providing education, healthcare, <br /> women empowerment, child
            welfare, <br /> community development, support for <br />{" "}
            differently-abled individuals, and senior citizen support. <br />{" "}
            Our focus is on raising funds, awareness, and <br /> attracting
            volunteers to support our noble causes.
          </p>
          <div className="flex w-fit px-4 py-3 md:px-5 md:py-3 rounded-3xl text-black bg-white  duration-200 ease-in hover:text-white hover:bg-black gap-2 items-center cursor-pointer  transition-colors">
            <h1 className="text-sm md:text-base inter-md">Learn More</h1>{" "}
            <MoveRight className="w-5 h-5" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="w-[660px] h-[450px] mt-12"
            src="https://static.wixstatic.com/media/11062b_f8640eae82fa4b82931eb2cc3b8b709b~mv2.jpg/v1/fill/w_1880,h_1040,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f8640eae82fa4b82931eb2cc3b8b709b~mv2.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
