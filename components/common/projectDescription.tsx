import React from "react";
import { ArrowRight } from "lucide-react";

interface OverviewPoint {
  icon: React.ReactNode;
  text: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}
interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export interface ProjectData {
  projectName: string;
  tagline: string;
  heroImageSrc: string;
  overviewTitle: string;
  overviewDescription: string;
  overviewPoints: OverviewPoint[];
  overviewImageSrc: string;
  featuresTitle: string;
  features: Feature[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  stats?: StatItem[];
}

interface ModernProjectPageProps {
  data: ProjectData;
}

const ModernProjectPage: React.FC<ModernProjectPageProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center p-6 md:p-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={data.heroImageSrc}
            alt={`${data.projectName} background`}
            className="w-full h-full object-cover scale-105 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
            {data.projectName}
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
            {data.tagline}
          </p>
          <a
            href="#overview"
            className="mt-8 inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Discover More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {data.overviewTitle}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {data.overviewDescription}
            </p>
            <ul className="space-y-3 text-lg text-gray-300">
              {data.overviewPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  {point.icon}
                  {point.text}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Image */}
          <div className="relative group">
            <img
              src={data.overviewImageSrc}
              alt={`${data.projectName} overview`}
              className="rounded-2xl shadow-xl transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>

      {/* Statistics Section (Dynamic) */}
        {data.stats && data.stats.length > 0 && (
        <section className="py-12 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {data.stats.map((stat, index) => (
                <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 rounded-2xl p-2 shadow-lg hover:scale-105 transition-transform duration-300"
                >
                <div className="w-8 h-8 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 mb-4">
                    {stat.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{stat.value}</h3>
                <p className="text-gray-400 mt-2">{stat.label}</p>
                </div>
            ))}
            </div>
        </section>
        )}


      {/* Features Section */}
      <section className="bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400">
            {data.featuresTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 hover:border-purple-500 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:scale-105 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernProjectPage;
