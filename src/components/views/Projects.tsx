import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "@/constants";
import { Project } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Github, Filter, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = React.useState<string | null>(null);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const allTags = Array.from(new Set(PROJECTS.flatMap(p => p.tags))) as string[];
  const filteredProjects = filter 
    ? PROJECTS.filter(p => p.tags.includes(filter))
    : PROJECTS;

  return (
    <div className="space-y-12 pb-20">
      <section>
        <h1 className="text-5xl font-display font-bold mb-4">Inventory</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A curated selection of technical challenges and architectural solutions.
        </p>
      </section>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 items-center">
        <div className="flex items-center gap-2 mr-4 text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filter:</span>
        </div>
        <Button
          variant={filter === null ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter(null)}
          className="rounded-full"
        >
          All
        </Button>
        {allTags.map(tag => (
          <Button
            key={tag}
            variant={filter === tag ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(tag)}
            className="rounded-full"
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                className="group overflow-hidden glass border-none shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-500"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex items-center gap-2 text-primary font-medium">
                      View Details <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-primary/5 text-primary border-none">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl glass border-none shadow-2xl p-0 overflow-hidden">
          {selectedProject && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-full min-h-[300px]">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 space-y-6">
                <DialogHeader>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <DialogTitle className="text-3xl font-display font-bold">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg leading-relaxed pt-4">
                    {selectedProject.longDescription}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                  <h4 className="font-display font-bold text-sm uppercase tracking-wider text-muted-foreground">
                    Tech Stack Breakdown
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.stats.map(stat => (
                      <div key={stat.label} className="space-y-1">
                        <div className="flex justify-between text-sm font-medium">
                          <span>{stat.label}</span>
                          <span>{stat.value}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${stat.value}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: stat.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button className="flex-1 gap-2">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2">
                    <Github className="w-4 h-4" /> Repository
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
