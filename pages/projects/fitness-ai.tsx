// src/pages/projects/fitness-ai.tsx
import React from "react";
import ModernProjectPage,{ProjectData} from "@/components/common/projectDescription";
import { Dumbbell, Brain, Activity, Sparkles, BarChart3 } from "lucide-react";

const fitnessAIData: ProjectData = {
  projectName: "Fitness AI",
  tagline: "An AI-powered personal trainer that adapts to your progress and goals.",
  heroImageSrc: "/projects/fitness.png",
  
  overviewTitle: "Your Smart Personal Trainer",
  overviewDescription:
    "Fitness AI uses machine learning to design personalized workout routines, track progress, and give real-time recommendations. Whether you want to lose weight, build muscle, or stay active, it adapts to you.",
  overviewPoints: [
    { icon: <Dumbbell className="w-6 h-6 text-indigo-400" />, text: "Adaptive workout plans" },
    { icon: <Activity className="w-6 h-6 text-green-400" />, text: "Progress tracking & analytics" },
    { icon: <Brain className="w-6 h-6 text-purple-400" />, text: "AI-driven recommendations" },
  ],
  overviewImageSrc: "/projects/fitnessOverview.png",

  stats: [
    { icon: <Dumbbell className="w-5 h-5 text-white" />, value: "500+", label: "Exercises Supported" },
    { icon: <Sparkles className="w-5 h-5 text-white" />, value: "95%", label: "Project completion" },
    { icon: <BarChart3 className="w-5 h-5 text-white" />, value: "100%", label: "Tested" },
    { icon: <Activity className="w-5 h-5 text-white" />, value: "24/7", label: "AI Guidance" },
  ],

  featuresTitle: "Powerful Features for Smarter Workouts",
  features: [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Workout Generator",
      description: "Generates tailored workout plans based on your fitness level and goals.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Progress Tracking",
      description: "Monitor your performance with detailed analytics and improvement insights.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Motivation Boost",
      description: "AI keeps you motivated with challenges and adaptive encouragement.",
    },
  ],

  ctaTitle: "Ready to Get Fit Smarter?",
  ctaDescription:
    "Join thousands already using Fitness AI to achieve their health and fitness goals with personalized guidance.",
  ctaButtonText: "Try Fitness AI",
  ctaButtonLink: "https://your-fitness-ai-demo-link.com",
};

const FitnessAI: React.FC = () => {
  return <ModernProjectPage data={fitnessAIData} />;
};

export default FitnessAI;
