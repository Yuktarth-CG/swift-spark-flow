
import React from 'react';
import { 
  Image, 
  FileQuestion, 
  Lightbulb, 
  GalleryHorizontalEnd, 
  Gift, 
  MessageSquareText, 
  Sparkles
} from 'lucide-react';
import { AgentType } from '@/components/AgentCard';

export const agents: AgentType[] = [
  {
    id: 'thumbgenie',
    name: 'ThumbGenie',
    description: 'Create eye-catching thumbnails for videos and presentations',
    icon: <Image size={18} className="text-swift-blue" />,
    color: 'blue',
    status: 'free',
    inputType: 'text',
    example: {
      input: 'Create a thumbnail for a video about space exploration',
      output: (
        <div className="flex flex-col items-center gap-2">
          <div className="aspect-video w-full bg-gradient-to-br from-swift-blue to-swift-purple rounded-md flex items-center justify-center">
            <div className="text-white font-bold text-center p-4">
              <div className="text-xs opacity-80">EXPLORING THE</div>
              <div className="text-xl">FINAL FRONTIER</div>
              <div className="mt-2 text-xs flex items-center justify-center gap-1">
                <Sparkles size={10} />
                <span>SPACE ODYSSEY 2025</span>
              </div>
            </div>
          </div>
          <div className="text-xs text-center text-muted-foreground mt-1">720x1280 • PNG • 245KB</div>
        </div>
      )
    }
  },
  {
    id: 'quizsmith',
    name: 'QuizSmith',
    description: 'Generate quizzes and assessments from any content',
    icon: <FileQuestion size={18} className="text-swift-purple" />,
    color: 'purple',
    status: 'premium',
    inputType: 'text',
    example: {
      input: 'Create a quiz about the solar system for 5th graders',
      output: (
        <div className="space-y-3">
          <div className="p-2 bg-swift-purple/5 rounded-md">
            <div className="font-medium">Q1: Which planet is known as the "Red Planet"?</div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="p-1.5 bg-white border rounded-md text-center text-sm">Venus</div>
              <div className="p-1.5 bg-swift-purple/10 border-2 border-swift-purple rounded-md text-center text-sm font-medium">Mars</div>
              <div className="p-1.5 bg-white border rounded-md text-center text-sm">Jupiter</div>
              <div className="p-1.5 bg-white border rounded-md text-center text-sm">Mercury</div>
            </div>
          </div>
          <div className="p-2 bg-muted/30 rounded-md">
            <div className="font-medium">Q2: Which is the largest planet in our solar system?</div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="p-1.5 bg-white border rounded-md text-center text-sm">Saturn</div>
              <div className="p-1.5 bg-white border rounded-md text-center text-sm">Neptune</div>
              <div className="p-1.5 bg-white border rounded-md text-center text-sm">Earth</div>
              <div className="p-1.5 bg-white border rounded-md text-center text-sm">Jupiter</div>
            </div>
          </div>
        </div>
      )
    }
  },
  {
    id: 'flashforge',
    name: 'FlashForge',
    description: 'Generate custom flashcards for effective studying',
    icon: <Lightbulb size={18} className="text-swift-yellow" />,
    color: 'yellow',
    status: 'free',
    inputType: 'text',
    example: {
      input: 'Create flashcards for learning Spanish greetings',
      output: (
        <div className="flex overflow-x-auto gap-3 py-1 pb-3 -mx-1 px-1">
          <div className="min-w-[160px] bg-white border rounded-md shadow-sm">
            <div className="p-3 border-b font-medium text-center">Hola</div>
            <div className="p-3 text-sm text-center">Hello</div>
          </div>
          <div className="min-w-[160px] bg-white border rounded-md shadow-sm">
            <div className="p-3 border-b font-medium text-center">Buenos días</div>
            <div className="p-3 text-sm text-center">Good morning</div>
          </div>
          <div className="min-w-[160px] bg-white border rounded-md shadow-sm">
            <div className="p-3 border-b font-medium text-center">¿Cómo estás?</div>
            <div className="p-3 text-sm text-center">How are you?</div>
          </div>
        </div>
      )
    }
  },
  {
    id: 'snapfix',
    name: 'SnapFix',
    description: 'Enhance and edit images with AI precision',
    icon: <GalleryHorizontalEnd size={18} className="text-swift-green" />,
    color: 'green',
    status: 'premium',
    inputType: 'image',
    example: {
      input: '[Image upload example]',
      output: (
        <div className="flex gap-3 items-center">
          <div className="flex-1 aspect-square bg-gray-200 rounded-md"></div>
          <div className="text-swift-green">→</div>
          <div className="flex-1 aspect-square bg-gradient-to-br from-swift-blue/30 to-swift-green/30 rounded-md flex items-center justify-center">
            <span className="text-xs text-center text-muted-foreground">Enhanced Image</span>
          </div>
        </div>
      )
    }
  },
  {
    id: 'gifgiver',
    name: 'GifGiver',
    description: 'Create animated GIFs and short video clips',
    icon: <Gift size={18} className="text-swift-pink" />,
    color: 'pink',
    status: 'beta',
    inputType: 'mixed',
    example: {
      input: 'Create a loading animation with blue circles',
      output: (
        <div className="flex justify-center p-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-swift-blue rounded-full animate-bounce-small" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-swift-blue rounded-full animate-bounce-small" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-swift-blue rounded-full animate-bounce-small" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      )
    }
  },
  {
    id: 'storyteller',
    name: 'StoryTeller',
    description: 'Generate creative stories and narrative content',
    icon: <MessageSquareText size={18} className="text-swift-orange" />,
    color: 'orange',
    status: 'free',
    inputType: 'choice',
    example: {
      input: 'Theme: Space Adventure | Audience: Children | Length: Short',
      output: (
        <div className="prose prose-sm max-w-none">
          <h3 className="text-lg font-semibold mb-2">The Little Astronaut</h3>
          <p className="text-sm">
            Once upon a time, there was a little astronaut named Zoe who dreamed of exploring the stars. 
            One night, she built a spaceship from an old cardboard box and some twinkling lights...
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            [Story continues for 250 more words...]
          </p>
        </div>
      )
    }
  },
];
