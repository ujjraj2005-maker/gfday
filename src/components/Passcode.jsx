import { useState } from "react";
import { motion } from "framer-motion";
import { FiHelpCircle } from "react-icons/fi";

export default function Passcode({ setPage, onUnlock }) {
  const [pin, setPin] = useState("");
  const [wrong, setWrong] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handlePress = (num) => {
    if (pin.length >= 4) return;

    const newPin = pin + num;
    setPin(newPin);

    if (newPin.length === 4) {
      setTimeout(() => {
        if (newPin === "1409") {
          if (onUnlock) onUnlock();
          setPage("welcome");
        } else {
          setWrong(true);
          setTimeout(() => {
            setWrong(false);
            setPin("");
          }, 700);
        }
      }, 200);
    }
  };

  const clear = () => setPin("");
  const backspace = () => setPin(pin.slice(0, -1));

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200 flex items-center justify-center p-4">

      {/* Floating Background Glows */}
      <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-pink-400 blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-400 blur-3xl opacity-30"></div>

      {/* Ambient Floating Hearts */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: -900, opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 8 + (i % 5),
            repeat: Infinity,
            delay: i * 0.8,
          }}
          className="absolute text-pink-400/60 pointer-events-none select-none"
          style={{
            left: `${(i * 8.5) % 100}%`,
            fontSize: `${18 + (i % 4) * 6}px`,
          }}
        >
          💖
        </motion.div>
      ))}

      {/* Main Lock Card */}
      <motion.div
        animate={wrong ? { x: [-12, 12, -10, 10, -5, 5, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm rounded-[40px] bg-white/75 backdrop-blur-2xl shadow-2xl border border-white/80 p-8 z-10"
      >
        <div className="text-center">

          {/* Teddy Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="text-7xl mb-2 inline-block filter drop-shadow-md"
          >
            🧸
          </motion.div>

          <h1 className="text-3xl sm:text-4xl font-extrabold leading-relaxed py-2">
            <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent inline-block pb-4 pt-2 overflow-visible tracking-wide">
              Hi Manjari
            </span>{" "}
            <span className="inline-block text-rose-500">❤️</span>
          </h1>

          <p className="mt-2 text-gray-600 text-sm font-medium">
            Enter passcode to unlock our world
          </p>

          {/* Pin Dots Display */}
          <div className="flex justify-center gap-4 mt-6">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: pin.length > i ? 1.2 : 1,
                }}
                className={`w-4 h-4 rounded-full border-2 border-pink-500 transition-all duration-200 ${
                  pin.length > i ? "bg-pink-500 shadow-md shadow-pink-300" : "bg-white/80"
                }`}
              />
            ))}
          </div>

          {/* Error Message */}
          {wrong && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-rose-500 font-semibold text-xs">
              Wrong Passcode 🥺 Try again!
            </motion.p>
          )}

          {/* Hint Trigger */}
          <button
            onClick={() => setShowHint(!showHint)}
            className="mt-3 text-xs text-pink-600 font-medium hover:underline flex items-center justify-center gap-1 mx-auto"
          >
            <FiHelpCircle size={13} /> {showHint ? "Passcode is 1409" : "Need a hint?"}
          </button>
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-3.5 mt-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <motion.button
              whileTap={{ scale: 0.92 }}
              key={n}
              onClick={() => handlePress(String(n))}
              className="h-14 rounded-2xl bg-white/90 hover:bg-pink-100/80 active:bg-pink-200 text-gray-800 text-xl font-bold shadow-sm border border-pink-50 flex items-center justify-center transition"
            >
              {n}
            </motion.button>
          ))}

          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={backspace}
            className="h-14 rounded-2xl bg-purple-100/70 text-purple-700 hover:bg-purple-200 text-lg font-bold shadow-sm flex items-center justify-center transition"
          >
            ⌫
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => handlePress("0")}
            className="h-14 rounded-2xl bg-white/90 hover:bg-pink-100/80 text-gray-800 text-xl font-bold shadow-sm border border-pink-50 flex items-center justify-center transition"
          >
            0
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={clear}
            className="h-14 rounded-2xl bg-rose-100/70 text-rose-700 hover:bg-rose-200 text-sm font-bold shadow-sm flex items-center justify-center transition"
          >
            CLEAR
          </motion.button>
        </div>
      </motion.div>

    </div>
  );
}