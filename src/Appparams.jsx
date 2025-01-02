import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Func from './Useparam.jsx'

function Appparam(){
    return(
  <Router>
    <nav>
      <Link to="/newpage/1">Switch to new page</Link>
    </nav>
    <Routes>
      <Route path="/newpage/:id" element={<Func />} />
    </Routes>
  </Router>
    )
};

export default Appparam;