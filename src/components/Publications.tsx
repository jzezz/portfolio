import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Calendar, Users } from "lucide-react";

const publications = [
  {
    title: "Design and Development of prototype of industrial robotics arm controlled by touch interface",
    type: "Research Paper",
    venue: "International Journal of Advanced Research in Science, Communication and Technology",
    year: "2024",
    authors: ["IJARSCT Team"],
    abstract: "This paper present the design and development of a prototype industrial robotics arm controlled by a touch interface, focusing on enhancing user interaction and control precision.",
    citations: 23,
    tags: ["Robotics", "touch interface", "Prototype", "Industrial Automation"],
    link: "https://example.com/paper1",
    status: "Published"
  },
  {
    title: "Design and Development of AGV for enhancing hospitality",
    type: "Technical Article",
    venue: "International Journal of Advanced Research in Science, Communication and Technology",
    year: "2024",
    authors: ["IJARSCT Team"],
    abstract: "this paper enhances hospitality by designing and developing AGV.",
    citations: 89,
    tags: ["AGV", "Hospitality", "Automation", "Service Robotics"],
    link: "https://example.com/article1",
    status: "Published"
  },
];

const publicationTypes = [
  { type: "Research Paper", count: 2, color: "primary" },
  { type: "Technical Article", count: 1, color: "accent" },
  
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Publications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Research papers, technical articles, and thought leadership content contributing to the software engineering community.
          </p>
        </motion.div>

        {/* Publication Type Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {publicationTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold gradient-text mb-1">{type.count}</div>
                  <p className="text-xs text-muted-foreground">{type.type}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Publications Grid */}
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card group hover:glow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${
                            pub.type === 'Research Paper' ? 'bg-primary/20 text-primary' :
                            pub.type === 'Technical Article' ? 'bg-accent/20 text-accent' :
                            pub.type === 'Blog Series' ? 'bg-secondary/20 text-secondary-foreground' :
                            'bg-muted/20 text-muted-foreground'
                          }`}
                        >
                          {pub.type}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {pub.year}
                        </div>
                        <Badge 
                          variant={pub.status === 'Published' ? 'default' : 'outline'} 
                          className="text-xs"
                        >
                          {pub.status}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                      
                      <p className="text-primary mb-2">{pub.venue}</p>
                      
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Users className="h-3 w-3 mr-1" />
                        {pub.authors.join(", ")}
                      </div>

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {pub.abstract}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {pub.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        
                        
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to Collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in collaborating on research projects and technical articles. 
                Feel free to reach out if you have an interesting idea or project.
              </p>
              <Button className="glow-primary">
                <ExternalLink className="h-4 w-4 mr-2" />
                Get in Touch
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;