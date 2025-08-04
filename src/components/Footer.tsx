import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/johndoe", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/johndoe", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/johndoe", label: "Twitter" }
  ];

  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold gradient-text mb-3">John Doe</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Senior Software Engineer passionate about building innovative solutions 
              and sharing knowledge with the tech community.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Publications", href: "#publications" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ x: 4 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-3">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Email:</strong> john.doe@email.com
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Location:</strong> San Francisco, CA
            </p>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} John Doe. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
            <span>and lots of ☕</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Built with React, TypeScript & Framer Motion
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;