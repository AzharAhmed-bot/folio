import styles from "./ProjectTile.module.scss";
import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { IProject } from "../../constants";

const ProjectTile = ({
  project,
  animationEnabled,
}: {
  project: IProject;
  animationEnabled: boolean;
}) => {
  const projectCard: MutableRefObject<HTMLDivElement> = useRef(null);
  const {
    name,
    tech,
    image,
    blurImage,
    description,
    gradient: [stop1, stop2],
  } = project;

  useEffect(() => {
    VanillaTilt.init(projectCard.current, {
      max: 8,
      speed: 500,
      glare: true,
      "max-glare": 0.3,
      scale: 1.05,
      gyroscope: true,
    });
  }, [projectCard]);

  const renderTechIcons = (techStack: string[]): React.ReactNode => (
    <div className={`${styles.techIcons} flex flex-wrap gap-4 mt-4`}>
      {techStack.map((tech) => (
        <div key={tech}>
          <Image
            src={`/projects/tech/${tech}.svg`}
            alt={tech}
            height={40}
            width={40}
          />
        </div>
      ))}
    </div>
  );

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl transform transition-transform duration-300 hover:scale-105"
      style={{
        maxWidth: animationEnabled
          ? "calc(100vw - 2rem)"
          : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        overflow: "hidden",
      }}
    >
      <div
        ref={projectCard}
        className={`${styles.ProjectTile} relative p-6 flex flex-col justify-between rounded-xl shadow-lg`}
        style={{
          background: `linear-gradient(135deg, ${stop1} 0%, ${stop2} 100%)`,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image
          src="/project-bg.svg"
          alt="Background"
          layout="fill"
          className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
        />
        <div className="z-10 relative">
          <h1 className="text-2xl font-bold mb-2 text-white">{name}</h1>
          <p className="text-sm text-gray-200 leading-relaxed">{description}</p>
          {renderTechIcons(tech)}
        </div>
        <Image
          placeholder="blur"
          blurDataURL={blurImage}
          src={image}
          alt={name}
          layout="fill"
          className={`${styles.ProjectImg} z-0 object-cover rounded-xl`}
        />
      </div>
    </a>
  );
};

export default ProjectTile;
