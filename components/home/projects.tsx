import React from "react";
import { MENULINKS, PROJECT_CATEGORIES } from "../../constants";
import ProjectTile from "../common/project-tile";


const PROJECT_STYLES = {
  SECTION:
    "w-full relative select-none section-container flex-col flex py-8 justify-center",
  PROJECTS_WRAPPER:
    "tall:mt-12 mt-6 grid grid-flow-col auto-cols-max md:gap-10 gap-6 project-wrapper w-fit seq snap-x scroll-pl-6 snap-mandatory",
};

const ProjectsSection = () => {
  const { ref: projectsSectionRef } = MENULINKS[1];


  return (
    <section
      id={projectsSectionRef}
      className={PROJECT_STYLES.SECTION}
    >
      <div className="inner-container">
        <p className="section-title-sm">PROJECTS</p>
        <h1 className="section-heading mt-2">My Works</h1>
        <h2 className="text-lg md:max-w-3xl text-gray-400 mt-2">
          A collection of web apps, AI agents, computer vision models, games,
          and ML projects that I’ve built.
        </h2>
      </div>

      {PROJECT_CATEGORIES.map((category) => (
        <div key={category.category} className="flex flex-col gap-24">
          <h2 className="text-2xl font-bold flex items-center gap-12 mt-12">
            {category.icon} {category.category}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.projects.map((project) => (
              <ProjectTile
                key={project.name}
                project={project}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;
