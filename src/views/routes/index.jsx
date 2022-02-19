import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Merchant from '../merchant/index';
import Profile from '../profile/index';

const AllRoutes = () => {

    return (
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Merchant />}/>
        <Route path="/profile" element={<Profile />}/>
          <Route index element={<Merchant />} />
      </Routes>
    </BrowserRouter>

    )
}

export default AllRoutes;
