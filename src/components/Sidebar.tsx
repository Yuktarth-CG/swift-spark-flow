
import React from 'react';
import { Clock, Layers, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WorkflowBuilder from '@/components/WorkflowBuilder';
import { AgentType } from '@/components/AgentCard';

interface SidebarProps {
  agents: AgentType[];
}

const Sidebar = ({ agents }: SidebarProps) => {
  return (
    <div className="space-y-6">
      <WorkflowBuilder agents={agents} />
      
      <div className="bg-white dark:bg-gray-800 border rounded-xl p-5 shadow-sm">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <Clock className="text-swift-purple" size={18} />
          Recent Outputs
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Your recent agent outputs will appear here
        </p>
        
        <div className="bg-muted/40 rounded-lg border border-dashed border-muted-foreground/20 p-6 flex flex-col items-center justify-center">
          <Layers className="text-muted-foreground/60 mb-2" size={24} />
          <p className="text-sm text-muted-foreground text-center">
            No recent outputs
          </p>
          <p className="text-xs text-muted-foreground/60 text-center mt-1">
            Run an agent to see results here
          </p>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-swift-purple/80 to-swift-blue rounded-xl p-5 text-white">
        <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
          <Sparkles size={18} />
          Upgrade to Pro
        </h3>
        <p className="text-sm opacity-90 mb-4">
          Get access to all premium agents and unlimited outputs
        </p>
        <div className="flex gap-2">
          <Button variant="default" className="bg-white hover:bg-white/90 text-swift-purple">
            Upgrade Now
          </Button>
          <Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
