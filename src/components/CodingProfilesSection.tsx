import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code2, ExternalLink } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const FloatingIcon = ({ position, color, icon: IconComponent, rotation = 0 }: { 
  position: [number, number, number]; 
  color: string; 
  icon: any;
  rotation?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 + rotation;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={3}>
      <Sphere ref={meshRef} args={[0.5, 32, 32]} position={position}>
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  );
};

const ProfileCard = ({ profile, index }: { profile: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <Card className={`p-6 bg-card/50 border-border/50 hover:border-${profile.color}/50 transition-all duration-300 hover:glow-${profile.color} group cursor-pointer`}>
        <div className="text-center space-y-4">
          {/* Icon */}
          <div className={`mx-auto w-16 h-16 rounded-full bg-${profile.color}/20 flex items-center justify-center group-hover:bg-${profile.color}/30 transition-all duration-300`}>
            <profile.icon className={`w-8 h-8 text-${profile.color}`} />
          </div>

          {/* Content */}
          <div>
            <h3 className={`text-lg font-bold mb-2 neon-text-${profile.color}`}>
              {profile.platform}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {profile.description}
            </p>
            
            {/* Stats */}
            {profile.stats && (
              <div className="grid grid-cols-2 gap-4 mb-4">
                {profile.stats.map((stat: any) => (
                  <div key={stat.label} className="text-center">
                    <div className={`text-lg font-bold neon-text-${profile.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Button */}
            <Button
              size="sm"
              variant="outline"
              className={`w-full border-${profile.color}/50 hover:border-${profile.color} hover:bg-${profile.color}/10`}
              onClick={() => window.open(profile.url, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Profile
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const CodingProfilesSection = () => {
  const profiles = [
    {
      platform: "GitHub",
      description: "Open source contributions and personal projects showcase",
      icon: Github,
      color: "blue",
      url: "https://github.com/Swethaprabhakar1",
      stats: [
        { label: "Repositories", value: "15+" },
        { label: "Contributions", value: "200+" },
      ],
    },
    {
      platform: "LeetCode",
      description: "Problem solving and algorithmic thinking practice",
      icon: Code2,
      color: "purple",
      url: "https://leetcode.com/u/swetha_093/",
      stats: [
        { label: "Problems", value: "50+" },
        { label: "Rating", value: "1200+" },
      ],
    },
    {
      platform: "LinkedIn",
      description: "Professional networking and career development",
      icon: Linkedin,
      color: "green",
      url: "https://www.linkedin.com/in/swetha-p-829948274/",
      stats: [
        { label: "Connections", value: "300+" },
        { label: "Posts", value: "25+" },
      ],
    },
  ];

  return (
    <section id="profiles" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="neon-text-purple">Coding Profiles</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Connect with me across different platforms
          </p>
        </motion.div>

        {/* 3D Floating Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-64 mb-12 relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-dark-surface/80" />
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, -5, 5]} intensity={0.5} />
            
            <FloatingIcon position={[-3, 0, 0]} color="#00d4ff" icon={Github} rotation={0} />
            <FloatingIcon position={[0, 0, 0]} color="#8b5cf6" icon={Code2} rotation={2} />
            <FloatingIcon position={[3, 0, 0]} color="#00ff88" icon={Linkedin} rotation={4} />
          </Canvas>
        </motion.div>

        {/* Profile Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <ProfileCard key={profile.platform} profile={profile} index={index} />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-accent border border-border/50 hover:border-accent/50 transition-all duration-300 hover:glow-green text-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold neon-text-green">
                Let's Connect & Collaborate
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Always open to discussing new opportunities, collaborations, and innovative projects. 
                Feel free to reach out through any of these platforms!
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/80 text-accent-foreground font-semibold px-8 py-4 rounded-xl hover-scale"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get In Touch
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;