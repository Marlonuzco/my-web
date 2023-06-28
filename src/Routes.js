import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import InitialScreen from "./Screens/InitialScreen/index";

function RoutesPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-web" element={<InitialScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPages;
