import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";
import { HashRouter } from "react-router-dom";
import "./css/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter basename="/">
      <AuthProvider>
        <App />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
