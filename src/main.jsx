import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ModalProvider } from "./context/modals-context.jsx";
import { VideoProvider } from "./context/video-context.jsx";
import { AuthProvider } from "./context/auth-context.jsx"
import {HashRouter as Router} from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Router>
      <AuthProvider>
      <VideoProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </VideoProvider>
      </AuthProvider>
     </Router>
  </React.StrictMode>
);
