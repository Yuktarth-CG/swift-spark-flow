
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import WelcomeSection from '@/components/WelcomeSection';
import AgentGrid from '@/components/AgentGrid';
import Sidebar from '@/components/Sidebar';
import { agents } from '@/data/agents';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className={`min-h-screen bg-background`}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      
      <div className="container py-8">
        <WelcomeSection />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <AgentGrid agents={agents} />
          </div>
          
          <Sidebar agents={agents} />
        </div>
      </div>
    </div>
  );
};

export default Index;
