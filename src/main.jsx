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
    <Route path="/" element={<App />} /> 
    <Route path="/About" element={<About />} /> 
    <Route path="/Works" element={<Works />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/*" element={<div>not found</div>} /> 
  </Routes>
  </BrowserRouter>
)
