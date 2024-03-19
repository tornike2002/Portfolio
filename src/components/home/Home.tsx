import React, { Fragment } from "react";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import homeBg from "../../assets/Home/homeBg.jpg";
import MainTitle from "../title/MainTitle";

const Home: React.FC = () => {
  return (
    <Fragment>
      <HomeContainer>
        <Navbar />
        <MainTitle />
      </HomeContainer>
    </Fragment>
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
`;
