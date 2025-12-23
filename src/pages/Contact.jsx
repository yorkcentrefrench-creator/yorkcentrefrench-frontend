import React from "react";

const Contact = () => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-gray-50 min-h-screen ">
      {/* Heading */}
        <div
        className="w-full h-[260px] md:h-[320px] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
      
      </div>

      <div className="py-12 px-6 lg:px-16">

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We’re here to help! Reach out to us through phone, email, or visit our
        office. Our team will get back to you as soon as possible.
      </p>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Address */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            📍 Our Address
          </h2>
          <p className="text-gray-600">
            221B Baker Street,
            <br />
            London, United Kingdom
          </p>
        </div>

        {/* Email */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📧 Email</h2>
          <p className="text-gray-600">contact@yourwebsite.com</p>
        </div>

        {/* Phone */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📞 Phone</h2>
          <p className="text-gray-600">+91 98765 43210</p>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.34373748854!2d-0.16489596715530464!3d51.52377130210301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acd09b24c2d%3A0xf5d71e7d76f1e25!2s221B%20Baker%20St!5e0!3m2!1sen!2sin!4v1700000000000"
        ></iframe>
      </div>

    
       {/* ⭐ Social Media Section */}
      <div className="text-center mt-12 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Follow Us on Social Media
        </h2>
        <p className="text-gray-600 mb-8">
          Stay connected and follow our latest updates, announcements, and
          offers.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {/* Facebook */}
          <a
            href="#"
            className="bg-white p-5 rounded-full shadow-md hover:shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300 text-xl"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="bg-white p-5 rounded-full shadow-md hover:shadow-xl hover:bg-pink-600 hover:text-white transition-all duration-300 text-xl"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* Twitter */}
          <a
            href="#"
            className="bg-white p-5 rounded-full shadow-md hover:shadow-xl hover:bg-blue-400 hover:text-white transition-all duration-300 text-xl"
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="bg-white p-5 rounded-full shadow-md hover:shadow-xl hover:bg-blue-700 hover:text-white transition-all duration-300 text-xl"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* YouTube */}
          <a
            href="#"
            className="bg-white p-5 rounded-full shadow-md hover:shadow-xl hover:bg-red-600 hover:text-white transition-all duration-300 text-xl"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
