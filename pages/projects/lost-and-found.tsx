import React from "react";
import ModernProjectPage, {ProjectData} from "@/components/common/projectDescription";
// Import modern icons from lucide-react
import { Search, Bell, Database, ShieldCheck, Smartphone, Users,TrendingUp, Rocket, Shield } from "lucide-react";

// --- Data for the "Lost and Found System" Project ---
const lostAndFoundData: ProjectData = {
  // --- Hero Section Content ---
  projectName: "Campus Lost & Found",
  tagline: "A smart, centralized platform connecting students to their misplaced items, quickly and efficiently.",
  heroImageSrc: "/projects/lostandfound.png", 

  // --- Overview Section Content ---
  overviewTitle: "Reuniting Students With Their Belongings",
  overviewDescription: "Our Lost and Found system is a digital hub designed to streamline the process of reporting and recovering lost items on campus. Built in just three weeks using HTML, CSS, JavaScript, and Firebase, the platform has achieved a 92% success rate in matching items. It replaces outdated manual processes with a searchable, real-time database.",
  overviewImageSrc: "/projects/lostandfoundOverview.png", 
  overviewPoints: [
    { icon: <Search className="w-6 h-6 text-blue-400" />, text: "Report & Track Lost Items with Ease" },
    { icon: <Database className="w-6 h-6 text-purple-400" />, text: "Automatic Matching with Found Items" },
    { icon: <Bell className="w-6 h-6 text-green-400" />, text: "Instant Notifications for Matched Items" },
  ],
    stats: [
    { icon: <TrendingUp className="w-6 h-6 text-blue-400" />, value: "95%", label: "Project Completion" },
    { icon: <Rocket className="w-6 h-6 text-purple-400" />, value: "120+", label: "Deployments" },
    { icon: <Users className="w-6 h-6 text-green-400" />, value: "50K+", label: "Active Users" },
    { icon: <Shield className="w-6 h-6 text-yellow-400" />, value: "99.9%", label: "Uptime" },
  ],
  
  // --- Features Section Content (from your 'concepts') ---
  featuresTitle: "Technology That Powers The Platform",
  features: [
    { 
      icon: <ShieldCheck className="w-12 h-12 text-purple-400 mb-4" strokeWidth={1.5} />, 
      title: "Firebase Authentication",
      description: "Ensures that all user accounts are secure and identities are verified, creating a trusted environment for the community.",
    },
    { 
      icon: <Database className="w-12 h-12 text-blue-400 mb-4" strokeWidth={1.5} />, 
      title: "Real-Time Database",
      description: "Utilizes Firebase's Firestore to enable instant updates and matching, so users are notified the moment their item is found.",
    },
    { 
      icon: <Smartphone className="w-12 h-12 text-cyan-400 mb-4" strokeWidth={1.5} />, 
      title: "Responsive & Accessible UI",
      description: "The user interface is optimized for both mobile and desktop devices, ensuring students can report items anytime, anywhere.",
    },
  ],

  // --- Call to Action Section Content ---
  ctaTitle: "Ready to See It in Action?",
  ctaDescription: "Explore the live project or dive into the source code to see how it all comes together.",
  ctaButtonText: "View Project",
  ctaButtonLink: "https://www.youtube.com/watch?v=_YhGk8Pb6sY", 
};


// --- The Page Component ---
export default function LostFound() {
  return (
    <main>
      <ModernProjectPage data={lostAndFoundData} />
    </main>
  );
}