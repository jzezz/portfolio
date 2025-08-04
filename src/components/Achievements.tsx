import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award, Users, Target, Zap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "College ARC center",
    organization: "JSPM Jayawantrao College of Engineering",
    year: "2024",
    description: "worked for the college ARC center to help students with their projects and research.",
    category: "Community Service",
    level: "College"
  },
  {
    icon: Star,
    title: "College NAAC committee",
    organization: "Rajiv Gandhi College of Engineering and Research",
    year: "2022",
    description: "Contributed to the college NAAC committee to help improve the college's accreditation.",
    category: "Research",
    level: "College"
  },
  {
    icon: Award,
    title: "College NBA committee ",
    organization: "JSPM Jayawantrao College of Engineering",
    year: "2024",
    description: "Contributed to the college NBA committee to help improve the college's accreditation.",
    category: "Leadership",
    level: "College"
  },
  {
    icon: Users,
    title: "College Admission Committee",
    organization: "JSPM Jayawantrao College of Engineering",
    year: "2024",
    description: "Assisted in the college admission process by guiding prospective students and parents.",
    category: "Teamwork",
    level: "College"
  },
  
];

const stats = [
  { number: "7", label: "SPPU papers set", icon: Trophy },
  { number: "2", label: "Papers Published", icon: Star },
  { number: "6", label: "College Activity", icon: Target },
  
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition and milestones that showcase dedication to excellence and innovation.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card text-center group hover:glow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/20 flex items-center justify-center"
                  >
                    <stat.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold gradient-text mb-1"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full group hover:glow-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0"
                    >
                      <achievement.icon className="h-6 w-6 text-accent" />
                    </motion.div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge variant="secondary" className="text-xs">
                        {achievement.year}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {achievement.level}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-primary mb-3">{achievement.organization}</p>
                  <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>

                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      achievement.category === 'Innovation' ? 'border-primary text-primary' :
                      achievement.category === 'Research' ? 'border-accent text-accent' :
                      achievement.category === 'Leadership' ? 'border-orange-500 text-orange-500' :
                      achievement.category === 'Teamwork' ? 'border-green-500 text-green-500' :
                      achievement.category === 'Performance' ? 'border-blue-500 text-blue-500' :
                      'border-purple-500 text-purple-500'
                    }`}
                  >
                    {achievement.category}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;