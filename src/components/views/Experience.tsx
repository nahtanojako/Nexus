import { motion } from "motion/react";
import { EXPERIENCE } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <div className="space-y-12 pb-20">
      <section>
        <h1 className="text-5xl font-display font-bold mb-4">Intelligence</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A timeline of professional growth, technical leadership, and problem-solving.
        </p>
      </section>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {EXPERIENCE.map((item, i) => (
          <div key={item.company} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-[calc(100%-4rem)] md:w-[45%] p-4 rounded-xl"
            >
              <Card className="glass border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h3 className="text-2xl font-display font-bold">{item.role}</h3>
                    <Badge variant="secondary" className="w-fit flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </Badge>
                  </div>
                  
                  <p className="text-primary font-bold mb-4">{item.company}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-3">
                    {item.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
