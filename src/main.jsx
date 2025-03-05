import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import About from './About.jsx';
import Works from './Works.jsx';
import Contact from './Contact.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/Portfolio/" element={<App />} /> 
    <Route path="/Portfolio/About" element={<About />} /> 
    <Route path="/Portfolio/Works" element={<Works />} />
    <Route path="/Portfolio/Contact" element={<Contact />} />
    <Route path="/Portfolio/*" element={<div>not found</div>} /> 
  </Routes>
  </BrowserRouter>
)
