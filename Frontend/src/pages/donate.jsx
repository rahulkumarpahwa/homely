import React from "react";

const Donate = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-8 mb-16">
        <div className="w-full max-w-xl bg-white border-4 border-[#005c7a] rounded-2xl p-8 shadow-lg">
          <h3 className="mb-6 text-2xl font-bold text-[#005c7a]">
            Donation Form
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="donor[name]"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005c7a]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="donor[email]"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005c7a]"
              />
            </div>
            <div>
              <label htmlFor="address" className="block font-medium mb-1">
                Address
              </label>
              <textarea
                id="address"
                name="donor[address]"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005c7a]"
              />
            </div>
            <div>
              <label htmlFor="paymentMethod" className="block font-medium mb-1">
                Payment Method
              </label>
              <select
                id="paymentMethod"
                name="donor[paymentMethod]"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005c7a]"
              >
                <option value="">Pay by...</option>
                <option>GPay</option>
                <option>PhonePe</option>
                <option>Patym</option>
                <option>UPI</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#005c7a] text-white font-bold py-2 rounded hover:bg-[#004156] transition"
            >
              Donate
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donate;
