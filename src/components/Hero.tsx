import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl glow-primary"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">John Doe</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Senior Software Engineer & Tech Lead passionate about building 
            innovative solutions and leading high-performing teams.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button className="glow-primary group">
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection("#about")}
              className="group"
            >
              Learn More
              <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"
        animate={{ 
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default Hero;