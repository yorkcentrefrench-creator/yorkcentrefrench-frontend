import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import {
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaRegCalendarCheck,
  FaMapMarkerAlt,
  FaAddressCard,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1d] text-white pt-6 pb-10 px-6">
      {/* Disclaimer */}
      <div className="text-center mx-auto text-gray-300 text-[15px] leading-relaxed mb-10">
        Disclaimer: York-Center French Institute is a private language school
        and not a Designated Learning Institution (DLI). Our courses are
        non-accredited and do not provide immigration or academic certification.
        Students are responsible for maintaining their own immigration status.
        This website’s content is for educational purposes only and is not legal
        or immigration advice.
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* --- LEFT COLUMN --- */}
        <div>
          {/* Title */}
          <h2 className="text-2xl font-bold mb-4">
            York-Center French Institute
          </h2>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl mb-6">
            <FaInstagram className="cursor-pointer hover:text-red-500" />
            <FaYoutube className="cursor-pointer hover:text-red-500" />
            <FaLinkedinIn className="cursor-pointer hover:text-red-500" />
          </div>

          {/* Logo */}
          <div className="flex justify-start mb-6">
            <img
              src="/mnt/data/8712d3d4-3787-4ac8-8988-b564f3bf7dd1.png"
              alt="Logo"
              className="w-40 h-20 object-contain border-red-600 rounded-full p-2"
            />
          </div>

          {/* Google Map */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.056189108301!2d-79.760448024108!3d43.68952505114315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b14614a2972d1%3A0x6f8d199bceb8590d!2s499%20Main%20St%20S%2C%20Brampton%2C%20ON%20L6Y%201N7%2C%20Canada!5e0!3m2!1sen!2sca!4v1707952771292"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="rounded"
            ></iframe>
          </div>
        </div>

        {/* --- MIDDLE COLUMN (PAGES) --- */}
        <div>
          <h3 className="text-xl font-bold mb-5">Pages</h3>
          <ul className="space-y-3 text-gray-300">
            <li>About Us</li>
            <li>FAQ</li>
            <li className="cursor-pointer">Levels ▾</li>
            <li>Classes</li>
            <li>Whatsapp Community</li>
            <li>Contact Us</li>
            <li>Course Information</li>
            <li>Blog</li>
            <li>Terms and Conditions of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* --- RIGHT COLUMN (CONTACT) --- */}
        <div>
          <h3 className="text-xl font-bold mb-5">Contact</h3>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-500" /> +1 (437)-665-3304
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-500" /> +1 365-293-6330
            </li>
            <li className="flex items-center gap-3">
              <FaClock className="text-red-500" /> Mon - Fri : 9 am - 9 pm
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />{" "}
yorkcentrefrench@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaRegCalendarCheck className="text-red-500" /> Book a Free Demo
              Class
            </li>

            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" /> TFA – French Language
              School
            </li>

            <li className="flex items-center gap-3">
              <FaAddressCard className="text-red-500" /> 499 Main Street,
              Brampton, ON L6Y 1N7, Canada
            </li>

            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" /> TFA – French Classes
              Toronto
            </li>

            <li className="flex items-center gap-3">
              <FaAddressCard className="text-red-500" /> 3401 Dufferin St, North
              York, ON M6A 2T9, Canada
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
