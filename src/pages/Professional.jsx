import React from "react";

const Professional = () => {
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
            Upper-Intermediate French Classes in Canada
          </h1>
          <p className="text-lg md:text-2xl font-medium">
            Level B2 – York-Centre French Institute
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-4 py-14">
        {/* INTRO */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Reach Professional & Academic French Proficiency
            </h2>
            <p className="text-gray-700 leading-7 mb-4">
              Advance your French to a professional and academic level with our{" "}
              <strong>Upper-Intermediate French Classes in Canada (Level B2)</strong>.
              This program is designed for learners who want to communicate
              fluently, accurately, and confidently in complex real-world
              situations.
            </p>
            <p className="text-gray-700 leading-7">
              Our B2 French course focuses on advanced grammar, refined
              vocabulary, and high-level communication skills, preparing you
              for professional environments, academic studies, and
              internationally recognized certifications.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Upper Intermediate French Class"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* INFO CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
          <div className="border rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Course Level</h3>
            <p className="text-gray-600">B2 – Upper-Intermediate</p>
          </div>

          <div className="border rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Duration</h3>
            <p className="text-red-600 font-semibold">2 to 3 Months</p>
          </div>

          <div className="border rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Outcome</h3>
            <p className="text-gray-600">Professional & Academic Fluency</p>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold mb-4">
            Why Choose Our B2 French Classes in Canada?
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 list-disc ml-6 text-gray-700 leading-7">
            <li>Experienced instructors with advanced-level expertise</li>
            <li>Structured transition from conversational to advanced fluency</li>
            <li>Practical, results-driven teaching methods</li>
            <li>Personalized feedback and real-life scenarios</li>
            <li>Preparation for DELF B2 and TEF exams</li>
          </ul>
        </div>

        {/* COURSE OVERVIEW */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">
            B2 French Course Overview
          </h3>
          <p className="text-gray-700 leading-7">
            Level B2 enables learners to communicate confidently in complex
            professional, academic, and social contexts while understanding
            nuanced spoken and written French.
          </p>
        </div>

        {/* WHAT YOU WILL LEARN */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">What You Will Learn</h3>

          <ul className="list-disc ml-6 text-gray-700 leading-7 space-y-2">
            <li>
              <strong>Advanced & Specialized Vocabulary:</strong> Business,
              workplace communication, technology, society, culture, and
              current affairs
            </li>
            <li>
              <strong>High-Level Communication:</strong> Debates, structured
              discussions, persuasion, and argumentation
            </li>
            <li>Understanding fast, natural speech including idioms</li>
            <li>Reading advanced articles, reports, and literary extracts</li>
            <li>Writing formal emails, reports, and well-structured essays</li>
          </ul>

          {/* GRAMMAR */}
          <div className="mt-6 bg-gray-50 border rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-3">
              Advanced Grammar & Structure
            </h4>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Advanced subjunctive for nuance and precision</li>
              <li>Passive voice in formal and written French</li>
              <li>Indirect (reported) speech</li>
              <li>Idiomatic expressions used by native speakers</li>
            </ul>
          </div>
        </div>

        {/* CULTURAL AWARENESS */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-3">
            Cultural & Social Awareness
          </h3>
          <p className="text-gray-700 leading-7">
            In-depth exploration of Francophone cultures, global issues, and
            contemporary society.
          </p>
        </div>

        {/* TEF PREP */}
        <div className="bg-gray-50 border rounded-xl p-8 mb-14">
          <h3 className="text-2xl font-bold mb-3">
            B2 French Course with TEF Preparation
          </h3>
          <p className="text-gray-700 leading-7">
            Our B2 French course also supports <strong>TEF exam preparation</strong>,
            helping learners improve fluency, accuracy, and exam-specific
            skills through expert guidance and targeted practice.
          </p>
        </div>

        {/* PREREQUISITES */}
        <div className="bg-gray-50 border rounded-xl p-8 mb-14">
          <h3 className="text-2xl font-bold mb-3">Who Can Enroll?</h3>
          <p className="text-gray-700 leading-7">
            <strong>Prerequisite:</strong> Completion of Level B1 or equivalent
            proficiency. Learners should be comfortable discussing various
            topics, understanding intermediate texts, and using complex
            grammatical structures.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mb-10">
          <a
            href="/exam"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold tracking-wide hover:bg-red-700 transition"
          >
            ➤ Enroll Now – B2 Professional
          </a>

          <p className="text-gray-600 mt-4">
            Take the final step toward advanced French mastery with
            York-Centre French Institute.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Professional;
