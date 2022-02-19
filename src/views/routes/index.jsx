import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";

import Merchant from '../merchant/index';
import Profile from '../profile/index';
import Context from "../hoc/Context";

const AllRoutes = () => {

  return (

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Merchant />} />
            <Route path="/profile" element={<Profile />} />
            <Route index element={<Merchant />} />
          </Routes>
        </BrowserRouter>

  )
}

export default AllRoutes;
