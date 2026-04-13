import * as React from "react";
import { Sidebar } from "./Sidebar";
import { View } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "motion/react";

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  onViewChange: (view: View) => void;
}

export function Layout({ children, currentView, onViewChange }: LayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-background font-sans">
      <div className="atmospheric-bg" />
      
      <Sidebar currentView={currentView} onViewChange={onViewChange} />
      
      <main className="flex-1 md:ml-64 relative">
        <ScrollArea className="h-full">
          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentView}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
