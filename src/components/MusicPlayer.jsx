import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMusic, FiPause, FiPlay, FiVolume2, FiVolumeX } from "react-icons/fi";
import musicFile from "../assets/music/The Ronettes - Be My Baby (Lyrics) - 7clouds Rock (128k).mp3";

export default function MusicPlayer({ isUnlocked }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Attempt auto-play when unlocked
    if (isUnlocked && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Autoplay blocked by browser policy until user interaction:", err);
      });
    }
  }, [isUnlocked]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 select-none">
      <audio ref={audioRef} src={musicFile} loop />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-pink-200/60 p-2.5 rounded-full shadow-xl hover:shadow-pink-200/50 transition-all duration-300"
      >
        {/* Equalizer / Disc Icon */}
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          onClick={() => setExpanded(!expanded)}
          className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white shadow-md cursor-pointer relative"
        >
          <FiMusic className="text-lg" />
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
          )}
        </motion.div>

        {/* Player Controls & Info */}
        <AnimatePresence>
  {expanded && (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "auto", opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3 overflow-hidden pr-2 text-sm font-medium text-gray-700 whitespace-nowrap"
    >
      <div className="flex flex-col">
        <span className="text-xs font-bold text-pink-600">
          Our Song 🎵
        </span>
        <span className="text-[10px] text-gray-400">
          Romantic Melody
        </span>
      </div>

      {isPlaying && (
        <div className="flex items-end gap-0.5 h-4 px-1">
          <motion.div
            animate={{ height: ["20%", "100%", "40%"] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
            className="w-1 bg-pink-500 rounded-full"
          />
          <motion.div
            animate={{ height: ["60%", "30%", "90%"] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-1 bg-rose-400 rounded-full"
          />
          <motion.div
            animate={{ height: ["90%", "20%", "70%"] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
            className="w-1 bg-pink-400 rounded-full"
          />
        </div>
      )}

      <button
        onClick={togglePlay}
        className="w-8 h-8 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-600 flex items-center justify-center transition"
      >
        {isPlaying ? <FiPause size={14} /> : <FiPlay size={14} />}
      </button>

      <button
        onClick={toggleMute}
        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition"
      >
        {isMuted ? <FiVolumeX size={14} /> : <FiVolume2 size={14} />}
      </button>
    </motion.div>
  )}
</AnimatePresence>
      </motion.div>
    </div>
  );
}
