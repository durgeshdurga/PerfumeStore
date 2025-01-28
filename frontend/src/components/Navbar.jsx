import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-800  text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold">PerfumeStore</div>

        {/* Hamburger Icon */}
        <button className="lg:hidden text-white" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Desktop Menu Links */}
        <div className="hidden lg:flex mt-4 lg:mt-0">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-white hover:text-red-500">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-red-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-red-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center space-y-4 mt-4">
          <li>
            <Link to="/" className="text-white hover:text-red-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-white hover:text-red-500">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-red-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-red-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;