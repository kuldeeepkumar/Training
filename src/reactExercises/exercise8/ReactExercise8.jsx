import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";
import React from "react";

function ReactExercise8() {
  return (
    <BrowserRouter>
      <div>
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
    </BrowserRouter>
  );
}

export default ReactExercise8;
