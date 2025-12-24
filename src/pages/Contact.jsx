import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ================= HERO ================= */}
      <div
        className="w-full h-[260px] md:h-[340px] flex items-center justify-center text-white bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold">
          Contact Us
        </h1>
      </div>

      <div className="py-16 px-6 lg:px-16 max-w-7xl mx-auto">
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Have questions about our French programs or Canadian PR preparation?
          Reach out to us — our team will be happy to assist you.
        </p>

        {/* ================= CONTACT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <FaMapMarkerAlt />,
              title: "Our Address",
              text: "221B Baker Street, London, United Kingdom",
            },
            {
              icon: <FaEnvelope />,
              title: "Email Us",
              text: "yorkcentrefrench@gmail.com",
            },
            {
              icon: <FaPhoneAlt />,
              title: "Call Us",
              text: "+91 98765 43210",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl
              hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-100
              text-red-600 flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ================= FORM + MAP ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-24">
          {/* FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white
                font-semibold py-3 rounded-lg flex items-center justify-center
                gap-2 transition shadow-lg hover:shadow-xl"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>

          {/* MAP */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
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
        </div>

        {/* ================= SOCIAL ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Follow Us on Social Media
          </h2>
          <p className="text-gray-600 mb-8">
            Stay updated with our latest classes, tips, and announcements.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            {[ 
              // { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
              // { icon: <FaInstagram />, color: "hover:bg-pink-600" },
              { icon: <FaTwitter />, color: "hover:bg-blue-400" },
              { icon: <FaLinkedinIn />, color: "hover:bg-blue-700" },
              { icon: <FaYoutube />, color: "hover:bg-red-600" },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white p-5 rounded-full shadow-md
                hover:shadow-xl ${item.color} hover:text-white
                transition-all duration-300 cursor-pointer text-xl`}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
