import React from 'react';
import { Heart } from 'lucide-react';

export const FloatingConfetti = ({ confetti }) => {
  return (
    <>
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 rounded-full animate-bounce opacity-70"
          style={{
            left: `${piece.x}%`,
            backgroundColor: piece.color,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${piece.speed}s`,
            transform: `rotate(${piece.rotation}deg)`
          }}
        />
      ))}
    </>
  );
};

export const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => (
        <Heart
          key={i}
          className="absolute text-rose-300 love-heartbeat opacity-40"
          size={Math.random() * 18 + 8}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 2 + 3}s`
          }}
        />
      ))}
    </div>
  );
};

export const MagicalElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {['✨', '🌸', '💎', '🦋', '🌟', '💫'].map((emoji, i) => (
        <div
          key={i}
          className="absolute text-2xl sparkle-rotate opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${Math.random() * 3 + 4}s`
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
};

export const SoftBackgroundPattern = () => {
  return (
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 left-20 w-32 h-32 bg-rose-200 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-amber-200 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-32 w-28 h-28 bg-sky-200 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-violet-200 rounded-full blur-3xl"></div>
    </div>
  );
};

export const GlobalStyles = () => {
  return (
    <style jsx global>{`
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
      
      .slice-animation {
        animation: slideOut 2s ease-out forwards;
      }
      
      @keyframes gentleFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-10px) rotate(5deg); }
        50% { transform: translateY(-20px) rotate(0deg); }
        75% { transform: translateY(-10px) rotate(-5deg); }
      }
      
      @keyframes sparkleRotate {
        0% { transform: rotate(0deg) scale(1); }
        25% { transform: rotate(90deg) scale(1.1); }
        50% { transform: rotate(180deg) scale(1); }
        75% { transform: rotate(270deg) scale(1.1); }
        100% { transform: rotate(360deg) scale(1); }
      }
      
      @keyframes loveHeartbeat {
        0%, 100% { transform: scale(1); }
        25% { transform: scale(1.1); }
        50% { transform: scale(1); }
        75% { transform: scale(1.05); }
      }
      
      .gentle-float {
        animation: gentleFloat 4s ease-in-out infinite;
      }
      
      .sparkle-rotate {
        animation: sparkleRotate 3s ease-in-out infinite;
      }
      
      .love-heartbeat {
        animation: loveHeartbeat 2s ease-in-out infinite;
      }
    `}</style>
  );
};