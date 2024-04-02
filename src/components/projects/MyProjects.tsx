import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import styled from "styled-components";
import projectsData from "../../data.json";
import ProjectCard, { ProjectProps } from "./ProjectCard";
import { motion } from "framer-motion";

// Styled components for checkbox
const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCheckbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #3f3;
  border-radius: 3px;
  margin-right: 5px;
  cursor: pointer;

  &:checked {
    background-color: #3f3;
  }

  &:hover {
    border-color: #3f3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(63, 255, 63, 0.5);
  }
`;

const CheckboxLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #3f3;
  cursor: pointer;
`;

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, onChange }) => (
  <CheckboxWrapper>
    <StyledCheckbox
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
    />
    <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
  </CheckboxWrapper>
);

// Main component
const MyProjects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleCheckboxChange = (tag: string) => {
    setSelectedFilter(tag === selectedFilter ? "" : tag);
  };

  const filteredProjects = projectsData.filter((project) =>
    selectedFilter === "" ? true : project.tags.includes(selectedFilter)
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Navbar />
      <ProjectsMainContainer>
        <div className="filterProjects_wrapper">
          <Checkbox
            id="react"
            label="React"
            checked={selectedFilter === "React"}
            onChange={() => handleCheckboxChange("React")}
          />
          <Checkbox
            id="javascript"
            label="Javascript"
            checked={selectedFilter === "Javascript"}
            onChange={() => handleCheckboxChange("Javascript")}
          />
          <Checkbox
            id="typescript"
            label="Typescript"
            checked={selectedFilter === "Typescript"}
            onChange={() => handleCheckboxChange("Typescript")}
          />
          <Checkbox
            id="tailwind"
            label="Tailwind CSS"
            checked={selectedFilter === "Tailwind"}
            onChange={() => handleCheckboxChange("Tailwind")}
          />
          <Checkbox
            id="styled"
            label="Styled Components"
            checked={selectedFilter === "styled"}
            onChange={() => handleCheckboxChange("styled")}
          />
          <Checkbox
            id="apirest"
            label="Rest API"
            checked={selectedFilter === "RestAPI"}
            onChange={() => handleCheckboxChange("RestAPI")}
          />
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
    color: #3f3;
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
