import { motion } from "framer-motion";
import { Award, BookOpen, Code, Cpu, FileCheck, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "Python Certification",
    issuer: "Professional Certification",
    icon: Code,
    description: "Comprehensive Python programming certification covering fundamentals to advanced concepts.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Course Completion",
    icon: Cpu,
    description: "In-depth course covering all major data structures and algorithmic paradigms.",
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "AI / ML Workshop",
    issuer: "Workshop Certificate",
    icon: BookOpen,
    description: "Hands-on workshop exploring machine learning fundamentals and practical applications.",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Hackathon Participation",
    issuer: "Multiple Certificates",
    icon: Award,
    description: "Participation certificates from Smart India Hackathon and SAP Hackathon events.",
    color: "from-orange-500 to-amber-600",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 noise pointer-events-none" />
      
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
          >
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Continuous Learning</span>
          </motion.div>
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
              whileHover={{ y: -5 }}
              className="group"
              data-testid={`card-certification-${index}`}
            >
              <div className="relative h-full">
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-30 rounded-2xl transition-all duration-500 blur-xl`} />
                <div className="relative h-full bg-card border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}
                    >
                      <cert.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <FileCheck className="h-4 w-4 text-green-400" />
                        <span className="text-xs text-green-400 font-medium">
                          Verified
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-lg mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gradient font-medium mb-2">{cert.issuer}</p>
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
