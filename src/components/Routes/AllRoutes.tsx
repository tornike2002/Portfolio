import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import AboutPage from "../about/AboutPage";

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default AllRoutes;
