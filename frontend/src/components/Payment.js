import OrderSummary from './OrderSummary'; // Ensure OrderSummary is imported correctly

const Payment = ({ enroll }) => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Container to hold form and order summary side by side */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        
        {/* Payment Form */}
        <form onSubmit={enroll} className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md space-y-4">
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* State */}
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Card Number */}
          <div>
            <label htmlFor="card" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              name="card"
              id="card"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mt-4">
            Submit Payment
          </button>
        </form>

        {/* Order Summary */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-md shadow-md">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Payment;
