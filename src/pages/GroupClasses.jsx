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
    <div className="w-full">
      {/* ================= HERO ================= */}
      <div
        className="w-full h-[260px] md:h-[380px] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <h1 className="text-3xl md:text-6xl font-bold">
          French Group Classes in Canada
        </h1>
        <p className="text-lg md:text-3xl mt-3 font-medium">
          Interactive • Affordable • Result-Driven
        </p>
      </div>

      {/* ================= INTRO ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">
        <p className="text-lg mb-10">
          <strong>York-Centre French Institute</strong> offers professionally guided
          <strong> French Group Classes in Canada</strong> designed to help learners
          build fluency through structured lessons and interactive group practice.
          Whether you are a beginner or preparing for language exams, our group
          classes help you gain confidence in real-life and professional French
          communication.
        </p>

        <img
          src="https://frenchforpr.com/wp-content/uploads/2025/01/Intermediate-French-Classes-in-Brampton-.png"
          alt="French Group Learning"
          className="rounded-xl shadow mb-16"
        />

        {/* ================= WHY CHOOSE US ================= */}
        <h2 className="text-3xl font-bold text-center mb-6">
          French Group Classes in Canada – York-Centre French Institute
        </h2>

        <p className="text-lg mb-6 text-center max-w-4xl mx-auto">
          Discover an engaging and collaborative way to learn French with our
          <strong> French Group Classes in Canada</strong>. Designed for learners
          at all levels, our group classes offer the perfect balance of structured
          instruction and interactive practice in a supportive learning
          environment.
        </p>

        <p className="text-lg mb-12 text-center max-w-4xl mx-auto">
          Whether you are starting as a beginner or aiming to improve fluency,
          our French group classes in Canada help you build strong speaking,
          listening, reading, and writing skills while gaining confidence for
          real-life communication.
        </p>

        <h3 className="text-2xl font-semibold mb-6 text-center">
          Why Choose Our French Group Classes in Canada?
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ul className="list-disc pl-6 space-y-3">
            <li>Preparation for DELF, TEF, and TCF exams</li>
            <li>French for career advancement and immigration</li>
            <li>Improved conversational confidence</li>
          </ul>

          <ul className="list-disc pl-6 space-y-3">
            <li>Small group sizes for personalized attention</li>
            <li>Affordable and interactive learning</li>
            <li>Experienced, certified instructors</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold mb-6 text-center">
          Interactive & Immersive Group Learning
        </h3>

        <p className="text-lg mb-6 text-center max-w-4xl mx-auto">
          Our Group French Classes in Canada provide an immersive learning
          experience where students practice French with peers at the same
          proficiency level. Role-plays, real-life scenarios, discussions, and
          practical exercises help learners develop natural communication skills
          and fluency.
        </p>

        <p className="text-lg mb-20 text-center max-w-4xl mx-auto">
          You also become part of a supportive learning community that motivates
          progress, builds confidence, and encourages consistent improvement.
        </p>

        {/* ================= WHO IS THIS FOR ================= */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Who Are These French Group Classes For?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <ul className="list-disc pl-6 space-y-3">
            <li>Beginners (A1–A2)</li>
            <li>Intermediate learners (B1–B2)</li>
            <li>Students preparing for TEF, DELF, or TCF</li>
          </ul>
          <ul className="list-disc pl-6 space-y-3">
            <li>Professionals seeking bilingual careers</li>
            <li>Immigration applicants to Canada & Quebec</li>
            <li>Learners who enjoy collaborative learning</li>
          </ul>
        </div>

        {/* ================= CLASS DETAILS ================= */}
        <div className="bg-red-600 text-white rounded-xl shadow-lg p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-20">
          <div>
            <p className="font-semibold">📅 Schedule</p>
            <p>Weekly Classes</p>
          </div>
          <div>
            <p className="font-semibold">👥 Class Size</p>
            <p>Max 12 Students</p>
          </div>
          <div>
            <p className="font-semibold">⏳ Duration</p>
            <p>2 Hours / Session</p>
          </div>
          <div>
            <p className="font-semibold">👨‍🏫 Instructor</p>
            <p>Certified Trainers</p>
          </div>
        </div>

        {/* ================= WHAT YOU LEARN ================= */}
        <h2 className="text-3xl font-bold text-center mb-8">
          What You Will Learn
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
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
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
            >
              ✔ {item}
            </div>
          ))}
        </div>

        {/* ================= GOALS ================= */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Group Class Goals
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">🎯 TEF & DELF Preparation</h3>
            <p className="text-sm text-gray-600">
              Targeted exam practice, strategies, and feedback for success.
            </p>
          </div>

          <div className="p-6 bg-red-600 text-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">🌍 Language Immersion</h3>
            <p className="text-sm">
              Interactive speaking, role-plays, discussions, and cultural exposure.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">💼 Professional Growth</h3>
            <p className="text-sm text-gray-600">
              Business French, workplace communication, and confidence building.
            </p>
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-red-600 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Join French Group Classes in Canada?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Learn faster with expert instructors, interactive learning, and proven
          results.
        </p>
        <a
          href="/contact"
          className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          ENROLL TODAY →
        </a>
      </div>

      {/* ================= FAQ ================= */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border rounded-lg mb-4 shadow cursor-pointer"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center p-6 font-medium"
            >
              {faq.question}
              <span>{openIdx === idx ? "−" : "+"}</span>
            </button>

            {openIdx === idx && (
              <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupClasses;
