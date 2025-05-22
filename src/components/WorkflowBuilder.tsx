
import React, { useState, useRef } from 'react';
import { ArrowRight, Plus, Trash2, Workflow } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AgentType } from './AgentCard';
import { Button } from '@/components/ui/button';

interface WorkflowBuilderProps {
  agents: AgentType[];
}

const WorkflowBuilder: React.FC<WorkflowBuilderProps> = ({ agents }) => {
  const [workflow, setWorkflow] = useState<string[]>([]);
  const [activeDropArea, setActiveDropArea] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragItem = useRef<{id: string, index: number | null}>({id: '', index: null});

  const handleDragStart = (agentId: string, index: number | null = null) => {
    setIsDragging(true);
    dragItem.current = {id: agentId, index};
  };

  const handleDragOver = (e: React.DragEvent, position: number) => {
    e.preventDefault();
    setActiveDropArea(position);
  };

  const handleDragLeave = () => {
    setActiveDropArea(null);
  };

  const handleDrop = (position: number) => {
    setIsDragging(false);
    setActiveDropArea(null);
    
    // If we're dropping from the workflow itself (reordering)
    if (dragItem.current.index !== null) {
      const newWorkflow = [...workflow];
      const draggedItem = newWorkflow[dragItem.current.index];
      
      // Remove from original position
      newWorkflow.splice(dragItem.current.index, 1);
      
      // Add to new position
      if (position > dragItem.current.index) {
        newWorkflow.splice(position - 1, 0, draggedItem);
      } else {
        newWorkflow.splice(position, 0, draggedItem);
      }
      
      setWorkflow(newWorkflow);
    } else {
      // If we're adding a new agent to the workflow
      const newWorkflow = [...workflow];
      newWorkflow.splice(position, 0, dragItem.current.id);
      setWorkflow(newWorkflow);
    }
    
    dragItem.current = {id: '', index: null};
  };

  const removeFromWorkflow = (index: number) => {
    const newWorkflow = [...workflow];
    newWorkflow.splice(index, 1);
    setWorkflow(newWorkflow);
  };

  // Find agent by ID
  const getAgentById = (id: string) => {
    return agents.find(agent => agent.id === id);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setActiveDropArea(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 border rounded-xl p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Workflow className="text-swift-blue" size={20} />
          Workflow Builder
        </h2>
        <p className="text-sm text-muted-foreground">
          Drag and drop agents to create a workflow. The output of each agent will be passed to the next one.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {/* First drop area */}
        <div
          className={cn(
            "agent-drop-area",
            activeDropArea === 0 && "active",
            workflow.length === 0 && "h-32 flex items-center justify-center"
          )}
          onDragOver={(e) => handleDragOver(e, 0)}
          onDragLeave={handleDragLeave}
          onDrop={() => handleDrop(0)}
        >
          {workflow.length === 0 ? (
            <div className="text-muted-foreground">
              <p className="font-medium">Start your workflow here</p>
              <p className="text-sm">Drag an agent to begin</p>
            </div>
          ) : (
            <div className="h-2"></div>
          )}
        </div>

        {/* Workflow items */}
        {workflow.map((agentId, index) => {
          const agent = getAgentById(agentId);
          if (!agent) return null;
          
          return (
            <React.Fragment key={index}>
              <div className="flex items-center">
                <div
                  className="flex-1 p-3 bg-white dark:bg-gray-800 rounded-lg border shadow-sm flex items-center gap-3"
                  draggable
                  onDragStart={() => handleDragStart(agentId, index)}
                  onDragEnd={handleDragEnd}
                >
                  <div className={cn("w-8 h-8 rounded flex items-center justify-center", `bg-swift-${agent.color}/20`)}>
                    {agent.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{agent.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{agent.description}</p>
                  </div>
                  <Button
                    variant="ghost" 
                    size="sm"
                    onClick={() => removeFromWorkflow(index)}
                  >
                    <Trash2 size={16} className="text-swift-red" />
                  </Button>
                </div>
                
                {index < workflow.length - 1 && (
                  <div className="mx-4">
                    <ArrowRight className="text-muted-foreground" />
                  </div>
                )}
              </div>
              
              {/* Drop area between workflow items */}
              <div
                className={cn(
                  "agent-drop-area",
                  activeDropArea === index + 1 && "active"
                )}
                onDragOver={(e) => handleDragOver(e, index + 1)}
                onDragLeave={handleDragLeave}
                onDrop={() => handleDrop(index + 1)}
              >
                <div className="h-2"></div>
              </div>
            </React.Fragment>
          );
        })}

        {workflow.length > 0 && (
          <div className="mt-3 flex justify-center">
            <Button variant="outline">
              <Plus size={16} className="mr-1" />
              Run Workflow
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkflowBuilder;
