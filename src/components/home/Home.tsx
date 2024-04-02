
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import homeBg from "../../assets/Home/homeBg.jpg";
import MainTitle from "../title/MainTitle";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";
const Home: React.FC = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <HomeContainer>
        <Navbar />
        <MainTitle />
        <div className="footerStick-bottom">
          <Footer />
        </div>
      </HomeContainer>
    </motion.div>
  );
};

export default Home;

const HomeContainer = styled.div`
  height: 100vh;
  max-width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${homeBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-y: hidden;
  .footerStick-bottom{
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;
