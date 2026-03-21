import { Shield, Truck, RefreshCw, Award } from "lucide-react";
import { motion } from "framer-motion";

const TrustBadges = () => {
  const badges = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Shopping",
      description: "SSL Encrypted"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Shipping",
      description: "Orders $100+"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Easy Returns",
      description: "30-Day Policy"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Guaranteed",
      description: "Premium Materials"
    }
  ];

  return (
    <section className="py-8 bg-gray-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-3 text-center md:text-left"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                {badge.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">{badge.title}</h4>
                <p className="text-xs text-gray-600">{badge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
