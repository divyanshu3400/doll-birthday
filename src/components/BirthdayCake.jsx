// import React, { useState, useEffect } from 'react';
// import { Cake } from 'lucide-react';

// const BirthdayCakeSection = ({ confetti, setConfetti }) => {
//   const [candlesLit, setCandlesLit] = useState(0);
//   const [showCakeCutting, setShowCakeCutting] = useState(false);
//   const [cakeSlices, setCakeSlices] = useState([]);
//   const [showCelebration, setShowCelebration] = useState(false);

//   const lightCandle = () => {
//     if (candlesLit < 5) {
//       setCandlesLit(candlesLit + 1);
//     } else {
//       setCandlesLit(0);
//       setShowCakeCutting(false);
//       setCakeSlices([]);
//       setShowCelebration(false);
//     }
//   };

//   // Trigger cake cutting when all candles are lit
//   useEffect(() => {
//     if (candlesLit === 5) {
//       setTimeout(() => {
//         setShowCakeCutting(true);
//       }, 1000);
//     }
//   }, [candlesLit]);

//   const cutCake = () => {
//     const slices = Array.from({ length: 8 }, (_, i) => ({
//       id: i,
//       angle: (360 / 8) * i,
//       delay: i * 100
//     }));
//     setCakeSlices(slices);
    
//     setTimeout(() => {
//       setShowCelebration(true);
//       const celebrationConfetti = Array.from({ length: 60 }, (_, i) => ({
//         id: i + 1000,
//         x: Math.random() * 100,
//         y: 50,
//         color: ['#FFB6C1', '#F0E68C', '#98D8E8', '#DDA0DD', '#F5DEB3', '#FFDAB9'][Math.floor(Math.random() * 6)],
//         speed: Math.random() * 4 + 2,
//         rotation: Math.random() * 360
//       }));
//       setConfetti(prev => [...prev, ...celebrationConfetti]);
//     }, 1500);
//   };

//   const resetCake = () => {
//     setCandlesLit(0);
//     setShowCakeCutting(false);
//     setCakeSlices([]);
//     setShowCelebration(false);
//   };

//   return (
//     <div className="text-center max-w-4xl mx-auto">
//       <style jsx>{`
//         @keyframes slideOut {
//           0% {
//             transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0);
//             opacity: 1;
//           }
//           100% {
//             transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-120px) scale(0.3);
//             opacity: 0;
//           }
//         }
        
//         .slice-animation {
//           animation: slideOut 2s ease-out forwards;
//         }
//       `}</style>

//       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10 px-2">
//         Make a wish Doll! 🎂
//       </h2>
      
//       <div className="bg-white/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-14 mb-6 sm:mb-8 relative overflow-hidden shadow-2xl border border-white/30">
//         {!showCelebration ? (
//           <div>
//             <div 
//               className="relative cursor-pointer transform hover:scale-110 transition-all duration-300"
//               onClick={candlesLit < 5 ? lightCandle : (showCakeCutting ? cutCake : lightCandle)}
//             >
//               <div className="relative gentle-float">
//                 <Cake className="mx-auto text-amber-300" size={window.innerWidth < 640 ? 100 : window.innerWidth < 1024 ? 120 : 140} />
                
//                 {/* Candles */}
//                 <div className="absolute -top-6 sm:-top-8 lg:-top-10 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <div
//                       key={i}
//                       className={`w-2 sm:w-2.5 lg:w-3 h-6 sm:h-8 lg:h-10 rounded-full transition-all duration-500 ${
//                         i < candlesLit ? 'bg-gradient-to-t from-orange-400 to-red-400 shadow-lg' : 'bg-gradient-to-t from-gray-200 to-white'
//                       }`}
//                     >
//                       {i < candlesLit && (
//                         <div className="w-1 sm:w-1.5 h-2 sm:h-3 bg-yellow-400 rounded-full mx-auto animate-pulse shadow-lg" />
//                       )}
//                     </div>
//                   ))}
//                 </div>
                
//                 {/* Cake Slices Animation */}
//                 {cakeSlices.map((slice) => (
//                   <div
//                     key={slice.id}
//                     className="absolute top-1/2 left-1/2 w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-amber-300 rounded-sm transform-gpu"
//                     style={{
//                       transformOrigin: '0 0',
//                       transform: `translate(-50%, -50%) rotate(${slice.angle}deg) translateY(-50px) sm:translateY(-60px) lg:translateY(-70px)`,
//                       animation: `slideOut 2s ease-out ${slice.delay}ms forwards`
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>
            
//             {candlesLit < 5 && (
//               <div className="mt-6 sm:mt-8 lg:mt-10">
//                 <p className="text-slate-700 text-lg sm:text-xl font-medium">Click the cake to light the candles! 🕯️ and your life.</p>
//                 <p className="text-slate-500 mt-2 sm:mt-3 text-base sm:text-lg">Candles lit: {candlesLit}/5</p>
//               </div>
//             )}
            
//             {candlesLit === 5 && !showCakeCutting && (
//               <div className="mt-6 sm:mt-8 lg:mt-10">
//                 <p className="text-amber-600 text-xl sm:text-2xl animate-pulse font-bold">✨ Make a wish Doll! ✨</p>
//                 <p className="text-slate-600 mt-2 sm:mt-3 text-base sm:text-lg">Something magical is about to happen...</p>
//               </div>
//             )}
            
//             {showCakeCutting && (
//               <div className="mt-6 sm:mt-8 lg:mt-10">
//                 <p className="text-rose-600 text-xl sm:text-2xl mb-3 sm:mb-4 animate-bounce font-bold">🎉 Time to cut the cake! 🎉</p>
//                 <p className="text-slate-600 text-base sm:text-lg">Click the cake to cut it and celebrate! 🍰</p>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="text-center">
//             <div className="text-5xl sm:text-6xl lg:text-7xl mb-6 sm:mb-8 animate-bounce">🍰</div>
//             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent mb-4 sm:mb-6 animate-pulse">
//               🎉 HAPPY BIRTHDAY! 🎉
//             </h3>
//             <p className="text-lg sm:text-xl text-slate-700 mb-4 sm:mb-6 font-medium">
//               The cake has been cut! Time to celebrate! 🥳
//             </p>
//             <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 mb-6 sm:mb-8">
//               {['🎈', '🎊', '🎁', '🥂', '💕'].map((emoji, i) => (
//                 <span 
//                   key={i}
//                   className="text-2xl sm:text-3xl animate-bounce"
//                   style={{animationDelay: `${i * 0.1}s`}}
//                 >
//                   {emoji}
//                 </span>
//               ))}
//             </div>
//             <button 
//               onClick={resetCake}
//               className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all transform hover:scale-105 shadow-lg font-medium text-sm sm:text-base"
//             >
//               🔄 Light Candles Again
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BirthdayCakeSection;




import React, { useState, useEffect } from 'react';
import { Cake } from 'lucide-react';

const BirthdayCakeSection = ({ confetti, setConfetti }) => {
  const [candlesLit, setCandlesLit] = useState(0);
  const [showCakeCutting, setShowCakeCutting] = useState(false);
  const [cakeSlices, setCakeSlices] = useState([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [knifeTaken, setKnifeTaken] = useState(false);
  const [cuttingInProgress, setCuttingInProgress] = useState(false);
  const [balloons, setBalloons] = useState([]);
  const [poppedBalloons, setPoppedBalloons] = useState([]);

  // Initialize balloons when cake cutting is ready
  useEffect(() => {
    if (showCakeCutting && balloons.length === 0) {
      const initialBalloons = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: 15 + (i * 10), // Spread across the width
        y: 20 + Math.random() * 20,
        color: ['#FFB6C1', '#F0E68C', '#98D8E8', '#DDA0DD', '#F5DEB3', '#FFDAB9'][Math.floor(Math.random() * 6)],
        size: 25 + Math.random() * 10,
        floatSpeed: 1 + Math.random() * 2
      }));
      setBalloons(initialBalloons);
    }
  }, [showCakeCutting]);

  const lightCandle = () => {
    if (candlesLit < 5) {
      setCandlesLit(candlesLit + 1);
    } else {
      // Reset everything
      setCandlesLit(0);
      setShowCakeCutting(false);
      setCakeSlices([]);
      setShowCelebration(false);
      setKnifeTaken(false);
      setCuttingInProgress(false);
      setBalloons([]);
      setPoppedBalloons([]);
    }
  };

  // Trigger cake cutting when all candles are lit
  useEffect(() => {
    if (candlesLit === 5) {
      setTimeout(() => {
        setShowCakeCutting(true);
      }, 1000);
    }
  }, [candlesLit]);

  const takeKnife = () => {
    setKnifeTaken(true);
    // Add some initial confetti when taking the knife
    const knifeConfetti = Array.from({ length: 20 }, (_, i) => ({
      id: i + 2000,
      x: Math.random() * 100,
      y: 30,
      color: ['#FFB6C1', '#F0E68C', '#98D8E8'][Math.floor(Math.random() * 3)],
      speed: Math.random() * 3 + 1,
      rotation: Math.random() * 360
    }));
    setConfetti(prev => [...prev, ...knifeConfetti]);
  };

  const popBalloon = (balloonId) => {
    if (!poppedBalloons.includes(balloonId)) {
      setPoppedBalloons(prev => [...prev, balloonId]);
      
      // Create balloon pop confetti
      const popConfetti = Array.from({ length: 15 }, (_, i) => ({
        id: Date.now() + i,
        x: balloons.find(b => b.id === balloonId)?.x + Math.random() * 20 - 10 || 50,
        y: balloons.find(b => b.id === balloonId)?.y + Math.random() * 20 - 10 || 30,
        color: balloons.find(b => b.id === balloonId)?.color || '#FFB6C1',
        speed: Math.random() * 5 + 3,
        rotation: Math.random() * 360
      }));
      setConfetti(prev => [...prev, ...popConfetti]);
    }
  };

  const cutCake = () => {
    setCuttingInProgress(true);
    
    // Pop all remaining balloons during cutting
    setTimeout(() => {
      balloons.forEach((balloon, index) => {
        setTimeout(() => popBalloon(balloon.id), index * 200);
      });
    }, 500);

    // Start cake slice animation
    setTimeout(() => {
      const slices = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        angle: (360 / 8) * i,
        delay: i * 100
      }));
      setCakeSlices(slices);
    }, 1500);
    
    // Final celebration
    setTimeout(() => {
      setShowCelebration(true);
      const celebrationConfetti = Array.from({ length: 80 }, (_, i) => ({
        id: i + 3000,
        x: Math.random() * 100,
        y: 50,
        color: ['#FFB6C1', '#F0E68C', '#98D8E8', '#DDA0DD', '#F5DEB3', '#FFDAB9'][Math.floor(Math.random() * 6)],
        speed: Math.random() * 4 + 2,
        rotation: Math.random() * 360
      }));
      setConfetti(prev => [...prev, ...celebrationConfetti]);
    }, 3000);
  };

  const resetCake = () => {
    setCandlesLit(0);
    setShowCakeCutting(false);
    setCakeSlices([]);
    setShowCelebration(false);
    setKnifeTaken(false);
    setCuttingInProgress(false);
    setBalloons([]);
    setPoppedBalloons([]);
  };

  return (
    <div className="text-center max-w-4xl mx-auto">
      <style jsx>{`
        @keyframes slideOut {
          0% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-120px) scale(0.3);
            opacity: 0;
          }
        }
        
        @keyframes balloonFloat {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes balloonPop {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.7; }
          100% { transform: scale(0); opacity: 0; }
        }
        
        @keyframes knifeShine {
          0%, 100% { transform: translateX(-50%) rotate(45deg) scale(1); }
          50% { transform: translateX(-50%) rotate(45deg) scale(1.1); }
        }
        
        .slice-animation {
          animation: slideOut 2s ease-out forwards;
        }
        
        .balloon {
          animation: balloonFloat 3s ease-in-out infinite;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .balloon:hover {
          transform: scale(1.1);
        }
        
        .balloon-popped {
          animation: balloonPop 0.5s ease-out forwards;
        }
        
        .knife {
          animation: knifeShine 2s ease-in-out infinite;
          cursor: pointer;
        }
      `}</style>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10 px-2">
        Make a wish Doll! 🎂
      </h2>
      
      <div className="bg-white/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-14 mb-6 sm:mb-8 relative overflow-hidden shadow-2xl border border-white/30">
        {/* Floating Balloons */}
        {showCakeCutting && !showCelebration && balloons.map((balloon) => (
          <div
            key={balloon.id}
            className={`absolute balloon ${poppedBalloons.includes(balloon.id) ? 'balloon-popped' : ''}`}
            style={{
              left: `${balloon.x}%`,
              top: `${balloon.y}%`,
              animationDelay: `${balloon.id * 0.5}s`,
              animationDuration: `${balloon.floatSpeed}s`
            }}
            onClick={() => popBalloon(balloon.id)}
          >
            <div
              className="w-6 h-8 rounded-full shadow-lg"
              style={{
                backgroundColor: balloon.color,
                width: `${balloon.size}px`,
                height: `${balloon.size * 1.2}px`
              }}
            />
            <div className="w-0.5 h-8 bg-gray-400 mx-auto" />
          </div>
        ))}

        {!showCelebration ? (
          <div>
            <div 
              className="relative transform hover:scale-110 transition-all duration-300"
              style={{ cursor: candlesLit < 5 ? 'pointer' : 'default' }}
              onClick={candlesLit < 5 ? lightCandle : undefined}
            >
              <div className="relative gentle-float">
                <Cake className="mx-auto text-amber-300" size={window.innerWidth < 640 ? 100 : window.innerWidth < 1024 ? 120 : 140} />
                
                {/* Candles */}
                <div className="absolute -top-6 sm:-top-8 lg:-top-10 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 sm:w-2.5 lg:w-3 h-6 sm:h-8 lg:h-10 rounded-full transition-all duration-500 ${
                        i < candlesLit ? 'bg-gradient-to-t from-orange-400 to-red-400 shadow-lg' : 'bg-gradient-to-t from-gray-200 to-white'
                      }`}
                    >
                      {i < candlesLit && (
                        <div className="w-1 sm:w-1.5 h-2 sm:h-3 bg-yellow-400 rounded-full mx-auto animate-pulse shadow-lg" />
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Cake Slices Animation */}
                {cakeSlices.map((slice) => (
                  <div
                    key={slice.id}
                    className="absolute top-1/2 left-1/2 w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-amber-300 rounded-sm transform-gpu"
                    style={{
                      transformOrigin: '0 0',
                      transform: `translate(-50%, -50%) rotate(${slice.angle}deg) translateY(-50px) sm:translateY(-60px) lg:translateY(-70px)`,
                      animation: `slideOut 2s ease-out ${slice.delay}ms forwards`
                    }}
                  />
                ))}
              </div>

              {/* Knife */}
              {showCakeCutting && knifeTaken && !cuttingInProgress && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="knife">
                    <div className="w-1 h-12 bg-gradient-to-b from-silver-300 to-gray-400 rounded-full shadow-lg" />
                    <div className="w-6 h-1 bg-amber-800 rounded mx-auto -mt-1" />
                  </div>
                </div>
              )}
            </div>
            
            {candlesLit < 5 && (
              <div className="mt-6 sm:mt-8 lg:mt-10">
                <p className="text-slate-700 text-lg sm:text-xl font-medium">Click the cake to light the candles! 🕯️ and your life.</p>
                <p className="text-slate-500 mt-2 sm:mt-3 text-base sm:text-lg">Candles lit: {candlesLit}/5</p>
              </div>
            )}
            
            {candlesLit === 5 && !showCakeCutting && (
              <div className="mt-6 sm:mt-8 lg:mt-10">
                <p className="text-amber-600 text-xl sm:text-2xl animate-pulse font-bold">✨ Make a wish Doll! ✨</p>
                <p className="text-slate-600 mt-2 sm:mt-3 text-base sm:text-lg">Something magical is about to happen...</p>
              </div>
            )}
            
            {showCakeCutting && !knifeTaken && (
              <div className="mt-6 sm:mt-8 lg:mt-10">
                <p className="text-rose-600 text-xl sm:text-2xl mb-4 animate-bounce font-bold">🎉 Time to celebrate! 🎉</p>
                <p className="text-slate-600 text-base sm:text-lg mb-6">First, let's take the knife to cut the cake!</p>
                <p className="text-slate-500 text-sm mb-6">💡 Tip: Click on the balloons to pop them for extra fun!</p>
                
                {/* Knife on table */}
                <div className="flex justify-center mb-4">
                  <div 
                    className="knife cursor-pointer transform hover:scale-110 transition-all"
                    onClick={takeKnife}
                  >
                    <div className="w-2 h-16 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full shadow-lg mx-auto" />
                    <div className="w-8 h-2 bg-gradient-to-r from-amber-700 to-amber-900 rounded mx-auto -mt-1 shadow-md" />
                  </div>
                </div>
                
                <button 
                  onClick={takeKnife}
                  className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all transform hover:scale-105 shadow-lg font-medium text-sm sm:text-base"
                >
                  🔪 Take the Knife
                </button>
              </div>
            )}
            
            {knifeTaken && !cuttingInProgress && (
              <div className="mt-6 sm:mt-8 lg:mt-10">
                <p className="text-emerald-600 text-xl sm:text-2xl mb-4 animate-pulse font-bold">🔪 Knife ready! 🔪</p>
                <p className="text-slate-600 text-base sm:text-lg mb-4">Now click the cake to cut it and start the celebration! 🍰</p>
                <p className="text-slate-500 text-sm mb-4">Pop the balloons by clicking on them! 🎈</p>
                
                <button 
                  onClick={cutCake}
                  className="bg-gradient-to-r from-emerald-400 to-green-400 hover:from-emerald-500 hover:to-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all transform hover:scale-105 shadow-lg font-medium text-sm sm:text-base"
                >
                  🍰 Cut the Cake!
                </button>
              </div>
            )}
            
            {cuttingInProgress && !showCelebration && (
              <div className="mt-6 sm:mt-8 lg:mt-10">
                <p className="text-purple-600 text-xl sm:text-2xl mb-4 animate-bounce font-bold">🎊 Cutting in progress... 🎊</p>
                <p className="text-slate-600 text-base sm:text-lg">Watch the balloons pop and the cake get sliced! ✨</p>
                <div className="flex justify-center mt-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-500"></div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center">
            <div className="text-5xl sm:text-6xl lg:text-7xl mb-6 sm:mb-8 animate-bounce">🍰</div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent mb-4 sm:mb-6 animate-pulse">
              🎉 HAPPY BIRTHDAY! 🎉
            </h3>
            <p className="text-lg sm:text-xl text-slate-700 mb-4 sm:mb-6 font-medium">
              The cake has been cut and all balloons popped! Time to celebrate! 🥳
            </p>
            <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 mb-6 sm:mb-8">
              {['🎈', '🎊', '🎁', '🥂', '💕', '🍰', '🎂', '✨'].map((emoji, i) => (
                <span 
                  key={i}
                  className="text-2xl sm:text-3xl animate-bounce"
                  style={{animationDelay: `${i * 0.1}s`}}
                >
                  {emoji}
                </span>
              ))}
            </div>
            <button 
              onClick={resetCake}
              className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all transform hover:scale-105 shadow-lg font-medium text-sm sm:text-base"
            >
              🔄 Light Candles Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthdayCakeSection;