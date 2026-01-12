import { motion } from "framer-motion";
import { Mail, Linkedin, Code2, Send, ArrowUpRight, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    name: "Email",
    value: "pateltajdeep537@gmail.com",
    href: "mailto:pateltajdeep537@gmail.com",
    icon: Mail,
    color: "from-red-500 to-orange-500",
  },
  {
    name: "LinkedIn",
    value: "Rajdeep Patel",
    href: "https://www.linkedin.com/in/rajdeep-patel-b80b85341",
    icon: Linkedin,
    color: "from-blue-600 to-blue-400",
  },
  {
    name: "CodeChef",
    value: "rajdeeppatel11",
    href: "https://www.codechef.com/users/rajdeeppatel11",
    icon: Code2,
    color: "from-amber-500 to-yellow-400",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 noise pointer-events-none" />
      
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-600/15 to-pink-600/15 rounded-full blur-3xl"
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
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Let's Connect</span>
          </motion.div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
                data-testid={`link-contact-${link.name.toLowerCase()}`}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-40 rounded-2xl transition-all duration-500 blur-xl`} />
                <div className="relative bg-card border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500 text-center">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <link.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="font-display font-semibold mb-1">{link.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">{link.value}</p>
                  <ArrowUpRight className="h-4 w-4 absolute top-4 right-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6">
              Looking forward to connecting with you!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 glow-sm font-semibold px-8"
                asChild
                data-testid="button-send-email"
              >
                <a href="mailto:pateltajdeep537@gmail.com">
                  <Send className="mr-2 h-4 w-4" />
                  Send me an Email
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-purple-500/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-pink-500 fill-pink-500" /> by Rajdeep Patel
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </motion.footer>
    </section>
  );
}
