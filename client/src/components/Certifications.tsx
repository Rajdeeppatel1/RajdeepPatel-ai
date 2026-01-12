import { motion } from "framer-motion";
import { Award, BookOpen, Code, Cpu, FileCheck } from "lucide-react";

const certifications = [
  {
    title: "Python Certification",
    issuer: "Professional Certification",
    icon: Code,
    description: "Comprehensive Python programming certification covering fundamentals to advanced concepts.",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Course Completion",
    icon: Cpu,
    description: "In-depth course covering all major data structures and algorithmic paradigms.",
  },
  {
    title: "AI / ML Workshop",
    issuer: "Workshop Certificate",
    icon: BookOpen,
    description: "Hands-on workshop exploring machine learning fundamentals and practical applications.",
  },
  {
    title: "Hackathon Participation",
    issuer: "Multiple Certificates",
    icon: Award,
    description: "Participation certificates from Smart India Hackathon and SAP Hackathon events.",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 noise pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Certifications & <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through courses, workshops, and certifications
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
              data-testid={`card-certification-${index}`}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 blur-xl" />
                <div className="relative h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 card-glow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                      <cert.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <FileCheck className="h-4 w-4 text-green-500" />
                        <span className="text-xs text-green-500 font-medium">
                          Verified
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-lg mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
