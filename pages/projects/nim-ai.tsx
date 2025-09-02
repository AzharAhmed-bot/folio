// src/pages/projects/nim-ai.tsx
import React from "react";
import ModernProjectPage, { ProjectData } from "@/components/common/projectDescription";
import { Gamepad2, Brain, Sparkles, Activity } from "lucide-react";

const nimAIData: ProjectData = {
  projectName: "NIM AI Agent",
  tagline: "A reinforcement learning agent that masters the ancient game of Nim.",
  heroImageSrc: "/projects/nim.png",

  overviewTitle: "Classic Strategy Meets Machine Learning",
  overviewDescription:
    "The Nim AI Agent is a project where reinforcement learning techniques are applied to train an AI to play the mathematical game of Nim. The AI learns optimal strategies through self-play, adapting over time to become a challenging opponent.",
  overviewPoints: [
    { icon: <Brain className="w-6 h-6 text-purple-400" />, text: "Trained with reinforcement learning" },
    { icon: <Gamepad2 className="w-6 h-6 text-pink-400" />, text: "Playable against humans" },
    { icon: <Activity className="w-6 h-6 text-green-400" />, text: "Dynamic strategy adjustment" },
  ],
  overviewImageSrc: "/projects/nimOverview.png",

  featuresTitle: "Why It's Interesting",
  features: [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Reinforcement Learning",
      description: "The AI uses Q-learning to develop winning strategies over time.",
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Human vs AI Mode",
      description: "Challenge the trained agent and test your strategic thinking.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Progressive Improvement",
      description: "The AI gets stronger as it plays more games, continuously refining its tactics.",
    },
  ],

  ctaTitle: "Ready to Test Your Wits?",
  ctaDescription:
    "Play against the Nim AI Agent and see if you can outsmart a reinforcement learning model.",
  ctaButtonText: "Play Nim AI",
  ctaButtonLink: "https://your-nim-ai-demo-link.com",
};

const NimAI: React.FC = () => {
  return <ModernProjectPage data={nimAIData} />;
};

export default NimAI;
