// src/pages/projects/arcane-honor.tsx
import React from "react";
import ModernProjectPage, { ProjectData } from "@/components/common/projectDescription";
import { Sword, Gamepad2, Sparkles, Map } from "lucide-react";

const arcaneHonorData: ProjectData = {
  projectName: "Arcane Honor",
  tagline: "A story-driven Unity game blending adventure, puzzles, and emotional depth.",
  heroImageSrc: "/images/arcane-honor/hero.jpg",

  overviewTitle: "An Epic Fantasy Journey",
  overviewDescription:
    "Arcane Honor is a Unity-powered adventure game that takes players on a narrative-rich journey filled with puzzles, exploration, and emotional storytelling. Blending gameplay mechanics with cinematic cutscenes, it offers an immersive experience that keeps players engaged.",
  overviewPoints: [
    { icon: <Sword className="w-6 h-6 text-pink-400" />, text: "Narrative-driven adventure" },
    { icon: <Gamepad2 className="w-6 h-6 text-purple-400" />, text: "Built with Unity engine" },
    { icon: <Map className="w-6 h-6 text-green-400" />, text: "Exploration and puzzles" },
  ],
  overviewImageSrc: "/images/arcane-honor/overview.png",

  featuresTitle: "Game Features",
  features: [
    {
      icon: <Sword className="w-6 h-6" />,
      title: "Rich Storytelling",
      description: "A narrative woven with emotional depth, combining English and Swahili dialogue.",
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Exploration & Puzzles",
      description: "Players explore different regions, interact with NPCs, and solve contextual challenges.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Cinematic Experience",
      description: "Uses Unity Timeline, Cinemachine, and cutscenes for immersive gameplay transitions.",
    },
  ],

  ctaTitle: "Embark on the Journey",
  ctaDescription:
    "Step into the world of Arcane Honor and experience a blend of storytelling, strategy, and exploration.",
  ctaButtonText: "Play Arcane Honor",
  ctaButtonLink: "https://your-arcane-honor-demo-link.com",
};

const ArcaneHonor: React.FC = () => {
  return <ModernProjectPage data={arcaneHonorData} />;
};

export default ArcaneHonor;
