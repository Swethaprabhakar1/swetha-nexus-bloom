import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactInfo = ({ icon: Icon, label, value, href }: { 
  icon: any; 
  label: string; 
  value: string; 
  href?: string;
}) => {
  const content = (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 border border-border/30 hover:border-primary/50 hover:glow-blue transition-all duration-300 cursor-pointer"
    >
      <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-semibold text-foreground">{value}</p>
      </div>
    </motion.div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Hi SWETHA,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:swetha0932005@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoUrl;
    
    toast({
      title: "Email Client Opened",
      description: "Your default email client should open with the message pre-filled.",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "swetha0932005@gmail.com",
      href: "mailto:swetha0932005@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6381522082",
      href: "tel:+916381522082",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
    },
  ];

  const languages = ["English", "Tamil", "Hindi"];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="neon-text-green">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 neon-text-blue">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <ContactInfo key={info.label} {...info} />
                ))}
              </div>
            </div>

            {/* Languages */}
            <Card className="p-6 bg-card/50 border-border/50 hover:border-secondary/50 transition-all duration-300 hover:glow-purple">
              <h4 className="text-lg font-semibold mb-4 neon-text-purple">
                Languages Known
              </h4>
              <div className="flex flex-wrap gap-3">
                {languages.map((language) => (
                  <motion.div
                    key={language}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-secondary/20 rounded-full border border-secondary/30 text-secondary font-medium"
                  >
                    {language}
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 bg-card/50 border-border/50">
              <h4 className="text-lg font-semibold mb-4 neon-text-green">
                Connect on Social
              </h4>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/Swethaprabhakar1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/20 border border-primary/30 hover:border-primary hover:glow-blue transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-primary" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/swetha-p-829948274/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/20 border border-secondary/30 hover:border-secondary hover:glow-purple transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-secondary" />
                </motion.a>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 hover:glow-green">
              <h3 className="text-2xl font-bold mb-6 neon-text-accent">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-input/50 border-border/50 focus:border-primary focus:glow-blue transition-all duration-300"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-input/50 border-border/50 focus:border-primary focus:glow-blue transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-input/50 border-border/50 focus:border-primary focus:glow-blue transition-all duration-300"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary focus:glow-blue transition-all duration-300 resize-none"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-accent hover:glow-green text-accent-foreground font-semibold py-4"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;