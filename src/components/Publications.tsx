import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Calendar, Users } from "lucide-react";

const publications = [
  {
    title: "Microservices Optimization in Cloud Environments: A Comprehensive Analysis",
    type: "Research Paper",
    venue: "International Conference on Software Engineering (ICSE)",
    year: "2022",
    authors: ["John Doe", "Jane Smith", "Robert Johnson"],
    abstract: "This paper presents a novel approach to optimizing microservices architecture in cloud environments, focusing on resource allocation and performance enhancement. Our methodology shows a 35% improvement in system efficiency.",
    citations: 150,
    tags: ["Microservices", "Cloud Computing", "Performance Optimization"],
    link: "https://example.com/paper1",
    status: "Published"
  },
  {
    title: "Real-time Data Processing at Scale: Lessons from Production Systems",
    type: "Technical Article",
    venue: "IEEE Software",
    year: "2023",
    authors: ["John Doe", "Alice Brown"],
    abstract: "An in-depth analysis of real-time data processing challenges and solutions in large-scale production systems, including case studies from major tech companies.",
    citations: 89,
    tags: ["Real-time Processing", "Big Data", "System Architecture"],
    link: "https://example.com/article1",
    status: "Published"
  },
  {
    title: "Modern Frontend Architecture Patterns: A Developer's Guide",
    type: "Blog Series",
    venue: "Medium",
    year: "2023",
    authors: ["John Doe"],
    abstract: "A comprehensive guide covering modern frontend architecture patterns, including micro-frontends, state management, and performance optimization techniques.",
    citations: 45,
    tags: ["Frontend", "Architecture", "JavaScript", "React"],
    link: "https://example.com/blog1",
    status: "Published"
  },
  {
    title: "Kubernetes Security Best Practices: From Development to Production",
    type: "Technical Report",
    venue: "Cloud Native Computing Foundation",
    year: "2022",
    authors: ["John Doe", "Michael Chen", "Sarah Davis"],
    abstract: "Comprehensive security guidelines for Kubernetes deployments, covering container security, network policies, and access control mechanisms.",
    citations: 67,
    tags: ["Kubernetes", "Security", "DevOps", "Container Security"],
    link: "https://example.com/report1",
    status: "Published"
  },
  {
    title: "AI-Powered Code Review: Enhancing Developer Productivity",
    type: "Research Paper",
    venue: "International Symposium on Software Testing and Analysis",
    year: "2023",
    authors: ["John Doe", "Lisa Wang", "David Kim"],
    abstract: "Investigation into AI-assisted code review systems and their impact on development velocity and code quality in enterprise environments.",
    citations: 23,
    tags: ["AI/ML", "Code Review", "Developer Tools", "Productivity"],
    link: "https://example.com/paper2",
    status: "Under Review"
  },
  {
    title: "Building Resilient Distributed Systems: Patterns and Anti-patterns",
    type: "Workshop Paper",
    venue: "Distributed Systems Workshop",
    year: "2021",
    authors: ["John Doe", "Emma Thompson"],
    abstract: "Exploration of design patterns and common pitfalls in building resilient distributed systems, with practical examples and case studies.",
    citations: 34,
    tags: ["Distributed Systems", "Resilience", "Design Patterns"],
    link: "https://example.com/workshop1",
    status: "Published"
  }
];

const publicationTypes = [
  { type: "Research Paper", count: 3, color: "primary" },
  { type: "Technical Article", count: 1, color: "accent" },
  { type: "Blog Series", count: 1, color: "secondary" },
  { type: "Technical Report", count: 1, color: "muted" }
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
                        <div className="text-sm text-muted-foreground">
                          Citations: <span className="font-semibold text-foreground">{pub.citations}</span>
                        </div>
                        <Button variant="outline" size="sm" className="group/btn">
                          <FileText className="h-3 w-3 mr-2" />
                          Read Paper
                          <ExternalLink className="h-3 w-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
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