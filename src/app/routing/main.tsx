import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "../global/index.css";
import Day from "@/pages/day";
import App from "@/pages/home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/day" element={<Day />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
