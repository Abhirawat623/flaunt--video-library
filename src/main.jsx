import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ModalProvider } from "./context/modals-context.jsx";
import { VideoProvider } from "./context/video-context.jsx";
import { AuthProvider } from "./context/auth-context.jsx"
import { HashRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
      <VideoProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </VideoProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
