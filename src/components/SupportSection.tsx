import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Clock, MapPin, HelpCircle } from "lucide-react";

const SupportSection = () => {
  const supportCategories = [
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "FAQ",
      description: "Find answers to commonly asked questions about orders, shipping, and returns."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time for instant assistance."
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours."
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      description: "Call us Monday-Friday, 9AM-6PM EST for immediate help."
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "support@fink.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Hours",
      value: "Mon-Fri: 9AM-6PM EST"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "123 Fashion Street, NY 10001"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
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
            How Can We <span className="text-black">FIN</span><span className="text-rose-500">K</span> Help You?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to support you every step of the way. Reach out to us through any of these channels.
          </p>
        </motion.div>

        {/* Support Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {supportCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-rose-50 rounded-full flex items-center justify-center group-hover:bg-rose-100 transition-colors duration-300">
                <div className="text-rose-500 group-hover:text-rose-600 transition-colors duration-300">
                  {category.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {category.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Get in Touch</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 text-rose-500">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                  <p className="text-gray-900 font-semibold">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors duration-300">
                Start Live Chat
              </button>
              <button className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300">
                Send Email
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;
