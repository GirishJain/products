import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import AllProducts from "./AllProducts";
import { ProductView } from "./ProductView";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate replace to="/react-project-with-mobx/products" />}
      />
      <Route
        path="/react-project-with-mobx/products"
        element={<AllProducts />}
      />
      <Route
        path="/react-project-with-mobx/products/:productId"
        element={<ProductView />}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
