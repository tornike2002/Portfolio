import styled from "styled-components";
import AboutSmallcard from "./AboutSmallcard";
import { SmallCardProps } from "./AboutSmallcard";
const AboutSkills: React.FC<SmallCardProps> = () => {
  return (
    <SkillsMainContainer>
      <div className="SkillsMainWrapper">
        <div className="techstack_card">
          <ol className="techstack_container">
            <h1>Tech stack</h1>
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
        {/* work/exp */}
        <div>
          <AboutSmallcard
            company="Legends Hub"
            title="Experience"
            present="2024 - present"
            companyAbout="Collaboration with 2 web developer, UI/UX designer , Backend Developer"
          />
        </div>
      </div>
    </SkillsMainContainer>
  );
};

export default AboutSkills;
const SkillsMainContainer = styled.div`
  min-height: 100vh;
  max-width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  .techstack_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    padding: 30px 45px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    list-style-type: none;
    li {
      font-size: 16px;
      color: #bbb;
      line-height: 1.5;
      font-weight: 400;
      transition: all 500ms ease;
      cursor: pointer;
    }
    li:hover {
      color: #3f3;
    }
    h1 {
      text-align: center;
      width: 100%;
      color: #eee;
      font-weight: 500 !important;
      font-size: 21px;
    }
  }
  .SkillsMainWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
