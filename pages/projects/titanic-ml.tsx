// src/pages/projects/titanic-ml.tsx
import React from "react";
import ModernProjectPage, { ProjectData } from "@/components/common/projectDescription";
import { Users, Brain, BarChart3, Sparkles } from "lucide-react";

const titanicMLData: ProjectData = {
  projectName: "Titanic Survival Prediction",
  tagline: "A machine learning model that predicts passenger survival on the Titanic.",
  heroImageSrc: "/projects/titanic.png",

  overviewTitle: "Predicting Survival with Data",
  overviewDescription:
    "This project applies machine learning to the Titanic dataset to predict which passengers survived the tragedy. By analyzing features such as age, class, fare, and family connections, the model learns survival patterns and demonstrates the power of predictive analytics.",
  overviewPoints: [
    { icon: <Users className="w-6 h-6 text-pink-400" />, text: "Uses passenger demographics & ticket info" },
    { icon: <Brain className="w-6 h-6 text-purple-400" />, text: "Trained on classical ML algorithms" },
    { icon: <BarChart3 className="w-6 h-6 text-green-400" />, text: "Evaluates features for prediction accuracy" },
  ],
  overviewImageSrc: "/projects/titanicOverview.png",

  featuresTitle: "Model Highlights",
  features: [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Feature Engineering",
      description: "Includes features like passenger class, age, gender, family size, and fare values.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Algorithms",
      description: "Trained with algorithms such as Logistic Regression, Decision Trees, and Random Forests.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Evaluation Metrics",
      description: "Model performance measured using accuracy, precision, and recall.",
    },
  ],

  ctaTitle: "Test the Predictions",
  ctaDescription:
    "Try out the Titanic ML model and see how machine learning reveals survival chances based on passenger data.",
  ctaButtonText: "Explore Model",
  ctaButtonLink: "https://your-titanic-ml-demo-link.com",
};

const TitanicML: React.FC = () => {
  return <ModernProjectPage data={titanicMLData} />;
};

export default TitanicML;
