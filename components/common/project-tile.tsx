import Image from "next/image";
import React from "react";
import { IProject } from "../../constants";

const ProjectTile = ({ project }: { project: IProject }) => {
  const { name, tech, image, blurImage, description, learnMoreLink } = project;

  const renderTechIcons = (techStack: string[]): React.ReactNode => (
    <div className="flex flex-wrap gap-2 mt-3">
      {techStack.map((tech) => (
        <div
          key={tech}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
        >
          <Image
            src={`/projects/tech/${tech}.svg`}
            alt={tech}
            height={24}
            width={24}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
      {/* 🔹 Initial View (just image) */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          placeholder="blur"
          blurDataURL={blurImage}
          src={image}
          alt={name}
          className="transition-transform duration-500 group-hover:scale-110"
          width={200}
          height={200}
        />
      </div>

      {/* 🔹 Hover Overlay */}
      <div className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{name}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
            {description}
          </p>
          <p className="text-sm mb-3"><strong>Stack Size:</strong> {tech.length} tools</p>
          {renderTechIcons(tech)}
        </div>

        {learnMoreLink && (
          <a
            href={learnMoreLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white border-2 rounded-lg shadow hover:opacity-90 transition"
          >
            Learn More →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectTile;
