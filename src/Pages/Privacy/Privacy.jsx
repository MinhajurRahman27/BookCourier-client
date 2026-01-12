const Privacy = () => {
  return (
    <div className="pt-20 min-h-screen bg-base-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 12, 2026</p>
        </div>

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none">
          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-6">Information We Collect</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you create an account or use our services, we may collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Name and email address</li>
                <li>Profile information and photos</li>
                <li>Reading preferences and history</li>
                <li>Account settings and preferences</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Usage Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We automatically collect information about how you use our platform:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Books you view, search for, or interact with</li>
                <li>Time spent on different sections of the platform</li>
                <li>Device information and browser type</li>
                <li>IP address and general location data</li>
              </ul>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-6">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide and improve our digital library services</li>
              <li>Personalize your reading experience and recommendations</li>
              <li>Communicate with you about your account and our services</li>
              <li>Ensure the security and integrity of our platform</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-6">Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
              <li><strong>Service providers:</strong> With trusted partners who help us operate our platform</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business transfers:</strong> In case of merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-6">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Secure data storage and backup procedures</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-6">Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Update or correct inaccurate personal information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-6">Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Remember your preferences and settings</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Provide personalized content and recommendations</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can control cookie settings through your browser preferences, but some features may not work properly if cookies are disabled.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-6">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-6">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically for any changes.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-6">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-primary/5 p-6 rounded-lg">
              <ul className="text-gray-700 space-y-2">
                <li><strong>Email:</strong> privacy@bookcourier.com</li>
                <li><strong>Address:</strong> Chittagong, Bhaddarhut, Bangladesh</li>
                <li><strong>Phone:</strong> +880 1847901009</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;