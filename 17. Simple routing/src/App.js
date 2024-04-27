//router
//1. Link <Link to="/newsletter">letter</Link>
//2. Routes -> Route   <Route path="/newsletters" element={<Newsletters />} />

import "./styles.css";
import * as React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Newsletter from "./Newsletter";
import Dashboard from "./Dashboard";

export default function App() {
  return (
    <Router>
      {/* //links dikahne he liye */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/newsletter">Newsletter </Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      {/* //links jese hi click check route similar to path, tranfer to that element/compnent */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
