import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import AddProduct from "./AddProduct";
import ShowProduct from "./ShowProduct";
import { ProductList } from "./ProductList";
import { ProductDetails } from "./ProductDetails";
import { Cart } from "./Cart";

const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addprod" element={<AddProduct />} />
        <Route path="/showprod" element={<ShowProduct />} />
        <Route path="/prodlist" element={<ProductList />} />
        <Route path="/proddls" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Landing;
