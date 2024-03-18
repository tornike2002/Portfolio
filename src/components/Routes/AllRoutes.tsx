import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
