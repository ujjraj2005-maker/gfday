import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { FiHeart, FiStar, FiArrowRight, FiArrowLeft, FiMaximize2, FiX, FiRefreshCw } from "react-icons/fi";

const ROMANTIC_MESSAGES = [
  {
    id: 1,
    title: "Every Heartbeat For You",
    text: "Every single beat of my heart belongs to you, Manjari. Happy Girlfriend's Day! ❤️",
    tag: "My Whole Heart",
  },
  {
    id: 2,
    title: "My Happiest Thought",
    text: "You are my favorite person, my safest comfort, and the sweetest part of every day. 🌸",
    tag: "Pure Joy",
  },
  {
    id: 3,
    title: "Ever-Growing Love",
    text: "Just like this blooming flower, my love for you grows sweeter and deeper with every passing second. ✨",
    tag: "Forever Growing",
  },
  {
    id: 4,
    title: "Endless Sunshine & Magic",
    text: "Thank you for filling my life with endless warmth, beautiful smiles, and true magic. 💓",
    tag: "My Sunshine",
  },
  {
    id: 5,
    title: "Forever & Always",
    text: "No matter where life takes us, you will always have my entire heart. Forever & always! 💕",
    tag: "Always Yours",
  },
];

export default function Bouquet({ setPage }) {
  const [msgIndex, setMsgIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popHearts, setPopHearts] = useState([]);

  const currentMsg = ROMANTIC_MESSAGES[msgIndex];

  const handleNextMessage = (event) => {
    const nextIdx = (msgIndex + 1) % ROMANTIC_MESSAGES.length;
    setMsgIndex(nextIdx);

    // Spawn smooth heart particle
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const newPop = {
        id: Date.now(),
        x: rect.left + rect.width / 2,
        y: rect.top,
      };
      setPopHearts((prev) => [...prev.slice(-6), newPop]);
    }

    if (nextIdx === 0) {
      triggerConfetti();
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#ff69b4", "#ff1493", "#ffd700", "#ffb6c1", "#e11d48"],
    });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-pink-100 via-rose-50 to-purple-100 flex flex-col justify-between select-none pb-4 transform-gpu">
      
      {/* GPU-Accelerated Smooth Background Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "105vh",
              x: `${(i * 10) + 2}vw`,
              opacity: 0,
            }}
            animate={{
              y: "-10vh",
              opacity: [0, 0.7, 0.7, 0],
            }}
            transition={{
              duration: 9 + (i % 4),
              repeat: Infinity,
              delay: i * 0.7,
              ease: "linear",
            }}
            className="absolute text-2xl text-pink-400/60 will-change-transform"
          >
            {i % 2 === 0 ? "💖" : "🌸"}
          </motion.div>
        ))}
      </div>

      {/* Heart Particles Burst */}
      <AnimatePresence>
        {popHearts.map((pop) => (
          <motion.div
            key={pop.id}
            initial={{ opacity: 1, scale: 0.6, x: pop.x - 20, y: pop.y - 20 }}
            animate={{ opacity: 0, scale: 1.6, y: pop.y - 80 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed z-50 text-3xl pointer-events-none filter drop-shadow-sm will-change-transform"
          >
            💖✨
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Header Area */}
      <div className="relative z-30 text-center max-w-xl mx-auto pt-3 px-4">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pink-200/90 text-pink-800 text-xs font-bold uppercase tracking-wider mb-1 shadow-sm"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="inline-block text-rose-500 will-change-transform"
          >
            ❤️
          </motion.span>
          <span>Beating Hearts & Flower Surprise</span>
          <FiStar className="text-pink-600 animate-spin" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-3xl md:text-5xl font-black bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent tracking-wide pb-4 pt-2 overflow-visible leading-normal"
        >
          💐 For Manjari 💐
        </motion.h1>

        {/* Romantic Message Banner */}
        <div className="mt-3 min-h-[90px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMsg.id}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-3 shadow-lg border border-pink-200 max-w-md w-full relative overflow-hidden text-center"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500" />
              
              <div className="flex items-center justify-center gap-2 mb-0.5">
                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="text-xl inline-block will-change-transform"
                >
                  💖
                </motion.span>
                
                <h3 className="font-black text-base md:text-lg text-gray-800">
                  {currentMsg.title}
                </h3>
                
                <span className="text-[10px] bg-pink-100 text-pink-700 px-2.5 py-0.5 rounded-full font-bold">
                  {currentMsg.tag}
                </span>
              </div>

              <p className="text-pink-700 font-handwriting text-lg md:text-xl font-bold leading-relaxed">
                "{currentMsg.text}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Main Single Aesthetic Flower Bouquet Centerpiece */}
      <div className="relative flex-1 w-full max-w-lg mx-auto my-2 z-10 px-4 flex items-center justify-center">
        
        {/* Hardware-Accelerated Beating Glowing Halo (Opacity GPU Transition) */}
        <motion.div
          animate={{ opacity: [0.3, 0.65, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="absolute inset-x-8 inset-y-4 rounded-[40px] bg-gradient-to-tr from-rose-400 via-pink-400 to-purple-400 blur-2xl pointer-events-none will-change-opacity"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={handleNextMessage}
          className="relative w-full max-w-sm aspect-[3/4] rounded-[36px] bg-white/90 backdrop-blur-xl p-4 shadow-2xl border-4 border-pink-200 flex flex-col items-center justify-between overflow-hidden cursor-pointer group will-change-transform transform-gpu"
        >
          {/* Beating Corner Hearts */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-6 left-6 text-3xl text-pink-500 filter drop-shadow-sm pointer-events-none z-20 will-change-transform"
          >
            ❤️
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            className="absolute bottom-16 right-6 text-3xl text-rose-500 filter drop-shadow-sm pointer-events-none z-20 will-change-transform"
          >
            💖
          </motion.div>

          {/* Aesthetic Flower Image Frame */}
          <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 flex items-center justify-center p-1 shadow-inner">
            
            <img
              src="/assets/pink_tulip.jpg"
              alt="Aesthetic Flower Bouquet for Manjari"
              className="w-full h-full object-cover rounded-[24px] filter drop-shadow-md transform group-hover:scale-103 transition duration-500"
            />

            {/* Hand-Drawn SVG White Outline Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 300 400">
              <rect
                x="10"
                y="10"
                width="280"
                height="380"
                rx="20"
                fill="none"
                stroke="#ffffff"
                strokeWidth="3.5"
                strokeDasharray="14 8 6 8"
                className="filter drop-shadow-md"
              />

              <g fill="#ffffff" stroke="#ffffff" strokeWidth="1.5">
                <path d="M 255 45 C 255 37 267 37 267 45 C 267 53 255 61 255 61 C 255 61 243 53 243 45 C 243 37 255 37 255 45 Z" />
                <path d="M 45 130 C 45 124 53 124 53 130 C 53 136 45 142 45 142 C 45 142 37 136 37 130 C 37 124 45 124 45 130 Z" />
                <line x1="30" y1="40" x2="45" y2="48" strokeWidth="3" strokeLinecap="round" />
                <line x1="28" y1="55" x2="44" y2="60" strokeWidth="3" strokeLinecap="round" />
                <line x1="255" y1="340" x2="270" y2="348" strokeWidth="3" strokeLinecap="round" />
                <path d="M 260 140 L 262 145 L 267 147 L 262 149 L 260 154 L 258 149 L 253 147 L 258 145 Z" />
                <path d="M 35 340 L 37 345 L 42 347 L 37 349 L 35 354 L 33 349 L 28 347 L 33 345 Z" />
                <circle cx="50" cy="370" r="5" />
                <circle cx="62" cy="362" r="3.5" />
                <circle cx="71" cy="355" r="2.5" />
              </g>
            </svg>

            {/* Fullscreen Expand Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-white/90 hover:bg-pink-100 text-pink-600 flex items-center justify-center shadow-md transition"
              title="Expand Fullscreen"
            >
              <FiMaximize2 size={15} />
            </button>

            {/* Ribbon Tag Badge */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="text-3xl filter drop-shadow-sm mb-[-8px] will-change-transform"
              >
                🧸
              </motion.div>
              
              <div className="px-5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-pink-700 font-extrabold text-xs md:text-sm border border-pink-300 shadow-md text-center tracking-wide flex items-center gap-1.5">
                <motion.span animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  💖
                </motion.span>
                <span>For Manjari With Love ❤️</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[36px] p-4 max-w-lg w-full relative shadow-2xl overflow-hidden border-4 border-pink-200"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-pink-100 text-gray-700 flex items-center justify-center transition shadow-md"
              >
                <FiX size={18} />
              </button>

              <div className="relative rounded-[28px] overflow-hidden aspect-[3/4] bg-pink-50 flex items-center justify-center">
                <img
                  src="/assets/pink_tulip.jpg"
                  alt="Aesthetic Flower Bouquet"
                  className="w-full h-full object-cover rounded-[28px]"
                />

                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 400">
                  <rect
                    x="12"
                    y="12"
                    width="276"
                    height="376"
                    rx="22"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeDasharray="14 8 6 8"
                  />
                  <g fill="#ffffff" stroke="#ffffff" strokeWidth="1.5">
                    <path d="M 250 40 C 250 32 262 32 262 40 C 262 48 250 56 250 56 C 250 56 238 48 238 40 C 238 32 250 32 250 40 Z" />
                    <line x1="30" y1="40" x2="45" y2="50" strokeWidth="3" strokeLinecap="round" />
                    <line x1="28" y1="55" x2="45" y2="60" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="50" cy="350" r="6" />
                    <circle cx="62" cy="340" r="4.5" />
                    <circle cx="71" cy="332" r="3" />
                  </g>
                </svg>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-xl font-extrabold text-gray-800 flex items-center justify-center gap-2">
                  <span>🌷</span>
                  <span>Aesthetic Tulip Bouquet</span>
                </h3>
                <p className="text-pink-600 text-xs md:text-sm font-medium italic mt-1">
                  "{currentMsg.text}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Navigation */}
      <div className="relative z-30 flex flex-col items-center gap-2 max-w-xl mx-auto w-full px-4 pb-2">
        <div className="flex items-center justify-center gap-3 w-full">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleNextMessage}
            className="flex-1 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-black py-3 px-6 rounded-full shadow-lg text-sm flex items-center justify-center gap-2 transition"
          >
            <motion.span animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              💖
            </motion.span>
            <span>Next Sweet Message 💌 ({msgIndex + 1}/{ROMANTIC_MESSAGES.length})</span>
            <FiRefreshCw size={14} />
          </motion.button>
        </div>

        <div className="flex items-center justify-between w-full pt-2 border-t border-pink-200/60">
          <button
            onClick={() => setPage("cute")}
            className="bg-white/80 hover:bg-white text-pink-600 border border-pink-200 font-semibold px-4 py-1.5 rounded-full transition text-xs md:text-sm flex items-center gap-1.5 shadow-sm"
          >
            <FiArrowLeft />
            <span>Cute Chats</span>
          </button>

          <button
            onClick={() => setPage("together")}
            className="bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold px-5 py-1.5 rounded-full transition text-xs md:text-sm flex items-center gap-1.5 shadow-md hover:from-rose-600 hover:to-pink-700"
          >
            <span>Time Together</span>
            <FiArrowRight />
          </button>
        </div>
      </div>

    </div>
  );
}
