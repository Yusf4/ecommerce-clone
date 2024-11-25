import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8 text-center">
            Last Updated: November 25, 2024
          </p>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              We value your privacy and are committed to protecting your personal data. This policy
              explains how we collect, use, and safeguard your information.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Personal details (e.g., name, email, and contact information).</li>
              <li>Browser cookies to improve your experience on our website.</li>
              <li>Usage data (e.g., time spent on the site, pages visited).</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information is used to provide, maintain, and improve our services, as well as to
              communicate with you about updates or offers.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Sharing Your Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell your personal data. Information is shared only with trusted third parties
              when necessary for providing our services.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access your data and request corrections.</li>
              <li>Opt-out of marketing communications.</li>
              <li>Request deletion of your personal data.</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this policy, please contact us at{" "}
              <a
                href="mailto:youssefmazloum2017@gmail.com"
                className="text-blue-600 hover:underline"
              >
                support@example.com
              </a>
              .
            </p>
          </section>
          <div className="mt-8 text-center">
            <button
              onClick={() => alert("Thank you for reading!")}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Accept & Close
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
