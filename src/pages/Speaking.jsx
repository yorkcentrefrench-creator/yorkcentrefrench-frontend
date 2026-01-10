import React, { useEffect } from "react";
import {
  FaMicrophoneAlt,
  FaClock,
  FaUserGraduate,
  FaCheckCircle,
  FaLanguage,
} from "react-icons/fa";

const Speaking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Weekly Speaking Classes
          </h1>
          <p className="text-xl text-indigo-600 font-semibold">
            Speak French with Confidence ✨
          </p>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            At <span className="font-semibold text-indigo-600">York-Centre French Institute</span>, 
            we understand that speaking French confidently—especially with a natural accent—can feel challenging.
            Many learners worry about making mistakes or sounding incorrect, but with the right guidance,
            speaking French becomes both achievable and enjoyable.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Our <span className="font-semibold">Weekly French Speaking Classes</span> are designed to help you
            communicate fluently at your own level while improving pronunciation, vocabulary,
            accuracy, and confidence. Whether your goal is daily conversation, professional use,
            or achieving <span className="font-semibold text-indigo-600">CLB 7+</span>, we support you every step of the way.
          </p>
        </div>

        {/* Why Choose */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our Weekly Speaking Classes?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaLanguage />,
                title: "Level-Based Practice",
                desc: "Learn and speak at a pace that suits your current level",
              },
              {
                icon: <FaMicrophoneAlt />,
                title: "Native Accent Guidance",
                desc: "Improve pronunciation and intonation naturally",
              },
              {
                icon: <FaUserGraduate />,
                title: "CLB-Focused Training",
                desc: "Perfect for learners targeting CLB 7+",
              },
              {
                icon: <FaCheckCircle />,
                title: "Supportive Environment",
                desc: "Speak freely without fear of mistakes",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
              >
                <div className="text-indigo-600 text-3xl mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-indigo-600 text-white rounded-3xl p-10 md:p-14 mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Flexible Weekend Schedule
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "1 hour on Saturday",
              "1 hour on Sunday",
              "2 hours per week",
              "8 sessions per month",
            ].map((text, idx) => (
              <div key={idx} className="bg-indigo-500 rounded-xl p-5">
                <FaClock className="mx-auto text-2xl mb-3" />
                <p className="font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tutors */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Learn with Expert French Tutors
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg text-center max-w-4xl mx-auto">
            Speaking French doesn’t have to be difficult—especially when you learn from skilled,
            fluent, and patient tutors. Our instructors guide you through real conversations,
            provide corrections, and help you express yourself clearly and confidently.
            You’ll notice real improvement in a short time.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Start Speaking French with Confidence 🇫🇷
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join our Weekly French Speaking Classes and transform your speaking skills
            in a friendly, motivating, and professional environment.
          </p>

          {/* <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition">
            Enroll Today
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Speaking;
