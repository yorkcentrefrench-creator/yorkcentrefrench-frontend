import React from "react";

const Intermediate = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <div
        className="w-full h-[280px] md:h-[380px] flex flex-col items-center justify-center text-white text-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Intermediate French Classes in Canada
          </h1>
          <p className="text-lg md:text-2xl font-medium">
            Level B1 – York-Centre French Institute
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-4 py-14">
        {/* INTRO SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Take Your French to the Next Level
            </h2>
            <p className="text-gray-700 leading-7 mb-4">
              Our <strong>Intermediate French Classes in Canada (Level B1)</strong> are
              ideal for learners who already have a solid foundation in French
              and want to improve fluency, accuracy, and confidence in real-world
              communication.
            </p>
            <p className="text-gray-700 leading-7">
              This B1 French course focuses on strengthening grammar, expanding
              vocabulary, and expressing ideas clearly in both spoken and written
              French.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Intermediate French Class"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* INFO CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
          <div className="border rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Course Level</h3>
            <p className="text-gray-600">B1 – Intermediate</p>
          </div>

          <div className="border rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Duration</h3>
            <p className="text-red-600 font-semibold">2 to 3 Months</p>
          </div>

          <div className="border rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">Canada</p>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold mb-4">
            Why Choose Our B1 French Classes in Canada?
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 list-disc ml-6 text-gray-700 leading-7">
            <li>Experienced and qualified French instructors</li>
            <li>Structured and practical teaching approach</li>
            <li>Focus on real-life communication skills</li>
            <li>Small group classes for personalized learning</li>
            <li>Preparation for advanced studies or exams</li>
          </ul>
        </div>

        {/* COURSE OVERVIEW */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">
            B1 French Course Overview
          </h3>
          <p className="text-gray-700 leading-7">
            Level B1 helps learners communicate independently, understand longer
            conversations and texts, and express opinions clearly in a variety
            of social, academic, and professional contexts.
          </p>
        </div>

        {/* WHAT YOU WILL LEARN */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">What You Will Learn</h3>

          <ul className="list-disc ml-6 text-gray-700 leading-7 space-y-2">
            <li>
              <strong>Advanced Vocabulary:</strong> Education, work, social
              issues, culture, and environment
            </li>
            <li>
              <strong>Communication Skills:</strong> Discussions, debates,
              expressing opinions, and giving explanations
            </li>
            <li>Understanding spoken French in media and presentations</li>
            <li>Reading articles, essays, and authentic texts</li>
            <li>Writing structured paragraphs, reports, and short essays</li>
          </ul>

          {/* GRAMMAR SECTION */}
          <div className="mt-6 bg-gray-50 border rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-3">
              Grammar Development
            </h4>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Imparfait: past habits and background actions</li>
              <li>Conditional tense: wishes, suggestions, polite requests</li>
              <li>Introduction to the subjunctive</li>
              <li>Relative pronouns: qui, que, dont, où</li>
            </ul>
          </div>
        </div>

        {/* CULTURAL AWARENESS */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-3">Cultural Awareness</h3>
          <p className="text-gray-700 leading-7">
            Gain insights into modern French-speaking societies, contemporary
            issues, and cultural perspectives.
          </p>
        </div>

        {/* PREREQUISITES */}
        <div className="bg-gray-50 border rounded-xl p-8 mb-14">
          <h3 className="text-2xl font-bold mb-3">Who Can Join?</h3>
          <p className="text-gray-700 leading-7">
            <strong>Prerequisite:</strong> Completion of Level A2 or equivalent
            knowledge. Learners should be comfortable using basic past and
            future tenses and handling everyday conversations.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mb-16">
          <a
            href="/professional"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold tracking-wide hover:bg-red-700 transition"
          >
            ➤ Advance to Level B2 (Professional)
          </a>

          <p className="text-gray-600 mt-4">
            Join York-Centre French Institute today and move confidently toward
            advanced French proficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intermediate;
