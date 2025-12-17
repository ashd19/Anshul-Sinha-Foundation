import { MoveRight } from "lucide-react";

export default function Landing() {
  return (
    <>
      <main
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://framerusercontent.com/images/5OGFm3xDmmisAnJExVwoI7qwrPo.jpg?scale-down-to=2048&width=5184&height=3456')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-screen overflow-hidden flex items-center justify-start px-4 md:px-8 lg:px-12"
      >
        <div className="flex flex-col mt-16 md:mt-65 md:ml-20  max-w-4xl">
          <h1 className="text-lg sm:text-xl md:text-2xl tracking-wide inter-md text-[#22E56D]">
            Together, We Create Impact
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white tracking-tighter inter-md mt-2 md:mt-4">
            Unite. Act. <br />
            Transform
          </h1>
          <p className="text-neutral-300 inter-small mt-4 md:mt-5 tracking-wide text-sm sm:text-base md:text-lg max-w-xl">
            Your support powers life changing missions feeding families &
            rebuilding hope.
          </p>
          <div className="flex gap-5 mt-5 md:mt-7">
            <div className="flex w-fit px-4 py-3 md:px-5 md:py-3 rounded-3xl text-white bg-[#22E56D] gap-2 items-center cursor-pointer hover:bg-[#1fb858] transition-colors">
              <h1 className="text-sm md:text-base inter-md">Donate now</h1>{" "}
              <MoveRight className="w-5 h-5" />
            </div>
            <div className="flex w-fit px-5 py-5 md:px-5 md:py-3 rounded-3xl text-white bg-[#111111]  duration-50 hover:text-black hover:bg-white gap-2 items-center cursor-pointer  transition-colors">
              <h1 className="text-sm md:text-base inter-md">About Us</h1>{" "}
              <MoveRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
