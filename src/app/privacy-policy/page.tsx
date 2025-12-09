import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Sela Trade',
  description: 'Privacy Policy for Sela Trade - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a365d] via-[#1e3a5f] to-[#0f172a] pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg">
            Last updated: December 9, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Sela Trade (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to protecting 
                your personal information and your right to privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website selatrade.com or engage 
                with our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
                policy, please do not access the site or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">
                2. Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-[#1a365d] mb-3">
                Personal Information You Provide
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Fill out contact forms on our website</li>
                <li>Request information about our services</li>
                <li>Subscribe to our newsletter or communications</li>
                <li>Engage in business transactions with us</li>
                <li>Communicate with us via email, phone, or other channels</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Name and contact details (email address, phone number, address)</li>
                <li>Company name and business information</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1a365d] mb-3">
                Information Automatically Collected
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for various business purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Providing, operating, and maintaining our services</li>
                <li>Processing and fulfilling your requests and transactions</li>
                <li>Communicating with you about our services, updates, and promotions</li>
                <li>Improving our website and user experience</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Detecting and preventing fraud or other harmful activities</li>
                <li>Complying with legal obligations</li>
                <li>Responding to inquiries and providing customer support</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors and service providers who perform services on our behalf</li>
                <li><strong>Business Partners:</strong> With your consent, we may share information with business partners to offer certain products or services</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, property, or that of our users or others</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We do not sell your personal information to third parties.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure socket layer (SSL) technology</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection practices</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure, and 
                we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">
                6. Your Privacy Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> Opt out of marketing communications at any time</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw your consent where we rely on consent for processing</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:info@selatrade.com" className="text-[#c9a962] hover:underline">
                  info@selatrade.com
                </a>.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to collect and track information about your 
                browsing activities. Cookies are small data files stored on your device that help us improve 
                our services and your experience.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Types of cookies we use:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                You can control cookies through your browser settings. However, disabling cookies may affect 
                the functionality of our website.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">
                8. Data Retention
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes 
                for which it was collected, including to satisfy any legal, accounting, or reporting requirements. 
                When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">
                9. International Data Transfers
              </h2>
              <p className="text-gray-600 leading-relaxed">
                As a global trading company, we may transfer your personal information to countries other 
                than your country of residence. When we do so, we ensure appropriate safeguards are in place 
                to protect your information and comply with applicable data protection laws.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">
                10. Children&apos;s Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly 
                collect personal information from children. If you believe we have collected information 
                from a child, please contact us immediately.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. The updated version will be indicated 
                by the &quot;Last updated&quot; date at the top of this page. We encourage you to review this Privacy 
                Policy periodically to stay informed about how we are protecting your information.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">
                12. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-[#1a365d] font-semibold text-lg mb-2">Sela Trade</p>
                <p className="text-gray-600">
                  Email:{' '}
                  <a href="mailto:info@selatrade.com" className="text-[#c9a962] hover:underline">
                    info@selatrade.com
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

