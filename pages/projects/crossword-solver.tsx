// src/pages/projects/crossword-solver.tsx
import React from "react";
import ModernProjectPage, { ProjectData } from "@/components/common/projectDescription";
import { Puzzle, Brain, Search, Sparkles } from "lucide-react";

const crosswordSolverData: ProjectData = {
  projectName: "Crossword Puzzle Solver",
  tagline: "An AI-powered agent that cracks crossword puzzles with logic and NLP.",
  heroImageSrc: "/projects/crossword.png",

  overviewTitle: "Wordplay Meets Artificial Intelligence",
  overviewDescription:
    "The Crossword Puzzle Solver project applies natural language processing and search algorithms to tackle challenging crossword puzzles. It analyzes clues, considers possible word fits, and narrows down answers intelligently.",
  overviewPoints: [
    { icon: <Puzzle className="w-6 h-6 text-pink-400" />, text: "Understands crossword structures" },
    { icon: <Brain className="w-6 h-6 text-purple-400" />, text: "Uses NLP for clue interpretation" },
    { icon: <Search className="w-6 h-6 text-green-400" />, text: "Efficient word search algorithms" },
  ],
  overviewImageSrc: "/projects/crosswordOverview.png",

  featuresTitle: "Why This Project Stands Out",
  features: [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Natural Language Processing",
      description: "Interprets and understands crossword clues to find meaningful solutions.",
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: "Pattern Matching",
      description: "Matches word patterns with dictionaries and context clues for accuracy.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Interactive Solver",
      description: "Users can input puzzles and watch the AI progressively solve them.",
    },
  ],

  ctaTitle: "Can the AI Beat the Puzzle?",
  ctaDescription:
    "Challenge the Crossword Solver with tricky clues and watch how it cracks the puzzle step by step.",
  ctaButtonText: "Try It Out",
  ctaButtonLink: "https://your-crossword-solver-demo-link.com",
};

const CrosswordSolver: React.FC = () => {
  return <ModernProjectPage data={crosswordSolverData} />;
};

export default CrosswordSolver;
