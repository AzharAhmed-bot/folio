// src/pages/projects/number-plate-detector.tsx
import React from "react";
import ModernProjectPage, { ProjectData } from "@/components/common/projectDescription";
import { Car, Camera, Scan, Sparkles } from "lucide-react";

const numberPlateDetectorData: ProjectData = {
  projectName: "Russian Number Plate Detector",
  tagline: "A computer vision system that detects and recognizes vehicle number plates.",
  heroImageSrc: "/projects/plate.png",

  overviewTitle: "Smart Vehicle Identification",
  overviewDescription:
    "The Russian Number Plate Detector uses computer vision techniques to automatically detect and recognize car license plates from images or video streams. It combines object detection with OCR (Optical Character Recognition) to extract readable text from plates, making it useful for traffic monitoring, security, and automation.",
  overviewPoints: [
    { icon: <Car className="w-6 h-6 text-pink-400" />, text: "Detects vehicles and number plates" },
    { icon: <Camera className="w-6 h-6 text-purple-400" />, text: "Processes images & video feeds" },
    { icon: <Scan className="w-6 h-6 text-green-400" />, text: "OCR extracts plate numbers" },
  ],
  overviewImageSrc: "/projects/plateOverview.png",

  featuresTitle: "Core Features",
  features: [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Automatic Detection",
      description: "Uses deep learning models to locate license plates in various conditions.",
    },
    {
      icon: <Scan className="w-6 h-6" />,
      title: "Optical Character Recognition",
      description: "Reads and extracts alphanumeric characters from detected plates.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Practical Applications",
      description: "Useful for traffic control, parking systems, and law enforcement tools.",
    },
  ],

  ctaTitle: "From Pixels to Plate Numbers",
  ctaDescription:
    "See how computer vision and OCR combine to make vehicles instantly identifiable.",
  ctaButtonText: "View Demo",
  ctaButtonLink: "https://your-number-plate-demo-link.com",
};

const NumberPlateDetector: React.FC = () => {
  return <ModernProjectPage data={numberPlateDetectorData} />;
};

export default NumberPlateDetector;
