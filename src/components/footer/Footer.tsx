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
        <div>
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
          <FacebookOutlined style={{ color: "#bbb" }} />
          <LinkedinOutlined style={{ color: "#bbb" }} />
          <GithubOutlined style={{ color: "#bbb" }} />
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
  }
  .footer-about {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    span {
      color: #4bffa5;
    }
  }
`;

const IconsWrapper = styled.div`
  .footerIcons-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
`;
