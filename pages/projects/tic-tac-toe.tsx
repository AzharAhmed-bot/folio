// src/pages/projects/tictactoe.tsx
import React from "react";
import ModernProjectPage, { ProjectData } from "@/components/common/projectDescription";
import { Gamepad2, Brain, MousePointer, Sparkles } from "lucide-react";

const tictactoeData: ProjectData = {
  projectName: "TicTacToe AI",
  tagline: "A fun and interactive game where you can challenge an unbeatable AI.",
  heroImageSrc: "/projects/tictactoe.png",

  overviewTitle: "Classic Game, Smarter Opponent",
  overviewDescription:
    "This TicTacToe project lets users play against  an AI powered by the minimax algorithm. The AI is designed to never lose, making it both fun and challenging for players to test their strategies.",
  overviewPoints: [
    { icon: <Gamepad2 className="w-6 h-6 text-pink-400" />, text: "Two-player mode available" },
    { icon: <Brain className="w-6 h-6 text-purple-400" />, text: "Unbeatable AI using minimax" },
    { icon: <MousePointer className="w-6 h-6 text-green-400" />, text: "Simple and intuitive UI" },
  ],
  overviewImageSrc: "/projects/tictactoeOverview.png",

  featuresTitle: "What Makes It Fun?",
  features: [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Minimax AI",
      description: "The AI evaluates all possible moves and guarantees the best outcome, making it unbeatable.",
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Multiplayer Option",
      description: "Play against an AI  with smooth turn handling.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Interactive Design",
      description: "Minimal, clean design ensures you focus on the game itself.",
    },
  ],

  ctaTitle: "Think You Can Beat It?",
  ctaDescription:
    "Try out the TicTacToe AI and see if you can find a way to win against the unbeatable algorithm.",
  ctaButtonText: "Play Now",
  ctaButtonLink: "https://ai-tiktactoe.netlify.app/",
};

const TicTacToe: React.FC = () => {
  return <ModernProjectPage data={tictactoeData} />;
};

export default TicTacToe;
