import { LayoutDashboard, Briefcase, User, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { View } from "@/types";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
  ] as const;

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-64 glass border-r border-border/50 flex flex-col z-50 transition-all duration-300">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
          N
        </div>
        <span className="font-display font-bold text-xl hidden md:block">Nexus</span>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "hover:bg-accent text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "scale-110" : "group-hover:scale-110 transition-transform")} />
              <span className="font-medium hidden md:block">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-foreground hidden md:block" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-6 mt-auto space-y-6">
        <div className="flex items-center justify-center md:justify-start gap-4">
          <ThemeToggle />
        </div>
        
        <div className="hidden md:flex items-center gap-4 pt-4 border-t border-border/50">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </aside>
  );
}
