import {  Link, Navigate, Route, Routes } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";
import React from "react";

function ReactExercise8() {
  return (

      <div>
        {/* Navigation Links */}
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/about" style={{ marginRight: "10px" }}>
            About
          </Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Redirect example: redirecting /info to /about */}
          <Route path="/info" element={<Navigate to="/about" replace />} />

          {/* Fallback route for undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  
  );
}

export default ReactExercise8;