import React, {useState} from "react";
import {
  FaLaptopCode,
  FaBolt,
  FaUserFriends,
  FaChalkboardTeacher,
  FaClock,
  FaCertificate,
  FaStar,
} from "react-icons/fa";
import TfaApproach from "../component/TfaApproach";
import ReviewCard from "../component/ReviewCard";
import FAQSection from "../component/FAQSection";
import { useNavigate } from "react-router-dom";
import { loadRazorpay } from "../utils/razorpay";
import DemoModal from "../component/DemoModal";
const reviews = [
  {
    initial: "M",
    name: "Marie Dubois",
    date: "15 February 2025",
    review:
      "The classes are very well-structured and easy to follow. The instructor explains French concepts clearly and with real-life examples.",
    color: "#f87171",
  },
  {
    initial: "L",
    name: "Lucas Martin",
    date: "3 August 2024",
    review:
      "I gained a lot of confidence in speaking French. The lessons are interactive, practical, and focused on correct pronunciation.",
    color: "#60a5fa",
  },
  {
    initial: "S",
    name: "Sophia Laurent",
    date: "21 May 2025",
    review:
      "Excellent learning environment! The teacher is patient, motivating, and ensures everyone understands before moving forward.",
    color: "#a78bfa",
  },
];


const CourseInfo = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openDemo, setOpenDemo] = useState(false);
  return (
    <div className="w-full bg-white text-gray-800">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-red-50 to-white ">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Canada’s Leading{" "}
              <span className="text-red-600">Fast-Growth</span>
              <br />
              French Language Institute 🇨🇦
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Canadian-owned since <strong>2018</strong>, trusted by{" "}
              <strong>1,000+ learners</strong> with{" "}
              <strong>200+ certified tutors</strong>.
            </p>

            <p className="mt-4 text-gray-600">
              Achieve <strong>CLB 7+</strong> through structured TEF / TCF
              preparation and secure Canadian PR confidently.
            </p>

           <button
              onClick={() => setOpenDemo(true)}
              className="mt-8 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:shadow-lg transition"
            >
              Book Free Demo
            </button>
          </div>

          {/* Image */}
          <div className="relative py-5">
            <img
            src="./student.jpg"
              alt="Students learning French"
              className="rounded-2xl shadow-lg w-full h-[720px] object-cover"
            />
            <div className="absolute -bottom-6 left-6 bg-white p-5 rounded-xl  border border-red-100">
              <p className="text-sm text-gray-500">Success Rate</p>
              <p className="text-2xl font-bold text-red-600">92%</p>
              <p className="text-xs text-gray-500">CLB 7+ Achievers</p>
            </div>
          </div>
        </div>
      </section>
      <DemoModal open={openDemo} onClose={() => setOpenDemo(false)} />

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Offer
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLaptopCode />,
                text: "Specialized TEF & TCF Exam Prep (A1–B2)",
              },
              {
                icon: <FaBolt />,
                text: "Fast-Track Programs (6–10 Months)",
              },
              {
                icon: <FaUserFriends />,
                text: "Live One-on-One & Small Groups",
              },
              {
                icon: <FaChalkboardTeacher />,
                text: "Personalized Coaching & Mentorship",
              },
              {
                icon: <FaClock />,
                text: "Flexible Morning & Evening Schedules",
              },
              {
                icon: <FaCertificate />,
                text: "C1 & C2 Certified Instructors",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group border rounded-xl p-6 bg-white flex gap-4 items-start
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-red-600 text-3xl group-hover:scale-110 transition">
                  {item.icon}
                </span>
                <p className="font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-red-50 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-red-600">200+</p>
            <p className="font-semibold">Certified Tutors</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-red-600">1,000+</p>
            <p className="font-semibold">Active Learners</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-red-600 flex justify-center gap-1">
              4.9 <FaStar />
            </p>
            <p className="font-semibold">Average Rating</p>
          </div>
        </div>
      </section>

      {/* ================= STUDENT AVATARS ================= */}
      <section className="py-12">
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Learners from Toronto, Vancouver, Calgary & Montreal
          </p>
          <div className="flex justify-center gap-4">
            {[10, 20, 30, 40, 50].map((i) => (
              <img
                key={i}
                src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                alt="Student"
                className="w-12 h-12 rounded-full border-2 border-white shadow"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
<section className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-900 mb-4">
      Online French Class Plans
    </h2>

    <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
      Structured programs designed for Canadian immigration success & real-world fluency
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <PricingCard
        title="Group Classes"
        price="$270"
        duration="10–12 Months"
        features={[
          "20 Classes / Month",
          "Mon–Fri (8–9 PM EST)",
          "4–5 Learners / Batch",
          "A1 to B2 Coverage",
        ]}
      />

      <PricingCard
        title="Individual"
        price="$320"
        duration="8–10 Months"
        highlight
        features={[
          "12 Classes / Month",
          "Flexible Timings",
          "Dedicated 1:1 Mentor",
          "A1 to B2 Coverage",
        ]}
      />

      <PricingCard
        title="Intensive 1:1"
        price="$430"
        duration="6–8 Months"
        features={[
          "20 Classes / Month",
          "Fast-Track Progress",
          "Daily Practice",
          "A1 to B2 Coverage",
        ]}
      />

      <PricingCard
        title="Speaking Booster"
        price="$150"
        duration="6–8 Months"
        features={[
          "8 Speaking Classes",
          "Pronunciation Focus",
          "Small Groups / 1:1",
          "Confidence Building",
        ]}
      />
    </div>
  </div>
</section>






      <TfaApproach />

      {/* ================= REVIEWS ================= */}
      <section className="py-20">
        <h2 className="text-center text-3xl font-bold mb-12">
          Trusted by Learners Across Canada
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {reviews.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </section>

      <FAQSection />
    </div>
  );
};

/* ================= PRICING CARD ================= */


const PricingCard = ({ title, price, duration, features, highlight }) => {

  const handleEnroll = async () => {
    try {
      const response = await fetch(
        "https://york-centre-api.onrender.com/payment/enroll",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ plan: title }),
        }
      );

      const data = await response.json();
      if (!response.ok || !data.redirectUrl) {
        throw new Error(data.message || "Unable to redirect");
      }

      window.location.href = data.redirectUrl;
    } catch (error) {
      alert(error.message || "Something went wrong");
    }
  };

  return (
    <div
      className={`relative rounded-[28px] p-8 bg-white shadow-lg
      transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
      ${highlight
        ? "ring-2 ring-indigo-600 scale-105"
        : "ring-1 ring-slate-200"
      }`}
    >
      {/* Badge */}
      {highlight && (
        <span
          className="absolute -top-4 left-1/2 -translate-x-1/2
          bg-indigo-600 text-white text-xs font-semibold
          px-6 py-1.5 rounded-full shadow-md"
        >
          Best Value
        </span>
      )}

      {/* Title */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500 mt-1">{duration}</p>
      </div>

      {/* Price */}
      <div className="text-center my-8">
        <p className="text-5xl font-extrabold text-indigo-700">
          {price}
        </p>
        <p className="text-sm text-slate-500 mt-1">per month</p>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />

      {/* Features */}
      <ul className="space-y-3 text-sm text-slate-700">
        {features.map((f, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={handleEnroll}
        className={`mt-10 w-full py-3 cursor-pointer rounded-xl font-semibold transition
        ${highlight
          ? "bg-indigo-600 text-white hover:bg-indigo-700"
          : "bg-slate-900 text-white hover:bg-black"
        }`}
      >
        Enroll Now
      </button>
    </div>
  );
};






export default CourseInfo;
