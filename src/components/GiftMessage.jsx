import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Gift } from 'lucide-react';

const GiftMessagesSection = () => {
  const [openGifts, setOpenGifts] = useState({});

  const giftMessages = [
    "You are the most beautiful soul I've ever encountered, inside and out 😊",
    "Every laugh we share, every smile you give me - these are treasures beyond measure 😂",
    "Thank you for making every ordinary day feel like pure magic 🌟",
    "The time we used to spend on vc was awesome, I miss it 💖",
    "Here's to forever - to all the dreams you'll chase and memories you'll create 🥂",
    "You are not just special to me, you are my best friend buddy. 💎",
    "I've got myself, but in opposite gender! 🎁, My xerox 😉",
    "Never change, because you are perfect just the way you are. 🌹",
    "Never loose your innocence and childlike wonder. 🌈",
    "You can achieve anything you set your mind to. 🚀",
  ];

  const openGift = (giftId) => {
    setOpenGifts(prev => ({
      ...prev,
      [giftId]: !prev[giftId]
    }));
  };

  return (
    <div className="text-center max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-600 to-rose-600 bg-clip-text text-transparent mb-10 px-2">
        Special Messages for You 🎁
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">
        {giftMessages.map((message, index) => {
          const isOpen = openGifts[index];
          return (
            <div 
              key={index}
              className="relative group cursor-pointer perspective-1000"
              onClick={() => openGift(index)}
            >
              {/* 3D Gift Box */}
              <motion.div
                className="relative w-full h-48 sm:h-56 rounded-xl sm:rounded-2xl shadow-2xl transform-style-preserve-3d"
                animate={{ rotateX: isOpen ? -20 : 0, rotateY: isOpen ? 5 : 0, scale: isOpen ? 1.05 : 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* Box Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-300 via-pink-200 to-amber-200 rounded-xl sm:rounded-2xl border border-white/40 shadow-lg" />

                {/* Ribbon */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ scaleX: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-2/3 h-2 bg-rose-600 rounded-full shadow-md" />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center rotate-90"
                  animate={{ scaleX: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-2/3 h-2 bg-rose-600 rounded-full shadow-md" />
                </motion.div>

                {/* Lid */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-rose-400 to-amber-300 rounded-t-xl border-b border-white/40"
                  animate={{ rotateX: isOpen ? -100 : 0, transformOrigin: "bottom center" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                {/* Inside Content */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                  transition={{ delay: isOpen ? 0.4 : 0, duration: 0.5 }}
                >
                  <p className="text-slate-800 font-semibold text-sm sm:text-base leading-relaxed">
                    {message}
                  </p>
                </motion.div>

                {/* Closed State Hint */}
                {!isOpen && (
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Gift className="text-violet-600 mb-2" size={40} />
                    <p className="text-slate-700 font-medium text-sm sm:text-base">
                      Click to unwrap! 🎀
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GiftMessagesSection;

