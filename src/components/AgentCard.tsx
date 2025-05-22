
import React, { useState } from 'react';
import { Check, ChevronDown, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export type AgentType = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  status: 'free' | 'premium' | 'beta';
  inputType: 'text' | 'image' | 'file' | 'choice' | 'mixed';
  example: {
    input: string;
    output: React.ReactNode;
  };
};

interface AgentCardProps {
  agent: AgentType;
  onSendOutput?: (agentId: string, output: any) => void;
  availableAgents: AgentType[];
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, onSendOutput, availableAgents }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<React.ReactNode | null>(null);
  const [showExample, setShowExample] = useState(false);

  const handleRunAgent = () => {
    setIsRunning(true);
    
    // Simulate agent processing
    setTimeout(() => {
      setOutput(agent.example.output);
      setIsRunning(false);
    }, 1500);
  };

  const handleUseExample = () => {
    setInput(agent.example.input);
    setShowExample(false);
  };

  const statusBadge = {
    free: <span className="swift-badge swift-badge-free">Free</span>,
    premium: <span className="swift-badge swift-badge-premium">Premium</span>,
    beta: <span className="swift-badge swift-badge-beta">Beta</span>
  };

  return (
    <div className="swift-card group">
      <div className={cn("swift-card-header", `bg-swift-${agent.color}/10`)}>
        <div className={cn("swift-icon-wrapper", `bg-swift-${agent.color}/20`)}>
          {agent.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">{agent.name}</h3>
            {statusBadge[agent.status]}
          </div>
          <p className="text-sm text-muted-foreground">{agent.description}</p>
        </div>
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => setShowExample(!showExample)}
              >
                {showExample ? 'Hide' : 'See'} Example
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View an example of what this agent can do</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="swift-card-body">
        {showExample ? (
          <div className="bg-muted/30 p-3 rounded-lg border border-border animate-fade-in">
            <div className="mb-2 text-sm font-medium">Example Input:</div>
            <div className="p-2 bg-background rounded border mb-3">{agent.example.input}</div>
            <div className="mb-2 text-sm font-medium">Example Output:</div>
            <div className="p-2 bg-background rounded border">{agent.example.output}</div>
            <Button 
              size="sm" 
              variant="secondary" 
              onClick={handleUseExample}
              className="mt-2"
            >
              Use This Example
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-2">
              <label htmlFor={`${agent.id}-input`} className="text-sm font-medium">
                Input
              </label>
              {agent.inputType === 'text' && (
                <textarea 
                  id={`${agent.id}-input`}
                  className="w-full min-h-[100px] px-3 py-2 bg-background border rounded-md"
                  placeholder={`Enter text for ${agent.name}...`}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              )}
              {agent.inputType === 'image' && (
                <div className="border rounded-md p-3 bg-background flex flex-col items-center justify-center h-[100px]">
                  <Button variant="outline">Upload Image</Button>
                  <p className="text-xs mt-2 text-muted-foreground">or drag and drop</p>
                </div>
              )}
              {agent.inputType === 'choice' && (
                <div className="grid grid-cols-2 gap-2">
                  <button className="border rounded-md p-2 hover:bg-muted/50">Option 1</button>
                  <button className="border rounded-md p-2 hover:bg-muted/50">Option 2</button>
                  <button className="border rounded-md p-2 hover:bg-muted/50">Option 3</button>
                  <button className="border rounded-md p-2 hover:bg-muted/50">Option 4</button>
                </div>
              )}
              {agent.inputType === 'mixed' && (
                <div className="space-y-3">
                  <textarea 
                    className="w-full min-h-[80px] px-3 py-2 bg-background border rounded-md"
                    placeholder={`Enter text for ${agent.name}...`}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Upload File</Button>
                    <Button variant="outline" size="sm">Choose Template</Button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-end">
              <Button 
                onClick={handleRunAgent} 
                disabled={isRunning}
                className={cn(
                  "swift-button swift-button-primary", 
                  isRunning && "animate-pulse-soft"
                )}
              >
                {isRunning ? "Running..." : "Run Agent"}
              </Button>
            </div>
            
            {output && (
              <div className="animate-fade-in space-y-2 border-t pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Output</label>
                  <div className="flex gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm" className="flex gap-1 items-center">
                          <Send size={14} />
                          <span>Send To</span>
                          <ChevronDown size={14} />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-56 p-0">
                        <div className="p-2">
                          {availableAgents
                            .filter(a => a.id !== agent.id)
                            .map((targetAgent) => (
                              <button
                                key={targetAgent.id}
                                className="w-full text-left px-2 py-1.5 rounded text-sm hover:bg-muted flex items-center gap-2"
                                onClick={() => onSendOutput && onSendOutput(targetAgent.id, output)}
                              >
                                <div className={cn("w-6 h-6 rounded flex items-center justify-center", `bg-swift-${targetAgent.color}/20`)}>
                                  {targetAgent.icon}
                                </div>
                                {targetAgent.name}
                              </button>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
                    <Button variant="outline" size="sm">
                      <Check size={14} className="mr-1" /> Save
                    </Button>
                  </div>
                </div>
                <div className="p-3 bg-background rounded-md border">
                  {output}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AgentCard;
