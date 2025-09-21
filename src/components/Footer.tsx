import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 border-t border-border/30 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-darker-surface/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold neon-text-blue mb-2">SWETHA</h3>
              <p className="text-muted-foreground">
                Software Engineer passionate about creating innovative digital solutions 
                that bridge creativity and technology.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Swethaprabhakar1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:glow-blue transition-all duration-300"
              >
                <Github className="w-5 h-5 text-primary" />
              </motion.a>
              
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/swetha-p-829948274/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-secondary hover:glow-purple transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-secondary" />
              </motion.a>
              
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:swetha0932005@gmail.com"
                className="p-3 rounded-full bg-card border border-border hover:border-accent hover:glow-green transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-accent" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Articles", "Contact"].map((item) => (
                <li key={item}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Chennai, Tamil Nadu</li>
              <li>India</li>
              <li>
                <a 
                  href="mailto:swetha0932005@gmail.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  swetha0932005@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+916381522082"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +91 6381522082
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/30"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} SWETHA. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>in Chennai</span>
            </div>

            <div className="text-sm text-muted-foreground">
              Languages: English • Tamil • Hindi
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;