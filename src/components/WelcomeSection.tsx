
import React from 'react';
import { Sparkles } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
        <Sparkles className="text-swift-purple" />
        Welcome to Swift Studio
      </h1>
      <p className="text-muted-foreground">
        Your AI toolkit for creating educational content. Use each tool individually or chain them together.
      </p>
    </div>
  );
};

export default WelcomeSection;
