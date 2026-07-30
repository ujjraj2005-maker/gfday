import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Passcode from "./components/Passcode";
import Welcome from "./components/Welcome";
import LoveLetter from "./pages/LoveLetter";
import Reason from "./pages/Reason";
import Cute from "./pages/cute";
import Bouquet from "./pages/Bouquet";
import Together from "./pages/Together";
import Award from "./pages/Award";
import Final from "./pages/Final";
import MusicPlayer from "./components/MusicPlayer";
import FloatingHearts from "./components/FloatingHearts";
import Navbar from "./components/Navbar";

export default function App() {
  const [page, setPage] = useState("passcode");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  const renderPage = () => {
    switch (page) {
      case "passcode":
        return <Passcode setPage={setPage} onUnlock={handleUnlock} />;
      case "welcome":
        return <Welcome setPage={setPage} />;
      case "letter":
        return <LoveLetter setPage={setPage} />;
      case "reason":
        return <Reason setPage={setPage} />;
      case "cute":
        return <Cute setPage={setPage} />;
      case "bouquet":
        return <Bouquet setPage={setPage} />;
      case "together":
        return <Together setPage={setPage} />;
      case "award":
        return <Award setPage={setPage} />;
      case "final":
        return <Final setPage={setPage} />;
      default:
        return <Welcome setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 font-sans antialiased text-gray-800 select-none">
      {/* Global Interactive Tap-to-Heart Effect */}
      {/* Show only after unlocking */}
{isUnlocked && <FloatingHearts />}

{isUnlocked && (
  <Navbar
    currentSection={page}
    setPage={setPage}
  />
)}

...

{isUnlocked && (
  <MusicPlayer isUnlocked={isUnlocked} />
)}
    </div>
  );
}
