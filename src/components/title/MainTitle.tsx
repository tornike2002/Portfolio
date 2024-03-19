import { useTypewriter, Cursor } from "react-simple-typewriter";
import styled from "styled-components";
const MainTitle: React.FC = () => {
  const [text] = useTypewriter({
    words: [
      " I'm tornike butiashvili",
      " I'm react developer",
      " I code cool websites",
    ],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 50,
  });
  return (
    <TitleWrapper>
      <MainTitleCenter>
        <span>{text}</span>
        <span>
          <Cursor />
        </span>
      </MainTitleCenter>
    </TitleWrapper>
  );
};

export default MainTitle;

const MainTitleCenter = styled.h1`
  color: #fff;
  font-family: "Roboto", sans-serif;
  span {
    font-size: 70px;
    font-weight: 600;
    line-height: 2.5;
    letter-spacing: 1px;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50%;

`;
