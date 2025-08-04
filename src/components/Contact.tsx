import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Upload, Download } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "john.doe@email.com",
    href: "mailto:john.doe@email.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "https://maps.google.com/?q=San Francisco, CA"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/johndoe",
    color: "hover:text-purple-400"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/johndoe",
    color: "hover:text-blue-400"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/johndoe",
    color: "hover:text-cyan-400"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedCV, setUploadedCV] = useState<File | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setUploadedCV(file);
      toast({
        title: "CV uploaded!",
        description: `${file.name} has been uploaded successfully.`,
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or DOCX file.",
        variant: "destructive"
      });
    }
  };

  const downloadResume = () => {
    // Simulate resume download
    toast({
      title: "Resume downloading...",
      description: "Your download will start shortly.",
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project or discuss opportunities? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resume & CV Section */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Resume & CV</h3>
                <div className="space-y-4">
                  <Button 
                    onClick={downloadResume}
                    className="w-full glow-primary group"
                  >
                    <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Download Resume (PDF)
                  </Button>
                  
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <Label htmlFor="cv-upload" className="cursor-pointer">
                      <div className="flex flex-col items-center space-y-2">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {uploadedCV ? uploadedCV.name : "Upload your CV (PDF/DOCX)"}
                        </span>
                      </div>
                      <Input
                        id="cv-upload"
                        type="file"
                        accept=".pdf,.docx"
                        onChange={handleCVUpload}
                        className="hidden"
                      />
                    </Label>
                  </div>

                  {uploadedCV && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-primary/10 rounded-lg"
                    >
                      <p className="text-sm text-primary">✓ CV uploaded successfully</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Preview CV
                      </Button>
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell me about your project or how I can help..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full glow-primary group"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-2 h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;