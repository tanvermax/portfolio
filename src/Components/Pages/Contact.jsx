import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen w-screen bg-black text-white  mx-auto p-36">
    {/* Contact Info Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl">
      {/* Phone */}
      <div className="bg-gray-900 p-6 rounded-md text-center">
        <div className="text-green-400 text-4xl">📞</div>
        <h2 className="text-xl font-bold mt-2">Phone</h2>
        <p className="text-gray-400 mt-1">Lorem ipsum eros justo, posuer.</p>
        <p className="text-gray-300 font-semibold mt-1">123-45664-746846</p>
      </div>

      {/* Location */}
      <div className="bg-gray-900 p-6 rounded-md text-center">
        <div className="text-green-400 text-4xl">📍</div>
        <h2 className="text-xl font-bold mt-2">Location</h2>
        <p className="text-gray-400 mt-1">Dhaka 102, m eros justo.</p>
        <a href="#" className="text-green-400 font-semibold mt-1">View on map</a>
      </div>

      {/* Email */}
      <div className="bg-gray-900 p-6 rounded-md text-center">
        <div className="text-green-400 text-4xl">📧</div>
        <h2 className="text-xl font-bold mt-2">Monday - Sunday</h2>
        <p className="text-gray-400 mt-1">Dhaka 102, m eros justo.</p>
        <p className="text-gray-300 font-semibold mt-1">hfavouriteemail@gmail.com</p>
      </div>
    </div>

    {/* Contact Form */}
    <div className="max-w-4xl w-full">
      <form className=" p-6 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name Here" className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white w-full" />
          <input type="text" placeholder="Subject" className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white w-full" />
        </div>
        <input type="email" placeholder="Email" className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white w-full mt-4" />
        <textarea placeholder="Your Message Here" className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white w-full mt-4 h-32"></textarea>
        <button type="submit" className="mt-4 w-full bg-emerald-500 py-3 rounded-md text-black font-bold hover:bg-emerald-600 transition">
          Submit
        </button>
      </form>
    </div>
  </div>
  );
};

export default Contact;
