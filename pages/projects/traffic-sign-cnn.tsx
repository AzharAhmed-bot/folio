// src/pages/projects/traffic-sign-cnn.tsx
import React from "react";
import ModernProjectPage, { ProjectData } from "@/components/common/projectDescription";
import { TrafficCone, Brain, Scan, Sparkles } from "lucide-react";

const trafficSignCNNData: ProjectData = {
  projectName: "Traffic Sign CNN Model",
  tagline: "A deep learning model that classifies traffic signs with high accuracy.",
  heroImageSrc: "/projects/trafficsign.png",

  overviewTitle: "Safer Roads With AI",
  overviewDescription:
    "The Traffic Sign CNN Model uses convolutional neural networks to classify and recognize different types of traffic signs. This project demonstrates how computer vision and deep learning can support driver assistance systems and autonomous vehicles.",
  overviewPoints: [
    { icon: <TrafficCone className="w-6 h-6 text-pink-400" />, text: "Recognizes multiple traffic signs" },
    { icon: <Brain className="w-6 h-6 text-purple-400" />, text: "Built with Convolutional Neural Networks" },
    { icon: <Scan className="w-6 h-6 text-green-400" />, text: "High accuracy classification" },
  ],
  overviewImageSrc: "/projects/trafficsignOverview.png",

  featuresTitle: "Highlights",
  features: [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Deep Learning",
      description: "Trained on a dataset of traffic signs using CNNs for accurate recognition.",
    },
    {
      icon: <Scan className="w-6 h-6" />,
      title: "Robust Classification",
      description: "Handles variations in size, lighting, and orientation of signs.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Autonomous Driving Use-Case",
      description: "Can be integrated into driver-assist or self-driving vehicle systems.",
    },
  ],

  ctaTitle: "AI That Understands the Road",
  ctaDescription:
    "Explore how convolutional neural networks can improve road safety by recognizing traffic signs in real-time.",
  ctaButtonText: "Test the Model",
  ctaButtonLink: "https://your-traffic-sign-demo-link.com",
};

const TrafficSignCNN: React.FC = () => {
  return <ModernProjectPage data={trafficSignCNNData} />;
};

export default TrafficSignCNN;
