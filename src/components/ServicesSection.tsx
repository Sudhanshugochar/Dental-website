import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, Sparkles, CircleDot, GitBranch, Smile, Sun, Baby, Palette } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description: "Comprehensive dental exams, cleanings, and preventive care for your oral health.",
  },
  {
    icon: Sparkles,
    title: "Teeth Cleaning & Polishing",
    description: "Professional cleaning to remove plaque, tartar, and stains for a brighter smile.",
  },
  {
    icon: CircleDot,
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look and function like natural teeth.",
  },
  {
    icon: GitBranch,
    title: "Root Canal Treatment",
    description: "Advanced endodontic treatment to save damaged teeth and relieve pain.",
  },
  {
    icon: Smile,
    title: "Braces & Aligners",
    description: "Orthodontic solutions including invisible aligners for a perfectly aligned smile.",
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter, more confident smile.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Gentle and fun dental care specially designed for children of all ages.",
  },
  {
    icon: Palette,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and aesthetic treatments.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-container">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="section-title">
            Comprehensive
            <span className="gradient-text"> Dental Services</span>
          </h2>
          <p className="section-subtitle mt-4">
            We offer a full range of dental services to keep your smile healthy and beautiful.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="glass-card h-full p-6 rounded-2xl transition-all duration-300 hover:shadow-float hover:-translate-y-2 border border-transparent hover:border-primary/20">
                <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
