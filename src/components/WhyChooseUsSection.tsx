import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Cpu, UserCheck, Shield, Wallet, Siren } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Painless Treatment",
    description: "Advanced techniques ensuring comfortable, pain-free dental procedures.",
  },
  {
    icon: Cpu,
    title: "Modern Equipment",
    description: "State-of-the-art dental technology for precise diagnosis and treatment.",
  },
  {
    icon: UserCheck,
    title: "Experienced Dentists",
    description: "Highly skilled and friendly dental professionals with years of expertise.",
  },
  {
    icon: Shield,
    title: "Hygienic Environment",
    description: "Strict sterilization protocols ensuring a safe and clean environment.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description: "Quality dental care at competitive prices with flexible payment options.",
  },
  {
    icon: Siren,
    title: "Emergency Care",
    description: "24/7 emergency dental services for urgent dental needs.",
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-container bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="section-title">
            Experience the
            <span className="gradient-text"> Difference</span>
          </h2>
          <p className="section-subtitle mt-4">
            What makes Shree Ram Dental Clinic your best choice for dental care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-float">
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
