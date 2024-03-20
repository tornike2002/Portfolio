import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BurgerMenu: React.FC = () => {
  return (
    <BurgerManuContainer>
      <div className="burgerWrapper">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Projects</NavLink>
      </div>
    </BurgerManuContainer>
  );
};

export default BurgerMenu;
const BurgerManuContainer = styled.div`
  height: 100vh;
  width: 100% !important;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 11;
  .burgerWrapper {
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0px;
    a {
      font-family: "Roboto", sans-serif;
      color: #bbb;
      text-decoration: none;
      background-color: #1e1e1e;
      padding: 30px 0;
      width: 100%;
      font-size: 16px;
      font-weight: 300;
      border-top: 1px solid #bbb;
    }
  }
  @media screen and (min-width: 975px) {
    display: none;
  }
`;
