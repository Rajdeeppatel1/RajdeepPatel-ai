import { motion } from "framer-motion";
import { 
  Code, 
  Brain, 
  Terminal, 
  Palette,
  Cpu,
  Rocket
} from "lucide-react";

const skillCategories = [
  {
    title: "Core CS",
    icon: Cpu,
    color: "from-purple-500 to-violet-600",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Problem Solving & Logic",
      "Time & Space Complexity",
    ],
  },
  {
    title: "AI & IoT",
    icon: Brain,
    color: "from-pink-500 to-rose-600",
    skills: [
      "Machine Learning (Basics)",
      "Internet of Things (IoT)",
      "Prompt Engineering",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    color: "from-blue-500 to-cyan-600",
    skills: [
      "Git & GitHub",
      "Replit",
      "VS Code",
      "CodeChef",
    ],
  },
  {
    title: "Creative Tools",
    icon: Palette,
    color: "from-orange-500 to-amber-600",
    skills: [
      "Canva (Basic Design)",
      "Video Editing",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 noise pointer-events-none" />
      
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"
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
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">What I work with</span>
          </motion.div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning from core CS fundamentals to emerging technologies
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group"
              data-testid={`card-skills-${category.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
            >
              <div className="relative h-full">
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-50 rounded-2xl transition-all duration-500 blur-xl`} />
                <div className="relative h-full bg-card border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500 backdrop-blur-sm">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <category.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="font-display font-semibold text-lg mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill, index) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
