import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaClock,
  FaEnvelope,
  FaRegCalendarCheck,
  FaTimes,
} from "react-icons/fa";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer className="relative bg-gradient-to-br from-[#0b1d2d] via-[#121a24] to-[#2a0f14] text-gray-200 pt-16 pb-10 px-6 overflow-hidden">
        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.14),transparent_60%)]"></div>

        {/* Disclaimer */}
        <div className="relative max-w-5xl mx-auto text-center text-sm leading-relaxed mb-14 text-gray-300">
          Disclaimer: York-Center French Institute is a private language school
          and not a Designated Learning Institution (DLI). Our courses are
          non-accredited and do not provide immigration or academic
          certification. Students are responsible for maintaining their own
          immigration status.
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* ================= LEFT ================= */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              York-Center French Institute
            </h2>

            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Helping students achieve CLB 7+ and Canadian Permanent Residency
              through structured TEF / TCF French training since 2018.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-lg mb-6">
              {[FaInstagram, FaYoutube, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center
                  hover:bg-red-500 hover:text-white transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ================= MIDDLE ================= */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "FAQ", path: "/faq" },
                // { label: "Levels", path: "/levels" },
                // { label: "Classes", path: "/classes" },
                { label: "Contact Us", path: "/contact" },
                // { label: "Course Information", path: "/courses" },
                { label: "Terms & Conditions", path: "/terms-and-conditions" },
                { label: "Privacy Policy", path: "/privacy-policy" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="hover:text-red-400 hover:translate-x-1 transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= RIGHT ================= */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact</h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FaClock className="text-red-400" />
                Mon – Fri : 9 AM – 9 PM
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-red-400" />
                yorkcentrefrench@gmail.com
              </li>

              <li
                onClick={() => setOpen(true)}
                className="flex items-center gap-3 cursor-pointer hover:text-red-400 transition-all"
              >
                <FaRegCalendarCheck className="text-red-400" />
                Book a Free Demo Class
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative mt-16 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} York-Center French Institute. All rights
          reserved.
        </div>
      </footer>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-[#0f172a] max-w-md w-full rounded-xl p-6 relative animate-fadeIn border border-white/10">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <FaTimes />
            </button>

            <h3 className="text-xl font-bold text-white mb-4">
              Book a Free Demo Class
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 transition py-3 rounded font-semibold text-white"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
