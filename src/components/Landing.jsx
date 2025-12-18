import { MoveRight } from "lucide-react";

export default function Landing() {
  return (
    <>
      <main
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://media.istockphoto.com/id/2206130846/photo/group-of-happy-kids-sigiriya-ceylon.jpg?s=612x612&w=0&k=20&c=Q51hjILKWdH_5kk6i7oODfRosuCjdUdFwVm2EJSPQl8=')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-screen overflow-hidden flex items-center justify-start px-6 md:px-12 lg:px-20"
      >
        <div className="flex flex-col mt-20 md:mt-52 lg:ml-20 max-w-4xl leading-none w-full">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide inter-md text-[#22E56D]">
            Together, We Create Impact
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter inter-md mt-2 ">
            Unite. Act. <br />
            Transform
          </h1>
          <p className="text-neutral-300 inter-small mt-4 md:mt-6 tracking-wide text-base sm:text-lg md:text-xl max-w-xl">
            Your support powers life changing missions feeding families &
            rebuilding hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-6 md:mt-8">
            <div className="flex w-fit px-6 py-3.5 md:px-7 md:py-4 rounded-3xl text-white bg-[#22E56D] gap-2 items-center cursor-pointer hover:bg-[#1fb858] transition-colors">
              <h1 className="text-sm md:text-base inter-md">Donate now</h1>{" "}
              <MoveRight className="w-5 h-5" />
            </div>
            <div className="flex w-fit px-6 py-3.5 md:px-7 md:py-4 rounded-3xl text-white bg-[#111111]/80 backdrop-blur-md border border-white/10 hover:text-black hover:bg-white gap-2 items-center cursor-pointer transition-all duration-300">
              <h1 className="text-sm md:text-base inter-md">About Us</h1>{" "}
              <MoveRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
