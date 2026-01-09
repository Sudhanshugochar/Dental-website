import { motion } from "framer-motion";
import { Phone, Calendar, Sparkles } from "lucide-react";

const floatingIcons = [
  { icon: "🦷", position: "top-20 left-[10%]", delay: 0 },
  { icon: "✨", position: "top-32 right-[15%]", delay: 0.5 },
  { icon: "💎", position: "bottom-40 left-[8%]", delay: 1 },
  { icon: "🪥", position: "top-48 left-[20%]", delay: 1.5 },
  { icon: "😁", position: "bottom-32 right-[10%]", delay: 2 },
  { icon: "🦷", position: "top-60 right-[25%]", delay: 0.8 },
];

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint/5 rounded-full blur-3xl" />
      </div>

      {/* Floating dental icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} text-4xl sm:text-5xl opacity-20`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.2,
            scale: 1,
            y: [0, -20, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            delay: item.delay,
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Sparkles size={16} />
            Welcome to Excellence in Dental Care
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">Shree Ram</span>
          <br />
          <span className="text-foreground">Dental Clinic</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          Advanced Dental Care with Compassion & Precision.
          <br className="hidden sm:block" />
          <span className="text-primary font-medium">Your Smile, Our Priority.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            className="btn-primary flex items-center gap-2 text-lg w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05, boxShadow: "var(--shadow-float)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#appointment")}
          >
            <Calendar size={20} />
            Book Appointment
          </motion.button>

          <motion.a
            href="tel:+1234567890"
            className="btn-secondary flex items-center gap-2 text-lg w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={20} />
            Call Now
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "10K+", label: "Happy Patients" },
            { value: "4.9★", label: "Patient Rating" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
