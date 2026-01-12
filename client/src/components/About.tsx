import { motion } from "framer-motion";
import { GraduationCap, Target, Lightbulb, Zap } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 noise pointer-events-none" />
      
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Get to know me</span>
          </motion.div>
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
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-card border border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a 2nd year B.Tech Computer Science student with a strong foundation in 
                  <span className="text-gradient font-medium"> Data Structures & Algorithms</span>, 
                  Object-Oriented Programming, and emerging technologies like Machine Learning.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With <span className="text-gradient font-medium">400+ DSA problems solved</span> on CodeChef 
                  and experience in hackathons including Smart India Hackathon and SAP Hackathon 
                  (Top 10 Team), I'm always eager to take on new challenges and learn continuously.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                icon: GraduationCap,
                title: "Education",
                description: "B.Tech in Computer Science - Currently in 2nd Year",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Target,
                title: "Focus Areas",
                description: "DSA, Competitive Programming, Machine Learning Basics",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Lightbulb,
                title: "Philosophy",
                description: "Continuous learning and problem ownership drive my growth",
                color: "from-orange-500 to-yellow-500",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex gap-4 p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 cursor-default group"
                data-testid={`card-about-${item.title.toLowerCase().replace(" ", "-")}`}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-6 w-6 text-white" />
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
