import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { FiRotateCcw, FiStar } from "react-icons/fi";

export default function Final({ setPage }) {
  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
    });
  };

  useEffect(() => {
    triggerConfetti();
  }, []);

  const floatingElements = Array.from({ length: 25 });

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#312e81] flex flex-col items-center justify-center p-6 text-white text-center">

      {floatingElements.map((_, index) => (
        <motion.div
          key={index}
          initial={{
            y: "110vh",
            x: (index * 45) % (typeof window !== "undefined" ? window.innerWidth : 1000),
            opacity: 0,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: 8 + (index % 6),
            repeat: Infinity,
            delay: index * 0.3,
          }}
          className="absolute text-2xl pointer-events-none select-none"
        >
          {index % 2 === 0 ? "💖" : "✨"}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-2xl rounded-[40px] p-8 md:p-14 border border-white/20 max-w-3xl w-full shadow-2xl z-10 relative"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-7xl md:text-8xl mb-6 inline-block"
        >
          🌹
        </motion.div>

        <motion.h1
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="text-5xl md:text-7xl font-black bg-gradient-to-r from-pink-300 via-rose-300 to-purple-200 bg-clip-text text-transparent tracking-tight drop-shadow-md"
        >
          I LOVE YOU ❤️
        </motion.h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-200 mt-2 leading-relaxed inline-block pb-1">
          Manjari
        </h2>

        <p className="text-gray-200 text-base md:text-xl mt-6 max-w-xl mx-auto leading-relaxed">
          Thank you for being my happiness, my safe place, my best friend, and the greatest love of my life.
          <br /><br />
          <span className="text-pink-300 font-semibold">Happy Girlfriend's Day! ✨</span>
          <br />
          I hope this website made you smile as much as you make me smile every day.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={triggerConfetti}
            className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold px-8 py-3.5 rounded-full transition shadow-lg flex items-center justify-center gap-2 text-sm"
          >
            <FiStar className="fill-amber-300 text-amber-300" />
            <span>Celebrate Again 🎉</span>
          </button>

          <button
            onClick={() => setPage("passcode")}
            className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold px-8 py-3.5 rounded-full transition shadow-md flex items-center justify-center gap-2 text-sm"
          >
            <FiRotateCcw />
            <span>Replay Our Story 💕</span>
          </button>
        </div>
      </motion.div>

    </div>
  );
}