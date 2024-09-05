import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Nav from '../public/components/Nav.jsx'
import Footer from "../public/components/Footer";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <App />
    <Footer />
  </StrictMode>,
)
