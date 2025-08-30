import React, { useState, useEffect, useRef } from 'react';

// Enhanced Flip Number Component with 3D Animation
const FlipNumber = ({ value, label, color }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);
  const prevValueRef = useRef(value);

  useEffect(() => {
    if (prevValueRef.current !== value) {
      setIsFlipping(true);
      
      // After flip animation starts, update the display value
      setTimeout(() => {
        setDisplayValue(value);
      }, 150); // Half of animation duration
      
      // Reset flip state after animation
      setTimeout(() => {
        setIsFlipping(false);
      }, 300);
      
      prevValueRef.current = value;
    }
  }, [value]);

  return (
    <div className="relative flex flex-col items-center">
      {/* Time Unit Display */}
      <div className="relative mb-2 sm:mb-3">
        <div 
          className={`flip-card ${isFlipping ? 'flipping' : ''}`}
          style={{
            '--flip-color': color,
            perspective: '1000px',
            width: 'clamp(80px, 15vw, 120px)',
            height: 'clamp(80px, 15vw, 120px)',
          }}
        >
          <div className="flip-card-inner">
            {/* Front Face */}
            <div className="flip-card-front">
              <div className="number-display">
                {String(displayValue).padStart(2, '0')}
              </div>
            </div>
            {/* Back Face */}
            <div className="flip-card-back">
              <div className="number-display">
                {String(value).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Label */}
      <div 
        className="text-sm sm:text-base font-semibold uppercase tracking-wider opacity-80"
        style={{ color: color }}
      >
        {label}
      </div>
    </div>
  );
};

const CountdownSection = ({ timeLeft }) => {
  const [timeUnits, setTimeUnits] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isBirthday, setIsBirthday] = useState(false);

  const birthdayQuotes = [
    "A bestie like you is a miracle 🎁",
    "May your birthday sparkle with joy and shimmer with love! ☀️",
    "Here's to celebrating the most precious person in my universe! 🌟",
    "Another year of being absolutely perfect in every way! 🎈"
  ];

  // Parse timeLeft string and extract individual units
  useEffect(() => {
    if (timeLeft.includes('SPECIAL DAY')) {
      setIsBirthday(true);
      return;
    }

    const dayMatch = timeLeft.match(/(\d+)d/);
    const hourMatch = timeLeft.match(/(\d+)h/);
    const minMatch = timeLeft.match(/(\d+)m/);
    const secMatch = timeLeft.match(/(\d+)s/);

    setTimeUnits({
      days: dayMatch ? parseInt(dayMatch[1]) : 0,
      hours: hourMatch ? parseInt(hourMatch[1]) : 0,
      minutes: minMatch ? parseInt(minMatch[1]) : 0,
      seconds: secMatch ? parseInt(secMatch[1]) : 0,
    });
  }, [timeLeft]);

  if (isBirthday) {
    return (
      <div className="text-center max-w-4xl mx-auto py-12">
        <div className="bg-gradient-to-r from-rose-500 via-amber-500 to-sky-500 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-4 animate-bounce">
            🎉 IT'S YOUR SPECIAL DAY! 🎉
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 font-semibold">
            Happy Birthday, Beautiful! 🎂✨
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center max-w-6xl mx-auto py-8 sm:py-12">
      {/* Enhanced Title with 3D Effect */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 lg:mb-16 px-2">
        <span 
          className="inline-block"
          style={{
            background: 'linear-gradient(45deg, #f43f5e, #f59e0b, #10b981, #3b82f6)',
            backgroundSize: '400% 400%',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 3s ease-in-out infinite',
            textShadow: '0 10px 30px rgba(244, 63, 94, 0.3)',
            filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))'
          }}
        >
          Time Until Your Special Day! 🎉
        </span>
      </h2>
      
      {/* 3D Flip Countdown */}
      <div className="relative mb-12 sm:mb-16">
        <div 
          className="bg-white/20 backdrop-blur-2xl rounded-3xl sm:rounded-4xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/30 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
          }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-200/10 via-amber-200/10 to-sky-200/10 animate-pulse rounded-3xl sm:rounded-4xl"></div>
          
          <div className="relative z-10">
            {/* Countdown Display */}
            <div className="flex justify-center items-center gap-4 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
              <FlipNumber value={timeUnits.days} label="Days" color="#f43f5e" />
              <div className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-600 animate-pulse">:</div>
              <FlipNumber value={timeUnits.hours} label="Hours" color="#f59e0b" />
              <div className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-600 animate-pulse">:</div>
              <FlipNumber value={timeUnits.minutes} label="Minutes" color="#10b981" />
              <div className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-600 animate-pulse">:</div>
              <FlipNumber value={timeUnits.seconds} label="Seconds" color="#3b82f6" />
            </div>
            
            <p className="text-slate-600 text-lg sm:text-xl lg:text-2xl font-semibold"
               style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              Until your magical day arrives! ✨
            </p>
          </div>
        </div>
      </div>
      
      {/* Enhanced Quote Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {birthdayQuotes.map((quote, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
            style={{
              background: `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.4) 0%, 
                rgba(255, 255, 255, 0.2) 100%
              )`,
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Animated background on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(45deg, 
                  ${index % 4 === 0 ? 'rgba(244, 63, 94, 0.1)' : 
                    index % 4 === 1 ? 'rgba(245, 158, 11, 0.1)' : 
                    index % 4 === 2 ? 'rgba(16, 185, 129, 0.1)' : 
                    'rgba(59, 130, 246, 0.1)'}
                )`
              }}
            ></div>
            
            <p className="relative font-semibold text-base sm:text-lg text-slate-700 leading-relaxed"
               style={{ 
                 textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
               }}>
              {quote}
            </p>
            
            {/* Decorative corner element */}
            <div 
              className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-300"
              style={{
                background: index % 4 === 0 ? '#f43f5e' : 
                           index % 4 === 1 ? '#f59e0b' : 
                           index % 4 === 2 ? '#10b981' : '#3b82f6',
                boxShadow: `0 0 10px ${
                  index % 4 === 0 ? 'rgba(244, 63, 94, 0.5)' : 
                  index % 4 === 1 ? 'rgba(245, 158, 11, 0.5)' : 
                  index % 4 === 2 ? 'rgba(16, 185, 129, 0.5)' : 
                  'rgba(59, 130, 246, 0.5)'
                }`
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* CSS Styles for Flip Animation */}
      <style jsx>{`
        .flip-card {
          background-color: transparent;
          perspective: 1000px;
          position: relative;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.3s ease-in-out;
          transform-style: preserve-3d;
        }
        
        .flip-card.flipping .flip-card-inner {
          transform: rotateX(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.9) 0%, 
            rgba(255, 255, 255, 0.7) 100%
          );
          backdrop-filter: blur(20px);
          border: 2px solid var(--flip-color);
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }
        
        .flip-card-back {
          transform: rotateX(180deg);
        }
        
        .number-display {
          font-size: clamp(2rem, 8vw, 3.5rem);
          font-weight: 900;
          color: var(--flip-color);
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          font-family: 'system-ui', sans-serif;
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        /* Glow effect for flip cards */
        .flip-card:hover .flip-card-front,
        .flip-card:hover .flip-card-back {
          box-shadow: 
            0 15px 40px rgba(0, 0, 0, 0.25),
            0 0 0 2px var(--flip-color),
            0 0 20px var(--flip-color),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .flip-card-front, .flip-card-back {
            border-radius: 12px;
            border-width: 1.5px;
          }
        }
      `}</style>
    </div>
  );
};

export default CountdownSection;

// const CountdownSection = ({ timeLeft }) => {
//   const birthdayQuotes = [
//     "A bestie like you is a miracle🎁",
//     "May your birthday sparkle with joy and shimmer with love! ☀️",
//     "Here's to celebrating the most precious person in my universe! 🌟",
//     "Another year of being absolutely perfect in every way! 🎈"
//   ];

//   return (
//     <div className="text-center max-w-4xl mx-auto">
//       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10 px-2">
//         Time Until Your Special Day! 🎉
//       </h2>
      
//       <div className="bg-white/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 shadow-xl border border-white/30">
//         <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 tracking-wide">
//           {timeLeft}
//         </div>
//         <p className="text-slate-600 text-base sm:text-lg">Until your magical day arrives!</p>
//       </div>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//         {birthdayQuotes.map((quote, index) => (
//           <div 
//             key={index} 
//             className="bg-gradient-to-br from-white/50 to-rose-50/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
//           >
//             <p className="font-medium text-sm sm:text-base">{quote}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CountdownSection;