// src/pages/projects/goomza-chatbot.tsx
import React from "react";
import ModernProjectPage, { ProjectData } from "@/components/common/projectDescription";
import { Bot, MessagesSquare, Sparkles, Share2 } from "lucide-react";

const goomzaChatbotData: ProjectData = {
  projectName: "Goomza Chatbot",
  tagline: "A versatile chatbot platform with conversation building and multi-channel support.",
  heroImageSrc: "/projects/goomza.png",

  overviewTitle: "Smarter Conversations, Simplified",
  overviewDescription:
    "Goomza Chatbot is a conversational system that allows users to build, host, and manage AI-powered chatbots. It features a drag-and-drop conversation builder, supports multiple messaging channels, and includes real-time takeover for human-to-bot transitions.",
  overviewPoints: [
    { icon: <Bot className="w-6 h-6 text-pink-400" />, text: "AI-powered chatbot builder" },
    { icon: <MessagesSquare className="w-6 h-6 text-purple-400" />, text: "Drag-and-drop story creation" },
    { icon: <Share2 className="w-6 h-6 text-green-400" />, text: "Multi-channel integration (e.g., WhatsApp)" },
  ],
  overviewImageSrc: "/projects/goomzaOverview.png",

  featuresTitle: "Platform Features",
  features: [
    {
      icon: <MessagesSquare className="w-6 h-6" />,
      title: "Conversation Builder",
      description: "Design chatbot conversations easily with a visual editor.",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Channel Management",
      description: "Connect chatbots to WhatsApp, web, or other channels seamlessly.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Human Takeover",
      description: "Switch from bot to human mode in real-time for better support.",
    },
  ],

  ctaTitle: "Build Your Own Chatbot",
  ctaDescription:
    "Experience how Goomza Chatbot simplifies AI-powered conversations and channel management.",
  ctaButtonText: "Explore Goomza",
  ctaButtonLink: "https://your-goomza-chatbot-demo-link.com",
};

const GoomzaChatbot: React.FC = () => {
  return <ModernProjectPage data={goomzaChatbotData} />;
};

export default GoomzaChatbot;
