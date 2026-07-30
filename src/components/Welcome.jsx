import { motion } from "framer-motion";
import { FiHeart, FiStar } from "react-icons/fi";

const cards = [
  { title: "Love Letter", desc: "A special handwritten note for you", emoji: "💌", page: "letter", color: "from-pink-500 to-rose-400" },
  { title: "50 Reasons", desc: "Why you mean the world to me", emoji: "🌸", page: "reason", color: "from-pink-400 to-rose-500" },
  { title: "Cute Chats", desc: "Replaying sweet text moments", emoji: "🧸", page: "cute", color: "from-purple-400 to-pink-400" },
  { title: "Flower Bouquet", desc: "Blooming flowers arranged for you", emoji: "💐", page: "bouquet", color: "from-rose-400 to-amber-400" },
  { title: "Time Together", desc: "Live relationship milestone counter", emoji: "⌛", page: "together", color: "from-rose-400 to-pink-500" },
  { title: "Best GF Award", desc: "Official certificate of excellence", emoji: "🏆", page: "award", color: "from-yellow-400 to-amber-500" },
  { title: "Final Surprise", desc: "A sparkling night surprise", emoji: "🌙", page: "final", color: "from-indigo-600 to-purple-700" },
];

export default function Welcome({ setPage }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 p-6 md:p-12">

      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="text-7xl mb-2 inline-block filter drop-shadow-md"
        >
          🧸
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-6xl font-black bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent tracking-tight"
        >
          Happy Girlfriend's Day
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl font-extrabold text-gray-800 mt-2 flex items-center justify-center gap-2 pb-1"
        >
          <FiHeart className="text-pink-500 fill-pink-500 shrink-0" />
          <span className="leading-relaxed inline-block pb-1">Manjari</span>
          <FiHeart className="text-pink-500 fill-pink-500 shrink-0" />
        </motion.h2>

        <p className="mt-3 text-gray-600 text-base md:text-lg">
          I built this little corner of the internet just for you. Every card hides a special memory created with love! ✨
        </p>
      </div>

      {/* Grid of Interactive Experience Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.04, y: -6 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setPage(card.page)}
            className="bg-white/85 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-pink-100/80 cursor-pointer text-center relative overflow-hidden group hover:shadow-pink-200/60 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Accent Gradient Bar */}
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${card.color}`}></div>

            <div>
              <div className="text-5xl mt-2 mb-3 transform group-hover:scale-110 transition duration-300 inline-block">
                {card.emoji}
              </div>

              <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition">
                {card.title}
              </h3>

              <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                {card.desc}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-pink-50 flex items-center justify-center gap-1 text-pink-600 font-semibold text-xs group-hover:gap-2 transition-all">
              <span>Open Surprise</span>
              <FiStar size={13} className="fill-pink-400 text-pink-400" />
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}