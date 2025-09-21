import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap } from "lucide-react";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="p-6 h-full bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-blue group overflow-hidden relative">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Project Icon/Image Placeholder */}
          <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-green/20 opacity-60" />
            <Zap className="w-16 h-16 text-primary relative z-10" />
            <div className="absolute top-4 right-4">
              <Badge variant="outline" className="bg-card/80">
                {project.status}
              </Badge>
            </div>
          </div>

          {/* Project Info */}
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:neon-text-blue transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <Badge key={tech} variant="secondary" className="text-xs hover:glow-purple">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Actions */}
            <div className="flex space-x-3 pt-4">
              {project.liveUrl && (
                <Button
                  size="sm"
                  className="bg-gradient-primary hover:glow-blue text-primary-foreground"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="border-border hover:border-primary hover:glow-blue"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Lovable Project",
      description: "Modern web application built with React, featuring responsive design and interactive animations. Demonstrates proficiency in frontend development and user experience design.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      status: "Completed",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Event Portal",
      description: "Comprehensive event management system with user registration, event creation, and real-time updates. Built with modern web technologies for optimal performance.",
      tech: ["JavaScript", "HTML", "CSS", "MySQL"],
      status: "Completed",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Yoga Website",
      description: "Interactive yoga practice platform with guided sessions, progress tracking, and community features. Focuses on wellness and user engagement.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      status: "In Progress",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="neon-text-blue">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest work in web development, innovation, and technology
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Innovation Callout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-secondary border border-border/50 hover:border-secondary/50 transition-all duration-300 hover:glow-purple text-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold neon-text-purple">
                Innovation & Patents
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Beyond traditional development, I focus on creating innovative solutions that solve real-world problems. 
                My patent portfolio demonstrates a commitment to pushing technological boundaries.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="hover:glow-blue">3 Patents Filed</Badge>
                <Badge variant="outline" className="hover:glow-green">IoT Solutions</Badge>
                <Badge variant="outline" className="hover:glow-purple">AI Integration</Badge>
                <Badge variant="outline" className="hover:glow-blue">Sustainable Tech</Badge>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;