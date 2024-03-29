import React, { Fragment, useState } from 'react';
import Navbar from "../navbar/Navbar";
import styled from "styled-components";
import projectsData from "../../data.json";
import ProjectCard, { ProjectProps } from "./ProjectCard";

const MyProjects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleCheckboxChange = (tag: string) => {
    setSelectedFilter(tag === selectedFilter ? "" : tag);
  };

  const filteredProjects = projectsData.filter((project) =>
    selectedFilter === "" ? true : project.tags.includes(selectedFilter)
  );

  return (
    <Fragment>
      <Navbar />
      <ProjectsMainContainer>
        <div className="filterProjects_wrapper">
          <div>
            <input
              type="checkbox"
              id="react"
              onChange={() => handleCheckboxChange("React")}
              checked={selectedFilter === "React"}
            />
            <label htmlFor="react">React</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="javascript"
              onChange={() => handleCheckboxChange("Javascript")}
              checked={selectedFilter === "Javascript"}
            />
            <label htmlFor="javascript">Javascript</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="typescript"
              onChange={() => handleCheckboxChange("Typescript")}
              checked={selectedFilter === "Typescript"}
            />
            <label htmlFor="typescript">Typescript</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="tailwind"
              onChange={() => handleCheckboxChange("Tailwind")}
              checked={selectedFilter === "Tailwind"}
            />
            <label htmlFor="tailwind">Tailwind CSS</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="styled"
              onChange={() => handleCheckboxChange("styled")}
              checked={selectedFilter === "styled"}
            />
            <label htmlFor="styled">Styled Components</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="apirest"
              onChange={() => handleCheckboxChange("RestAPI")}
              checked={selectedFilter === "RestAPI"}
            />
            <label htmlFor="apirest">Rest API</label>
          </div>
        </div>
        <div className="filterProjects_wrapper">
          {filteredProjects.map((data: ProjectProps) => (
            <ProjectCard
              key={data.id}
              id={data.id}
              img={data.img}
              title={data.title}
              description={data.description}
              live={data.live}
              tags={data.tags}
              github={data.github}
            />
          ))}
        </div>
      </ProjectsMainContainer>
    </Fragment>
  );
};

export default MyProjects;

const ProjectsMainContainer = styled.div`
  color: #fff;
  margin: 0 5%;

  .filterProjects_wrapper {
    display: flex;
    flex-wrap: wrap;
  }
`;
