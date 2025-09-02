// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Azhar Ahmed",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",

};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop backend services",
];

export const EMAIL = "azharahmedtakoy4444@gmail.com";

export const SOCIAL_LINKS = {
  whatsapp:"https://wa.me/+254773470576",
  gmail:"mailto:azharahmedtakoy4444@gmail.com",
  github: "https://github.com/AzharAhmed-bot",

};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
  learnMoreLink:string;
}

export interface IProjectCategory {
  category: string;
  icon: string;
  projects: IProject[];
}

export const PROJECT_CATEGORIES: IProjectCategory[] = [
  {
    category: "🌐 Web Apps",
    icon: "🌐",
    projects: [
      {
        name: "Lost and Found System",
        image: "/projects/lostandfound.png",
        blurImage: "/projects/lostandfound.png",
        description:
          "An open-source lost and found application built in React and Flask.",
        gradient: ["#1F6582", "#1ABCFE"],
        url: "https://github.com/AzharAhmed-bot/strathlostandfound",
        tech: ["react", "javascript", "flask"],
        learnMoreLink:"/projects/lost-and-found"
      },
      {
        name: "Fitness AI App",
        image: "/projects/fitness.png",
        blurImage: "/projects/fitness.png",
        description:
          "AI-powered fitness app with agentic AI for workouts & meals + voice AI for human-like conversations.",
        gradient: ["#5C258D", "#4389A2"],
        url: "#",
        tech: ["react", "typescript", "ai"],
        learnMoreLink:"/projects/fitness-ai"
      },
      {
        name: "Goomza Chatbot",
        image: "/projects/goomza.png",
        blurImage: "/projects/goomza.png",
        description:
          "LMS chatbot system with conversation builder and multi-channel management.",
        gradient: ["#153BB9", "#0E2C8B"],
        url: "#",
        tech: ["node", "chatbot", "whatsapp-api"],
        learnMoreLink:"/projects/goomza-chatbot"
      },
      {
        name: "Quantum-Secure Chat",
        image: "/projects/quantumchat.png",
        blurImage: "/projects/quantumchat.png",
        description:
          "Chat app with messages encrypted against quantum computers.",
        gradient: ["#3A0000", "#771E1E"],
        url: "#",
        tech: ["react", "encryption", "security"],
        learnMoreLink:"/projects/quantum-chat"
      },
    ],
  },
  {
    category: "🤖 Agents",
    icon: "🤖",
    projects: [
      {
        name: "TicTacToe AI",
        image: "/projects/tictactoe.png",
        blurImage: "/projects/tictactoe.png",
        description: "Unbeatable TicTacToe agent using Minimax algorithm.",
        gradient: ["#0F2027", "#2C5364"],
        url: "#",
        tech: ["ai", "javascript"],
        learnMoreLink:"/projects/tic-tac-toe"
      },
      {
        name: "NIM AI Agent",
        image: "/projects/nim.png",
        blurImage: "/projects/nim.png",
        description: "NIM game agent trained using reinforcement learning.",
        gradient: ["#2b5876", "#4e4376"],
        url: "#",
        tech: ["python", "reinforcement-learning"],
        learnMoreLink:"/projects/nim-ai"
      },
      {
        name: "Crossword Puzzle Solver",
        image: "/projects/crossword.png",
        blurImage: "/projects/crossword.png",
        description: "AI crossword solver using search algorithms.",
        gradient: ["#FF416C", "#FF4B2B"],
        url: "#",
        tech: ["python", "ai"],
        learnMoreLink:"/projects/crossword-solver"
      },
    ],
  },
  {
    category: "👁️ Computer Vision",
    icon: "👁️",
    projects: [
      {
        name: "Pen Tracer",
        image: "/projects/penOverview.png",
        blurImage: "/projects/penOverview.png",
        description: "Track and trace a pen in real-time using a camera.",
        gradient: ["#56CCF2", "#2F80ED"],
        url: "#",
        tech: ["opencv", "python"],
        learnMoreLink:"/projects/pen-tracer"
      },
      {
        name: "Russian License Plate Detector",
        image: "/projects/plate.png",
        blurImage: "/projects/plate.png",
        description: "Detects Russian car number plates using computer vision.",
        gradient: ["#1CB5E0", "#000851"],
        url: "#",
        tech: ["opencv", "yolo", "python"],
        learnMoreLink:"/projects/number-plate-detector"
      },
      {
        name: "Traffic Sign Classifier",
        image: "/projects/trafficsign.png",
        blurImage: "/projects/trafficsign.png",
        description:
          "CNN trained on 43 classes to classify traffic signs accurately.",
        gradient: ["#FF9966", "#FF5E62"],
        url: "#",
        tech: ["tensorflow", "python"],
        learnMoreLink:"/projects/traffic-sign-cnn"
      },
    ],
  },
  // {
  //   category: "🎮 Games",
  //   icon: "🎮",
  //   projects: [
  //     {
  //       name: "ArcaneHonor",
  //       image: "/projects/arcane.png",
  //       blurImage: "/projects/arcane.png",
  //       description: "A Unity game mixing Swahili & English narrative design.",
  //       gradient: ["#C33764", "#1D2671"],
  //       url: "#",
  //       tech: ["unity", "csharp"],
  //       learnMoreLink:"/projects/lostandfound"
  //     },
  //   ],
  // },
  {
    category: "📊 Machine Learning",
    icon: "📊",
    projects: [
      {
        name: "Titanic Survival Prediction",
        image: "/projects/titanic.png",
        blurImage: "/projects/titanic.png",
        description:
          "Predict survival on the Titanic using classic ML features and models.",
        gradient: ["#43C6AC", "#191654"],
        url: "#",
        tech: ["pandas", "sklearn", "ml"],
        learnMoreLink:"/projects/titanic-ml"
      },
    ],
  },
];


export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "angular",
    "tailwind",
    "html",
    "css",
  ],
  backend:["flask","fastapi","postgresql","sqlite"],
  userInterface: ["figma", "wordpress"],
  other: ["git","java","ai"]
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023 ",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Speaker at React India",
    size: ItemSize.SMALL,
    subtitle:
      "Discussed on Interaction to Next Paint (INP), a Google Core Web Vital metric",
    image: "/timeline/reactindia.svg",
    slideImage: "/timeline/reactindia.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Engineer 2 (Current)",
    size: ItemSize.SMALL,
    subtitle:
      "Frontend Engineering @ Core team, solving problems around Livingroom device performance",
    image: "/timeline/hotstar.svg",
    slideImage: "/timeline/hotstar.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Contributed to Server driven UI framework for powering experiences @ Flipkart Wholesale 😎",
    image: "/timeline/flipkart.svg",
    slideImage: "/timeline/flipkart.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer (freelance)",
    size: ItemSize.SMALL,
    subtitle:
      "Built solutions for employee engagement, productivity and performance 🎯",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-freelance.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Motion Graphics (freelance)",
    size: ItemSize.SMALL,
    subtitle: "Motion Graphics content for Product Launch 🚀",
    image: "/timeline/octanner.svg",
    slideImage: "/timeline/aftereffects.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    image: "/timeline/dltlabs.svg",
    slideImage: "/timeline/dlt-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UX Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from College 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
    image: "/timeline/akgec.svg",
    slideImage: "/timeline/farewell.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Student lead at SDC-SI",
    size: ItemSize.SMALL,
    subtitle:
      "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-head.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on SVG animations",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

    slideImage: "/timeline/svg-lecture.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle:
      "Competed against 20+ teams for design and development of web project from scratch",
    slideImage: "/timeline/ims-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Javascript",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
    slideImage: "/timeline/js-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Design, ABES ACM",
    size: ItemSize.SMALL,
    subtitle:
      "Competed in web and graphic design challenge with 100+ participants.",
    slideImage: "/timeline/abes-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Web Technologies",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
    slideImage: "/timeline/web-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/timeline/ims-16.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX, Frontend Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-start.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2014",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Recognized Themer",
    size: ItemSize.SMALL,
    subtitle:
      "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
    image: "/timeline/xda.svg",
    slideImage: "/timeline/xda-rt.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
