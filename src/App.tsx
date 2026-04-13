/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/views/Dashboard";
import { Projects } from "./components/views/Projects";
import { Experience } from "./components/views/Experience";
import { Contact } from "./components/views/Contact";
import { View } from "./types";
import { TooltipProvider } from "./components/ui/tooltip";

export default function App() {
  const [currentView, setCurrentView] = React.useState<View>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="nexus-theme">
      <TooltipProvider>
        <Layout currentView={currentView} onViewChange={setCurrentView}>
          {renderView()}
        </Layout>
      </TooltipProvider>
    </ThemeProvider>
  );
}

