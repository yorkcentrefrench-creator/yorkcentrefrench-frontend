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
    <header className="sticky top-0 text-black w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">

        {/* LOGO */}
        <Link 
        to ="/"
        className="font-semibold text-lg leading-5">
          York-Center <span className="">French <br/> Institute</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex gap-8 font-semibold text-[15px] items-center">
          <Link to="/about">About Us</Link>
          <Link to="/faq">FAQ</Link>

          {/* FIXED CLICK DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowLevels(!showLevels)}
              className="hover:opacity-80"
            >
              Levels ▾
            </button>

            {showLevels && (
              <div
                className="absolute left-0 mt-3 w-[350px] bg-white text-black shadow-xl rounded-md p-3 z-50"
              >
                {[
                  { path: "/beginner", label: "BEGINNER (A1 & A2)" },
                  { path: "/intermediate", label: "INTERMEDIATE (B1)" },
                  { path: "/professional", label: "PROFESSIONAL (B2)" },
                  { path: "/group-classes", label: "GROUP CLASSES" },
                  { path: "/private-tutoring", label: "PRIVATE TUTORING" },
                  { path: "/professional-tef", label: "PROFESSIONAL (B2 + TEF)" },
                  { path: "/exam-preparation", label: "TEF & DELF EXAM PREPARATION" }
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setShowLevels(false)} // CLOSE ON CLICK
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/course-info">Classes</Link>
          <Link to="/whatsapp-community">Whatsapp Community</Link>
          <Link to="/contact">Contact Us</Link>
          {/* <Link to="/blog">Blog</Link> */}
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </nav>

        {/* CTA */}
        <Link
          to="/course-info"
          className="hidden lg:block border px-6 py-2 rounded-md text-sm font-semibold shadow"
        >
          COURSE INFORMATION
        </Link>

        {/* MOBILE MENU TOGGLE */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-3xl">
          {open ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-[#db3939] text-white px-6 pb-6 animate-slideDown">
          <nav className="flex flex-col gap-4 font-semibold mt-2">
            <Link to="/about">About Us</Link>
            <Link to="/faq">FAQ</Link>

            <details>
              <summary className="cursor-pointer">Levels</summary>
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <Link to="/beginner">BEGINNER (A1 & A2)</Link>
                <Link to="/intermediate">INTERMEDIATE (B1)</Link>
                <Link to="/professional">PROFESSIONAL (B2)</Link>
                <Link to="/group-classes">GROUP CLASSES</Link>
                <Link to="/private-tutoring">PRIVATE TUTORING</Link>
                <Link to="/professional-tef">PROFESSIONAL (B2 + TEF)</Link>
                <Link to="/exam-preparation">TEF & DELF EXAM PREPARATION</Link>
              </div>
            </details>

            <Link to="/classes">Classes</Link>
            <Link to="/whatsapp">Whatsapp Community</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>

            <Link
              to="/course-info"
              className="border px-5 py-2 rounded-md mt-3 bg-white text-black"
            >
              COURSE INFORMATION
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
