import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const achievements = [
    { number: "5+", label: "Projects Completed" },
    { number: "3", label: "Patents Filed" },
    { number: "1", label: "Internship" },
    { number: "4th", label: "Year B.Tech IT" },
  ];

  const patents = [
    {
      title: "Flashlight Without Battery",
      id: "202341028695",
      description: "Self-powered flashlight using human hand energy, eliminating batteries.",
    },
    {
      title: "ASGARDs - Advanced CCTV System",
      id: "202341038365", 
      description: "AI-enabled surveillance with motion detection & alerts.",
    },
    {
      title: "Voice Asan Mat for Yoga",
      id: "202541005767",
      description: "Smart mat with sensors for posture detection & voice guidance.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="neon-text-purple">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Passionate Developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I'm <span className="neon-text-blue font-semibold">SWETHA</span>, a 4th-year B.Tech IT student from 
                <span className="text-foreground"> Prince Shri Venkateshwara Padmavathy Engineering College</span>.
              </p>
              <p className="text-lg leading-relaxed">
                I've explored multiple domains through internships and projects, building innovative solutions 
                that bridge creativity and technology.
              </p>
            </div>

            {/* Internship */}
            <Card className="p-6 bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-blue">
              <h3 className="text-xl font-bold mb-3 neon-text-green">Internship</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Coding Samurai</Badge>
                </div>
                <p className="text-muted-foreground">
                  Worked on coding, debugging, and implementing solutions while enhancing 
                  problem-solving and teamwork skills.
                </p>
              </div>
            </Card>

            {/* Achievement Counters */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gradient-dark rounded-xl border border-border/30 hover:glow-purple transition-all duration-300"
                >
                  <div className="text-3xl font-bold neon-text-blue mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Projects & Patents */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 neon-text-green">Innovation & Patents</h3>
              <div className="space-y-6">
                {patents.map((patent, index) => (
                  <motion.div
                    key={patent.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 hover:glow-green group">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h4 className="text-lg font-semibold text-foreground group-hover:neon-text-green transition-all duration-300">
                            {patent.title}
                          </h4>
                          <Badge variant="outline" className="text-xs">
                            {patent.id}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {patent.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-card/50 border-border/50 hover:border-secondary/50 transition-all duration-300 hover:glow-purple">
              <h4 className="text-lg font-semibold mb-3 neon-text-purple">Azure-Based Project</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cloud AI model integration with secure, scalable data storage using Microsoft Azure services.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;