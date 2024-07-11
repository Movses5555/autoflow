import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";


export const HomepageRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

