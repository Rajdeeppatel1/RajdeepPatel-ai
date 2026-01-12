import { motion } from "framer-motion";
import { Download, Linkedin, Code2, Mail, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/IMG_20251031_151903228_HDR~2_1768246860244.jpg";

export function Hero() {
  const handleDownloadResume = () => {
    alert("Resume download will be available soon! Please contact via email.");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 noise pointer-events-none" />
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">Open to Opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-4"
            >
              Hi, I'm{" "}
              <span className="text-gradient">Rajdeep Patel</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-3 font-display"
            >
              B.Tech Computer Science Student
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-muted-foreground/80 max-w-xl mb-8"
            >
              Passionate about Data Structures, Algorithms, and building innovative solutions. 
              <span className="text-gradient font-semibold"> 400+ problems solved</span> on CodeChef.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8"
            >
              <Button
                size="lg"
                onClick={handleDownloadResume}
                className="bg-gradient-primary hover:opacity-90 glow-sm font-semibold px-8 transition-all duration-300 hover:scale-105"
                data-testid="button-download-resume"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                asChild
                data-testid="button-contact"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                { href: "https://www.linkedin.com/in/rajdeep-patel-b80b85341", icon: Linkedin, label: "LinkedIn" },
                { href: "https://www.codechef.com/users/rajdeeppatel11", icon: Code2, label: "CodeChef" },
                { href: "mailto:pateltajdeep537@gmail.com", icon: Mail, label: "Email" },
              ].map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  <link.icon className="h-5 w-5 text-muted-foreground hover:text-purple-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-20 blur-xl"
              />
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 animate-gradient"
                style={{ backgroundSize: "200% 200%" }}
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-background"
              >
                <img
                  src={profileImage}
                  alt="Rajdeep Patel"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
              
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-purple-400 transition-colors cursor-pointer"
        >
          <span className="text-xs">Scroll Down</span>
          <ChevronDown className="h-5 w-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
