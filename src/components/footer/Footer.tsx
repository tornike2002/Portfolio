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
      <div>
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
      <div>
        <div>
          <FacebookOutlined style={{ color: "#bbb" }} />
          <LinkedinOutlined style={{ color: "#bbb" }} />
          <GithubOutlined style={{ color: "#bbb" }} />
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  font-family: "Roboto", sans-serif;
  .footer-about {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    span {
      color: #4bffa5;
    }
  }
`;
