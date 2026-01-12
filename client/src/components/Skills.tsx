import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Brain, 
  GitBranch, 
  Terminal, 
  Palette,
  Cpu,
  Sparkles
} from "lucide-react";

const skillCategories = [
  {
    title: "Core CS",
    icon: Cpu,
    color: "from-cyan-500 to-blue-500",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Problem Solving & Logic",
      "Time & Space Complexity",
    ],
  },
  {
    title: "AI / Emerging Tech",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      "Machine Learning (Basics)",
      "Prompt Engineering",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    color: "from-green-500 to-emerald-500",
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
    color: "from-orange-500 to-yellow-500",
    skills: [
      "Canva (Basic Design)",
      "Video Editing",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative bg-card/30">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="group"
              data-testid={`card-skills-${category.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
            >
              <div className="relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 blur-xl`} />
                <div className="relative h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 card-glow">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {skill}
                      </li>
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
