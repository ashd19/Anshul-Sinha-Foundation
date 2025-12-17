import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full backdrop-blur-sm py-5 inter-md px-4 md:px-10 flex items-center justify-between fixed top-0 z-[999] bg-white/40 shadow-sm">
        <a href="#" className="text-sm md:text-base font-bold">
          Anshul Sinha Foundation
        </a>

        <div className="hidden md:flex items-center justify-center gap-5">
          {["Home", "Blog", "Book Online"].map((item, index) => (
            <a href={`${item}`} key={index} className="inter-small">
              {item}
            </a>
          ))}
          <a
            href="#"
            className="rounded-3xl bg-[#22E56D] w-fit p-2 h-fit inter-bold text-white whitespace-nowrap hover:text-green-600 hover:bg-black transition-colors duration-400 ease-in"
          >
            Donate Now
          </a>
        </div>

        <a
          href="/login"
          className="hidden md:block hover:scale-90 transition-transform duration-200 ease-in"
        >
          Log in
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[998] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-[73px] right-0 h-full w-64 bg-white z-[998] shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
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
    </>
  );
}
