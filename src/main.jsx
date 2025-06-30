import { createRoot } from "react-dom/client";
import "tailwindcss";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
