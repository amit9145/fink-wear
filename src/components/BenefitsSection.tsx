import { motion } from "framer-motion";
import { Truck, Shield, Heart, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Shipping",
      description: "Free shipping on all orders over $100. Fast and reliable delivery to your doorstep."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payment",
      description: "100% secure payment processing. Your financial information is always protected."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Carefully selected materials and craftsmanship. Fashion that lasts."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Customer Satisfaction",
      description: "30-day return policy. We stand behind every product we sell."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-['Playfair_Display']">
            Why Choose <span className="text-black">FIN</span><span className="text-rose-500">K</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience and premium fashion
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-rose-50 transition-colors duration-300">
                <div className="text-rose-500 group-hover:text-rose-600 transition-colors duration-300">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Trust Badges */}
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium">4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Truck className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium">10K+ Happy Customers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
