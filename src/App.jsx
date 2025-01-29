import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import MemberDetailsPage from "./pages/MemberDetailsPage";
import BookListingPage from "./pages/BookListingPage";
import LendBookPage from "./pages/LendBookPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-blue-500 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Book Lending Club</h1>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-200 transition">
                  Member Details
                </Link>
              </li>
              <li>
                <Link to="/books" className="hover:text-gray-200 transition">
                  Book Listing
                </Link>
              </li>
              <li>
                <Link to="/lend" className="hover:text-gray-200 transition">
                  Lend Book Form
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Page Content */}
        <div className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<MemberDetailsPage />} />
            <Route path="/books" element={<BookListingPage />} />
            <Route path="/lend" element={<LendBookPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
