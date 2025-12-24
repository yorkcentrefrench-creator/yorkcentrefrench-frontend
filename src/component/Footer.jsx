import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaRegCalendarCheck,
  FaMapMarkerAlt,
  FaAddressCard,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 pt-16 pb-10 px-6">
      {/* ================= DISCLAIMER ================= */}
      <div className="max-w-5xl mx-auto text-center text-sm leading-relaxed mb-14 text-gray-400">
        Disclaimer: York-Center French Institute is a private language school and
        not a Designated Learning Institution (DLI). Our courses are
        non-accredited and do not provide immigration or academic certification.
        Students are responsible for maintaining their own immigration status.
        This website’s content is for educational purposes only and is not legal
        or immigration advice.
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
        {/* ================= LEFT ================= */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            York-Center French Institute
          </h2>

          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Helping students achieve CLB 7+ and Canadian Permanent Residency
            through structured TEF / TCF French training since 2018.
          </p>

          {/* Social */}
          <div className="flex gap-4 text-lg mb-6">
            {[FaInstagram, FaYoutube, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-[#1f1f1f] flex items-center justify-center
                hover:bg-red-500 hover:text-white transition cursor-pointer"
              >
                <Icon />
              </div>
            ))}
          </div>

          {/* Logo */}
          <img
            src="/mnt/data/8712d3d4-3787-4ac8-8988-b564f3bf7dd1.png"
            alt="Logo"
            className="w-44 mb-6"
          />

          {/* Map */}
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.056189108301!2d-79.760448024108!3d43.68952505114315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b14614a2972d1%3A0x6f8d199bceb8590d!2s499%20Main%20St%20S%2C%20Brampton%2C%20ON%20L6Y%201N7%2C%20Canada!5e0!3m2!1sen!2sca!4v1707952771292"
            className="w-full h-44 rounded-lg border border-gray-700"
            loading="lazy"
          ></iframe> */}
        </div>

        {/* ================= MIDDLE ================= */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {[
              "About Us",
              "FAQ",
              "Levels",
              "Classes",
              "Whatsapp Community",
              "Contact Us",
              "Course Information",
              "Blog",
              "Terms & Conditions",
              "Privacy Policy",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-red-500 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= RIGHT ================= */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Contact</h3>

          <ul className="space-y-4 text-sm">
            {/* <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-red-500 mt-1" />
              <div>
                <p>+1 (437) 665-3304</p>
                <p>+1 (365) 293-6330</p>
              </div>
            </li> */}

            <li className="flex items-center gap-3">
              <FaClock className="text-red-500" />
              Mon – Fri : 9 AM – 9 PM
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              yorkcentrefrench@gmail.com
            </li>

            <li className="flex items-center gap-3 cursor-pointer hover:text-red-500 transition">
              <FaRegCalendarCheck className="text-red-500" />
              Book a Free Demo Class
            </li>

            {/* Locations */}
            {/* <li className="pt-4 border-t border-gray-700">
              <p className="font-semibold text-white mb-2">
                Brampton Location
              </p>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                <span>
                  499 Main Street, Brampton, ON L6Y 1N7, Canada
                </span>
              </div>
            </li>

            <li>
              <p className="font-semibold text-white mb-2">
                Toronto Location
              </p>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                <span>
                  3401 Dufferin St, North York, ON M6A 2T9, Canada
                </span>
              </div>
            </li> */}
          </ul>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="mt-16 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} York-Center French Institute. All rights
        reserved.
      </div>
    </footer>
  );
}
