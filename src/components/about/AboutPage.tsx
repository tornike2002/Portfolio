import Navbar from "../navbar/Navbar";
import styled from "styled-components";

const AboutPage: React.FC = () => {
  return (
    <AboutMainContainer>
      <Navbar />
      <div className="aboutTitle">
        <h3>Get to know me</h3>
        <h1>About Me</h1>
        <hr />
      </div>
    </AboutMainContainer>
  );
};

export default AboutPage;

const AboutMainContainer = styled.div`
  background: #101010;
  min-height: 100vh;

  .aboutTitle {
    color: #fff;

    h3 {
      color: #9F9F9F;
    }
  }
`;
