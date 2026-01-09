import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar, Phone } from "lucide-react";

const doctors = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Chief Dental Surgeon",
    specialization: "Oral & Maxillofacial Surgery",
    experience: "15+ Years Experience",
    education: "BDS, MDS (AIIMS Delhi)",
    achievements: ["Gold Medalist", "500+ Implant Surgeries", "Best Dentist Award 2023"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Priya Verma",
    role: "Cosmetic Dentist",
    specialization: "Aesthetic & Cosmetic Dentistry",
    experience: "10+ Years Experience",
    education: "BDS, MDS (Cosmetic Dentistry)",
    achievements: ["Smile Makeover Expert", "Invisalign Certified", "200+ Smile Transformations"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
  },
];

const DoctorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToAppointment = () => {
    const element = document.querySelector("#appointment");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="doctor" className="section-container">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Experts
          </span>
          <h2 className="section-title">
            Meet Our
            <span className="gradient-text"> Expert Dentists</span>
          </h2>
          <p className="section-subtitle mt-4">
            Highly qualified professionals dedicated to your dental health and beautiful smile.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group"
            >
              <div className="glass-card rounded-3xl overflow-hidden hover:shadow-float transition-all duration-500">
                <div className="relative">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                    
                    {/* Quick info overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                      <h3 className="text-2xl font-bold">{doctor.name}</h3>
                      <p className="text-primary-foreground/90">{doctor.role}</p>
                    </div>
                  </div>

                  {/* Experience badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                    {doctor.experience}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span>{doctor.education}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Award className="w-5 h-5 text-primary" />
                      <span>{doctor.specialization}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {doctor.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex gap-3">
                    <motion.button
                      className="flex-1 btn-primary flex items-center justify-center gap-2 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={scrollToAppointment}
                    >
                      <Calendar size={16} />
                      Book Appointment
                    </motion.button>
                    <motion.a
                      href="tel:+1234567890"
                      className="px-4 py-3 border-2 border-primary/20 rounded-xl text-primary hover:bg-primary/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
