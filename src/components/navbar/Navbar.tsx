import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Navbar: React.FC = () => {
  return (
    <Nav>
      <h1>
        Tornike <span>Butiashvili</span>
      </h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About me</NavLink>
        <NavLink to="/">Projects</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto", sans-serif;
  h1 {
    color: #878787;
    font-size: 16px;
    line-height: 2.5;
    font-weight: 600;
  }
`;
