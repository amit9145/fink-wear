import { Link, useNavigate } from "react-router-dom";
import { Search, User, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page with query parameter
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-black shadow-md py-3 sm:py-4 px-3 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center font-josefin uppercase tracking-wider">
      {/* Center Navigation - Mobile First */}
      <nav className="flex flex-wrap justify-center lg:justify-start space-x-4 sm:space-x-6 lg:space-x-8 text-white text-sm sm:text-base font-medium py-3 lg:py-0">
        <Link to="/men" className="hover:text-rose-500 transition">Men</Link>
        <Link to="/women" className="hover:text-rose-500 transition">Women</Link>
        <Link to="/boys" className="hover:text-rose-500 transition">Boys</Link>
        <Link to="/girls" className="hover:text-rose-500 transition">Girls</Link>
        <Link to="/accessories" className="hover:text-rose-500 transition">Accessories</Link>
      </nav>

      {/* Left Logo - Center on mobile, left on desktop */}
      <Link to="/" className="text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center lg:pr-20 py-2 lg:py-0">
        <h1><span className="text-white">Fin</span>
        <span className="text-rose-400">K</span></h1>
      </Link>

      {/* Right Side: Search + Icons */}
      <div className="flex items-center space-x-3 sm:space-x-5 text-white py-2 lg:py-0">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center border border-gray-300 rounded-full px-2 sm:px-3 py-1 hover:border-rose-400 transition">
          <Search className="w-4 h-4 sm:w-5 h-5 text-white" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="outline-none ml-1 sm:ml-2 text-xs sm:text-sm text-white placeholder-gray-400 w-20 sm:w-32 md:w-48 bg-transparent"
          />
        </form>

        {/* Profile */}
        <Link to="/profile">
          <User className="w-4 h-4 sm:w-5 h-5 hover:text-rose-500 cursor-pointer" />
        </Link>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <ShoppingCart className="w-4 h-4 sm:w-5 h-5 hover:text-rose-500 cursor-pointer" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold">
              {getTotalItems()}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
