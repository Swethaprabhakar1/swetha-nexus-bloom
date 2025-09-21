import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, PenTool } from "lucide-react";

const ArticleCard = ({ article, index }: { article: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="p-6 h-full bg-card/50 border-border/50 hover:border-secondary/50 transition-all duration-300 hover:glow-purple group cursor-pointer">
        <div className="h-full flex flex-col">
          {/* Article Header */}
          <div className="mb-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
              <span>•</span>
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:neon-text-purple transition-all duration-300">
              {article.title}
            </h3>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="text-xs hover:glow-blue">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Read More Button */}
          <div className="mt-auto">
            <Button
              variant="outline"
              size="sm"
              className="w-full border-border hover:border-secondary hover:glow-purple group-hover:bg-secondary/10"
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const ArticlesSection = () => {
  const articles = [
    {
      title: "Innovation in IoT: Building Battery-Free Devices",
      excerpt: "Exploring sustainable technology solutions through innovative hardware design. Learn how human energy can power modern devices without traditional batteries.",
      date: "March 2024",
      readTime: "8 min read",
      tags: ["IoT", "Innovation", "Sustainability", "Hardware"],
      category: "Technology",
    },
    {
      title: "AI-Powered Surveillance: The Future of Security",
      excerpt: "Diving deep into computer vision and motion detection algorithms. Understanding how AI is revolutionizing security systems and surveillance technology.",
      date: "February 2024", 
      readTime: "12 min read",
      tags: ["AI", "Computer Vision", "Security", "Machine Learning"],
      category: "Artificial Intelligence",
    },
    {
      title: "Cloud Architecture with Microsoft Azure",
      excerpt: "Best practices for scalable cloud solutions using Azure services. A comprehensive guide to building robust, secure, and scalable applications in the cloud.",
      date: "January 2024",
      readTime: "15 min read",
      tags: ["Azure", "Cloud", "Architecture", "DevOps"],
      category: "Cloud Computing",
    },
    {
      title: "Game Development with Unity: Tips for Beginners",
      excerpt: "Getting started with Unity game engine development. Essential techniques, best practices, and common pitfalls to avoid when creating your first game.",
      date: "December 2023",
      readTime: "10 min read",
      tags: ["Unity", "Game Dev", "C#", "Tutorial"],
      category: "Game Development",
    },
    {
      title: "The Intersection of Wellness and Technology",
      excerpt: "How smart devices are revolutionizing fitness and wellness. Exploring the role of sensors, AI, and user experience in health-focused applications.",
      date: "November 2023",
      readTime: "6 min read",
      tags: ["Wellness", "Health Tech", "IoT", "UX Design"],
      category: "Health Technology",
    },
    {
      title: "Version Control Best Practices with Git",
      excerpt: "Mastering Git workflows for collaborative development. Learn advanced techniques for branching, merging, and maintaining clean project history.",
      date: "October 2023",
      readTime: "9 min read",
      tags: ["Git", "Version Control", "Collaboration", "Development"],
      category: "Development Tools",
    },
  ];

  return (
    <section id="articles" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="neon-text-purple">Featured Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on technology and innovation
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="p-8 bg-gradient-secondary border border-border/50 hover:border-secondary/50 transition-all duration-300 hover:glow-purple">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="outline" className="mb-4 hover:glow-purple">Featured Article</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 neon-text-purple">
                  {articles[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{articles[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>
                <Button className="bg-gradient-primary hover:glow-blue text-primary-foreground">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Full Article
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-lg border border-border/30 flex items-center justify-center">
                  <PenTool className="w-16 h-16 text-secondary opacity-60" />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {articles.slice(1).map((article, index) => (
            <ArticleCard key={article.title} article={article} index={index} />
          ))}
        </div>

        {/* Writing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-accent border border-border/50 hover:border-accent/50 transition-all duration-300 hover:glow-green text-center">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-accent/20 border border-accent/30">
                  <PenTool className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold neon-text-green">
                Share Knowledge & Inspire Others
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I believe in sharing knowledge and helping others learn. These articles represent my journey 
                through various technologies and the insights I've gained along the way.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/80 text-accent-foreground font-semibold px-8 py-4 rounded-xl hover-scale"
              >
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;