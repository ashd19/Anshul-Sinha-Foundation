import { Search } from "lucide-react";
import { div } from "motion/react-client";

export default function Navbar() {

    return (
        <>
            <nav className="w-full py-5 inter-md  px-10 flex  items-center justify-between fixed top-0 z-[999] bg-white  ">
                <a href='#' className="">
                    Anshul Sinha Foundation
                </a>
                <div className="flex items-center justify-center gap-5">
                    {["Home", "Blog", "Book Online",].map((item, index) => (
                        <a href={`${item}`} key={index} className="inter-small">{item}</a>
                    ))}
                    {/* <div className="flex flex-row ">
                        <Search color="grey" width={15} height={15} className="mt-1 mr-1"/>
                        <input type="text" placeholder="Search" className="w-[150px]  inter-small focus:border-none" /></div> */}
                    {<a href="#" className="rounded-3xl bg-[#22E56D] w-fit p-2  h-fit inter-bold text-white whitespace-nowrap hover:text-green-600 hover:bg-black transition-colors durantion-400 ease-in">Donate Now</a>}
                </div>
                <a href="/login" className=" ">
                    Log in
                </a>
            </nav>
        </>
    )
}