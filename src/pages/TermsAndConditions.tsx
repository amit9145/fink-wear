import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsAndConditions = () => {
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

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Terms & Conditions</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using FINK's website and services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-gray-700 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials on FINK's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Products and Sizing</h2>
            <p className="text-gray-700 leading-relaxed">
              All fashion items are subject to availability. We provide detailed size guides and measurements for each product. Colors may vary slightly due to lighting and monitor settings. We reserve the right to modify prices or discontinue styles without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Payment and Currency</h2>
            <p className="text-gray-700 leading-relaxed">
              Payment must be made at the time of placing an order. We accept major credit cards, PayPal, and other fashion industry-standard payment methods. All prices are displayed in USD and are inclusive of applicable taxes unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Fashion Shipping and Delivery</h2>
            <p className="text-gray-700 leading-relaxed">
              Free express shipping is available on orders over $100. Standard fashion delivery times are 3-5 business days for ready-to-wear items and 7-10 business days for custom or made-to-order pieces. FINK is not responsible for delays caused by shipping carriers or customs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Fashion Returns and Exchanges</h2>
            <p className="text-gray-700 leading-relaxed">
              Fashion items can be returned within 14 days of delivery in original condition with tags attached and unworn. Final sale items cannot be returned. Exchanges are available for different sizes of the same style within 7 days of delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Fashion Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All fashion designs, trademarks, and intellectual property on this website belong to FINK and are protected by copyright and other intellectual property laws. Our original designs are proprietary and cannot be reproduced without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Product Care and Maintenance</h2>
            <p className="text-gray-700 leading-relaxed">
              Each fashion item includes specific care instructions. FINK is not responsible for damage resulting from improper care or maintenance. Following care guidelines ensures longevity and quality of your fashion pieces.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Limited Edition and Collaborations</h2>
            <p className="text-gray-700 leading-relaxed">
              Limited edition and collaboration pieces have special terms regarding availability and returns. These items may be final sale and have different warranty terms than regular collections.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              FINK shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our fashion products or services, including but not limited to fashion advice or style recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Fashion Industry Compliance</h2>
            <p className="text-gray-700 leading-relaxed">
              We comply with all fashion industry regulations, including labor laws, environmental standards, and consumer protection laws. Our supply chain follows ethical fashion practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which FINK operates, with special consideration for fashion commerce regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              FINK reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on this website. Continued use of our fashion services constitutes acceptance of updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Fashion Customer Support</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms & Conditions, fashion styling advice, or product inquiries, please contact us at:
              <br />
              Email: support@fink.com
              <br />
              Phone: 1-800-FINK-WEAR
              <br />
              Fashion Hotline: 1-800-FINK-STYLE
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
