import React from "react";

const TfaApproach = () => {
  const steps = [
    {
      img: "https://frenchforpr.com/wp-content/uploads/2025/05/Website-Graphics-1024x1024.png",
      title: "Step-by-Step Structured Syllabus",
      desc: "Clear progression from A1 foundations to B2 mastery.",
    },
    {
      img: "https://frenchforpr.com/wp-content/uploads/2025/05/Website-Graphics-1024x1024.png",
      title: "Live Online French Classes",
      desc: "Interactive sessions with certified instructors.",
    },
    {
      img: "https://frenchforpr.com/wp-content/uploads/2025/05/Website-Graphics-1024x1024.png",
      title: "Fast-Paced & Personalized",
      desc: "Learning tailored to your pace and PR goals.",
    },
    {
      img: "https://frenchforpr.com/wp-content/uploads/2025/05/Website-Graphics-1024x1024.png",
      title: "TEF / TCF Exam Focused",
      desc: "Specialized strategies for high-scoring results.",
    },
    {
      img: "https://frenchforpr.com/wp-content/uploads/2025/05/Website-Graphics-1024x1024.png",
      title: "Mocks, Homework & Feedback",
      desc: "Regular practice to track and improve performance.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-red-50">
      {/* HEADER */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600">
          The YCF Teaching Approach
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          A structured, exam-oriented methodology designed to help you reach
          CLB 7+ with confidence and clarity.
        </p>
      </div>

      {/* STEPS */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {steps.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl border shadow-sm p-6 text-center
                       hover:shadow-lg transition duration-300"
          >
            {/* IMAGE */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="h-14 object-contain"
              />
            </div>

            {/* TEXT */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TfaApproach;
