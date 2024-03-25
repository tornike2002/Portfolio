import Navbar from "../navbar/Navbar";
import styled from "styled-components";
import Lottie from "lottie-react";
import AnimationData from "../../assets/animations/aboutAnimation.json";

const AboutPage: React.FC = () => {
  return (
    <AboutMainContainer>
      <Navbar />
      <div className="aboutTitle">
        <h3>Get to know me</h3>
        <h1>About Me</h1>
        <hr />
      </div>
      <div className="AboutMeWrapper">
        <div className="aboutMeAnimation">
          <LottieContainer>
            <Lottie animationData={AnimationData} />
          </LottieContainer>
        </div>
      </div>
    </AboutMainContainer>
  );
};

export default AboutPage;

const AboutMainContainer = styled.div`
  background: #101010;
 
  font-family: "Poppins", sans-serif;

  .aboutTitle {
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    margin-top: 40px;

    h3 {
      color: #9f9f9f;
      font-size: 15px;
      font-weight: 300;
    }

    h1 {
      font-size: 46px;
      color: #f0f0f0;
    }

    hr {
      border: 3px solid #009e66;
      width: 75px;
    }
  }

  .AboutMeWrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const LottieContainer = styled.div`
  width: 383px;
  height: 440px; 
`;
