import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-navy-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-blue-400">
          &lt;/&gt; TIN
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
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
        <div className="md:hidden bg-blue-800 px-6 py-4 space-y-4 text-lg font-medium">
          <Link
            to="/"
            className="block hover:text-blue-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-blue-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="block hover:text-blue-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="block hover:text-blue-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
