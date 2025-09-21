import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Canvas } from "@react-three/fiber";
import { Float, Text3D } from "@react-three/drei";

const SkillCard = ({ skill, index }: { skill: { category: string; skills: string[]; color: string }; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="h-full"
    >
      <Card className={`p-6 h-full bg-card/50 border-border/50 hover:border-${skill.color}/50 transition-all duration-300 hover:glow-${skill.color} group`}>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full bg-${skill.color} shadow-lg`} />
            <h3 className={`text-lg font-bold neon-text-${skill.color}`}>
              {skill.category}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skill.skills.map((skillName, skillIndex) => (
              <motion.div
                key={skillName}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                viewport={{ once: true }}
              >
                <Badge 
                  variant="secondary" 
                  className="hover:bg-secondary/30 transition-all duration-300 group-hover:glow-blue"
                >
                  {skillName}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "Java", "HTML", "CSS", "JavaScript"],
      color: "blue",
    },
    {
      category: "Tools & Version Control",
      skills: ["Git", "GitHub", "Arduino", "Raspberry Pi"],
      color: "purple",
    },
    {
      category: "Game Development", 
      skills: ["Unity", "Unreal Engine"],
      color: "green",
    },
    {
      category: "Cloud & DevOps",
      skills: ["Azure", "Jenkins"],
      color: "blue",
    },
    {
      category: "Office Suite",
      skills: ["Microsoft Word", "Excel", "PowerPoint"],
      color: "purple",
    },
    {
      category: "Database",
      skills: ["MySQL"],
      color: "green",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="neon-text-green">My Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* 3D Skills Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-32 mb-12 relative"
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
              <Text3D
                font="/fonts/inter_bold.json"
                size={0.5}
                height={0.1}
                position={[-2, 0, 0]}
              >
                SKILLS
                <meshStandardMaterial color="#00d4ff" />
              </Text3D>
            </Float>
          </Canvas>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((skillCategory, index) => (
            <SkillCard key={skillCategory.category} skill={skillCategory} index={index} />
          ))}
        </div>

        {/* Interactive Skills Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-dark border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-blue">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold neon-text-blue">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Always exploring new technologies and frameworks to stay current with industry trends. 
                Currently focusing on advanced cloud computing and AI integration.
              </p>
              <div className="flex justify-center space-x-4 mt-6">
                <Badge variant="outline" className="hover:glow-purple">Learning AI/ML</Badge>
                <Badge variant="outline" className="hover:glow-green">Exploring Blockchain</Badge>
                <Badge variant="outline" className="hover:glow-blue">Advanced React</Badge>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;