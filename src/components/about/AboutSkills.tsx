import styled from "styled-components";
const AboutSkills: React.FC = () => {
  return (
    <SkillsMainContainer>
      <div>
        <div>
          <h1>Tech stack</h1>
          <ol>
            <li>React</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Tailwind CSS</li>
            <li>Styled Components</li>
            <li>Rest API</li>
            <li>SCSS</li>
            <li>Bootstrap</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git/Github</li>
          </ol>
        </div>
      </div>
    </SkillsMainContainer>
  );
};

export default AboutSkills;
const SkillsMainContainer = styled.div`
  min-height: 100vh;
  max-width: 100%;
`;
