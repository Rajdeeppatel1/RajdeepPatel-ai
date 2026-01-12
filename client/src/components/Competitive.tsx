import { motion } from "framer-motion";
import { Trophy, Code2, Flame, TrendingUp, Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const stats = [
  { label: "Problems Solved", value: "400+", icon: Code2, color: "from-purple-500 to-violet-600" },
  { label: "Platform", value: "CodeChef", icon: Trophy, color: "from-pink-500 to-rose-600" },
  { label: "Consistency", value: "Daily", icon: Flame, color: "from-orange-500 to-amber-600" },
  { label: "Growth", value: "Continuous", icon: TrendingUp, color: "from-blue-500 to-cyan-600" },
];

const strengths = [
  { name: "Arrays & Strings", level: 90, color: "from-purple-500 to-pink-500" },
  { name: "Recursion", level: 85, color: "from-blue-500 to-cyan-500" },
  { name: "Trees & Graphs", level: 80, color: "from-green-500 to-emerald-500" },
  { name: "Dynamic Programming", level: 70, color: "from-orange-500 to-yellow-500" },
  { name: "Greedy Algorithms", level: 75, color: "from-pink-500 to-rose-500" },
];

export function Competitive() {
  return (
    <section id="competitive" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 noise pointer-events-none" />
      
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"
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
            <Target className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Problem Solving Journey</span>
          </motion.div>
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
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
              data-testid={`stat-${stat.label.toLowerCase().replace(" ", "-")}`}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-40 rounded-xl transition-all duration-500 blur-lg`} />
              <div className="relative bg-card border border-purple-500/10 rounded-xl p-6 text-center hover:border-purple-500/30 transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </motion.div>
                <div className="font-display font-bold text-2xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600 to-pink-600 opacity-10 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500" />
            <div className="relative bg-card border border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-purple-400" />
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
                      <span className="text-sm text-gradient font-medium">
                        {strength.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${strength.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${strength.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-10 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500" />
            <div className="relative bg-card border border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                <Flame className="h-5 w-5 text-orange-400" />
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
                    className="flex gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs text-white font-bold">
                      {index + 1}
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
