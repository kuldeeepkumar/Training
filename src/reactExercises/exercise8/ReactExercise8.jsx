import { Link, Navigate, Route, Routes } from "react-router-dom";

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
        <Link to="home" style={{ marginRight: "10px" }}>Home</Link>           {/* relative path */}
        <Link to="about" style={{ marginRight: "10px" }}>About</Link>    {/* relative path */}
        <Link to="contact">Contact</Link>                               {/* relative path */}
      </nav>

      {/* Route Definitions */}
      <Routes>
        <Route path="" element={<Home />} />                           {/* matches /ReactExercise8 */}
        <Route path="about" element={<About />} />                     {/* matches /ReactExercise8/about */}
        <Route path="contact" element={<Contact />} />                 {/* matches /ReactExercise8/contact */}
        <Route path="info" element={<Navigate to="about" replace />} /> {/* relative redirect */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default ReactExercise8;
