import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import AddStock from "./AddStock";
import RegisterCompany from "./RegisterCompany";
import ListAllCompanies from "./ListAllCompanies";
import StockPrices from "./StockPrices";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addStockPrice" element={<AddStock />} />
        <Route path="/registerCompany" element={<RegisterCompany />} />
        <Route path="/listAllCompanies" element={<ListAllCompanies />} />
        <Route path="/showStockPrices" element={<StockPrices />} />
      </Routes>
    </Router>
    
  );
}

export default App;
