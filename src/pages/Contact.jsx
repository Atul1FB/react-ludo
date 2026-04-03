import React from 'react';

const Contact = () => {
  return (
    <div id="Contact" className="bg-green-100 py-20">
      
      <div className="max-w-2xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-green-900 mb-6">
          Contact Us 📩
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-4 items-center">
          
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-800"
          />

          <textarea
            placeholder="Your message"
            rows="4"
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-800"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-900 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
};

export default Contact;