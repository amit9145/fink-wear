import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Fashion Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We collect information to provide better fashion services and personalized styling recommendations. The types of information we collect include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Personal information (name, email, phone number for fashion consultations)</li>
              <li>Shipping and billing information for fashion deliveries</li>
              <li>Payment information (processed securely through fashion payment providers)</li>
              <li>Fashion preferences, style history, and browsing behavior</li>
              <li>Body measurements and size preferences (optional, for better fit recommendations)</li>
              <li>Device and usage information for personalized fashion experiences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Fashion Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Process and fulfill your fashion orders and styling requests</li>
              <li>Provide personalized fashion recommendations and style advice</li>
              <li>Send fashion newsletters, trend updates, and exclusive offers</li>
              <li>Improve our fashion collections and customer experience</li>
              <li>Create personalized shopping experiences and style profiles</li>
              <li>Prevent fraud and ensure secure fashion transactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Fashion Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal fashion information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-3">
              <li>Fashion industry partners and trusted service providers</li>
              <li>Payment processors for secure fashion transactions</li>
              <li>Fashion shipping partners for order fulfillment</li>
              <li>Style recommendation services (with your consent)</li>
              <li>When required by law or to protect our fashion brand</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Fashion Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal fashion information against unauthorized access, alteration, disclosure, or destruction. All fashion transactions and style profiles are encrypted using industry-standard SSL technology.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Fashion Cookies and Personalization</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your fashion shopping experience. Cookies help us remember your style preferences, analyze fashion trends, and personalize clothing recommendations. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Fashion Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Access your personal fashion profile and style history</li>
              <li>Correct inaccurate fashion preferences or measurements</li>
              <li>Request deletion of your fashion account and data</li>
              <li>Opt-out of fashion marketing communications</li>
              <li>Restrict processing of your style information</li>
              <li>Request a copy of your fashion data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy or need to exercise your rights, please contact us at:
              <br />
              Email: privacy@fink.com
              <br />
              Phone: 1-800-FINK-WEAR
              <br />
              Address: 123 Fashion District, NY 10001
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
