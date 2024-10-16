import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Layout from "./Layout.jsx";
import Product from "./components/Product.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
