import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const BurgerMenu: React.FC = () => {
  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      tranistion: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
    exit: {
      scaleY: 0,
      tranistion: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={menuVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <BurgerManuContainer>
          <div className="burgerWrapper">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
          </div>
        </BurgerManuContainer>
      </motion.div>
    </AnimatePresence>
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
    padding: 0 5%;
    border-radius: 5px;
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
