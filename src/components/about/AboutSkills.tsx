import styled from "styled-components";
const AboutSkills: React.FC = () => {
  return (
    <SkillsMainContainer>
      <div>
        <div className="techstack_card">
          <h1>Tech stack</h1>
          <ol className="techstack_container">
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
    li:hover{
        color: #3f3;
    }
  }
  .techstack_card h1{
    color: #eee;
    font-weight: 500;
    font-size: 21px;
    text-align: center;
  }
`;
