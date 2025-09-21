import { motion } from "framer-motion";
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero3D from "./Hero3D";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // In a real app, this would download the actual resume
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // You would put the actual resume URL here
    link.download = "SWETHA_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <Hero3D />
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Hi, I'm
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, type: "spring", stiffness: 100 }}
            className="text-6xl md:text-8xl font-black tracking-tight"
          >
            <span className="neon-text-blue">SWETHA</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-4xl font-bold neon-text-purple"
          >
            Software Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Creating modern, impactful digital solutions through innovation and technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-primary hover:glow-blue text-primary-foreground font-semibold px-8 py-4 rounded-xl border-0 hover-scale"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 hover:border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-4 rounded-xl hover-glow"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center space-x-6 mt-16"
          >
            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Swethaprabhakar1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:glow-blue"
            >
              <Github className="h-6 w-6 text-primary" />
            </motion.a>

            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/swetha-p-829948274/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-secondary transition-all duration-300 hover:glow-purple"
            >
              <Linkedin className="h-6 w-6 text-secondary" />
            </motion.a>

            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:swetha0932005@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-accent transition-all duration-300 hover:glow-green"
            >
              <Mail className="h-6 w-6 text-accent" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center space-y-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;