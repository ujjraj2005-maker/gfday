import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiHeart } from "react-icons/fi";

const initialMessages = [
  { id: 1, sender: "me", text: "Hey Beautiful ❤️", time: "10:00 AM" },
  { id: 2, sender: "you", text: "Hmmm? 😊", time: "10:01 AM" },
  { id: 3, sender: "me", text: "Do you know you're my favorite person in the entire world?", time: "10:01 AM" },
  { id: 4, sender: "you", text: "Really? 🥹💖", time: "10:02 AM" },
  { id: 5, sender: "me", text: "Every single second of every day. ❤️", time: "10:02 AM" },
  { id: 6, sender: "me", text: "You're the main reason I smile when I check my phone.", time: "10:03 AM" },
  { id: 7, sender: "you", text: "Awww 🧸❤️ You always know how to make me blush!", time: "10:03 AM" },
  { id: 8, sender: "me", text: "Happy Girlfriend's Day, my love Manjari! 🌸✨", time: "10:04 AM" },
];

export default function Cute({ setPage }) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: "me",
      text: input,
      time: "Just now",
    };

    setMessages([...messages, newMsg]);
    setInput("");

    // Cute auto reply after 1 sec
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "you",
          text: "I love you so so much! 🥰❤️",
          time: "Just now",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100 p-4 md:p-8 flex flex-col items-center justify-center">

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600">
          🧸 Our Cute Chats 🧸
        </h1>
        <p className="text-gray-500 text-sm mt-1">Replaying our sweet message history</p>
      </motion.div>

      {/* Mock Phone Container */}
      <div className="w-full max-w-lg bg-white/90 backdrop-blur-xl rounded-[35px] shadow-2xl border border-pink-200 overflow-hidden flex flex-col h-[580px]">

        {/* Chat Header */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold border border-white/40">
              🧸
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">Manjari ❤️</h3>
              <span className="text-[11px] text-pink-100 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400"></span> Online & Loving You
              </span>
            </div>
          </div>
          <FiHeart className="text-white text-xl animate-bounce" />
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-pink-50/40">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col ${msg.sender === "me" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 shadow-sm text-sm ${
                    msg.sender === "me"
                      ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-pink-100 rounded-bl-none"
                  }`}
                >
                  <p className="leading-relaxed">{msg.text}</p>
                </div>
                <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.time}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Chat Input Bar */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-pink-100 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a cute message..."
            className="flex-1 bg-pink-50 border border-pink-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-pink-500 text-gray-700"
          />
          <button
            type="submit"
            className="w-9 h-9 rounded-full bg-pink-500 hover:bg-pink-600 text-white flex items-center justify-center transition shadow-md"
          >
            <FiSend size={15} />
          </button>
        </form>

      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => setPage("reason")}
          className="bg-white hover:bg-pink-50 text-pink-600 border border-pink-300 font-semibold px-6 py-2.5 rounded-full transition text-sm"
        >
          ← Reasons
        </button>
        <button
          onClick={() => setPage("bouquet")}
          className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-8 py-2.5 rounded-full transition shadow-lg text-sm"
        >
          Flower Bouquet →
        </button>
      </div>

    </div>
  );
}