import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import Layout from "./components/Layout";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Search from "./pages/Search";

const MyRoutes = () => {
  const [cart, setCart] = useState([]);
  return (
    <KindeProvider
      clientId="e970ce21c033499e91b38b854931b648"
      domain="https://hamrogadget.kinde.com"
      redirectUri="http://localhost:3000"
      logoutUri="https://hamrogadget.kinde.com/auth/cx/_:nav&m:verify_email&psid:9e39c175c08e4d749dfef9dd780c4017"
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route
            path="/productdetail/:productId"
            element={<ProductDetail setCart={setCart} />}
          ></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="search/:term" element={<Search />}></Route>
        </Route>
      </Routes>
    </KindeProvider>
  );
};

export default MyRoutes;
