
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AgentCard, { AgentType } from '@/components/AgentCard';
import { toast } from 'sonner';

interface AgentGridProps {
  agents: AgentType[];
}

const AgentGrid = ({ agents }: AgentGridProps) => {
  const [currentTab, setCurrentTab] = useState('all');

  const handleSendOutput = (targetAgentId: string, output: React.ReactNode) => {
    const targetAgent = agents.find(agent => agent.id === targetAgentId);
    if (targetAgent) {
      toast.success(`Output sent to ${targetAgent.name}`, {
        description: "Agent ready to process the data",
        duration: 3000,
      });
    }
  };

  return (
    <Tabs defaultValue="all" className="mb-6" onValueChange={setCurrentTab}>
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="all">All Tools</TabsTrigger>
          <TabsTrigger value="free">Free</TabsTrigger>
          <TabsTrigger value="premium">Premium</TabsTrigger>
        </TabsList>
        
        <div className="text-sm text-muted-foreground flex items-center gap-1">
          Sort by <ChevronDown size={14} />
        </div>
      </div>
      
      <TabsContent value="all" className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {agents.map((agent) => (
          <AgentCard 
            key={agent.id} 
            agent={agent} 
            onSendOutput={handleSendOutput}
            availableAgents={agents}
          />
        ))}
      </TabsContent>
      
      <TabsContent value="free" className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {agents
          .filter(agent => agent.status === 'free')
          .map((agent) => (
            <AgentCard 
              key={agent.id} 
              agent={agent} 
              onSendOutput={handleSendOutput}
              availableAgents={agents}
            />
          ))}
      </TabsContent>
      
      <TabsContent value="premium" className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {agents
          .filter(agent => agent.status === 'premium')
          .map((agent) => (
            <AgentCard 
              key={agent.id} 
              agent={agent} 
              onSendOutput={handleSendOutput}
              availableAgents={agents}
            />
          ))}
      </TabsContent>
    </Tabs>
  );
};

export default AgentGrid;
