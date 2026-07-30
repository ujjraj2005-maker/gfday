import { motion } from "framer-motion";
import { FiHome, FiHeart } from "react-icons/fi";

export default function Navbar({ currentSection, setPage }) {
  if (currentSection === "passcode") return null;

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/60 border-b border-pink-100/60 shadow-sm px-6 py-3 flex items-center justify-between"
    >
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage("welcome")}>
        <span className="text-2xl">🧸</span>
        <span className="font-bold text-base sm:text-lg bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent inline-block pb-1 pt-0.5 leading-normal">
          Girlfriend Day Special
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setPage("welcome")}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-100/80 hover:bg-pink-200 text-pink-700 font-medium text-sm transition shadow-sm"
        >
          <FiHome size={15} />
          <span>Menu</span>
        </button>

        <button
          onClick={() => setPage("final")}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-medium text-sm transition shadow-md"
        >
          <FiHeart size={15} />
          <span>Surprise</span>
        </button>
      </div>
    </motion.header>
  );
}
