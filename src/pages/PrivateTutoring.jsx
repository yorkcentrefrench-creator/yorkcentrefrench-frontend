import React, { useEffect } from "react";
import { FaCheckCircle, FaUserGraduate, FaClock, FaChalkboardTeacher } from "react-icons/fa";

const PrivateTutoring = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-red-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Premium <span className="text-red-600">Private French Tutoring</span>{" "}
            in Canada
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto">
            At <strong>York-Centre French Institute</strong>, our private French
            tutoring in Canada is designed for learners who value personalized
            instruction, measurable progress, and flexible learning schedules.
          </p>

          <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
            Whether you are preparing for immigration, academic success, or
            professional advancement, our one-on-one French tutoring ensures
            focused learning tailored entirely to your goals.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Personalized One-on-One French Instruction
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our private tutoring programs in Canada are built around your
              individual learning needs. From beginners developing foundational
              skills to advanced learners refining fluency, each session is
              carefully structured to deliver maximum impact.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              You receive undivided attention from experienced French instructors
              who adapt teaching methods, pace, and content specifically for you.
            </p>
          </div>

          <div className="bg-red-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Who Benefits from Private Tutoring?
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <FaUserGraduate className="text-red-500 mt-1" />
                Students seeking rapid improvement and confidence
              </li>
              <li className="flex items-start gap-3">
                <FaChalkboardTeacher className="text-red-500 mt-1" />
                Professionals needing French for career growth
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-red-500 mt-1" />
                Learners preparing for TEF, TCF, or DELF exams
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Private French Tutoring at York-Centre French Institute?
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <FaCheckCircle className="text-red-500 mt-1" />
                  Fully customized learning plans aligned with your objectives
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-red-500 mt-1" />
                  Certified and experienced French instructors
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-red-500 mt-1" />
                  Exam-focused strategies for TEF, TCF, and DELF
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-red-500 mt-1" />
                  Continuous assessment and progress tracking
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <p className="text-gray-600 leading-relaxed">
                Our private French tutoring in Canada offers the flexibility and
                depth that group classes cannot. Each session is results-driven,
                practical, and aligned with real-world language use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FLEXIBILITY ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Flexible Scheduling & Learning Formats
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Choose between online or in-person private French tutoring in
              Canada. Our flexible schedules allow you to learn at your
              convenience without compromising quality or consistency.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Focused Mentorship for Faster Results
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With dedicated mentorship, learners progress faster, build strong
              communication skills, and gain confidence in both professional and
              everyday French usage.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 py-20 text-white">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Private French Tutoring Journey Today
          </h2>

          <p className="mb-6 text-white/90">
            Enrol in private French tutoring at York-Centre French Institute and
            experience personalized instruction designed to help you succeed in
            Canada.
          </p>

          <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            Book a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default PrivateTutoring;
