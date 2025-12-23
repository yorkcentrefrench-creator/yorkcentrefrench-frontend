import React from "react";
import {
  FiUsers,
  FiCheckCircle,
  FiBookOpen,
  FiTarget,
  FiAward,
  FiStar,
  FiTrendingUp,
  FiClock,
} from "react-icons/fi";

const AboutUs = () => {
  return (
    <div className="w-full text-gray-800">
      {/* HERO SECTION */}
      <div
        className="w-full h-[300px] md:h-[420px] bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg')",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          About York-Centre French Institute
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl">
          Excellence in French Language Education
        </p>
      </div>

      {/* EXCELLENCE SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Redefining the Way French is Learned
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
          At York-Centre French Institute, we redefine the way French is learned.
          Built on a foundation of quality, precision, and measurable results,
          we deliver an elevated learning experience for those who seek true
          mastery—not just basic instruction.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto mt-5">
          Recognized for offering the <strong>best French classes in Canada</strong>,
          our expertly structured programs combine academic excellence with
          real-world communication skills—helping learners progress with
          confidence, clarity, and fluency.
        </p>
      </section>

      {/* DISTINGUISHED LEARNING EXPERIENCE */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            A Distinguished Learning Experience
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <FiAward className="text-red-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Instruction</h3>
              <p className="text-gray-600">
                Highly qualified language professionals delivering precision,
                fluency, and long-term retention through thoughtfully designed lessons.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <FiUsers className="text-red-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Personalized Learning Pathways
              </h3>
              <p className="text-gray-600">
                One-on-one tutoring and small group classes tailored to individual
                goals, pace, and proficiency for tangible progress.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <FiTarget className="text-red-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Advanced Exam Preparation
              </h3>
              <p className="text-gray-600">
                Specialized preparation for TEF Canada & DELF (A1–B2) with
                targeted strategies and continuous evaluation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <FiTrendingUp className="text-red-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Practical & Professional Fluency
              </h3>
              <p className="text-gray-600">
                Real-life communication focus across speaking, listening,
                reading, and writing for confident daily and professional use.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition md:col-span-2">
              <FiClock className="text-red-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Flexible & Modern Learning
              </h3>
              <p className="text-gray-600">
                A seamless blend of in-person instruction, personalized tutoring,
                and curated online resources—designed around your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To empower learners across Canada with refined French language skills
            that unlock global opportunities, academic success, and professional
            advancement.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-red-600 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Begin Your French Journey with Confidence
        </h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
          Choose a French learning experience defined by excellence,
          personalization, and proven results.
        </p>

        <a
          href="/contact"
          className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:shadow-xl transition"
        >
          Discover the Best French Classes in Canada
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
