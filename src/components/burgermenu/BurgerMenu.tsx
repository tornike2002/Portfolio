import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BurgerMenu: React.FC = () => {
  return (
    <BurgerManuContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">About</NavLink>
      <NavLink to="/">Projects</NavLink>
    </BurgerManuContainer>
  );
};

export default BurgerMenu;
const BurgerManuContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 11;
`;
