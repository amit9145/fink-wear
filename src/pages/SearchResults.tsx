import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  // All products from all sections
  const allProducts = [
    // Men's products
    { id: 1, name: "Men BLVCK Onyx Hoodie", price: "$180", image: "/blackoxny.jpg", category: "men" },
    { id: 2, name: "LVR London Explorer Hoodie", price: "$230", image: "/LVRlondonexplore.jpg", category: "men" },
    { id: 3, name: "Retro Repeat Tiger Hoodie", price: "$100", image: "/retrorepect.jpg", category: "men" },
    { id: 4, name: "Hip Hop Street Wear Hoodie", price: "$120", image: "/hiphop.jpg", category: "men" },
    { id: 5, name: "Mens Outwear", price: "$70", image: "/mensoutwear.jpg", category: "men" },
    { id: 6, name: "Leather Jacket", price: "$250", image: "/outwearmensleather.jpg", category: "men" },
    
    // Women's products
    { id: 7, name: "Stylish Winter T-Shirt", price: "$85", image: "/girls.jpg", category: "women" },
    { id: 8, name: "Abril Outwear Womens", price: "$120", image: "/abriloutwearwomens.jpg", category: "women" },
    { id: 9, name: "Womens Crop Suede Jacket", price: "$150", image: "/WomensCropSuedeJacket.jpg", category: "women" },
    { id: 10, name: "Minimalist Bracelet", price: "$40", image: "/womensbraclet.jpg", category: "women" },
    { id: 11, name: "Classic Leather Bag", price: "$90", image: "/classicbags.jpg", category: "women" },
    { id: 12, name: "Stylish Bags", price: "$75", image: "/stylesbags.jpg", category: "women" },
    
    // Boys' products
    { id: 13, name: "Hip Hop Street Wear Hoodie", price: "$120", image: "/hiphop.jpg", category: "boys" },
    { id: 14, name: "Retro Repeat Tiger Hoodie", price: "$100", image: "/retrorepect.jpg", category: "boys" },
    { id: 15, name: "Stylish Summer Cap", price: "$60", image: "/summerstylecap.jpg", category: "boys" },
    { id: 16, name: "Designer Caps", price: "$65", image: "/designercaps.jpg", category: "boys" },
    { id: 17, name: "Boys Collection T-Shirt", price: "$45", image: "/mens.jpg", category: "boys" },
    { id: 18, name: "Street Style Hoodie", price: "$95", image: "/blackoxny.jpg", category: "boys" },
    
    // Girls' products
    { id: 19, name: "Stylish Winter T-Shirt", price: "$85", image: "/girls.jpg", category: "girls" },
    { id: 20, name: "Abril Outwear Womens", price: "$120", image: "/abriloutwearwomens.jpg", category: "girls" },
    { id: 21, name: "Womens Crop Suede Jacket", price: "$150", image: "/WomensCropSuedeJacket.jpg", category: "girls" },
    { id: 22, name: "Minimalist Bracelet", price: "$40", image: "/womensbraclet.jpg", category: "girls" },
    { id: 23, name: "Classic Leather Bag", price: "$90", image: "/classicbags.jpg", category: "girls" },
    { id: 24, name: "Stylish Bags", price: "$75", image: "/stylesbags.jpg", category: "girls" },
    
    // Accessories
    { id: 25, name: "Minimalist Bracelet", price: "$40", image: "/womensbraclet.jpg", category: "accessories" },
    { id: 26, name: "Elegant Watch Strap", price: "$55", image: "/menswatches.jpg", category: "accessories" },
    { id: 27, name: "Classic Leather Bag", price: "$90", image: "/classicbags.jpg", category: "accessories" },
    { id: 28, name: "Stylish Summer Cap", price: "$60", image: "/summerstylecap.jpg", category: "accessories" },
    { id: 29, name: "Designer Caps", price: "$65", image: "/designercaps.jpg", category: "accessories" },
    { id: 30, name: "Stylish Bags", price: "$75", image: "/stylesbags.jpg", category: "accessories" }
  ];

  // Filter products based on search query
  const filteredProducts = allProducts.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Search Results</h1>
        <p className="text-center text-gray-600 mb-12">
          {query ? `Showing results for "${query}"` : "Enter a search term"}
        </p>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-64">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600 font-medium">{product.price}</p>
                  <p className="text-sm text-gray-500 capitalize">{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found for "{query}"</p>
            <p className="text-gray-400 mt-2">Try searching for clothing names or categories like "men", "women", "boys", "girls", "accessories"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
