import { useState } from "react";
import Head from "../assets/head.png";
import Tail from "../assets/tail.png";
import flipSound from "../assets/coin_sound.mp3";
import BgImage from "../assets/bg.png";

const Coin = () => {
  const [side, setSide] = useState("heads");
  const [flipping, setFlipping] = useState(false);
  const [flipCount, setFlipCount] = useState(0);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  const flipCoin = () => {
    const audio = new Audio(flipSound);
    audio.play();
    setFlipping(true);
    setTimeout(() => {
      const newSide = Math.random() < 0.5 ? "heads" : "tails";
      setSide(newSide);
      setFlipCount(prev => prev + 1);
      if (newSide === "heads") {
        setHeadsCount(prev => prev + 1);
      } else {
        setTailsCount(prev => prev + 1);
      }
      // Set flipping to false after a slight delay to ensure the animation completes
      setTimeout(() => {
        setFlipping(false);
      }, 100); // Adjust this delay if needed
    }, 900); // Adjust this delay to slightly before the animation ends
  };

  return (
    <div 
      className="flex flex-col items-center justify-center h-screen w-full p-4 bg-cover bg-center" 
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 sm:mb-16 md:mb-20 text-white shadow-md font-['Press_Start_2P'] text-center px-4">Coin Flip Simulator</h1>

      <div
        className={`w-40 h-40 flex items-center justify-center border-4 border-gray-800 rounded-full shadow-lg transition-transform duration-1000 ${flipping ? "animate-flip" : ""}`}
      >
        <img 
          src={side === "heads" ? Head : Tail} 
          alt={side} 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <button
        className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-['Press_Start_2P'] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full max-w-xs"
        onClick={flipCoin}
        disabled={flipping}
      >
        {flipping ? "Flipping..." : "Flip Coin"}
      </button>
      <div className="mt-6 text-lg text-center w-full text-white flex flex-col md:flex-row md:justify-center md:space-x-6 font-['Press_Start_2P']">
        <p>Total Flips: {flipCount}</p>
        <p>Heads: {headsCount}</p>
        <p>Tails: {tailsCount}</p>
      </div>
      <style>
        {`@keyframes flip {
          0% { transform: translateY(0) rotateX(0deg); }
          25% { transform: translateY(-50px) rotateX(180deg); }
          50% { transform: translateY(0) rotateX(360deg); }
          75% { transform: translateY(-50px) rotateX(540deg); }
          100% { transform: translateY(0) rotateX(720deg); }
        }
        .animate-flip {
          animation: flip 1s ease-in-out;
        }`}
      </style>
    </div>
  );
};

export default Coin;
