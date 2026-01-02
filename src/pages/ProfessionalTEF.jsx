import React, { useEffect } from "react";
import { FaCheckCircle, FaBullseye, FaGraduationCap } from "react-icons/fa";

const ProfessionalTEF = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-red-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Achieve Your Goals with{" "}
            <span className="text-red-600">TEF & DELF Exam Preparation</span>{" "}
            in Canada
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto">
            York-Centre French Institute is your trusted destination for TEF and
            DELF exam preparation in Canada, offering expertly designed programs
            to help you achieve internationally recognized French language
            certifications.
          </p>

          <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
            Whether your goal is Canadian immigration, academic advancement, or
            professional growth, our structured exam preparation ensures you are
            confident, exam-ready, and results-focused.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              York-Centre French Institute
            </h2>

            <p className="text-gray-600 leading-relaxed">
              With experienced instructors, proven strategies, and a targeted
              curriculum, our TEF Canada and DELF exam preparation courses are
              built to help learners maximize scores across all language
              competencies.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our programs are ideal for students preparing for immigration,
              higher education, or professional certification in Canada.
            </p>
          </div>

          <div className="bg-red-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              What You’ll Achieve
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <FaBullseye className="text-red-500 mt-1" />
                High-scoring strategies aligned with official exam standards
              </li>
              <li className="flex items-start gap-3">
                <FaGraduationCap className="text-red-500 mt-1" />
                Confidence across listening, reading, writing & speaking
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-red-500 mt-1" />
                Exam readiness through real test simulations
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose York-Centre French Institute for TEF & DELF Preparation?
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <FaCheckCircle className="text-red-500 mt-1" />
                  Expert-led instruction with certified French trainers
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-red-500 mt-1" />
                  Structured exam strategies and scoring techniques
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-red-500 mt-1" />
                  Regular mock tests with detailed performance feedback
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-red-500 mt-1" />
                  Personalized coaching to target individual weaknesses
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <p className="text-gray-600 leading-relaxed">
                Whether you are preparing for TEF Canada for immigration or
                pursuing DELF A1 to B2 certification, our programs are carefully
                aligned with official evaluation criteria to ensure measurable
                progress and exam confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROGRAM DETAILS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Comprehensive TEF Exam Preparation in Canada
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our TEF exam preparation focuses on oral expression, written
              production, and comprehension skills required for immigration and
              professional recognition. Students learn time management,
              response structuring, and examiner expectations.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              DELF Exam Preparation (A1 – B2)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              DELF preparation emphasizes practical communication, academic
              writing, and real-life language usage. Each level is taught step by
              step to ensure confidence in both formal and everyday French.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 py-20 text-white">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your TEF & DELF Preparation Journey Today
          </h2>

          <p className="mb-6 text-white/90">
            Whether you are preparing for TEF Canada to support your PR
            application or pursuing DELF certification to strengthen your
            academic or professional profile, we provide the guidance,
            structure, and expertise you need.
          </p>

          <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            Enrol Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalTEF;
