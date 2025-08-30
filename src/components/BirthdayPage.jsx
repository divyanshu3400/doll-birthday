import React, { useState, useEffect, useRef } from 'react';

import WelcomeSection from './Welcome';
import CountdownSection from './CountDown';
import BirthdayCakeSection from './BirthdayCake';
import PhotoGallerySection from './PhotoGallery';
import GiftMessagesSection from './GiftMessage';
import FinalMessageSection from './FinalMessage';

// Import background components
import {
  FloatingConfetti,
  FloatingHearts,
  MagicalElements,
  SoftBackgroundPattern,
  GlobalStyles
} from './BackgroundComponent';

// Import navigation components
import { TopNavigation, BottomNavigation } from './NavigationComponent';
import { Music, VolumeX, Volume2 } from 'lucide-react';

// Import custom hooks
import { useBirthdayCountdown, useConfetti, useNavigation } from './customHooks';

const BirthdayPage = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Section configuration
  const sections = [
    "Welcome",
    "Countdown",
    "Cake",
    "Sweet Memories",
    "Messages",
    "Final Message"
  ];

  // Auto-play music when component mounts (with user interaction)
  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(console.error);
      }
    };

    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keypress', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keypress', handleUserInteraction);
    };
  }, [isPlaying]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(console.error);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };


  // Custom hooks
  const timeLeft = useBirthdayCountdown('2025-09-03T00:00:00');
  const [confetti, setConfetti] = useConfetti();
  const { currentSection, setCurrentSection } = useNavigation(sections.length);

  // Section renderer
  const renderCurrentSection = () => {
    switch (currentSection) {
      case 0:
        return <WelcomeSection timeLeft={timeLeft} />;
      case 1:
        return <CountdownSection timeLeft={timeLeft} />;
      case 2:
        return <BirthdayCakeSection confetti={confetti} setConfetti={setConfetti} />;
      case 3:
        return <PhotoGallerySection />;
      case 4:
        return <GiftMessagesSection />;
      case 5:
        return <FinalMessageSection />;
      default:
        return <WelcomeSection timeLeft={timeLeft} />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-sky-100">
      {/* Global Styles */}
      <GlobalStyles />

      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        volume={0.3}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/assets/music/happy-birthday1.mp3" type="audio/mpeg" />
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        <p>Your browser does not support the audio element.</p>
      </audio>

      {/* Music Controls */}
      <div className="fixed top-20 right-4 sm:right-8 z-50 flex flex-col gap-2">
        {/* Play/Pause Button */}
        <button
          onClick={toggleMusic}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 backdrop-blur-sm"
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? <Music className="animate-pulse" size={20} /> : <Music size={20} />}
        </button>

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 backdrop-blur-sm"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      {/* Background Elements */}
      <FloatingConfetti confetti={confetti} />
      <FloatingHearts />
      <MagicalElements />
      <SoftBackgroundPattern />

      {/* Navigation */}
      <TopNavigation
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      {/* Main Content */}
      <div className="pt-16 sm:pt-20 lg:pt-24 px-2 sm:px-4 lg:px-6 pb-16 sm:pb-20">
        {renderCurrentSection()}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        sections={sections}
      />
    </div>
  );
};

export default BirthdayPage;