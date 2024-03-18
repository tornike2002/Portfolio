import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Navbar: React.FC = () => {
  return (
    <Nav>
      <h1>
        Tornike <span>Butiashvili</span>
      </h1>
      <NavbarLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </NavbarLinks>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  margin: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto", sans-serif;
  h1 {
    color: #bbb;
    font-size: 16px;
    line-height: 2.5;
    font-weight: 600;
    span {
      font-weight: 700;
      color: #fff;
      font-size: 16px;
      line-height: 2.5;
    }
  }
`;
const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  a {
    text-decoration: none !important;
    font-family: "Roboto";
    font-size: 16px;
    line-height: 1.5;
    color: #bbb;
    transition: all 500ms ease;
  }
  a.active {
    color: #fff;
  }
  a:hover {
    color: #fff;
  }
`;
