import { motion } from "framer-motion";
import { Trophy, Award, Star, Users } from "lucide-react";

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
  { name: "Leadership", icon: Users },
  { name: "Communication", icon: Star },
  { name: "Team Collaboration", icon: Users },
  { name: "Time Management", icon: Star },
  { name: "Public Speaking", icon: Star },
  { name: "Problem Ownership", icon: Trophy },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-32 relative bg-card/30">
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
              className="group relative"
              data-testid={`card-achievement-${index}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 blur-xl`} />
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 h-full card-glow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center`}>
                    <achievement.icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                    {achievement.badge}
                  </span>
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
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-full hover:border-primary/30 transition-all duration-200"
                data-testid={`badge-skill-${skill.name.toLowerCase().replace(" ", "-")}`}
              >
                <skill.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
