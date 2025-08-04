import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "PhD in Electronics and Telecommunication ",
    institution: "Vel Tech rangarajan sagunthala R&D Institute of Science and Technology",
    location: "Chennai",
    year: "pursuing",
    gpa: "--",
    description: "electronnics and telecommunication with specialization",

    coursework: [
      ,
      "Embedded Systems",
      "Digital Signal Processing",
      "Wireless Communication",
    ],
    honors: ["Dean's List", "Research Excellence Award"]
  },
  {
    degree: "Masters in Technical Education",
    institution: "JNT University",
    location: "Hyderabad",
    year: "2016",
    gpa: "78.04% ",
    description: "masters degreee in VLSI system design",
    coursework: [
      "VLSI",
      "System design",
      "Digital Electronics",
      "Integrated Circuit Design",
      
    ],
    honors: ["published papers", "Outstanding Student Award"]
  }
  
];

const certifications = [
  {
    name: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    year: "2023",
    credentialId: "AWS-SAP-2023-001"
  },
  
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation and continuous learning through formal education and professional certifications.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Academic Background</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-px"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
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
                        <div className="flex items-center gap-2 mb-3">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            {edu.year}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            GPA: {edu.gpa}
                          </Badge>
                        </div>

                        <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                        <p className="text-lg text-primary mb-1">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mb-3">{edu.location}</p>
                        <p className="text-muted-foreground mb-4">{edu.description}</p>

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2">Key Coursework:</h4>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {edu.coursework.map((course) => (
                              <Badge key={course} variant="outline" className="text-xs">
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold mb-2">Honors & Awards:</h4>
                          <div className="space-y-1">
                            {edu.honors.map((honor, i) => (
                              <div key={i} className="flex items-center text-sm text-muted-foreground">
                                <Award className="h-3 w-3 mr-2 text-accent" />
                                {honor}
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card h-full group hover:glow-accent transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent/20 flex items-center justify-center"
                    >
                      <Award className="h-6 w-6 text-accent" />
                    </motion.div>
                    <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                    <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mb-3">{cert.year}</p>
                    <Badge variant="outline" className="text-xs">
                      ID: {cert.credentialId}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;