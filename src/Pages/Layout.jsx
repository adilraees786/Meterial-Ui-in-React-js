
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-lg h-15 w-full">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Website</h1>
          <ul className="flex space-x-6 gap-5 justify-between text-2xl">
            <li>
              <Link to="/" className="hover:text-gray-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-gray-300 transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-6">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;




