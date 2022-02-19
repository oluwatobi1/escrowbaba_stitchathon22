import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Merchant from '../merchant/index';
import Profile from '../profile/index';
import Home from "../home/index";

const AllRoutes = () => {

  return (

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/merchant"  element={<Merchant />} />
          </Routes>
        </BrowserRouter>

  )
}

export default AllRoutes;
