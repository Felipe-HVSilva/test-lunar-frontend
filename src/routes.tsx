import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Product } from "./product";
import { Home } from "./Home.tsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:name" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
