import { useState, useEffect } from 'react';

// Custom hook for birthday countdown
export const useBirthdayCountdown = (targetDate = '2025-09-03T00:00:00') => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const targetTime = new Date(targetDate).getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetTime - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft("🎉 IT'S YOUR SPECIAL DAY! 🎉");
      }
    };
    
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

// Custom hook for confetti animation
export const useConfetti = () => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const createConfetti = () => {
      const newConfetti = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -10,
        color: ['#FFB6C1', '#F0E68C', '#98D8E8', '#DDA0DD', '#F5DEB3', '#FFE4B5'][Math.floor(Math.random() * 6)],
        speed: Math.random() * 3 + 1,
        rotation: Math.random() * 360
      }));
      setConfetti(newConfetti);
    };
    
    createConfetti();
    const interval = setInterval(createConfetti, 4000);
    return () => clearInterval(interval);
  }, []);

  return [confetti, setConfetti];
};

// Custom hook for navigation state
export const useNavigation = (totalSections) => {
  const [currentSection, setCurrentSection] = useState(0);

  const goToNext = () => {
    setCurrentSection(prev => Math.min(totalSections - 1, prev + 1));
  };

  const goToPrevious = () => {
    setCurrentSection(prev => Math.max(0, prev - 1));
  };

  return {
    currentSection,
    setCurrentSection,
    goToNext,
    goToPrevious,
    isFirst: currentSection === 0,
    isLast: currentSection === totalSections - 1
  };
};