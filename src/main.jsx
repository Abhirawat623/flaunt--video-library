import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ModalProvider } from './context/modals-context.jsx'
import {VideoProvider} from "./context/video-context.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VideoProvider>
    <ModalProvider>
    <App />
    </ModalProvider>
    </VideoProvider>
  </React.StrictMode>
)
