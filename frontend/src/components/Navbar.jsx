import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="w-full bg-navy-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/Tin.svg"
            alt="TIN logo"
            className="h-20 md:h-22 hover:drop-shadow-[0_0_12px_#38BDF8] transition"
          />
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {links.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-slate-200 hover:text-blue-400 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200 hover:text-blue-400 transition"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-navy-800 px-6 py-4 space-y-4 text-sm font-medium md:hidden">
          {links.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block text-slate-200 hover:text-blue-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
