import { useState } from "react";
import { motion } from "framer-motion";
import { FiHeart, FiSearch, FiStar } from "react-icons/fi";

const reasons = [
  "Your beautiful, radiant smile 😊",
  "You always know how to make me laugh ❤️",
  "Your deeply caring and soft nature 🌸",
  "Your adorable laugh when you get excited 😂",
  "You believe in me even when I doubt myself 💖",
  "You understand me like no one else does 🥺",
  "You turn ordinary days into magical memories ✨",
  "You are, and will always be, my favorite person 💕",
  "You inspire me to be a better person every day 🌹",
  "Your eyes sparkle when you talk about things you love 💘",
  "You make my heart skip a beat every time I see you 💓",
  "Your kindness touches everyone around you 🌼",
  "The warm hugs you give that melt all my stress away 🧸",
  "The cute way you say my name 💬",
  "Because you are simply one of a kind ❤️",
];

export default function Reason({ setPage }) {
  const [filter, setFilter] = useState("");

  const filteredReasons = reasons.filter((r) =>
    r.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 p-6 md:p-12">

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <span className="inline-block px-4 py-1.5 rounded-full bg-pink-200/80 text-pink-700 text-sm font-semibold uppercase tracking-wider mb-2">
          Reasons Why You're Special
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-pink-600">
          🌸 Reasons I Love You 🌸
        </h1>
        <p className="mt-3 text-gray-600 text-base max-w-md mx-auto">
          Just a few of the countless reasons why my heart chose you, Manjari.
        </p>
      </motion.div>

      {/* Search Input Bar */}
      <div className="max-w-md mx-auto mb-10 relative">
        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400" size={18} />
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search reasons (e.g. smile, laugh)..."
          className="w-full bg-white/90 backdrop-blur-md border border-pink-200 rounded-full pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-pink-500 shadow-sm text-gray-700"
        />
      </div>

      {/* Reasons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredReasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.04, y: -4 }}
            className="bg-white/85 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-pink-100 text-center flex flex-col items-center justify-between group hover:shadow-pink-200/60 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-500 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition duration-300">
              <FiHeart className="fill-pink-400" />
            </div>

            <p className="text-gray-800 font-medium text-base leading-relaxed">
              {reason}
            </p>

            <span className="mt-4 text-[10px] font-bold text-pink-400 uppercase tracking-widest flex items-center gap-1">
              <FiStar className="fill-pink-300" /> Reason #{index + 1}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Navigation Footer */}
      <div className="flex justify-center gap-4 mt-16">
        <button
          onClick={() => setPage("letter")}
          className="bg-white hover:bg-pink-50 text-pink-600 border border-pink-300 font-semibold px-8 py-3 rounded-full transition shadow-sm text-sm"
        >
          ← Love Letter
        </button>
        <button
          onClick={() => setPage("cute")}
          className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-8 py-3 rounded-full transition shadow-lg text-sm"
        >
          Cute Chats →
        </button>
      </div>

    </div>
  );
}