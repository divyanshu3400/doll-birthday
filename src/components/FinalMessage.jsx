import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Star, Gift } from 'lucide-react';

const FinalMessageSection = () => {
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [sparkleParticles, setSparkleParticles] = useState([]);
  const [messageRevealed, setMessageRevealed] = useState(false);

  useEffect(() => {
    // Create floating hearts
    const hearts = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 100 + Math.random() * 50,
      size: 15 + Math.random() * 10,
      speed: 2 + Math.random() * 3,
      delay: Math.random() * 5,
      opacity: 0.6 + Math.random() * 0.4
    }));
    setFloatingHearts(hearts);

    // Create sparkle particles
    const sparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 3 + Math.random() * 5,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2
    }));
    setSparkleParticles(sparkles);

    // Reveal message with delay
    const timer = setTimeout(() => setMessageRevealed(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const createClickSparkles = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      size: 4 + Math.random() * 4,
      delay: i * 0.1,
      duration: 1.5
    }));
    
    setSparkleParticles(prev => [...prev, ...newSparkles]);
    
    // Remove click sparkles after animation
    setTimeout(() => {
      setSparkleParticles(prev => prev.filter(s => !newSparkles.some(ns => ns.id === s.id)));
    }, 2000);
  };

  return (
    <div className="text-center max-w-4xl mx-auto relative overflow-hidden">
      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: var(--opacity);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
            opacity: var(--opacity);
          }
          100% {
            transform: translateY(-100vh) scale(0.8);
            opacity: 0;
          }
        }
        
        @keyframes sparkleShine {
          0%, 100% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
          }
        }
        
        @keyframes messageGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(236, 72, 153, 0.3); }
          50% { text-shadow: 0 0 20px rgba(236, 72, 153, 0.6), 0 0 30px rgba(245, 158, 11, 0.4); }
        }
        
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-10px) rotateX(2deg); }
        }
        
        @keyframes revealMessage {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .floating-heart {
          animation: floatUp var(--speed) ease-in-out infinite var(--delay);
          --opacity: var(--heart-opacity);
        }
        
        .sparkle-particle {
          animation: sparkleShine var(--duration) ease-in-out infinite var(--delay);
        }
        
        .message-glow {
          animation: messageGlow 3s ease-in-out infinite;
        }
        
        .card-float {
          animation: cardFloat 4s ease-in-out infinite;
        }
        
        .message-reveal {
          animation: revealMessage 1.5s ease-out forwards;
        }
      `}</style>

      {/* Floating Hearts Background */}
      {floatingHearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute floating-heart pointer-events-none"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            '--speed': `${heart.speed}s`,
            '--delay': `${heart.delay}s`,
            '--heart-opacity': heart.opacity,
            fontSize: `${heart.size}px`,
            zIndex: 1
          }}
        >
          💖
        </div>
      ))}

      {/* Sparkle Particles */}
      {sparkleParticles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute sparkle-particle pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            '--duration': `${sparkle.duration}s`,
            '--delay': `${sparkle.delay}s`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            background: 'linear-gradient(45deg, #fbbf24, #f59e0b, #d97706)',
            borderRadius: '50%',
            zIndex: 2
          }}
        />
      ))}

      <div className="relative z-10">
        <div className="mb-10">
          <div className="flex justify-center space-x-6 mb-8">
            <div className="relative">
              <Heart className="text-rose-400 animate-pulse hover:scale-125 transition-transform cursor-pointer" size={60} />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full animate-ping" />
            </div>
            <div className="relative">
              <Sparkles className="text-amber-400 gentle-float hover:scale-125 transition-transform cursor-pointer" size={60} />
              <Star className="absolute -top-1 -right-1 text-yellow-300 animate-spin" size={16} />
            </div>
            <div className="relative">
              <Gift className="text-purple-400 animate-bounce hover:scale-125 transition-transform cursor-pointer" size={60} />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
            </div>
            <div className="relative">
              <Heart className="text-rose-400 animate-pulse hover:scale-125 transition-transform cursor-pointer" size={60} />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full animate-ping" />
            </div>
          </div>
        </div>
        
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-rose-500 via-amber-500 via-purple-500 to-sky-500 bg-clip-text text-transparent mb-12 px-4 message-glow ${messageRevealed ? 'message-reveal' : 'opacity-0'}`}>
          You Are So Special! ✨
        </h2>
        
        <div 
          className={`bg-gradient-to-br from-white/70 via-rose-50/60 to-amber-50/60 backdrop-blur-xl rounded-3xl p-8 sm:p-10 lg:p-12 mb-10 shadow-2xl border border-white/40 card-float relative overflow-hidden ${messageRevealed ? 'message-reveal' : 'opacity-0'}`}
          onClick={createClickSparkles}
          style={{ cursor: 'pointer' }}
        >
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-rose-300 rounded-tl-lg opacity-50" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-amber-300 rounded-tr-lg opacity-50" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-purple-300 rounded-bl-lg opacity-50" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-sky-300 rounded-br-lg opacity-50" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 via-transparent to-amber-100/20 pointer-events-none" />
          
          <div className="relative z-10">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-700 mb-8 font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
              To You 💕
            </p>
            
            <div className="space-y-6 sm:space-y-8">
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium">
                On this <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">magical day</span>, I want the whole universe to know how deeply you are cherished. 
                You are not just special to me - you are my <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent font-bold">best friend</span>, my reason for smiling, 
                my heart's greatest joy. 💖
              </p>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium">
                May this new year of your <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-bold">beautiful life</span> overflow with endless happiness, 
                boundless love, precious moments, and all the magic your heart desires! 🎂✨
              </p>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium">
                You make every day brighter just by <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent font-bold">existing</span>. Thank you for being you. 🌟
              </p>
            </div>
            
            <div className="mt-10 p-6 bg-gradient-to-r from-rose-100/50 to-amber-100/50 rounded-2xl border border-rose-200/30">
              <p className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-rose-600 via-purple-600 to-amber-600 bg-clip-text text-transparent font-bold animate-pulse">
                Happy Birthday Dear 💕🎉
              </p>
            </div>
          </div>
        </div>
        
        {/* Enhanced Emoji Animation */}
        <div className={`flex justify-center flex-wrap gap-3 sm:gap-4 mb-8 ${messageRevealed ? 'message-reveal' : 'opacity-0'}`}>
          {[
            { emoji: '🎈', color: 'from-red-400 to-pink-400' },
            { emoji: '🎂', color: 'from-yellow-400 to-orange-400' },
            { emoji: '🎁', color: 'from-purple-400 to-pink-400' },
            { emoji: '🎉', color: 'from-green-400 to-blue-400' },
            { emoji: '💕', color: 'from-rose-400 to-pink-400' },
            { emoji: '🌟', color: 'from-yellow-400 to-amber-400' },
            { emoji: '🥳', color: 'from-indigo-400 to-purple-400' },
            { emoji: '✨', color: 'from-cyan-400 to-blue-400' }
          ].map((item, i) => (
            <div 
              key={i}
              className={`text-3xl sm:text-4xl lg:text-5xl animate-bounce hover:scale-125 transition-all cursor-pointer p-2 rounded-full bg-gradient-to-r ${item.color} bg-opacity-20`}
              style={{animationDelay: `${i * 0.15}s`}}
              onClick={createClickSparkles}
            >
              {item.emoji}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`mt-8 ${messageRevealed ? 'message-reveal' : 'opacity-0'}`}>
          <p className="text-base sm:text-lg text-slate-500 italic animate-pulse">
            💡 Click anywhere on the message card for magical sparkles! ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalMessageSection;