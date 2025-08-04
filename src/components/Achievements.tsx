import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award, Users, Target, Zap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Tech Innovation Award 2023",
    organization: "TechCorp Inc.",
    year: "2023",
    description: "Recognized for developing an AI-powered analytics platform that increased customer engagement by 45% and reduced processing time by 60%.",
    category: "Innovation",
    level: "Company"
  },
  {
    icon: Star,
    title: "Best Paper Award",
    organization: "International Conference on Software Engineering",
    year: "2022",
    description: "Published research on 'Microservices Optimization in Cloud Environments' which has been cited 150+ times in academic literature.",
    category: "Research",
    level: "International"
  },
  {
    icon: Award,
    title: "Outstanding Leadership Award",
    organization: "StartupXYZ",
    year: "2021",
    description: "Led cross-functional team of 12 members to deliver a mission-critical project 3 weeks ahead of schedule, resulting in $2M additional revenue.",
    category: "Leadership",
    level: "Company"
  },
  {
    icon: Users,
    title: "Team Excellence Award",
    organization: "DigitalAgency",
    year: "2020",
    description: "Contributed to team achievement of highest client satisfaction score (4.9/5.0) and 100% project delivery rate for the fiscal year.",
    category: "Teamwork",
    level: "Company"
  },
  {
    icon: Target,
    title: "Performance Excellence",
    organization: "CodeStudio",
    year: "2019",
    description: "Consistently exceeded performance targets by 25% and was instrumental in securing 5 major client contracts worth $500K total.",
    category: "Performance",
    level: "Company"
  },
  {
    icon: Zap,
    title: "Innovation Hackathon Winner",
    organization: "Regional Tech Summit",
    year: "2018",
    description: "Led team to first place in 48-hour hackathon with a real-time collaboration platform that was later acquired by a major tech company.",
    category: "Innovation",
    level: "Regional"
  }
];

const stats = [
  { number: "15+", label: "Awards Received", icon: Trophy },
  { number: "150+", label: "Research Citations", icon: Star },
  { number: "50+", label: "Projects Delivered", icon: Target },
  { number: "98%", label: "Client Satisfaction", icon: Users }
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
            Recognition and milestones that showcase dedication to excellence and innovation in technology.
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