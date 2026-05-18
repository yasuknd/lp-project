import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App.tsx";
import AppDesign from "./app/AppDesign.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/lp-project">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/design" element={<AppDesign />} />
    </Routes>
  </BrowserRouter>
);
