import * as React from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="space-y-12 pb-20">
      <section>
        <h1 className="text-5xl font-display font-bold mb-4">Interface</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Let's discuss architectural challenges, new opportunities, or just say hello.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="glass border-none shadow-xl">
            <CardContent className="p-8 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Email</p>
                    <p className="font-medium">hello@nexus.dev</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Location</p>
                    <p className="font-medium">San Francisco, CA</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Phone</p>
                    <p className="font-medium">+1 (555) 000-0000</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground font-medium mb-4 uppercase tracking-wider">Connect</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <Twitter className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="glass border-none shadow-2xl">
            <CardHeader className="p-8 pb-0">
              <CardTitle className="text-2xl font-display font-bold">Send a Message</CardTitle>
              <CardDescription>I'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll be in touch soon.</p>
                  <Button variant="outline" onClick={() => setIsSuccess(false)}>Send another</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input placeholder="John Doe" required className="bg-background/50 border-border/50 focus:bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <Input type="email" placeholder="john@example.com" required className="bg-background/50 border-border/50 focus:bg-background" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="Project Inquiry" required className="bg-background/50 border-border/50 focus:bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project..." 
                      className="min-h-[150px] bg-background/50 border-border/50 focus:bg-background" 
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 gap-2 text-lg font-display" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
