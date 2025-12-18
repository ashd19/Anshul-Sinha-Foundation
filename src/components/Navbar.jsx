import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>

      <div className="flex items-center justify-center w-full px-4">
        <nav className="w-fit max-w-5xl rounded-full backdrop-blur-xl mt-4 py-4 md:py-5 inter-md px-6 md:px-10 flex items-center justify-center gap-5 fixed top-0 z-[999] bg-white/40 border border-white/20 shadow-lg transition-all duration-300">
          <a href="#" className="text-sm md:text-base font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] sm:max-w-none">
            Anshul Sinha Foundation
          </a>
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
            {["Home", "Blog", "Book Online"].map((item, index) => (
              <a href={`${item}`} key={index} className="inter-small text-sm hover:text-[#22E56D] transition-colors">
                {item}
              </a>
            ))}
            <a
              href="#"
              className="rounded-3xl bg-[#22E56D] px-5 py-2 inter-bold text-white text-sm hover:bg-black hover:text-white transition-all duration-300 shadow-md"
            >
              Donate Now
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/login"
              className="hidden md:block text-sm hover:scale-95 transition-transform duration-200"
            >
              Log in
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[998] md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-[73px] right-0 h-full w-64 bg-white z-[998] shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col p-6 space-y-6">
            {["Home", "Blog", "Book Online"].map((item, index) => (
              <a
                href={`${item}`}
                key={index}
                className="inter-small text-lg hover:text-[#22E56D] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="rounded-3xl bg-[#22E56D] w-full py-3 text-center inter-bold text-white hover:text-green-600 hover:bg-black transition-colors duration-400 ease-in"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate Now
            </a>
            <a
              href="/login"
              className="text-center inter-small text-lg hover:text-[#22E56D] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
