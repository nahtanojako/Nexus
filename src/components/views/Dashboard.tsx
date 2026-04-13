import { motion } from "motion/react";
import { SKILLS } from "@/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";
import { Terminal, Code2, Cpu, Palette, Github } from "lucide-react";

export function Dashboard() {
  const radarData = SKILLS.filter(s => s.category === 'Frontend' || s.category === 'Backend').map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100,
  }));

  const barData = SKILLS.map(s => ({
    name: s.name,
    level: s.level,
    category: s.category
  }));

  const categoryColors = {
    Frontend: '#3b82f6',
    Backend: '#10b981',
    Tools: '#f59e0b',
    Design: '#8b5cf6'
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-primary font-mono font-medium mb-4 tracking-widest uppercase text-sm">
            System.initialize()
          </h2>
          <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tight mb-6 leading-[0.9]">
            CRAFTING <span className="text-muted-foreground/30">DIGITAL</span> ARCHITECTURE.
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
            Senior Full-Stack Engineer specializing in high-performance web applications and interactive data visualization.
          </p>
        </motion.div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none">
          <div className="text-[20rem] font-display font-black leading-none select-none">
            01
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Projects Completed', value: '42+', icon: Code2 },
          { label: 'Years Experience', value: '8+', icon: Terminal },
          { label: 'Open Source Contribs', value: '150+', icon: Github },
          { label: 'Design Systems', value: '5', icon: Palette },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <Card className="glass border-none shadow-xl">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  <p className="text-2xl font-display font-bold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Visualization Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass border-none shadow-2xl h-[500px]">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-500" />
                Core Proficiency
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="currentColor" strokeOpacity={0.1} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'currentColor', opacity: 0.6, fontSize: 12 }} />
                  <Radar
                    name="Skill Level"
                    dataKey="A"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="glass border-none shadow-2xl h-[500px]">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-500" />
                Tech Stack Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={100} 
                    tick={{ fill: 'currentColor', opacity: 0.6, fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', border: 'none', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  />
                  <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
                    {barData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={categoryColors[entry.category as keyof typeof categoryColors]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
