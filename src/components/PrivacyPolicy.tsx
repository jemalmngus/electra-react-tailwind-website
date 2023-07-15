import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Privacy Policy</h2>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Information We Collect</h3>
          <p className="mb-4">
            We collect certain personal information from visitors to our expo website, including but not limited to:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Company name</li>
            <li>Job title</li>
            <li>Any other information provided voluntarily through contact forms or registration forms</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">How We Use Your Information</h3>
          <p className="mb-4">
            The personal information collected from visitors is used for the following purposes:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Processing registrations for the expo</li>
            <li>Providing information about the expo and related events</li>
            <li>Sending promotional materials and updates</li>
            <li>Responding to inquiries and providing customer support</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Data Security</h3>
          <p className="mb-4">
            We take appropriate security measures to protect your personal information from unauthorized access or disclosure.
            However, please note that no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h3 className="text-xl font-semibold mb-4">Disclosure of Information</h3>
          <p className="mb-4">
            We may disclose your personal information to third parties in the following circumstances:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights or property</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Your Choices and Rights</h3>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Access and update your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of receiving promotional materials</li>
            <li>Object to the processing of your personal information</li>
            <li>Withdraw consent for the processing of your personal information</li>
            <li>Request data portability</li>
          </ul>

          <p className="mb-4">
            For more information about your privacy rights or to exercise any of these rights, please contact us using the provided contact details.
          </p>

          <h3 className="text-xl font-semibold mb-4">Cookies</h3>
          <p className="mb-4">
            Our website may use cookies to enhance your browsing experience. You can manage and delete cookies through your browser settings.
          </p>

          <h3 className="text-xl font-semibold mb-4">Third-Party Links</h3>
          <p className="mb-4">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
            Please review the privacy policies of those websites before providing any personal information.
          </p>

          <h3 className="text-xl font-semibold mb-4">Changes to this Privacy Policy</h3>
          <p>
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
