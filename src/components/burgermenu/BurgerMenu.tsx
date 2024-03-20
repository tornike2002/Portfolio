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
  height: 100%;
  width: 100%;
  background-color: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  display: flex;
  justify-content: center;
  align-items: center;
`;
