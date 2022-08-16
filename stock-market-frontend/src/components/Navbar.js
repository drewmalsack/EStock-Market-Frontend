import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/addStockPrice">AddStock</Link>
        <Link to="/registerCompany">RegisterCompany</Link>
        <Link to="/listAllCompanies">ListAllCompanies</Link>
        <Link to="/showStockPrices">StockPrices</Link>
    </div>
  )
}

export default Navbar