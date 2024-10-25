import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import HomePage from "./HomePage"; // Import your HomePage component
import AllotmentPage from "./allotment"; // Import your AllotmentPage component
import App from "./App";

function hello() {
  return (
    <>
    <App/>
    <Router>
      <div className="bg-black text-gray-400 min-h-screen">
        {/* Navbar */}
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

        {/* Routes */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />           {/* Home Page Route */}
            <Route path="/allotment" element={<AllotmentPage />} />  {/* Allotment Page Route */}
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default hello;

