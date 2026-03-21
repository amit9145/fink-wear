import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 pt-12 pb-8">
      <div className="mx-auto flex flex-col items-center text-center space-y-8">

        {/* Logo */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center gap-2 text-white font-bold text-2xl tracking-wide">
            <div className="w-3 h-3 bg-white rounded-sm"></div>
            <span>FINK</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500 uppercase tracking-widest">
            <span>Streetwear</span>
            <span>• Collaborations</span>
            <span>• Urban Essentials</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-800"></div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-10 text-sm text-gray-300">
          <li><a href="#" className="hover:text-white transition">Shop</a></li>
          <li><a href="#" className="hover:text-white transition">Collections</a></li>
          <li><a href="#" className="hover:text-white transition">About</a></li>
          <li><a href="#" className="hover:text-white transition">Support</a></li>
          <li><a href="#" className="hover:text-white transition">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a href="#" className="bg-[#1a1a1a] p-3 rounded-lg hover:bg-white hover:text-black transition">
            <FaInstagram />
          </a>
          <a href="#" className="bg-[#1a1a1a] p-3 rounded-lg hover:bg-white hover:text-black transition">
            <FaTwitter />
          </a>
          <a href="#" className="bg-[#1a1a1a] p-3 rounded-lg hover:bg-white hover:text-black transition">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-[#1a1a1a] p-3 rounded-lg hover:bg-white hover:text-black transition">
            <FaYoutube />
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Disclosures</a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-600">
          © 2025 FINK. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
