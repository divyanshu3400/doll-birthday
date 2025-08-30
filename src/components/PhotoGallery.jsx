import { useState, useEffect, useRef,useMemo  } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Heart, Sparkles, Camera, Star, Zap } from "lucide-react";

const PhotoGallerySection = () => {
  const images = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => `/assets/images/image${i + 1}.jpg`)
      .sort(() => Math.random() - 0.5);
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Enhanced mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x: x * 50, y: y * 50 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, images.length]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30],
              x: [0, Math.random() * 20 - 10],
              scale: [1, 1.5],
              opacity: [0.3, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: `hsl(${Math.random() * 360}, 70%, 70%)`,
            }}
            animate={{
              y: [0, -100],
              rotate: [0, 360],
              scale: [0.5, 1.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            {['✨', '💫', '🌟', '💎', '🔮', '💖', '🌈', '🦋'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: [-5, 0],
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`
          }}
        >
          {/* Glassmorphic Header Container */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl" />

            <motion.h2
              className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-700 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4 relative z-10"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Magical Memory Lane
              <motion.span
                className="inline-block ml-4 text-6xl"
                animate={{
                  scale: 1.2,
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                📸
              </motion.span>
            </motion.h2>

            <p className="text-gray-800 text-xl mb-6 max-w-3xl mx-auto leading-relaxed relative z-10">
              Step into a world where every moment sparkles with magic ✨💫
            </p>

            {/* Animated Icons */}
            <div className="flex justify-center gap-6 mb-4 relative z-10">
              {[Camera, Heart, Star, Sparkles, Zap].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="p-3 rounded-full bg-gradient-to-br from-pink-200/40 to-purple-200/40 backdrop-blur-sm border border-white/30"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    boxShadow: "0 0 30px rgba(0, 0, 0, 0.3)"
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                >
                  <Icon className="w-6 h-6 text-gray-900" />
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>

        {/* 3D Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 perspective-1000"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`
          }}
        >
          {images.map((src, index) => (
            <Enhanced3DCard
              key={index}
              src={src}
              index={index}
              onClick={() => setSelectedIndex(index)}
              onHover={setHoveredIndex}
              isHovered={hoveredIndex === index}
              mousePosition={mousePosition}
            />
          ))}
        </motion.div>

        {/* Enhanced Bottom Text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="backdrop-blur-xl bg-white/50 rounded-2xl p-6 border border-white/80 inline-block">
            <p className="text-gray-900 text-lg max-w-3xl leading-relaxed">
             We may not have many memories together yet 😌, but every photo shows just how beautiful you are 💕
              <motion.span
                className="inline-block ml-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </p>
          </div>
        </motion.div>

      </div>

      {/* Ultra-Enhanced Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 backdrop-blur-2xl flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background: `
                radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.95) 100%),
                linear-gradient(45deg, rgba(39, 38, 106, 1), rgba(177, 51, 125, 1))
              `
            }}
          >
            {/* Magical Particles */}
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: `${12 + Math.random() * 20}px`,
                  color: `hsl(${Math.random() * 360}, 70%, 70%)`,
                }}
                animate={{
                  y: [0, -50],
                  x: [0, Math.random() * 30 - 15],
                  rotate: [0, 360],
                  opacity: [0, 1],
                  scale: [0, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              >
                {['✨', '💫', '🌟', '💎', '🔮'][Math.floor(Math.random() * 5)]}
              </motion.div>
            ))}

            {/* Enhanced Controls */}
            <motion.button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-8 right-8 z-60 p-4 rounded-full bg-gradient-to-br from-red-500/30 to-pink-500/30 backdrop-blur-xl border border-white/30 text-white hover:from-red-500/50 hover:to-pink-500/50 transition-all duration-300"
              whileHover={{
                scale: 1.1,
                rotate: 90,
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={28} />
            </motion.button>

            <motion.button
              onClick={() => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-8 p-4 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-xl border border-white/30 text-white hover:from-blue-500/50 hover:to-purple-500/50 transition-all duration-300"
              whileHover={{
                scale: 1.1,
                x: -10,
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={36} />
            </motion.button>

            <motion.button
              onClick={() => setSelectedIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-8 p-4 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-xl border border-white/30 text-white hover:from-blue-500/50 hover:to-purple-500/50 transition-all duration-300"
              whileHover={{
                scale: 1.1,
                x: 10,
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={36} />
            </motion.button>

            {/* Spectacular Image Display */}
            <motion.div
              key={images[selectedIndex]}
              className="relative"
              initial={{
                opacity: 0,
                scale: 0.3,
                rotateY: -180,
                z: -500
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                z: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.3,
                rotateY: 180,
                z: -500
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              style={{ perspective: "1000px" }}
            >
              {/* Multiple Glow Layers */}
              <motion.div
                className="absolute -inset-8 rounded-3xl"
                style={{
                  background: `
                    radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%),
                    linear-gradient(45deg, rgba(255, 119, 198, 0.3), rgba(120, 219, 255, 0.3))
                  `,
                  filter: "blur(20px)",
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <motion.div
                className="absolute -inset-4 rounded-2xl"
                style={{
                  background: `linear-gradient(45deg, rgba(120, 119, 198, 0.4), rgba(255, 119, 198, 0.4))`,
                  filter: "blur(10px)",
                }}
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, -1, 1, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />

              <img
                src={images[selectedIndex]}
                alt="Magical Memory"
                className="relative rounded-2xl shadow-2xl max-h-[80vh] max-w-[85vw] object-cover border-4 border-white/30"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Enhanced 3D Card Component
const Enhanced3DCard = ({ src, index, onClick, onHover, isHovered, mousePosition }) => {
  const [loaded, setLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer"
      variants={{
        hidden: {
          opacity: 0,
          y: 100,
          rotateX: -90,
          scale: 0.5
        },
        show: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            delay: index * 0.1
          }
        },
      }}
      whileHover={{
        z: 50,
        transition: { duration: 0.3 }
      }}
      animate={{
        y: isHovered ? -20 : 0,
        transition: { type: "spring", stiffness: 300 }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      {/* Glassmorphic Card Container */}
      <motion.div
        className="relative h-80 rounded-3xl overflow-hidden backdrop-blur-xl border border-white/30 shadow-2xl"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(255, 255, 255, 0.2) 0%, 
              rgba(255, 255, 255, 0.1) 50%, 
              rgba(255, 255, 255, 0.05) 100%
            )
          `,
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d"
        }}
        animate={{
          boxShadow: isHovered
            ? "0 25px 50px rgba(0, 0, 0, 0.3), 0 0 50px rgba(255, 255, 255, 0.2)"
            : "0 10px 30px rgba(0, 0, 0, 0.2)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `linear-gradient(45deg, 
              rgba(255, 119, 198, 0.1), 
              rgba(120, 219, 255, 0.1), 
              rgba(255, 119, 198, 0.1)
            )`,
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%"],
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `linear-gradient(135deg, 
              transparent 30%, 
              rgba(255, 255, 255, 0.3) 50%, 
              transparent 70%
            )`,
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: isHovered
              ? ["0% 0%", "100% 100%"]
              : "0% 0%",
          }}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, repeatType: "reverse" }}
        />

        {/* Loading State */}
        {!loaded && !imageError && (
          <div className="absolute inset-4 bg-gradient-to-br from-pink-200/50 to-purple-200/50 rounded-2xl flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl"
            >
              💎
            </motion.div>
          </div>
        )}

        {/* Image */}
        {!imageError ? (
          <motion.img
            src={src}
            alt={`Magical Memory ${index + 1}`}
            className={`absolute inset-4 w-auto h-auto max-w-none max-h-none object-cover rounded-2xl transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            style={{
              width: 'calc(100% - 2rem)',
              height: 'calc(100% - 2rem)',
            }}
            onLoad={() => setLoaded(true)}
            onError={() => setImageError(true)}
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          // Fallback gradient for missing images
          <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-400 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-6xl text-white"
            >
              ✨
            </motion.div>
          </div>
        )}

        {/* Interactive Sparkles */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute pointer-events-none"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    fontSize: `${12 + Math.random() * 16}px`,
                    color: `hsl(${Math.random() * 360}, 80%, 70%)`,
                  }}
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={{
                    opacity: [0, 1],
                    scale: [0, 1.5],
                    rotate: [0, 180],
                    y: [0, -30],
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1
                  }}
                >
                  {['✨', '💫', '🌟', '💎', '🔮'][Math.floor(Math.random() * 5)]}
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Bounce Effect Indicator */}
        <motion.div
          className="absolute bottom-4 left-4 right-4 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          <motion.div
            className="inline-block px-4 py-2 backdrop-blur-xl bg-white/20 rounded-full border border-white/30 text-white/90 font-semibold text-sm"
            animate={{
              y: isHovered ? -5 : 0,
              scale: isHovered ? 1.05 : 1.02,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <Heart className="w-4 h-4 inline mr-2 text-pink-300" />
            Memory #{index + 1}
            <Sparkles className="w-4 h-4 inline ml-2 text-cyan-300" />
          </motion.div>
        </motion.div>

        {/* Floating Hearts on Hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute -top-4 -right-4 pointer-events-none"
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{
                scale: [1, 1.3],
                rotate: [0, 15],
                y: [-10, -30],
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-4xl">💖</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 3D Reflection Effect */}
      <motion.div
        className="absolute top-full left-0 right-0 h-20 rounded-b-3xl opacity-30 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(255, 255, 255, 0.1) 0%, 
            transparent 100%
          )`,
          transform: "rotateX(180deg) translateZ(-1px)",
          transformOrigin: "top",
        }}
        animate={{
          opacity: isHovered ? 0.5 : 0.3,
        }}
      />
    </motion.div>
  );
};

export default PhotoGallerySection;