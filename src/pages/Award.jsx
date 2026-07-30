import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { FiHeart } from "react-icons/fi";

export default function Award({ setPage }) {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-pink-100 to-rose-100 flex flex-col items-center justify-center p-4 md:p-8">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="bg-white rounded-[40px] shadow-2xl max-w-3xl w-full p-8 md:p-12 border-[10px] border-amber-300 relative overflow-hidden text-center"
      >
        <div className="absolute top-4 left-4 text-3xl opacity-40">👑</div>
        <div className="absolute top-4 right-4 text-3xl opacity-40">👑</div>

        <motion.div
          animate={{ rotate: [0, -8, 8, 0], y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-7xl md:text-8xl mb-4 inline-block drop-shadow-md"
        >
          🏆
        </motion.div>

        <span className="text-xs font-bold tracking-widest text-amber-600 uppercase bg-amber-100 px-4 py-1.5 rounded-full inline-block mb-3">
          Official Certificate of Appreciation
        </span>

        <h1 className="text-4xl md:text-6xl font-black text-amber-600 tracking-tight">
          Best Girlfriend Award
        </h1>

        <p className="mt-4 text-gray-500 text-base md:text-lg">
          This award is officially presented to
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mt-3 mb-6 flex items-center justify-center gap-3 flex-wrap py-2">
          <span className="inline-block text-rose-500">❤️</span>
          <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text text-transparent inline-block pb-4 pt-2 overflow-visible tracking-wide">
            Manjari
          </span>
          <span className="inline-block text-rose-500">❤️</span>
        </h2>

        <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-200/80 max-w-xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg">
          For being the absolute sweetest, most caring, beautiful, witty, and amazing person in the entire universe. 
          <br /><br />
          Thank you for filling every single day with love, endless laughter, and true happiness.
        </div>

        <div className="mt-10 flex justify-between items-end max-w-md mx-auto px-4 text-xs font-semibold text-gray-600">
          <div>
            <div className="border-b-2 border-gray-400 w-32 pb-1 font-serif text-pink-600 text-sm font-bold">With All My Heart</div>
            <p className="mt-1 text-gray-400 uppercase tracking-wider">Signed</p>
          </div>

          <FiHeart className="text-3xl text-rose-500 animate-pulse" />

          <div>
            <div className="border-b-2 border-gray-400 w-32 pb-1 font-serif text-pink-600 text-sm font-bold">Forever & Always</div>
            <p className="mt-1 text-gray-400 uppercase tracking-wider">Date: Today</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => setPage("together")}
            className="bg-white hover:bg-amber-50 text-amber-700 border border-amber-300 font-semibold px-8 py-3 rounded-full transition shadow-sm text-sm"
          >
            ← Time Together
          </button>
          <button
            onClick={() => setPage("final")}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold px-10 py-3 rounded-full transition shadow-xl text-base"
          >
            Final Surprise →
          </button>
        </div>

      </motion.div>

    </div>
  );
}