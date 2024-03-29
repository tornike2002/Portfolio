import { Fragment } from "react/jsx-runtime";
import Navbar from "../navbar/Navbar";
import styled from "styled-components";
const MyProjects: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <ProjectsMainContainer>
        <div className="filterProjects_wrapper">
          <div>
            <input type="checkbox" id="react" />
            <label htmlFor="react">React</label>
          </div>
          <div>
            <input type="checkbox" id="javascr" />
            <label htmlFor="javascr">Javascript</label>
          </div>
          <div>
            <input type="checkbox" id="typescr" />
            <label htmlFor="typescr">Typescript</label>
          </div>
          <div>
            <input type="checkbox" id="wind" />
            <label htmlFor="wind">Tailwind CSS</label>
          </div>
          <div>
            <input type="checkbox" id="styledcomp" />
            <label htmlFor="styledcomp">Styled Components</label>
          </div>
          <div>
            <input type="checkbox" id="apirest" />
            <label htmlFor="apirest">Rest API</label>
          </div>
        </div>
      </ProjectsMainContainer>
    </Fragment>
  );
};

export default MyProjects;
const ProjectsMainContainer = styled.div`
  color: #fff;
  margin: 0 5%;
`;
