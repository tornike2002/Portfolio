import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <h1>
        Tornike <span>Butiashvili</span>
      </h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About me</NavLink>
        <NavLink to="/">Projects</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
