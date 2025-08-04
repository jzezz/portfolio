import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Lightbulb, Target } from "lucide-react";

const skills = [
  "SQL", "MATLAB", "keil U vision", "Python", "C++", "Linux",
  "Proteus Arduino", "PostgreSQL",
];

const values = [
  {
    icon: Code,
    title: "Technical Excellence",
    description: "Comfortable and knowledgable about the technical skills I possese."
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Experienced in mentoring and fostering team building skills."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Passionate about exploring new technologies and solving complex problems."
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on delivering high-quality solutions that drive business value."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate teacher with over 14 years of experience in teaching engineering students
            and help building the future of our country.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full group hover:glow-primary transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/20 flex items-center justify-center"
                  >
                    <value.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-muted rounded-2xl text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;