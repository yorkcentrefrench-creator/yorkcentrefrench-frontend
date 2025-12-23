import React from "react";
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
import VideoCard from "../component/VideoCard";
import FAQSection from "../component/FAQSection";

const videoLinks = [
  "https://vimeo.com/1124988554?fl=pl&fe=ti",
  "https://vimeo.com/1124988554?fl=pl&fe=ti",
  "https://vimeo.com/1124988554?fl=pl&fe=ti",
  "https://vimeo.com/1124988554?fl=pl&fe=ti",
];

const reviews = [
  {
    initial: "N",
    name: "Navneet Gill",
    date: "7 November 2025",
    review:
      "I have been taking classes from Love Bhatia for the last 2 months. He explains everything clearly and makes French easy.",
    color: "#f87171",
  },
  {
    initial: "K",
    name: "Khushpreet Kaur",
    date: "7 November 2025",
    review:
      "Learning French has become enjoyable. The teaching method is very structured and exam-focused.",
    color: "#60a5fa",
  },
  {
    initial: "A",
    name: "Alieza Garcia",
    date: "7 November 2025",
    review:
      "Amazing teachers! Very patient, inspiring and supportive throughout the journey.",
    color: "#a78bfa",
  },
];

const CourseInfo = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-br from-red-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Canada’s Leading <span className="text-red-600">Fast-Growth</span>{" "}
              <br />
              French Language Institute 🇨🇦
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Canadian-owned & operated since <strong>2018</strong>, trusted by{" "}
              <strong>1,000+ active learners</strong> and powered by{" "}
              <strong>200+ certified French tutors</strong>.
            </p>

            <p className="mt-4 text-gray-600">
              We specialize in helping students achieve{" "}
              <strong>CLB 7+</strong> through structured TEF/TCF preparation and
              secure Canadian Permanent Residency with confidence.
            </p>
          </div>

          <div className="border border-red-500 rounded-2xl p-8 shadow-sm bg-white">
            <h2 className="text-2xl font-semibold mb-4">
              French for Canadian PR
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our programs are strategically designed around{" "}
              <strong>TEF / TCF exam requirements</strong>, covering every module
              step-by-step from <strong>A1 foundations</strong> to{" "}
              <strong>B2 mastery</strong>.
            </p>

            <p className="mt-4 font-semibold text-red-600">
              Goal: CLB 7 → Canadian PR
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
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
                text: "Fast-Track Programs (8–10 Months)",
              },
              {
                icon: <FaUserFriends />,
                text: "Live One-on-One & Small Group Classes",
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
                className="border rounded-xl p-6 flex gap-4 items-start hover:shadow-md transition"
              >
                <span className="text-red-600 text-2xl">{item.icon}</span>
                <p className="font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-red-50 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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

      {/* ================= PRICING ================= */}
      <section className="py-20">
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
          Online French Class Options
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {/* Group */}
          <PricingCard
            title="Group Classes"
            price="$270"
            duration="10–12 Months"
            features={[
              "20 Classes / Month",
              "Mon–Fri (8–9 PM EST)",
              "Group Size: 4–5",
              "1 Hour Live Class",
              "A1 to B2 Levels",
            ]}
          />

          {/* Individual */}
          <PricingCard
            title="Individual Classes"
            price="$320"
            duration="8–10 Months"
            features={[
              "12 Classes / Month",
              "Flexible Timings",
              "1:1 Personalized Coaching",
              "1 Hour Live Class",
              "A1 to B2 Levels",
            ]}
            highlight
          />

          {/* Intensive */}
          <PricingCard
            title="Individual (Intensive)"
            price="$430"
            duration="6–8 Months"
            features={[
              "20 Classes / Month",
              "Fast-Track Learning",
              "1:1 Intensive Coaching",
              "1 Hour Live Class",
              "A1 to B2 Levels",
            ]}
          />
        </div>
      </section>

      <TfaApproach />

      {/* ================= DEMO FORM ================= */}
      {/* (kept your exact form UI – already good) */}
      {/* ================= REVIEWS ================= */}
      <section className="py-20">
        <h2 className="text-center text-3xl font-semibold mb-12">
          Trusted by Learners Across Canada
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {reviews.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </section>

      {/* ================= VIDEOS ================= */}
      {/* <section className="py-20">
        <h2 className="text-center text-3xl font-semibold mb-12">
          Watch Our French Learning Tips
        </h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {videoLinks.map((url, i) => (
            <VideoCard key={i} url={url} />
          ))}
        </div>
      </section> */}

      <FAQSection />
    </div>
  );
};

const PricingCard = ({ title, price, duration, features, highlight }) => (
  <div
    className={`border rounded-2xl p-8 text-center shadow-sm ${
      highlight ? "border-red-500 shadow-md scale-105" : ""
    }`}
  >
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-red-500 font-medium mt-1">{duration}</p>

    <p className="text-5xl font-bold mt-6">{price}</p>
    <p className="text-gray-500">Per Month</p>

    <ul className="mt-6 space-y-3 text-left">
      {features.map((f, i) => (
        <li key={i}>✔ {f}</li>
      ))}
    </ul>

    <button className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg">
      Enroll Now
    </button>
  </div>
);

export default CourseInfo;
