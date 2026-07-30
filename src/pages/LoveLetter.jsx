import { motion } from "framer-motion";
import { FiHeart, FiFeather } from "react-icons/fi";

export default function LoveLetter({ setPage }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 flex flex-col items-center justify-center p-6">

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-2xl rounded-[35px] shadow-2xl border border-pink-200/80 max-w-2xl w-full p-8 md:p-12 relative overflow-hidden text-center"
      >
        {/* Envelope Stamp Detail */}
        <div className="absolute top-6 right-6 w-14 h-16 border-2 border-dashed border-pink-300 rounded-lg flex items-center justify-center bg-pink-50 text-pink-500 font-bold text-xs transform rotate-6">
          <div className="text-center">
            <span>AUG</span>
            <div className="text-base font-extrabold">01</div>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-2xl shadow-inner">
            <FiFeather />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text text-transparent mb-6 font-cursive pb-2">
          💌 My Love Letter 💌
        </h1>

        <div className="text-gray-800 leading-relaxed text-xl md:text-2xl font-handwriting space-y-4 text-left max-w-lg mx-auto bg-pink-50/70 p-8 rounded-3xl border border-pink-200/80 shadow-inner relative">
          <p className="font-bold text-pink-600 text-2xl md:text-3xl font-cursive pb-1 tracking-wide">
            Dearest Manjari My love,
          </p>

          <p className="leading-relaxed">
            Meeting you has been one of the most beautiful gifts life could have ever given me. 
          </p>

          <p className="leading-relaxed">
            Your smile has this magic that makes even my hardest days bright. Your voice brings me peace, and your love gives me endless strength.
          </p>

          <p className="leading-relaxed">
            Thank you for being so patient, caring, understanding, and for always believing in me even when I doubt myself.
          </p>

          <p className="leading-relaxed">
            I don't know what tomorrow holds, but I know with complete certainty that I want every tomorrow with you.
          </p>

          <p className="text-right font-bold text-pink-600 text-2xl md:text-3xl pt-3 flex items-center justify-end gap-1.5 font-cursive">
            <FiHeart className="fill-pink-500 text-rose-500 inline-block" /> Forever Yours ❤️
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setPage("welcome")}
            className="bg-white hover:bg-pink-50 text-pink-600 border border-pink-300 font-semibold px-8 py-3 rounded-full transition text-sm"
          >
            ← Menu
          </button>
          <button
            onClick={() => setPage("reason")}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-8 py-3 rounded-full transition shadow-lg text-sm flex items-center justify-center gap-2"
          >
            <span>50 Reasons</span>
            <span>→</span>
          </button>
        </div>

      </motion.div>

    </div>
  );
}
