import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import Cart from "../pages/Cart";

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/category/:name" element={<CategoryPage />} />
      <Route path="/cart" element={<Cart />} />

    </Routes>
  );
}