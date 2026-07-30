import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const START_DATE = new Date("2025-11-21T00:00:00");

export default function Together({ setPage }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const diff = Math.max(0, now - START_DATE);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ days, hours, minutes, seconds });
    };

    updateCounter();
    const timer = setInterval(updateCounter, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 flex flex-col items-center justify-center p-6 md:p-12">

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-pink-200/80 text-pink-700 text-sm font-semibold uppercase tracking-wider mb-2">
          Milestone Counter
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-pink-600">
          ❤️ Time Together ❤️
        </h1>
        <p className="mt-3 text-gray-600 text-base max-w-md mx-auto">
          Every single second with you, My Love , adds magic to my life.
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl w-full"
      >
        <TimeCard value={time.days} label="Days" emoji="☀️" />
        <TimeCard value={time.hours} label="Hours" emoji="🌙" />
        <TimeCard value={time.minutes} label="Minutes" emoji="⏳" />
        <TimeCard value={time.seconds} label="Seconds" emoji="💖" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="mt-12 max-w-xl text-center bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-pink-200"
      >
        <p className="text-xl md:text-2xl text-pink-600 font-bold italic leading-relaxed">
          "No matter how much time passes, I will always choose you. Today, tomorrow, and forever."
        </p>
        <div className="mt-3 flex justify-center items-center gap-1 text-xs text-gray-400">
          <FiStar className="text-amber-400 fill-amber-400" /> Countless moments loved
        </div>
      </motion.div>

      <div className="flex justify-center gap-4 mt-12">
        <button
          onClick={() => setPage("bouquet")}
          className="bg-white hover:bg-pink-50 text-pink-600 border border-pink-300 font-semibold px-8 py-3 rounded-full transition shadow-sm text-sm"
        >
          ← Flower Bouquet
        </button>
        <button
          onClick={() => setPage("award")}
          className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-8 py-3 rounded-full transition shadow-lg text-sm"
        >
          Best GF Award →
        </button>
      </div>

    </div>
  );
}

function TimeCard({ value, label, emoji }) {
  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-6 text-center border border-pink-100 flex flex-col justify-center items-center transform hover:scale-105 transition duration-300">
      <span className="text-2xl mb-1">{emoji}</span>
      <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
        {value}
      </h2>
      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500">
        {label}
      </p>
    </div>
  );
}
