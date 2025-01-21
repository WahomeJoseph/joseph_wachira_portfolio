/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimateRoutes from "./components/AnimateRoutes";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>   
      <Navbar/>   
      <AnimateRoutes />
    </Router>
  );
}
