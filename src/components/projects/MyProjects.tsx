import React, {useState } from "react";
import Navbar from "../navbar/Navbar";
import styled from "styled-components";
import projectsData from "../../data.json";
import ProjectCard, { ProjectProps } from "./ProjectCard";
import { motion } from "framer-motion";

const MyProjects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleCheckboxChange = (tag: string) => {
    setSelectedFilter(tag === selectedFilter ? "" : tag);
  };

  const filteredProjects = projectsData.filter((project) =>
    selectedFilter === "" ? true : project.tags.includes(selectedFilter)
  );

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Navbar />
      <ProjectsMainContainer>
        <div className="filterProjects_wrapper">
          <div className="inputsDivider">
            <input
              type="checkbox"
              id="react"
              onChange={() => handleCheckboxChange("React")}
              checked={selectedFilter === "React"}
            />
            <label htmlFor="react">React</label>
          </div>
          <div className="inputsDivider">
            <input
              type="checkbox"
              id="javascript"
              onChange={() => handleCheckboxChange("Javascript")}
              checked={selectedFilter === "Javascript"}
            />
            <label htmlFor="javascript">Javascript</label>
          </div>
          <div className="inputsDivider">
            <input
              type="checkbox"
              id="typescript"
              onChange={() => handleCheckboxChange("Typescript")}
              checked={selectedFilter === "Typescript"}
            />
            <label htmlFor="typescript">Typescript</label>
          </div>
          <div className="inputsDivider">
            <input
              type="checkbox"
              id="tailwind"
              onChange={() => handleCheckboxChange("Tailwind")}
              checked={selectedFilter === "Tailwind"}
            />
            <label htmlFor="tailwind">Tailwind CSS</label>
          </div>
          <div className="inputsDivider">
            <input
              type="checkbox"
              id="styled"
              onChange={() => handleCheckboxChange("styled")}
              checked={selectedFilter === "styled"}
            />
            <label htmlFor="styled">Styled Components</label>
          </div>
          <div className="inputsDivider">
            <input
              type="checkbox"
              id="apirest"
              onChange={() => handleCheckboxChange("RestAPI")}
              checked={selectedFilter === "RestAPI"}
            />
            <label htmlFor="apirest">Rest API</label>
          </div>
        </div>
        <div className="filterProjects_Data">
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
    </motion.div>
  );
};

export default MyProjects;

const ProjectsMainContainer = styled.div`
  color: #fff;
  margin: 5% 5%;
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
  .filterProjects_wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 25%;
    height: 100vh;
    color: rgb(0, 158, 102);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    @media screen and (max-width: 800px) {
      flex-direction: row;
      flex-wrap: wrap;
      height: fit-content;
      align-items: center;
      justify-content: center;
      padding-bottom: 15px;
    }
  }
  .filterProjects_Data {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
    flex-wrap: wrap;
    @media screen and (max-width: 800px) {
      justify-content: center;
    }
  }
  .inputsDivider {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;
