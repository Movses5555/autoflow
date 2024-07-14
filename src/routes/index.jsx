import { Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Faq } from "@/pages/Faq";


export const HomepageRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/faq" element={<Faq />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

