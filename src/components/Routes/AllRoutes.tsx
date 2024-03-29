import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import AboutPage from "../about/AboutPage";
import MyProjects from "../projects/MyProjects";

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<MyProjects />} />
    </Routes>
  );
};

export default AllRoutes;
