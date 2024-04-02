import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./home/Home";
import AboutPage from "./about/AboutPage";
import MyProjects from "./projects/MyProjects";
import {AnimatePresence} from "framer-motion"
const AnimatedRoutes = () => {
    const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<MyProjects />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
