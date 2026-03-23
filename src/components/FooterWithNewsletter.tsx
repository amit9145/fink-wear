import { motion } from "framer-motion";
import { Mail, Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FooterWithNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter signup:", email);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <section className="py-16 md:py-24 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          {/* Logo */}
          <div className="flex flex-col items-center space-y-2 mb-8">
            <div className="flex items-center gap-4 text-white font-bold text-4xl tracking-tight">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
              <span>FIN<span className="text-rose-500">K</span></span>
              <Gift className="w-10 h-10 text-rose-500" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-['Playfair_Display']">
              Get <span className="text-rose-500">10% Off</span> Your First Order
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join our exclusive newsletter for early access to new arrivals, special offers, and style tips from FINK
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-4 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isSubmitted ? (
                  <span>Subscribed!</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm"
          >
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
              <span className="text-gray-400">No spam, ever</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
              <span className="text-gray-400">Unsubscribe anytime</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
              <span className="text-gray-400">Exclusive offers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="pt-12 pb-8">
        <div className="mx-auto flex flex-col items-center text-center space-y-8">
          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center gap-10 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">Shop</a></li>
            <li><Link to="/ourcollection" className="hover:text-white transition">Collections</Link></li>
            <li><Link to="/benefits" className="hover:text-white transition">About</Link></li>
            <li><Link to="/support" className="hover:text-white transition">Support</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>

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
            © 2026 FINK. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterWithNewsletter;
