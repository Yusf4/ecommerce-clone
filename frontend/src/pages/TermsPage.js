import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Terms of Service</h1>
          <p className="text-sm text-gray-600 mb-8 text-center">
            Effective Date: November 25, 2024
          </p>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our services, you agree to be bound by these terms. If you do not
              agree, please discontinue use of our services.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Updates will be effective upon
              posting. Continued use of the service implies acceptance of updated terms.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide accurate and complete information during registration.</li>
              <li>Use the service only for lawful purposes.</li>
              <li>Respect intellectual property rights and privacy of others.</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Limitations of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              We are not liable for any damages resulting from the use or inability to use our
              services, including but not limited to incidental or consequential damages.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We may suspend or terminate your account for violating these terms or engaging in
              prohibited activities.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms are governed by and construed in accordance with the laws of your local
              jurisdiction.
            </p>
          </section>
          <div className="mt-8 text-center">
            <button
              onClick={() => alert("Thank you for reviewing our terms!")}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Accept Terms
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
