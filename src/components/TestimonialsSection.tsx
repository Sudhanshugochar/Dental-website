import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amit Kumar",
    treatment: "Dental Implants",
    rating: 5,
    review: "Excellent experience! Dr. Sharma performed my dental implant surgery with such precision. The entire team was professional and caring. My new smile looks completely natural!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Sneha Patel",
    treatment: "Teeth Whitening",
    rating: 5,
    review: "Amazing results from my teeth whitening treatment! The staff made me feel comfortable throughout the process. Highly recommend Shree Ram Dental Clinic to everyone!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Rahul Verma",
    treatment: "Root Canal",
    rating: 5,
    review: "I was terrified of root canal treatment, but Dr. Priya made it completely painless! The modern equipment and gentle approach made all the difference. Thank you!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Priya Singh",
    treatment: "Braces",
    rating: 5,
    review: "Got my braces done here and the results are fantastic! Regular follow-ups and excellent care throughout the treatment. The clinic is very hygienic and well-maintained.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Vikash Sharma",
    treatment: "General Checkup",
    rating: 5,
    review: "Best dental clinic in the city! The doctors are very knowledgeable and the staff is extremely helpful. They explain everything clearly and make you feel at ease.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === testimonials.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-container">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="section-title">
            What Our Patients
            <span className="gradient-text"> Say</span>
          </h2>
          <p className="section-subtitle mt-4">
            Read real experiences from our satisfied patients.
          </p>
        </motion.div>

        {/* Main testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary" />
            </div>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                "{current.review}"
              </p>

              {/* Patient info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-primary/20"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">{current.name}</h4>
                  <p className="text-sm text-primary">{current.treatment}</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
