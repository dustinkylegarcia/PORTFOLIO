import { motion } from "framer-motion";

export default function IntroLoader() {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        {/* LOGO */}
        <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
          <span className="text-white font-bold text-xl">DK</span>
        </div>

        <h1 className="text-white text-2xl font-semibold tracking-wide">
          DUSTIN KYLE
        </h1>
      </motion.div>
    </motion.div>
  );
}
