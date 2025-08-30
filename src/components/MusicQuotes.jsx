import React, { useState } from 'react';
import { Music } from 'lucide-react';

const MusicQuotesSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const birthdayQuotes = [
    "A love like yours is a miracle that happens once in a lifetime! 🎁",
    "May your birthday sparkle with joy and shimmer with love! ☀️",
    "Here's to celebrating the most precious person in my universe! 🌟",
    "Another year of being absolutely perfect in every way! 🎈",
    "You are my heart's greatest blessing and life's sweetest gift! 💝",
    "Today we celebrate you - the one who makes everything beautiful! 🌸"
  ];

  return (
    <div className="text-center max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10 px-2">
        Your Playlist & Quotes 🎵
      </h2>
      
      <div className="bg-white/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 shadow-xl border border-white/30">
        <div className="flex items-center justify-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8">
          <Music className="text-amber-500" size={window.innerWidth < 640 ? 30 : 35} />
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white transition-all font-medium shadow-lg transform hover:scale-105 text-sm sm:text-base"
          >
            {isPlaying ? '⏸️ Pause' : '▶️ Play'} Your Song
          </button>
        </div>
        <p className="text-slate-600 text-base sm:text-lg italic">🎶 "Your favorite birthday song would play here" 🎶</p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {birthdayQuotes.map((quote, index) => (
          <div 
            key={index}
            className="bg-gradient-to-r from-violet-100/80 to-rose-100/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 transform hover:scale-105 transition-all duration-300 shadow-lg border border-white/30"
          >
            <p className="text-slate-700 text-base sm:text-lg italic font-medium leading-relaxed">"{quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicQuotesSection;