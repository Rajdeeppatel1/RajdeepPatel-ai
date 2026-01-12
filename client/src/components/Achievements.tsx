import { motion } from "framer-motion";
import { Trophy, Award, Star, Users, Heart, Clock, MessageSquare, Zap } from "lucide-react";

const achievements = [
  {
    title: "Smart India Hackathon",
    description: "Participated in India's largest hackathon, collaborating with talented developers to solve real-world problems.",
    icon: Trophy,
    badge: "Participant",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "SAP Hackathon",
    description: "Achieved Top 10 Team position among numerous competing teams, demonstrating strong problem-solving and teamwork.",
    icon: Award,
    badge: "Top 10 Team",
    color: "from-purple-500 to-pink-500",
  },
];

const softSkills = [
  { name: "Leadership", icon: Users, color: "from-purple-500 to-violet-600" },
  { name: "Communication", icon: MessageSquare, color: "from-blue-500 to-cyan-600" },
  { name: "Team Collaboration", icon: Heart, color: "from-pink-500 to-rose-600" },
  { name: "Time Management", icon: Clock, color: "from-orange-500 to-amber-600" },
  { name: "Public Speaking", icon: Zap, color: "from-green-500 to-emerald-600" },
  { name: "Problem Ownership", icon: Trophy, color: "from-indigo-500 to-purple-600" },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 noise pointer-events-none" />
      
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-br from-pink-600/10 to-purple-600/10 rounded-full blur-3xl"
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
            <Award className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Recognition & Growth</span>
          </motion.div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Hackathons & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience in competitive events and developing essential soft skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative"
              data-testid={`card-achievement-${index}`}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-30 rounded-2xl transition-all duration-500 blur-xl`} />
              <div className="relative bg-card border border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500 h-full">
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}
                  >
                    <achievement.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r ${achievement.color} text-white shadow-lg`}
                  >
                    {achievement.badge}
                  </motion.span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display font-semibold text-2xl text-center mb-8">
            Soft <span className="text-gradient">Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: "spring" }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="group relative"
                data-testid={`badge-skill-${skill.name.toLowerCase().replace(" ", "-")}`}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-50 rounded-full blur-md transition-all duration-300`} />
                <div className="relative flex items-center gap-2 px-5 py-3 bg-card border border-purple-500/10 rounded-full hover:border-purple-500/30 transition-all duration-300">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                    <skill.icon className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
