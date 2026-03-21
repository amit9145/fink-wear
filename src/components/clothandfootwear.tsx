

import { Link } from "react-router-dom";

const ClothAndFootwearCollection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src="src/assets/clothandfootwear.jpg"
            alt="Cloth And Footwear collection"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
            CLOTH AND FOOTWEAR COLLECTION
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
            Our clothing collection is defined by a selection of timeless,
            versatile, and stylish outfits — designed for both comfort and
            modern aesthetics. Every piece embodies the essence of Reflect
            Fashion: minimal, bold, and effortless.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg">
            Discover the perfect balance of quality materials and modern
            craftsmanship. Whether it's for everyday wear or a statement look,
            Reflect Fashion ensures you stay on trend with unmatched elegance.
          </p>
          <Link 
            to="/clothfootwear"
            className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition font-medium"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClothAndFootwearCollection;
