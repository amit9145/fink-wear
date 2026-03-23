import { Link } from "react-router-dom";

const CategoryHighlightsPage = () => {
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
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-white min-h-screen">
        <div className="max-w-8xl mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20">
            Explore by Category
          </h2>

          {/* GRID LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

            {/* LEFT SIDE (2 stacked image cards with overlay button) */}
            <div className="grid grid-rows-2 gap-8 md:gap-12 order-2 lg:order-1">

              {/* CARD 1 */}
              <Link to={cards.left1.link} className="block">
                <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
                  <img
                    src={cards.left1.image}
                    alt={cards.left1.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-8 sm:pb-10 md:pb-12 opacity-100 group-hover:opacity-100 transition">
                    <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition text-lg sm:text-xl">
                      {cards.left1.title}
                    </button>
                  </div>
                </div>
              </Link>

              {/* CARD 2 */}
              <Link to={cards.left2.link} className="block">
                <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
                  <img
                    src={cards.left2.image}
                    alt={cards.left2.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-8 sm:pb-10 md:pb-12 opacity-100 group-hover:opacity-100 transition">
                    <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition text-lg sm:text-xl">
                      {cards.left2.title}
                    </button>
                  </div>
                </div>
              </Link>
            </div>

            {/* RIGHT SIDE (2 horizontal cards with text + image) */}
            <div className="col-span-1 lg:col-span-2 grid grid-rows-2 gap-8 md:gap-12 order-1 lg:order-2">
              {/* RIGHT TOP */}
              <Link to={cards.rightTop.link} className="block">
                <div className="flex flex-col md:flex-row items-center justify-between bg-[#f7f7f7] rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
                  <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-base sm:text-lg text-gray-500 mb-3">
                      {cards.rightTop.label}
                    </p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
                      {cards.rightTop.title}
                    </h3>
                    <button className="border border-black px-4 sm:px-6 md:px-8 py-3 rounded-full hover:bg-black hover:text-white transition text-base sm:text-lg">
                      Check Now
                    </button>
                  </div>
                  <img 
                    src={cards.rightTop.image} 
                    alt={cards.rightTop.title} 
                    className="md:w-1/2 w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-xl mt-6 md:mt-0" 
                  />
                </div>
              </Link>

              {/* RIGHT BOTTOM */}
              <Link to={cards.rightBottom.link} className="block">
                <div className="flex flex-col md:flex-row items-center justify-between bg-[#f7f7f7] rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
                  <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-base sm:text-lg text-gray-500 mb-3">
                      {cards.rightBottom.label}
                    </p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
                      {cards.rightBottom.title}
                    </h3>
                    <button className="border border-black px-4 sm:px-6 md:px-8 py-3 rounded-full hover:bg-black hover:text-white transition text-base sm:text-lg">
                      Check Now
                    </button>
                  </div>
                  <img 
                    src={cards.rightBottom.image} 
                    alt={cards.rightBottom.title} 
                    className="md:w-1/2 w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-xl mt-6 md:mt-0" 
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryHighlightsPage;
