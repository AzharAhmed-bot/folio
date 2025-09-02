// src/pages/projects/pen-tracer.tsx
import React from "react";
import ModernProjectPage, { ProjectData } from "@/components/common/projectDescription";
import { Pencil, Eye, Sparkles, Activity } from "lucide-react";

const penTracerData: ProjectData = {
  projectName: "Pen Tracer",
  tagline: "A computer vision project that tracks pen movements in real-time.",
  heroImageSrc: "/projects/penOverview.png",

  overviewTitle: "Turning Cameras Into Drawing Tools",
  overviewDescription:
    "The Pen Tracer project uses computer vision techniques to track a pen’s position from a live camera feed. By detecting and following the pen tip, the system allows real-time tracing of movements for applications in digital drawing, gesture control, or handwriting recognition.",
  overviewPoints: [
    { icon: <Pencil className="w-6 h-6 text-pink-400" />, text: "Tracks pen tip accurately" },
    { icon: <Eye className="w-6 h-6 text-purple-400" />, text: "Real-time computer vision processing" },
    { icon: <Activity className="w-6 h-6 text-green-400" />, text: "Useful for drawing & gesture input" },
  ],
  overviewImageSrc: "/projects/penOverview.png",

  featuresTitle: "Key Features",
  features: [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Real-time Tracking",
      description: "Continuously tracks the pen tip using OpenCV for smooth interaction.",
    },
    {
      icon: <Pencil className="w-6 h-6" />,
      title: "Drawing Simulation",
      description: "Simulates drawing on a digital canvas by mapping tracked pen movements.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Extensible Design",
      description: "Can be adapted for handwriting recognition, AR interaction, or virtual whiteboards.",
    },
  ],

  ctaTitle: "Draw With Just a Pen and Camera",
  ctaDescription:
    "Experience how computer vision transforms a simple pen into a digital input tool.",
  ctaButtonText: "See It in Action",
  ctaButtonLink: "https://your-pen-tracer-demo-link.com",
};

const PenTracer: React.FC = () => {
  return <ModernProjectPage data={penTracerData} />;
};

export default PenTracer;
