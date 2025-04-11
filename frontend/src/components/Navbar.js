import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio Builder", path: "/portfolioCard" },
];

export default function Navbar({ onSignupOpen }) {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-md fixed top-0 z-50">
      {/* Logo linking to home */}
      <div className="text-xl font-bold text-gray-900">
        <Link to="/">Pixel</Link>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((navItem, index) => (
          <div key={index} className="relative">
            <Link to={navItem.path} className="text-gray-900 hover:text-gray-700">
              {navItem.label}
            </Link>
          </div>
        ))}
      </div>

      {/* Login + Sign Up */}
      <div className="flex items-center space-x-4">
        {/* ✅ Updated Login to use Link */}
        <Link to="/login" className="text-gray-900 hover:text-gray-700">
          Login
        </Link>
        <button
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
          onClick={onSignupOpen}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}
