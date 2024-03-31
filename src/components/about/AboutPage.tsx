import Navbar from "../navbar/Navbar";
import styled from "styled-components";
import Lottie from "lottie-react";
import AnimationData from "../../assets/animations/aboutAnimation.json";
import { useTypewriter } from "react-simple-typewriter";
import {
  LinkedinOutlined,
  FacebookOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import CV from "../../assets/cv/cv.pdf";
import AboutSkills from "./AboutSkills";
import { SmallCardProps } from "./AboutSmallcard";
const AboutPage: React.FC<SmallCardProps> = () => {
  const [AboutTitle] = useTypewriter({
    words: ["I'm Tornike Butiashvili, React Developer"],
    loop: 1,
    typeSpeed: 10,
  });
  const [AboutParagraph] = useTypewriter({
    words: [
      `I've been working with React for over two years. I love building
      websites and apps that people enjoy using. With React, I focus on
      making things work smoothly and look great. I know how to manage
      data, create interactive features, and make sure everything runs
      fast. I'm always learning new stuff to stay updated with the latest
      in web development. I believe in teamwork and clear communication to
      get things done right. My goal is to be full stack developer,
      currently im trying to learn nodejs/express/mongodb.`,
    ],
    loop: 1,
    typeSpeed: 10,
  });
  const [AboutNumber] = useTypewriter({
    words: ["+995 598-78-83-00"],
    loop: 1,
    typeSpeed: 10,
  });
  const [AboutAge] = useTypewriter({
    words: ["21"],
    loop: 1,
    typeSpeed: 10,
  });
  const [AboutEmail] = useTypewriter({
    words: ["butiashvilitornike18@gmail.com"],
    loop: 1,
    typeSpeed: 10,
  });
  const [AboutFrom] = useTypewriter({
    words: ["Georgia, Rustavi"],
    loop: 1,
    typeSpeed: 10,
  });
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
          <h1>{AboutTitle}</h1>
          <p>{AboutParagraph}</p>
          <hr />
          <div className="AboutBoxContainer">
            <div className="AboutMeBox">
              <h2>
                <span>Number:</span> {AboutNumber}
              </h2>
              <h2>
                <span>age:</span> {AboutAge}
              </h2>
            </div>
            <div className="AboutMeBox">
              <h2 style={{ color: "#3dd23d" }}>
                <span>Email:</span> {AboutEmail}
              </h2>
              <h2>
                <span>From:</span> {AboutFrom}
              </h2>
            </div>
          </div>
          <AboutDownload>
            <div className="AboutDownload_Button">
              <a href={CV} download>
                DOWNLOAD CV
              </a>
            </div>
            <div className="AboutDownload_Icons">
              <a
                href="https://www.linkedin.com/in/tornike-butiashvili-4b3633226/"
                target="_blank"
              >
                <LinkedinOutlined />
              </a>
              <a href="https://www.facebook.com/Painaaaaa" target="_blank">
                <FacebookOutlined />
              </a>
              <a href="https://github.com/tornike2002" target="_blank">
                <GithubOutlined />
              </a>
            </div>
          </AboutDownload>
        </div>
      </AboutMeWrapper>
      <AboutSkills />
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
      border: 3px solid #3f3;
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
    margin-top: 70px;
    @media screen and (max-width: 800px) {
      width: 80%;
      justify-content: center;
    }
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
      height: 218px;
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
      h2 {
        color: #868484;
        font-size: 14px;
      }
      @media screen and (max-width: 1230px) {
        gap: 3px;
      }
    }
    .AboutBoxContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 1230px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 3px;
      }
    }
  }
`;
const LottieContainer = styled.div`
  width: 383px;
  height: 440px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const AboutDownload = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .AboutDownload_Button a {
    padding: 10px 8px;
    cursor: pointer;
    font-weight: 300;
    color: #3f3;
    font-family: "Poppins", sans-serif;
    background: #2f2f2f;
    border: 0;
    border-radius: 3px;
  }
  .AboutDownload_Icons {
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
  }
  .AboutDownload_Icons a {
    font-size: 18px;
    color: #3f3;
  }
`;
