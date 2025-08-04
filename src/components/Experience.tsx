import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";
import { a } from "node_modules/framer-motion/dist/types.d-Cjd591yU";

const experiences = [
  {
    title: "JSPM Jayawantrao College of Engineering ",
    company: "Computer Department",
    location: "Pune",
    duration: "2024 - Present",
    type: "Full-time",
    description: "Assistant Professor and lab in charge at computer department .",
    technologies: ["Python", "Linux",  "C++"],
    achievements: [
      "helped in multiple student projects and research papers",
      "Mentored 2 SIH teams to help them build and present their projects",
    ]
  },
  {
    title: "Zeal College of Engineering and Research",
    company: "Robotics and Automation Department",
    location: "Pune",
    duration: "2023 - 2024",
    type: "Full-time",
    description: "Assistant Professor and lab in charge at Robotics and Automation  department.",
    technologies: ["Python", "PostgreSQL", "MATLAB", "C++"],
    achievements: [
      "Developed and implemented new curriculum for Robotics and Automation courses", 
    ]
  },
  {
    title: "Rajiv Gandhi Coleege of engineering and Research",
    company: "Electronics and telecommunication  department",
    location: "Ahmednagar",
    duration: "2015 - 2023",
    type: "Full time",
    description: "Assistant Professor and lab in charge at Electronics and Telecommunication department.",
    technologies: ["c++", "Python", ],
    achievements: [
      "helped and mentored students in their final year projects"
    ]
  },
  {
    title: "Adsul Technical Campus ",
    company: "Electronics and telecommunication  department",
    location: "Ahmednagar ",
    duration: "2012 - 2013",
    type: "Full-time",
    description: "Assistant Professor and lab in charge at Electronics and Telecommunication department.",
    technologies: ["Python", "MySQL"],
    achievements: [
      "worked with other faculty from different departments to conduct events and internal hackathons",
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey building innovative software solutions and leading teams.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-px"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10 glow-primary"></div>

                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="glass-card group hover:glow-primary transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <CalendarDays className="h-3 w-3 mr-1" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-lg text-primary mb-3">{exp.company}</p>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;