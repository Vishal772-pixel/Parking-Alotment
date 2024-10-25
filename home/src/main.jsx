import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AllotmentPage from './allotment.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact.jsx';

const Navbar = () => (
  <nav className="bg-gray-800 fixed w-full py-4 px-6 shadow-md z-50">
    <ul className="flex justify-center space-x-8">
      <li>
        <Link to="/" className="hover:text-white">Home</Link>
      </li>
      <li>
        <Link to="/allotment" className="hover:text-white">Allotments</Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-white">Contact Us</Link>
      </li>
    </ul>
  </nav>
);

const Root = () => (
  <BrowserRouter>
    <Navbar />
    <div className="pt-20">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/allotment" element={<AllotmentPage />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes here */}
      </Routes>
    </div>
  </BrowserRouter>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
