// import React, { useState, useEffect, useRef } from 'react';
// import { Sparkles} from 'lucide-react';

// const WelcomeSection = ({ timeLeft }) => {
//   const [currentQuote, setCurrentQuote] = useState(0);
//   const [typewriterText, setTypewriterText] = useState('');

//   const messages = [
//     "Happy Birthday to the most precious soul in my universe! 🎂",
//     "You are my sunshine, my moonlight, and every star in between ✨",
//     "Every moment with you feels like a beautiful dream come true 🌙",
//     "You make my world infinitely more beautiful just by being in it 💕",
//     "Here's to celebrating the most amazing person I've ever known! 🥳",
//     "Thank you for being the light that guides my heart every day 🌟"
//   ];


//   // Typewriter effect (existing code)
//   useEffect(() => {
//     const currentMessage = messages[currentQuote];
//     let index = 0;
//     setTypewriterText('');
    
//     const typeInterval = setInterval(() => {
//       if (index < currentMessage.length) {
//         setTypewriterText(currentMessage.substring(0, index + 1));
//         index++;
//       } else {
//         clearInterval(typeInterval);
//         setTimeout(() => {
//           setCurrentQuote((prev) => (prev + 1) % messages.length);
//         }, 3000);
//       }
//     }, 100);
    
//     return () => clearInterval(typeInterval);
//   }, [currentQuote]);

//   return (
//     <div className="text-center max-w-6xl mx-auto relative">
//       {/* Floating magical elements - hidden on mobile */}
//       <div className="hidden md:block absolute top-10 left-10 text-2xl lg:text-3xl animate-bounce opacity-60" style={{animationDelay: '0.5s'}}>✨</div>
//       <div className="hidden md:block absolute top-20 right-16 text-xl lg:text-2xl animate-bounce opacity-60" style={{animationDelay: '1.2s'}}>🌸</div>
//       <div className="hidden lg:block absolute bottom-20 left-16 text-2xl animate-bounce opacity-60" style={{animationDelay: '2s'}}>💎</div>
//       <div className="hidden lg:block absolute bottom-10 right-12 text-2xl lg:text-3xl animate-bounce opacity-60" style={{animationDelay: '0.8s'}}>🦋</div>
      
//       <div className="mb-6 sm:mb-8 lg:mb-10 gentle-float">
//         <div className="relative inline-block">
//           <Sparkles className="mx-auto text-amber-400 drop-shadow-lg" size={window.innerWidth < 640 ? 50 : window.innerWidth < 1024 ? 70 : 80} />
//           <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full animate-ping"></div>
//           <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-1.5 sm:w-2 lg:w-3 h-1.5 sm:h-2 lg:h-3 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
//         </div>
//       </div>
      
//       <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-rose-500 via-amber-500 via-emerald-400 to-sky-500 bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10 gentle-float drop-shadow-sm px-2">
//         🎉 HAPPY BIRTHDAY! 🎉
//       </h1>
      
//       <div className="relative mb-8 sm:mb-10 lg:mb-12">
//         <div className="text-lg sm:text-2xl lg:text-3xl text-slate-700 mb-4 h-16 sm:h-20 font-medium leading-relaxed px-2">
//           {typewriterText}
//           <span className="animate-pulse text-rose-500">|</span>
//         </div>
//         <div className="absolute -top-2 sm:-top-4 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 lg:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-rose-300 via-amber-300 to-sky-300 rounded-full animate-pulse"></div>
//       </div>
      
//       <div className="bg-gradient-to-br from-white/40 to-rose-50/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 shadow-xl border border-white/40 max-w-5xl mx-auto">
//         <p className="text-xl sm:text-2xl text-slate-700 mb-4 sm:mb-6 leading-relaxed font-medium px-2">
//           Get ready for a magical birthday celebration
//         </p>
//         <p className="text-lg sm:text-xl text-slate-600 leading-relaxed italic px-2">
//           Crafted with infinite creativity, just for the most special person for me! ✨
//         </p>
//         <div className="mt-4 sm:mt-6 flex justify-center">
//           <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400 rounded-full"></div>
//         </div>
//       </div>
      
//       <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mt-6 sm:mt-8 lg:mt-10 mb-6 sm:mb-8">
//         {['🎈', '🎂', '🎁', '🌟', '💕', '🌸', '🦋'].map((emoji, i) => (
//           <span 
//             key={i}
//             className="text-2xl sm:text-3xl lg:text-4xl hover:scale-125 transition-transform cursor-pointer"
//             style={{
//               animation: `bounce 2s ease-in-out ${i * 0.2}s infinite`
//             }}
//           >
//             {emoji}
//           </span>
//         ))}
//       </div>
      
//       {/* Countdown in bottom right - responsive positioning */}
//       <div className="fixed bottom-16 sm:bottom-20 lg:bottom-24 right-2 sm:right-4 lg:right-8 z-40">
//         <div className="bg-gradient-to-br from-rose-400/90 to-pink-500/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-2xl border border-white/30 transform hover:scale-105 transition-all duration-300">
//           <div className="text-center">
//             <div className="text-xs font-semibold text-white/80 mb-1 sm:mb-2 uppercase tracking-wider">
//               Your Special Day
//             </div>
//             <div className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 min-w-[120px] sm:min-w-[160px]">
//               {timeLeft}
//             </div>
//             <div className="flex justify-center space-x-1">
//               <span className="text-xs sm:text-sm animate-bounce">🎂</span>
//               <span className="text-xs sm:text-sm animate-bounce" style={{animationDelay: '0.2s'}}>✨</span>
//               <span className="text-xs sm:text-sm animate-bounce" style={{animationDelay: '0.4s'}}>💕</span>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Love notes floating - hidden on mobile */}
//       <div className="hidden lg:block absolute top-1/2 -left-20 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/40 gentle-float opacity-80">
//         <p className="text-sm text-slate-600 font-medium">You are</p>
//         <p className="text-lg font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Amazing! 💖</p>
//       </div>
      
//       <div className="hidden lg:block absolute top-1/3 -right-24 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/40 gentle-float opacity-80" style={{animationDelay: '1s'}}>
//         <p className="text-sm text-slate-600 font-medium">So</p>
//         <p className="text-lg font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Special! ✨</p>
//       </div>
//     </div>
//   );
// };

// export default WelcomeSection;



import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const WelcomeSection = ({ timeLeft = "24 3h 19m 2s" }) => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [particles, setParticles] = useState([]);

  const messages = [
    "Happy Birthday to the most precious soul in my universe! 🎂",
    "You are my sunshine, my moonlight, and every star in between ✨",
    "Every moment with you feels like a beautiful dream come true 🌙",
    "You make my world infinitely more beautiful just by being in it 💕",
    "Here's to celebrating the most amazing person I've ever known! 🥳",
    "Thank you for being the light that guides my heart every day 🌟"
  ];

  // Generate floating particles
  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 20; i++) {
      particleArray.push({
        id: i,
        emoji: ['✨', '🌟', '💫', '⭐', '🌸', '💖', '🦋', '🌺'][Math.floor(Math.random() * 8)],
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
      });
    }
    setParticles(particleArray);
  }, []);

  // Typewriter effect
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
    }, 80);
    
    return () => clearInterval(typeInterval);
  }, [currentQuote]);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap');
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .text-3d {
          text-shadow: 
            0 1px 0 #ccc,
            0 2px 0 #c9c9c9,
            0 3px 0 #bbb,
            0 4px 0 #b9b9b9,
            0 5px 0 #aaa,
            0 6px 1px rgba(0,0,0,.1),
            0 0 5px rgba(0,0,0,.1),
            0 1px 3px rgba(0,0,0,.3),
            0 3px 5px rgba(0,0,0,.2),
            0 5px 10px rgba(0,0,0,.25),
            0 10px 10px rgba(0,0,0,.2),
            0 20px 20px rgba(0,0,0,.15);
        }
        
        .text-3d-birthday {
          background: linear-gradient(45deg, #ff6b9d, #fdcb00ff, #53f573ff, #4d9de0, #9b59b6, #ff6b9d);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease infinite, float-3d 4s ease-in-out infinite;
          transform-style: preserve-3d;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float-3d {
          0%, 100% { 
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px);
          }
          25% { 
            transform: perspective(1000px) rotateX(5deg) rotateY(-3deg) translateZ(10px);
          }
          50% { 
            transform: perspective(1000px) rotateX(0deg) rotateY(3deg) translateZ(20px);
          }
          75% { 
            transform: perspective(1000px) rotateX(-3deg) rotateY(0deg) translateZ(10px);
          }
        }
        
        .gentle-float {
          animation: gentle-float 6s ease-in-out infinite;
        }
        
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        
        .magical-glow {
          box-shadow: 
            0 0 20px rgba(255, 107, 157, 0.4),
            0 0 40px rgba(255, 217, 61, 0.3),
            0 0 60px rgba(107, 207, 127, 0.2),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        @keyframes glow-pulse {
          0%, 100% { 
            box-shadow: 
              0 0 20px rgba(255, 107, 157, 0.4),
              0 0 40px rgba(255, 217, 61, 0.3),
              0 0 60px rgba(107, 207, 127, 0.2),
              inset 0 0 20px rgba(255, 255, 255, 0.1);
          }
          50% { 
            box-shadow: 
              0 0 30px rgba(255, 107, 157, 0.6),
              0 0 60px rgba(255, 217, 61, 0.4),
              0 0 90px rgba(107, 207, 127, 0.3),
              inset 0 0 30px rgba(255, 255, 255, 0.2);
          }
        }
        
        .particle-float {
          animation: particle-float var(--duration, 4s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }
        
        @keyframes particle-float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 0.7;
          }
          33% { 
            transform: translateY(-20px) translateX(10px) rotate(120deg) scale(1.2);
            opacity: 1;
          }
          66% { 
            transform: translateY(-10px) translateX(-15px) rotate(240deg) scale(0.8);
            opacity: 0.8;
          }
        }
        
        .sparkle-container {
          position: relative;
          animation: sparkle-rotation 8s linear infinite;
        }
        
        @keyframes sparkle-rotation {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .typewriter-glow {
          text-shadow: 0 0 10px rgba(255, 107, 157, 0.5);
        }
        
        .card-3d {
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }
        
        .card-3d:hover {
          transform: perspective(1000px) rotateX(10deg) rotateY(10deg) translateZ(20px);
        }
        
        .emoji-bounce {
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .emoji-bounce:hover {
          transform: scale(1.5) rotate(15deg);
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
        }
      `}</style>

      <div className="text-center max-w-6xl mx-auto relative font-poppins">
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="fixed pointer-events-none text-2xl particle-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              '--duration': `${particle.duration}s`,
              '--delay': `${particle.animationDelay}s`,
              zIndex: 1,
            }}
          >
            {particle.emoji}
          </div>
        ))}

        {/* Enhanced magical elements */}
        <div className="hidden md:block absolute top-10 left-10 text-3xl lg:text-4xl gentle-float opacity-80" style={{animationDelay: '0.5s'}}>
          <div className="sparkle-container">✨</div>
        </div>
        <div className="hidden md:block absolute top-20 right-16 text-2xl lg:text-3xl gentle-float opacity-80" style={{animationDelay: '1.2s'}}>
          <div className="sparkle-container" style={{animationDelay: '2s'}}>🌸</div>
        </div>
        <div className="hidden lg:block absolute bottom-20 left-16 text-3xl gentle-float opacity-80" style={{animationDelay: '2s'}}>
          <div className="sparkle-container" style={{animationDelay: '4s'}}>💎</div>
        </div>
        <div className="hidden lg:block absolute bottom-10 right-12 text-3xl lg:text-4xl gentle-float opacity-80" style={{animationDelay: '0.8s'}}>
          <div className="sparkle-container" style={{animationDelay: '1s'}}>🦋</div>
        </div>
        
        {/* Enhanced Sparkles Icon */}
        <div className="mb-8 sm:mb-10 lg:mb-12 gentle-float">
          <div className="relative inline-block sparkle-container">
            <Sparkles className="mx-auto text-amber-400 drop-shadow-2xl filter" size={window.innerWidth < 640 ? 60 : window.innerWidth < 1024 ? 80 : 100} />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        {/* Enhanced 3D Birthday Text */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-black text-3d-birthday mb-8 sm:mb-10 lg:mb-12 px-2 font-poppins leading-tight">
          🎉 HAPPY BIRTHDAY! 🎉
        </h1>
        
        {/* Enhanced Typewriter Section */}
        <div className="relative mb-10 sm:mb-12 lg:mb-14">
          <div className="text-xl sm:text-2xl lg:text-4xl text-slate-700 mb-6 h-20 sm:h-24 lg:h-28 font-semibold leading-relaxed px-2 typewriter-glow">
            {typewriterText}
            <span className="animate-pulse text-rose-500 text-3xl lg:text-5xl">|</span>
          </div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400 rounded-full magical-glow"></div>
        </div>
        
        {/* Enhanced Celebration Card */}
        <div className="bg-gradient-to-br from-white/50 to-rose-50/50 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] p-8 sm:p-10 lg:p-12 mb-8 sm:mb-10 lg:mb-12 magical-glow border border-white/50 max-w-5xl mx-auto card-3d">
          <div className="relative">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-700 mb-6 sm:mb-8 leading-relaxed font-bold px-2">
              Get ready for a magical birthday celebration
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 leading-relaxed italic px-2 font-medium">
              Crafted with infinite creativity, just for the most special person for me! ✨
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400 rounded-full magical-glow"></div>
            </div>
            
            {/* Floating decorative elements inside card */}
            <div className="absolute top-4 right-4 text-2xl gentle-float opacity-60">💝</div>
            <div className="absolute bottom-4 left-4 text-2xl gentle-float opacity-60" style={{animationDelay: '1s'}}>🌟</div>
          </div>
        </div>
        
        {/* Enhanced Emoji Section */}
        <div className="flex justify-center flex-wrap gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12 mb-8 sm:mb-10">
          {['🎈', '🎂', '🎁', '🌟', '💕', '🌸', '🦋'].map((emoji, i) => (
            <span 
              key={i}
              className="text-3xl sm:text-4xl lg:text-5xl emoji-bounce cursor-pointer"
              style={{
                animation: `bounce 2s ease-in-out ${i * 0.2}s infinite`
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
        
        {/* Enhanced Countdown */}
        <div className="fixed bottom-16 sm:bottom-20 lg:bottom-24 right-2 sm:right-4 lg:right-8 z-40">
          <div className="bg-gradient-to-br from-rose-400/95 to-pink-500/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 magical-glow border border-white/40 transform hover:scale-110 transition-all duration-500 card-3d">
            <div className="text-center">
              <div className="text-sm font-bold text-white/90 mb-2 sm:mb-3 uppercase tracking-wider">
                Your Special Day ✨
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-black text-white mb-2 min-w-[140px] sm:min-w-[180px] font-mono">
                {timeLeft}
              </div>
              <div className="flex justify-center space-x-2">
                <span className="text-sm sm:text-base animate-bounce">🎂</span>
                <span className="text-sm sm:text-base animate-bounce" style={{animationDelay: '0.2s'}}>✨</span>
                <span className="text-sm sm:text-base animate-bounce" style={{animationDelay: '0.4s'}}>💕</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Love Notes */}
        <div className="hidden lg:block absolute top-1/2 -left-24 transform -translate-y-1/2 bg-white/40 backdrop-blur-xl rounded-3xl p-6 magical-glow border border-white/50 gentle-float opacity-90 card-3d">
          <p className="text-base text-slate-600 font-semibold">You are</p>
          <p className="text-2xl font-black bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Amazing! 💖</p>
        </div>
        
        <div className="hidden lg:block absolute top-1/3 -right-28 transform -translate-y-1/2 bg-white/40 backdrop-blur-xl rounded-3xl p-6 magical-glow border border-white/50 gentle-float opacity-90 card-3d" style={{animationDelay: '1s'}}>
          <p className="text-base text-slate-600 font-semibold">So</p>
          <p className="text-2xl font-black bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Special! ✨</p>
        </div>
      </div>
    </>
  );
};

export default WelcomeSection;