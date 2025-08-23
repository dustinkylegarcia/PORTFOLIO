import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white text-center px-6">
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-blue-400">Dustin</span> 👨‍💻
      </motion.h2>

      <motion.p
        className="text-xl md:text-2xl text-gray-300 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        I build modern websites and applications using the{" "}
        <span className="font-semibold text-blue-300">MERN stack</span>.
      </motion.p>

      <motion.a
        href="/resume.pdf"
        download
        className="mt-8 inline-block bg-blue-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        📄 Download Resume
      </motion.a>
    </section>
  );
}
