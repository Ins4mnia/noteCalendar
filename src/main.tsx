import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { ChoosenDay } from "./pages/choosenDay/ChoosenDay.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/choosenday" element={<ChoosenDay />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
