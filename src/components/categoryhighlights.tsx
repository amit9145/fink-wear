import { Link } from "react-router-dom";

const CategoryHighlights = () => {
  const cards = {
    left1: {
      title: "Explore Now",
      image: "/explore.jpg",
      link: "/women"
    },
    left2: {
      title: "Explore Now", 
      image: "/mens.jpg",
      link: "/men"
    },
    rightTop: {
      label: "Women Collection",
      title: "Stylish Winter T-Shirt for Woman",
      image: "/girls.jpg",
      link: "/women"
    },
    rightBottom: {
      label: "Men Collection",
      title: "Stylish Winter Shirt for Man",
      image: "/blackoxny.jpg",
      link: "/men"
    },
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
          Explore by Category
        </h2>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

          {/* LEFT SIDE (2 stacked image cards with overlay button) */}
          <div className="grid grid-rows-2 gap-6 md:gap-8 order-2 lg:order-1">

            {/* CARD 1 */}
            <Link to={cards.left1.link} className="block">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden group shadow-md cursor-pointer">
                <img
                  src={cards.left1.image}
                  alt={cards.left1.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-4 sm:pb-6 md:pb-8 opacity-100 group-hover:opacity-100 transition">
                  <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition text-sm sm:text-base">
                    {cards.left1.title}
                  </button>
                </div>
              </div>
            </Link>

            {/* CARD 2 */}
            <Link to={cards.left2.link} className="block">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden group shadow-md cursor-pointer">
                <img
                  src={cards.left2.image}
                  alt={cards.left2.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-4 sm:pb-6 md:pb-8 opacity-100 group-hover:opacity-100 transition">
                  <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition text-sm sm:text-base">
                    {cards.left2.title}
                  </button>
                </div>
              </div>
            </Link>
          </div>

          {/* RIGHT SIDE (2 horizontal cards with text + image) */}
          <div className="col-span-1 lg:col-span-2 grid grid-rows-2 gap-6 md:gap-8 order-1 lg:order-2">
            {/* RIGHT TOP */}
            <Link to={cards.rightTop.link} className="block">
              <div className="flex flex-col md:flex-row items-center justify-between bg-[#f7f7f7] rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition duration-300 cursor-pointer">
                <div className="md:w-1/2 text-center md:text-left">
                  <p className="text-sm text-gray-500 mb-2">
                    {cards.rightTop.label}
                  </p>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                    {cards.rightTop.title}
                  </h3>
                  <button className="border border-black px-3 sm:px-4 md:px-5 py-2 rounded-full hover:bg-black hover:text-white transition text-sm sm:text-base">
                    Check Now
                  </button>
                </div>
                <img 
                  src={cards.rightTop.image} 
                  alt={cards.rightTop.title} 
                  className="md:w-1/2 w-full h-[180px] sm:h-[200px] md:h-[250px] object-cover rounded-xl mt-4 md:mt-0" 
                />
              </div>
            </Link>

            {/* RIGHT BOTTOM */}
            <Link to={cards.rightBottom.link} className="block">
              <div className="flex flex-col md:flex-row items-center justify-between bg-[#f7f7f7] rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition duration-300 cursor-pointer">
                <div className="md:w-1/2 text-center md:text-left">
                  <p className="text-sm text-gray-500 mb-2">
                    {cards.rightBottom.label}
                  </p>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                    {cards.rightBottom.title}
                  </h3>
                  <button className="border border-black px-3 sm:px-4 md:px-5 py-2 rounded-full hover:bg-black hover:text-white transition text-sm sm:text-base">
                    Check Now
                  </button>
                </div>
                <img 
                  src={cards.rightBottom.image} 
                  alt={cards.rightBottom.title} 
                  className="md:w-1/2 w-full h-[180px] sm:h-[200px] md:h-[250px] object-cover rounded-xl mt-4 md:mt-0" 
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights; 





