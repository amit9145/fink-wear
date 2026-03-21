import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero-image2.png";

const HeroSection = () => {
  return (
    <>
      {/* 🔹 HERO SECTION */}
      <section className="relative flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-20 lg:px-32 py-8 md:py-16 gap-y-4 md:gap-y-6 bg-[#F7F7F7] overflow-hidden w-full">
        {/* Left Content (Lifted Up) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-1"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pt-4 md:pt-15 pl-0 md:pl-16 lg:pl-24 font-extrabold leading-tight tracking-tight font-['Playfair_Display']">
            REFLECT YOUR <br className="hidden sm:block" />
            STYLE <br className="block md:hidden" />
            WITH <span className="text-black">FIN</span>
            <span className="text-rose-500">K</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0 md:ml-16 lg:ml-24 px-4 sm:px-0">
            Discover the latest trends in fashion, handpicked for you.
            Step into a world of elegance, comfort, and confidence with FINK.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start md:ml-16 lg:ml-24">
            <Link to="/ourcollection">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-900 transition text-sm sm:text-base font-medium"
              >
                Shop Now
              </motion.button>
            </Link>
            <Link to="/categoryhighlights">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition text-sm sm:text-base font-medium"
              >
                Explore
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image (Lifted Up + Light Grey Background) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full md:w-1/2 flex justify-center bg-[#f5f5f5] rounded-2xl p-4 sm:p-6 order-1 md:order-2"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 100 }}
            src={heroImg}
            alt="FINK Fashion Banner"
            className="w-[85%] sm:w-[90%] md:w-[95%] h-auto drop-shadow-2xl rounded-xl"
          />
        </motion.div>
      </section>

      {/* 🔹 SLIDING REFLECT FASHION MARQUEE */}
      <section className="w-full bg-black overflow-hidden py-4">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {/* Repeat text for continuous scroll */}
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex items-center space-x-8 text-white text-2xl font-bold tracking-widest uppercase px-8"
            >
              <span>★</span>
              <span>FINK Fashion</span>
              <span>★</span>
              <span>FINK Fashion</span>
              <span>★</span>
              <span>FINK Fashion</span>
              <span>★</span>
              <span>FINK Fashion</span>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;



