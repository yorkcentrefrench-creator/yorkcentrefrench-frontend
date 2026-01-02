import React, { useState, useEffect } from "react";

const GroupClasses = () => {
  const [openIdx, setOpenIdx] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What is the maximum class size for group classes?",
      answer:
        "Each group class is limited to a maximum of 12 students to ensure personalized attention and better participation.",
    },
    {
      question: "What is the cost of the classes?",
      answer:
        "The cost varies by level and duration. Please contact our admissions team for the latest fee details. We offer flexible payment options.",
    },
    {
      question: "What is the duration of the classes?",
      answer:
        "Each class runs for 2 hours. We offer weekday, evening, and weekend batches.",
    },
  ];

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="w-full bg-gray-50">
      {/* ================= HERO ================= */}
      <section
        className="relative w-full h-[280px] md:h-[420px] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight">
          French Group Classes in Canada
        </h1>
        <p className="text-lg md:text-2xl mt-4 font-medium text-white/90">
          Interactive • Affordable • Result-Driven
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-gray-700">
        <p className="text-lg leading-relaxed mb-12">
          <strong>York-Centre French Institute</strong> offers professionally guided
          <strong> French Group Classes in Canada</strong> designed to help learners
          build fluency through structured lessons and interactive group practice.
          Whether you are a beginner or preparing for language exams, our group
          classes help you gain confidence in real-life and professional French
          communication.
        </p>

        <img
          src="https://frenchforpr.com/wp-content/uploads/2025/01/Intermediate-French-Classes-in-Canadan-.png"
          alt="French Group Learning"
          className="rounded-2xl shadow-xl mb-20 mx-auto"
        />

        {/* ================= WHY CHOOSE ================= */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          French Group Classes in Canada
        </h2>

        <p className="text-lg text-center max-w-4xl mx-auto mb-6">
          Discover an engaging and collaborative way to learn French with our
          <strong> French Group Classes in Canada</strong>. Designed for learners
          at all levels, our group classes offer the perfect balance of structured
          instruction and interactive practice.
        </p>

        <p className="text-lg text-center max-w-4xl mx-auto mb-16">
          Whether you are starting as a beginner or aiming to improve fluency,
          our French group classes in Canada help you build strong speaking,
          listening, reading, and writing skills.
        </p>

        <h3 className="text-2xl font-semibold text-center mb-10">
          Why Choose Our French Group Classes in Canada?
        </h3>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <ul className="space-y-4 bg-white p-8 rounded-xl shadow">
            <li>✔ Preparation for DELF, TEF, and TCF exams</li>
            <li>✔ French for career advancement and immigration</li>
            <li>✔ Improved conversational confidence</li>
          </ul>

          <ul className="space-y-4 bg-white p-8 rounded-xl shadow">
            <li>✔ Small group sizes for personalized attention</li>
            <li>✔ Affordable and interactive learning</li>
            <li>✔ Experienced, certified instructors</li>
          </ul>
        </div>

        {/* ================= IMMERSIVE ================= */}
        <h3 className="text-2xl font-semibold text-center mb-6">
          Interactive & Immersive Group Learning
        </h3>

        <p className="text-lg text-center max-w-4xl mx-auto mb-6">
          Our Group French Classes in Canada provide an immersive learning
          experience where students practice French with peers at the same
          proficiency level.
        </p>

        <p className="text-lg text-center max-w-4xl mx-auto mb-20">
          You become part of a supportive learning community that motivates
          progress and builds confidence.
        </p>

        {/* ================= WHO IS THIS FOR ================= */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Who Are These French Group Classes For?
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mb-24">
          <ul className="bg-white p-8 rounded-xl shadow space-y-3">
            <li>• Beginners (A1–A2)</li>
            <li>• Intermediate learners (B1–B2)</li>
            <li>• Students preparing for TEF, DELF, or TCF</li>
          </ul>
          <ul className="bg-white p-8 rounded-xl shadow space-y-3">
            <li>• Professionals seeking bilingual careers</li>
            <li>• Immigration applicants to Canada & Quebec</li>
            <li>• Learners who enjoy collaborative learning</li>
          </ul>
        </div>

        {/* ================= DETAILS ================= */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-24 shadow-xl">
          {[
            ["📅", "Schedule", "Weekly Classes"],
            ["👥", "Class Size", "Max 12 Students"],
            ["⏳", "Duration", "2 Hours / Session"],
            ["👨‍🏫", "Instructor", "Certified Trainers"],
          ].map(([icon, title, text], i) => (
            <div key={i}>
              <p className="text-3xl">{icon}</p>
              <p className="font-semibold">{title}</p>
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </div>

        {/* ================= WHAT YOU LEARN ================= */}
        <h2 className="text-3xl font-bold text-center mb-10">
          What You Will Learn
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            "Speak confidently in daily & professional situations",
            "Understand native French conversations",
            "Master grammar from A1 to B2 levels",
            "Build strong vocabulary for exams & work",
            "Improve reading & writing skills",
            "Learn French culture & expressions",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-red-600 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Join French Group Classes in Canada?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Learn faster with expert instructors, interactive learning, and proven
          results.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-red-600 px-10 py-4 rounded-lg font-semibold shadow hover:scale-105 transition"
        >
          ENROLL TODAY →
        </a>
      </section>

      {/* ================= FAQ ================= */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl mb-4 shadow hover:shadow-lg transition"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center p-6 font-semibold"
            >
              {faq.question}
              <span className="text-xl">{openIdx === idx ? "−" : "+"}</span>
            </button>

            {openIdx === idx && (
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default GroupClasses;
