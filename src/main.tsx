import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { OgheeseProvider } from "./Store/ogheeseContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OgheeseProvider>
      <App />
    </OgheeseProvider>
  </React.StrictMode>
);
