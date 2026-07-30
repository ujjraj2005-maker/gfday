import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingHearts() {
  const [clickHearts, setClickHearts] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.closest("button") || e.target.closest("input")) return;
      
      const newHeart = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        offsetX: Math.random() * 60 - 30,
        rotate: Math.random() * 40 - 20,
        emoji: ["💖", "💗", "💕", "🌸", "✨", "❤️", "🥰"][Math.floor(Math.random() * 7)],
        size: Math.floor(Math.random() * 16) + 20,
      };

      setClickHearts((prev) => [...prev.slice(-15), newHeart]);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {clickHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, scale: 0.5, x: heart.x - 12, y: heart.y - 12 }}
            animate={{
              opacity: 0,
              scale: 1.6,
              y: heart.y - 120,
              x: heart.x + heart.offsetX,
              rotate: heart.rotate,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute text-pink-500 drop-shadow-md select-none"
            style={{ fontSize: `${heart.size}px` }}
          >
            {heart.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
