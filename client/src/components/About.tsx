import { motion } from "framer-motion";
import { GraduationCap, Target, Lightbulb } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
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
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated computer science student with a passion for problem-solving and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8 card-glow transition-all duration-300">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a 2nd year B.Tech Computer Science student with a strong foundation in 
                  <span className="text-primary font-medium"> Data Structures & Algorithms</span>, 
                  Object-Oriented Programming, and emerging technologies like Machine Learning.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With <span className="text-primary font-medium">400+ DSA problems solved</span> on CodeChef 
                  and experience in hackathons including Smart India Hackathon and SAP Hackathon 
                  (Top 10 Team), I'm always eager to take on new challenges and learn continuously.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: GraduationCap,
                title: "Education",
                description: "B.Tech in Computer Science - Currently in 2nd Year",
              },
              {
                icon: Target,
                title: "Focus Areas",
                description: "DSA, Competitive Programming, Machine Learning Basics",
              },
              {
                icon: Lightbulb,
                title: "Philosophy",
                description: "Continuous learning and problem ownership drive my growth",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-200"
                data-testid={`card-about-${item.title.toLowerCase().replace(" ", "-")}`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
