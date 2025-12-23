import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-white rounded-2xl p-5 md:p-6 border transition-all duration-300
        ${open ? "border-red-500 shadow-lg" : "border-gray-200 shadow-sm"}
      `}
    >
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-start gap-4 text-left"
      >
        <span
          className={`text-base md:text-lg font-semibold transition-colors
            ${open ? "text-red-600" : "text-gray-900"}
          `}
        >
          {question}
        </span>

        <FiChevronDown
          className={`text-2xl mt-1 transition-transform duration-300
            ${open ? "rotate-180 text-red-600" : "text-gray-500"}
          `}
        />
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        <p className="text-gray-700 leading-relaxed text-sm md:text-base whitespace-pre-line">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question:
        "How long does it take to complete one language level (e.g., A1 to A2)?",
      answer:
        "Achieving proficiency is a personalized journey. While it depends on your dedication and current pace, on average, students complete one full level (such as A1) in approximately 3 to 4 months. Our flexible online structure allows you to progress efficiently without sacrificing comprehension.",
    },
    {
      question:
        "How large are your online classes? Will I get personalized attention?",
      answer:
        "We prioritize quality interaction over quantity. Our class sizes are intentionally kept small, averaging only 3–4 students and never exceeding a maximum of 8. This boutique approach ensures every student receives personalized feedback and maximum opportunity to speak and engage directly with the instructor.",
    },
    {
      question: "What methods do you use to teach French effectively online?",
      answer:
        "We use a dynamic blend of proven online teaching methods:\n\n• Interactive Virtual Instruction: Live lessons with collaborative tools\n• 1:1 Personalized Check-ins: Individual progress reviews\n• Rich Multimedia Resources: Presentations, videos, and online exercises\n• Immersive Practice: Conversational focus and real-world scenarios",
    },
    {
      question: "Do you offer specialized or customized French courses?",
      answer:
        "Absolutely. Your goals are unique, and your learning plan should be too. Our instructors assess your strengths, identify focus areas, and design a personalized curriculum—whether for business French, TEF/TCF exams, or region-specific preparation.",
    },
    {
      question: "What are the qualifications of your expert instructors?",
      answer:
        "Our faculty is the cornerstone of our success. Every instructor is a highly qualified French language specialist, fluent in both French and English, certified, and deeply experienced in exam-focused and practical language teaching with a proven track record of student success.",
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-red-50 to-white">
      {/* Header */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          ❓ Your Questions, Answered
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600">
          York-Centre French Institute Advantage.  
          We understand starting a new language journey comes with questions —
          here are the most common ones to help you choose with confidence.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4 md:px-8">
        {faqs.map((item, idx) => (
          <FAQItem key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
