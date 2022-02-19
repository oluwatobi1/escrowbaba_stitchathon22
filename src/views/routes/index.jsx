import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Merchant from '../merchant/index';

const AllRoutes = () => {

    return (
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Merchant />}>
          <Route index element={<Merchant />} />
        </Route>
      </Routes>
    </BrowserRouter>

    )
}

export default AllRoutes;
