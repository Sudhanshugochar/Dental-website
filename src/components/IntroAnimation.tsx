import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const taglineTimer = setTimeout(() => setShowTagline(true), 1500);
    const completeTimer = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(taglineTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-background via-muted to-background overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/5"
              style={{
                width: `${150 + i * 100}px`,
                height: `${150 + i * 100}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Dental icons floating */}
        <motion.div
          className="absolute top-20 left-20 text-6xl opacity-20"
          animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🦷
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-20 text-5xl opacity-20"
          animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute top-40 right-32 text-4xl opacity-15"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          💎
        </motion.div>

        {/* Main content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <motion.span
              className="text-7xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🦷
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4"
          >
            Shree Ram Dental Clinic
          </motion.h1>

          {showTagline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl text-muted-foreground font-medium"
            >
              Your Smile, Our Priority
            </motion.p>
          )}

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="h-1 w-32 mx-auto mt-8 rounded-full gradient-bg"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroAnimation;
