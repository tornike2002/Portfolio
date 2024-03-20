import styled from "styled-components";
import { FooterH } from "../styles/FooterStyles";
import {
  FacebookOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="footerInfo-wrapper">
        <div className="footerInfo-dissepiar">
          <FooterH>E: butiashvilitornike18@gmail.com</FooterH>
          <FooterH>T: +995 598-78-83-00</FooterH>
        </div>
        <div>
          <p className="footer-about">
            Hello, I’m <span>Tornike Butiashvili</span>,<br /> Front-end
            Developer Based in Georgia.
          </p>
        </div>
      </div>
      <IconsWrapper>
        <div className="footerIcons-wrapper">
          <a href="https://www.facebook.com/Painaaaaa" target="_blank">
            <FacebookOutlined style={{ color: "#bbb" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/tornike-butiashvili-4b3633226/"
            target="_blank"
          >
            <LinkedinOutlined style={{ color: "#bbb" }} />
          </a>
          <a href="https://github.com/tornike2002" target="_blank">
            <GithubOutlined style={{ color: "#bbb" }} />
          </a>
        </div>
      </IconsWrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 0 5% 5% 5%;
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  .footerInfo-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    @media screen and (max-width: 1320px){
      width: 60%;
    }
    @media screen and (max-width: 1100px){
      width: 70%;
    }
    @media screen and (max-width: 975px){
      width: 80%;
    }
    @media screen and (max-width: 820px){
      .footerInfo-dissepiar{
        display: none;
      }
    }
  }
  .footer-about {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    span {
      color: #4bffa5;
    }
    @media screen and (max-width: 340px){
      font-size:16px;
    }
  }
`;

const IconsWrapper = styled.div`
  .footerIcons-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    font-size: 25px;
  }
`;
