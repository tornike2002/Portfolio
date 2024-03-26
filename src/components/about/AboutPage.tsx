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
      <AboutMeWrapper>
        <LottieContainer>
          <Lottie animationData={AnimationData} />
        </LottieContainer>
        <div className="aboutMeStyles">
          <h1>I'm Tornike Butiashvili, React Developer</h1>
          <p>
            I've been working with React for over two years. I love building
            websites and apps that people enjoy using. With React, I focus on
            making things work smoothly and look great. I know how to manage
            data, create interactive features, and make sure everything runs
            fast. I'm always learning new stuff to stay updated with the latest
            in web development. I believe in teamwork and clear communication to
            get things done right. My goal is to be full stack developer,
            currently im trying to learn nodejs/express/mongodb.
          </p>
          <hr />
          <div className="AboutBoxContainer">
            <div className="AboutMeBox">
              <h2>
                <span>Number:</span> +995 598-78-83-00
              </h2>
              <h2>
                <span>age:</span> 21
              </h2>
            </div>
            <div className="AboutMeBox">
              <h2 style={{color: "#009e66"}}>
                <span>Email:</span> butiashvilitornike18@gmail.com
              </h2>
              <h2>
                <span>From:</span> Georgia, Rustavi
              </h2>
            </div>
          </div>
        </div>
      </AboutMeWrapper>
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
`;

const AboutMeWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 80px;
  font-family: "Poppins", sans-serif;
  .aboutMeStyles {
    color: #fff;
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-family: "Poppins", sans-serif;
    h1 {
      font-size: 31px;
      font-weight: 700;
      line-height: 1.6;
      padding-bottom: 16px;
    }
    p {
      font-size: 14px;
      color: #9f9f9f;
      font-weight: 400;
      line-height: 1.95;
    }
    .AboutMeBox {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      font-family: "Poppins", sans-serif;
      span {
        color: #dadada;
        font-weight: 400;
        font-size: 14px;
      }
      h2{
        color: #868484;
        font-size: 14px;
      }
    }
    .AboutBoxContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
const LottieContainer = styled.div`
  width: 383px;
  height: 440px;
`;
