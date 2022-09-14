import React from "react";
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductsDetails from "../pages/ProductsDetails";

const Routers = () => {
  return (

   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Navigate to="/home" />} />
       <Route path="/home" element={<Home />} />
       <Route path="/home/:id" element={<ProductsDetails />} />
       <Route path="*" element={<NotFound />} />
     </Routes>
   </BrowserRouter>
  );
};

export default Routers;
