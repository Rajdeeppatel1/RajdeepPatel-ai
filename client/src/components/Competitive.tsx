import { motion } from "framer-motion";
import { Trophy, Code2, Flame, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const stats = [
  { label: "Problems Solved", value: "400+", icon: Code2 },
  { label: "Platform", value: "CodeChef", icon: Trophy },
  { label: "Consistency", value: "Daily", icon: Flame },
  { label: "Growth", value: "Continuous", icon: TrendingUp },
];

const strengths = [
  { name: "Arrays & Strings", level: 90 },
  { name: "Recursion", level: 85 },
  { name: "Trees & Graphs", level: 80 },
  { name: "Dynamic Programming", level: 70 },
  { name: "Greedy Algorithms", level: 75 },
];

export function Competitive() {
  return (
    <section id="competitive" className="py-20 md:py-32 relative">
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
            Competitive <span className="text-gradient">Programming</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Regular contest participant with a strong focus on algorithmic problem-solving
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              data-testid={`stat-${stat.label.toLowerCase().replace(" ", "-")}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
              <div className="relative bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-200">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-display font-bold text-2xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-display font-semibold text-xl mb-6">
              Topic Proficiency
            </h3>
            <div className="space-y-5">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">
                      {strength.name}
                    </span>
                    <span className="text-sm text-primary font-medium">
                      {strength.level}%
                    </span>
                  </div>
                  <Progress value={strength.level} className="h-2" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-display font-semibold text-xl mb-6">
              My Approach
            </h3>
            <ul className="space-y-4">
              {[
                "Daily practice on CodeChef with focus on new problem types",
                "Participate regularly in weekly and monthly contests",
                "Deep dive into editorials to understand optimal solutions",
                "Implement and analyze time/space complexity for every solution",
                "Build intuition through repetition and pattern recognition",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-3 text-muted-foreground"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-bold">
                    {index + 1}
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
