// src/pages/projects/quantum-chat.tsx
import React from "react";
import ModernProjectPage, { ProjectData } from "@/components/common/projectDescription";
import { Lock, MessagesSquare, ShieldCheck, Sparkles } from "lucide-react";

const quantumChatData: ProjectData = {
  projectName: "Quantum-Secure Chat",
  tagline: "A messaging app with encryption designed to resist quantum computer attacks.",
  heroImageSrc: "/projects/quantumchat.png",

  overviewTitle: "Next-Gen Secure Communication",
  overviewDescription:
    "Quantum-Secure Chat is an encrypted messaging application that implements post-quantum cryptographic algorithms to secure communication. With a clean chat interface and cutting-edge security, it ensures that messages remain private even in the era of quantum computing.",
  overviewPoints: [
    { icon: <Lock className="w-6 h-6 text-pink-400" />, text: "Quantum-resistant encryption" },
    { icon: <MessagesSquare className="w-6 h-6 text-purple-400" />, text: "Real-time secure messaging" },
    { icon: <ShieldCheck className="w-6 h-6 text-green-400" />, text: "Future-proof communication" },
  ],
  overviewImageSrc: "/projects/quantumchatOverview.png",

  featuresTitle: "Security Features",
  features: [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Post-Quantum Cryptography",
      description: "Implements lattice-based encryption algorithms resistant to quantum attacks.",
    },
    {
      icon: <MessagesSquare className="w-6 h-6" />,
      title: "Private Messaging",
      description: "End-to-end encrypted conversations with no third-party access.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "User-Friendly UI",
      description: "A modern, intuitive chat interface combined with enterprise-grade security.",
    },
  ],

  ctaTitle: "Chat Without Fear of the Future",
  ctaDescription:
    "Experience messaging secured with post-quantum encryption and stay ahead of future threats.",
  ctaButtonText: "Try Quantum Chat",
  ctaButtonLink: "https://your-quantum-chat-demo-link.com",
};

const QuantumChat: React.FC = () => {
  return <ModernProjectPage data={quantumChatData} />;
};

export default QuantumChat;
