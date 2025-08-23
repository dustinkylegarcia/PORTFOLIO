import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-blue-400">
          &lt;/&gt; TIN
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <a href="#hero" className="hover:text-blue-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white hover:text-blue-400 transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4 text-lg font-medium">
          <a
            href="#hero"
            className="block hover:text-blue-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="#projects"
            className="block hover:text-blue-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block hover:text-blue-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
