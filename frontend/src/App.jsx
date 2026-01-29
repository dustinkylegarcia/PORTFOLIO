import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import IntroLoader from "./IntroLoader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    if (visited) {
      setShowLoader(false);
    } else {
      sessionStorage.setItem("visited", "true");
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 1200); // loader duration (1.2s)

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showLoader ? (
        <IntroLoader key="loader" />
      ) : (
        <div key="app" className="h-screen flex flex-col bg-slate-100 overflow-hidden">
          <Navbar />

          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}
