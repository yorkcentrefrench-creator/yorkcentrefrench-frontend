import React from "react";

const Beginner = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <div
        className="w-full h-[280px] md:h-[360px] flex flex-col items-center justify-center text-white text-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Beginner French Classes in Canada
          </h1>
          <p className="text-lg md:text-xl font-medium">
            Level A1 – Absolute Beginners
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* INTRO SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          <img
            src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="French Class"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Level A1 – Beginner French
            </h2>
            <p className="text-gray-700 leading-7 mb-4">
              Start learning French with confidence at{" "}
              <strong>York-Centre French Institute</strong>, one of the trusted
              destinations for Beginner French classes in Canada. Our Level A1
              course is specially designed for students with no prior knowledge
              of French.
            </p>
            <p className="text-gray-700 leading-7">
              Whether your goal is travel, career advancement, education, or
              personal growth, this course builds strong foundations in
              speaking, listening, reading, and writing.
            </p>
          </div>
        </div>

        {/* HIGHLIGHT INFO CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
          <div className="border rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Course Level</h3>
            <p className="text-gray-600">A1 – Absolute Beginner</p>
          </div>

          <div className="border rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Duration</h3>
            <p className="text-red-600 font-semibold">
              1.5 to 2 Months
            </p>
          </div>

          <div className="border rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">Canada</p>
          </div>
        </div>

        {/* COURSE OVERVIEW */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">
            French Course Overview – Level A1
          </h3>
          <p className="text-gray-700 leading-7">
            This beginner French course introduces you to the essential elements
            of the French language and culture in a clear, structured, and
            supportive learning environment.
          </p>
        </div>

        {/* WHAT YOU WILL LEARN */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">What You Will Learn</h3>

          <ul className="grid md:grid-cols-2 gap-4 list-disc ml-6 text-gray-700 leading-7">
            <li>
              Basic French vocabulary: greetings, numbers, days, colors, and
              daily expressions
            </li>
            <li>French pronunciation and basic accent rules</li>
            <li>
              Grammar fundamentals: nouns, articles, gender, and subject
              pronouns
            </li>
            <li>
              Present tense of regular verbs and common verbs (être, avoir,
              aller, faire)
            </li>
            <li>
              Simple sentence formation: statements, questions, and negatives
            </li>
            <li>
              Everyday conversations: self-introductions and basic exchanges
            </li>
            <li>Reading and writing short French texts</li>
            <li>
              Introduction to French culture and social etiquette
            </li>
          </ul>
        </div>

        {/* PREREQUISITES */}
        <div className="bg-gray-50 border rounded-xl p-8 mb-14">
          <h3 className="text-2xl font-bold mb-3">Prerequisites</h3>
          <p className="text-gray-700 leading-7">
            No prior French knowledge required. This course is ideal for absolute
            beginners.
          </p>
        </div>

        {/* ================= LEVEL A2 – ELEMENTARY ================= */}
<div className="max-w-5xl mx-auto px-4 py-16">
  {/* SECTION HEADER */}
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-3">
      Elementary French Classes in Canada
    </h2>
    <p className="text-lg text-gray-600 font-medium">
      Level A2 – Elementary | York-Centre French Institute
    </p>
  </div>

  {/* INTRO + IMAGE */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
    <div>
      <p className="text-gray-700 leading-7 mb-4">
        The <strong>Level A2 French course</strong> helps you expand your language
        skills and communicate more comfortably in real-life situations. This
        level focuses on improving fluency, vocabulary, and grammatical
        accuracy.
      </p>

      <p className="text-gray-700 leading-7">
        Students learn how to speak about past experiences, future plans, and
        everyday topics with greater confidence while developing stronger
        listening, reading, and writing skills.
      </p>
    </div>

    <img
      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
      alt="Elementary French Class"
      className="rounded-xl shadow-lg"
    />
  </div>

  {/* INFO CARDS */}
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
    <div className="border rounded-xl p-6 text-center shadow-sm">
      <h3 className="text-xl font-semibold mb-2">Course Level</h3>
      <p className="text-gray-600">A2 – Elementary</p>
    </div>

    <div className="border rounded-xl p-6 text-center shadow-sm">
      <h3 className="text-xl font-semibold mb-2">Duration</h3>
      <p className="text-red-600 font-semibold">1.5 to 2 Months</p>
    </div>

    <div className="border rounded-xl p-6 text-center shadow-sm">
      <h3 className="text-xl font-semibold mb-2">Location</h3>
      <p className="text-gray-600">Canada</p>
    </div>
  </div>

  {/* COURSE OVERVIEW */}
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-4">
      French Course Overview – Level A2
    </h3>
    <p className="text-gray-700 leading-7">
      This course builds on the foundations of Level A1 and introduces more
      complex language structures, expanded vocabulary, and practical
      communication skills for everyday situations.
    </p>
  </div>

  {/* WHAT YOU WILL LEARN */}
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-4">What You Will Learn</h3>

    <ul className="grid md:grid-cols-2 gap-4 list-disc ml-6 text-gray-700 leading-7">
      <li>
        Expanded vocabulary: hobbies, health, shopping, travel, and daily
        routines
      </li>
      <li>Speaking about past experiences and future plans</li>
      <li>Improved listening and reading comprehension</li>
      <li>Writing short emails, messages, and descriptions</li>
      <li>Understanding cultural aspects of French-speaking countries</li>
    </ul>

    {/* GRAMMAR SUBSECTION */}
    <div className="mt-6 bg-gray-50 border rounded-xl p-6">
      <h4 className="text-xl font-semibold mb-3">
        Grammar Development
      </h4>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Passé composé (past tense)</li>
        <li>Near future tense (aller + infinitive)</li>
        <li>Reflexive verbs</li>
        <li>Adjectives, adverbs, and prepositions</li>
      </ul>
    </div>
  </div>

  {/* PREREQUISITES */}
  <div className="bg-gray-50 border rounded-xl p-8 mb-12">
    <h3 className="text-2xl font-bold mb-3">Prerequisite</h3>
    <p className="text-gray-700 leading-7">
      Completion of Level A1 or basic knowledge of beginner French grammar.
    </p>
  </div>

  {/* WHY CHOOSE US */}
  <div className="mb-14">
    <h3 className="text-2xl font-bold mb-4">
      Why Choose York-Centre French Institute in Canada?
    </h3>

    <ul className="grid md:grid-cols-2 gap-4 list-disc ml-6 text-gray-700 leading-7">
      <li>Experienced and qualified French instructors</li>
      <li>Structured French courses for beginner and elementary learners</li>
      <li>Strong focus on practical communication skills</li>
      <li>Small group classes for personalized learning</li>
      <li>Supportive and beginner-friendly environment</li>
    </ul>
  </div>

  {/* CTA */}
  <div className="text-center">
    <a
      href="/intermediate"
      className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold tracking-wide hover:bg-red-700 transition"
    >
      ➤ Continue to Intermediate Level (B1)
    </a>

    <p className="text-gray-600 mt-4">
      Enroll today and build confidence, improve fluency, and learn French step
      by step in a welcoming learning environment.
    </p>
  </div>
</div>


        

        {/* COURSES SECTION */}
        <h2 className="text-3xl font-bold text-center mb-10">Our Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "A1 & A2", link: "/beginner" },
            { title: "B1 & B2", link: "/intermediate" },
            { title: "TEF & DELF Exam Prep", link: "/exam" },
            { title: "Professional (C2)", link: "/professional" },
            { title: "Group Classes", link: "/group" },
            { title: "Private Tutoring", link: "/private" },
          ].map((course, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold mb-2">
                  {course.title}
                </h3>
                <a
                  href={course.link}
                  className="text-red-600 font-medium hover:underline"
                >
                  READ MORE →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beginner;
