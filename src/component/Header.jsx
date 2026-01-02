import { useState, useRef, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showLevels, setShowLevels] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowLevels(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        
        {/* ================= LOGO ================= */}
      {/* ================= LOGO + TEXT ================= */}
<Link to="/" className="flex items-center gap-4 text-left">
  <img
    src="/logo2.svg"
    alt="York-Center French Institute"
    className="h-16 md:h-20 w-auto object-contain"
  />

  
</Link>



        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center gap-8 font-semibold text-[15px]">
          <Link className="hover:text-red-500 transition" to="/about">
            About Us
          </Link>
          <Link className="hover:text-red-500 transition" to="/faq">
            FAQ
          </Link>

          {/* LEVELS DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowLevels(!showLevels)}
              className="flex items-center gap-1 hover:text-red-500 transition"
            >
              Levels
              <span className="text-xs">▾</span>
            </button>

            {showLevels && (
              <div className="absolute left-0 mt-4 w-[360px] bg-white shadow-xl rounded-xl p-3 z-50 border">
                {[
                  { path: "/beginner", label: "BEGINNER (A1 & A2)" },
                  { path: "/intermediate", label: "INTERMEDIATE (B1)" },
                  { path: "/professional", label: "PROFESSIONAL (B2)" },
                  { path: "/group-classes", label: "GROUP CLASSES" },
                  { path: "/private-tutoring", label: "PRIVATE TUTORING" },
                  // { path: "/professional-tef", label: "PROFESSIONAL (B2 + TEF)" },
                  { path: "/professional-tef", label: "TEF & DELF EXAM PREPARATION" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setShowLevels(false)}
                    className="block px-4 py-2 rounded-md hover:bg-red-50 hover:text-red-600 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link className="hover:text-red-500 transition" to="/course-info">
            Classes
          </Link>
          <Link className="hover:text-red-500 transition" to="/whatsapp-community">
            Whatsapp Community
          </Link>
          <Link className="hover:text-red-500 transition" to="/contact">
            Contact Us
          </Link>
        </nav>

        {/* ================= CTA ================= */}
        <Link
          to="/course-info"
          className="hidden lg:inline-flex items-center justify-center bg-red-500 text-white px-6 py-2 rounded-lg text-sm font-semibold shadow hover:bg-red-600 transition"
        >
          COURSE INFORMATION
        </Link>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl text-gray-700"
        >
          {open ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="lg:hidden bg-gradient-to-br from-red-500 to-red-600 text-white px-6 py-6 animate-slideDown">
          <nav className="flex flex-col gap-4 font-semibold">
            <Link to="/about">About Us</Link>
            <Link to="/faq">FAQ</Link>

            <details>
              <summary className="cursor-pointer">Levels</summary>
              <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                <Link to="/beginner">BEGINNER (A1 & A2)</Link>
                <Link to="/intermediate">INTERMEDIATE (B1)</Link>
                <Link to="/professional">PROFESSIONAL (B2)</Link>
                <Link to="/group-classes">GROUP CLASSES</Link>
                <Link to="/private-tutoring">PRIVATE TUTORING</Link>
                <Link to="/professional-tef">PROFESSIONAL (B2 + TEF)</Link>
                <Link to="/exam-preparation">TEF & DELF EXAM PREPARATION</Link>
              </div>
            </details>

            <Link to="/course-info">Classes</Link>
            <Link to="/whatsapp-community">Whatsapp Community</Link>
            <Link to="/contact">Contact Us</Link>

            <Link
              to="/course-info"
              className="mt-4 bg-white text-black px-5 py-2 rounded-lg text-center font-semibold"
            >
              COURSE INFORMATION
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
