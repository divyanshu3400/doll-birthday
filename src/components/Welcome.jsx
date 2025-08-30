import React, { useState, useEffect, useRef } from 'react';
import { Sparkles} from 'lucide-react';

const WelcomeSection = ({ timeLeft }) => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');

  const messages = [
    "Happy Birthday to the most precious soul in my universe! 🎂",
    "You are my sunshine, my moonlight, and every star in between ✨",
    "Every moment with you feels like a beautiful dream come true 🌙",
    "You make my world infinitely more beautiful just by being in it 💕",
    "Here's to celebrating the most amazing person I've ever known! 🥳",
    "Thank you for being the light that guides my heart every day 🌟"
  ];


  // Typewriter effect (existing code)
  useEffect(() => {
    const currentMessage = messages[currentQuote];
    let index = 0;
    setTypewriterText('');
    
    const typeInterval = setInterval(() => {
      if (index < currentMessage.length) {
        setTypewriterText(currentMessage.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentQuote((prev) => (prev + 1) % messages.length);
        }, 3000);
      }
    }, 100);
    
    return () => clearInterval(typeInterval);
  }, [currentQuote]);

  return (
    <div className="text-center max-w-6xl mx-auto relative">
      {/* Floating magical elements - hidden on mobile */}
      <div className="hidden md:block absolute top-10 left-10 text-2xl lg:text-3xl animate-bounce opacity-60" style={{animationDelay: '0.5s'}}>✨</div>
      <div className="hidden md:block absolute top-20 right-16 text-xl lg:text-2xl animate-bounce opacity-60" style={{animationDelay: '1.2s'}}>🌸</div>
      <div className="hidden lg:block absolute bottom-20 left-16 text-2xl animate-bounce opacity-60" style={{animationDelay: '2s'}}>💎</div>
      <div className="hidden lg:block absolute bottom-10 right-12 text-2xl lg:text-3xl animate-bounce opacity-60" style={{animationDelay: '0.8s'}}>🦋</div>
      
      <div className="mb-6 sm:mb-8 lg:mb-10 gentle-float">
        <div className="relative inline-block">
          <Sparkles className="mx-auto text-amber-400 drop-shadow-lg" size={window.innerWidth < 640 ? 50 : window.innerWidth < 1024 ? 70 : 80} />
          <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full animate-ping"></div>
          <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-1.5 sm:w-2 lg:w-3 h-1.5 sm:h-2 lg:h-3 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>
      
      <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-rose-500 via-amber-500 via-emerald-400 to-sky-500 bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10 gentle-float drop-shadow-sm px-2">
        🎉 HAPPY BIRTHDAY! 🎉
      </h1>
      
      <div className="relative mb-8 sm:mb-10 lg:mb-12">
        <div className="text-lg sm:text-2xl lg:text-3xl text-slate-700 mb-4 h-16 sm:h-20 font-medium leading-relaxed px-2">
          {typewriterText}
          <span className="animate-pulse text-rose-500">|</span>
        </div>
        <div className="absolute -top-2 sm:-top-4 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 lg:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-rose-300 via-amber-300 to-sky-300 rounded-full animate-pulse"></div>
      </div>
      
      <div className="bg-gradient-to-br from-white/40 to-rose-50/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 shadow-xl border border-white/40 max-w-5xl mx-auto">
        <p className="text-xl sm:text-2xl text-slate-700 mb-4 sm:mb-6 leading-relaxed font-medium px-2">
          Get ready for a magical birthday celebration
        </p>
        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed italic px-2">
          Crafted with infinite creativity, just for the most special person for me! ✨
        </p>
        <div className="mt-4 sm:mt-6 flex justify-center">
          <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400 rounded-full"></div>
        </div>
      </div>
      
      <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mt-6 sm:mt-8 lg:mt-10 mb-6 sm:mb-8">
        {['🎈', '🎂', '🎁', '🌟', '💕', '🌸', '🦋'].map((emoji, i) => (
          <span 
            key={i}
            className="text-2xl sm:text-3xl lg:text-4xl hover:scale-125 transition-transform cursor-pointer"
            style={{
              animation: `bounce 2s ease-in-out ${i * 0.2}s infinite`
            }}
          >
            {emoji}
          </span>
        ))}
      </div>
      
      {/* Countdown in bottom right - responsive positioning */}
      <div className="fixed bottom-16 sm:bottom-20 lg:bottom-24 right-2 sm:right-4 lg:right-8 z-40">
        <div className="bg-gradient-to-br from-rose-400/90 to-pink-500/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-2xl border border-white/30 transform hover:scale-105 transition-all duration-300">
          <div className="text-center">
            <div className="text-xs font-semibold text-white/80 mb-1 sm:mb-2 uppercase tracking-wider">
              Your Special Day
            </div>
            <div className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 min-w-[120px] sm:min-w-[160px]">
              {timeLeft}
            </div>
            <div className="flex justify-center space-x-1">
              <span className="text-xs sm:text-sm animate-bounce">🎂</span>
              <span className="text-xs sm:text-sm animate-bounce" style={{animationDelay: '0.2s'}}>✨</span>
              <span className="text-xs sm:text-sm animate-bounce" style={{animationDelay: '0.4s'}}>💕</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Love notes floating - hidden on mobile */}
      <div className="hidden lg:block absolute top-1/2 -left-20 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/40 gentle-float opacity-80">
        <p className="text-sm text-slate-600 font-medium">You are</p>
        <p className="text-lg font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Amazing! 💖</p>
      </div>
      
      <div className="hidden lg:block absolute top-1/3 -right-24 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/40 gentle-float opacity-80" style={{animationDelay: '1s'}}>
        <p className="text-sm text-slate-600 font-medium">So</p>
        <p className="text-lg font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Special! ✨</p>
      </div>
    </div>
  );
};

export default WelcomeSection;