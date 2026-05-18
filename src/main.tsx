import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import App from "./app/App";
import AppDesign from "./app/AppDesign";
import PasswordGate from "./components/PasswordGate";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PasswordGate>
      <BrowserRouter basename="/lp-project">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/design" element={<AppDesign />} />
        </Routes>
      </BrowserRouter>
    </PasswordGate>
  </StrictMode>
);