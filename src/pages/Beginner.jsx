import React from "react";

const Beginner = () => {
  // scroll to top on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div
        className="w-full h-[260px] md:h-[320px] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <h1 className="text-2xl md:text-4xl font-bold">
          Beginner French Classes in Brampton
        </h1>
        <p className="text-lg md:text-xl mt-2 font-medium">
          Beginner’s Classes (A1 & A2)
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Center Image */}
        <div className="w-full flex justify-center mb-10">
          <img
            src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="French Teacher"
            className="w-full md:w-[380px] rounded shadow"
          />
        </div>

        {/* Level A1 Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Level A1 – Beginner
        </h2>

        {/* Description */}
        <p className="text-gray-700 leading-7 mb-6 text-justify">
          Start your language journey with our expertly designed{" "}
          <b>Beginner French Classes in Brampton</b>. At York-Center French Institute,
          beginners receive step-by-step instruction that builds strong
          foundations in reading, speaking, listening, and writing. Whether you
          want to travel, communicate better at work, study abroad, or learn a
          new skill, our A1 course prepares you for conversational French
          quickly and efficiently.
        </p>

        <p className="text-gray-700 leading-7 mb-6 text-justify">
          Our curriculum offers easy-to-follow lessons, interactive practice,
          pronunciation support, vocabulary building, and grammar explanations
          designed specifically for beginners. By the end of this level, you'll
          be confident enough to introduce yourself, talk about daily routines,
          describe people and objects, and communicate in simple French
          sentences.
        </p>

        <p className="text-red-600 font-semibold mb-8">
          Approximate Duration: 5 to 6 months
        </p>

        {/* Course Summary */}
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          French Classes for Beginners in Brampton – Course Summary
        </h3>

        <p className="text-gray-700 leading-7 mb-6">
          Level A1 is the starting point for absolute beginners. This course
          introduces you to the fundamentals of the French language, including
          pronunciation, vocabulary, and simple grammar structures.
        </p>

        {/* What You'll Learn */}
        <h4 className="text-xl font-semibold mb-2">What You’ll Learn</h4>

        <ul className="list-disc ml-6 text-gray-700 leading-7 mb-6">
          <li>
            Basic vocabulary: greetings, numbers, dates, days of the week, and
            everyday expressions.
          </li>
          <li>Fundamental sentence construction.</li>
          <li>
            Understanding simple grammar: gender (masculine/feminine) and number
            (singular/plural).
          </li>
          <li>
            Introduction to simple verbs (être, avoir, faire, aimer, etc.)
          </li>
          <li>Basic conjugation of regular and common irregular verbs.</li>
          <li>Forming simple phrases and short dialogues.</li>
          <li>Listening, speaking, reading, and writing practice.</li>
        </ul>

        {/* Prerequisites */}
        <h4 className="text-xl font-semibold mb-2">Prerequisites</h4>
        <p className="text-gray-700 leading-7 mb-10">
          None. This level is designed for students with no prior knowledge of
          French.
        </p>

        {/* Level A2 Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Level A2 – Elementary
        </h2>

        <p className="text-gray-700 leading-7 mb-6 text-justify">
          Level A2 builds on A1 by introducing new vocabulary, longer sentences,
          and improved communication skills. Students learn to talk about
          familiar topics, express opinions, ask and answer simple questions,
          and develop a better understanding of essential grammar rules.
        </p>

        <p className="text-red-600 font-semibold mb-8">
          Approximate Duration: 5 to 6 months
        </p>
        {/* LEVEL A2 SECTION */}
        <div className=" mx-auto  px-4">
         

          {/* COURSE SUMMARY */}
          <h3 className="text-xl font-semibold mb-2">Course Summary</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Building on the basics, Level A2 expands your ability to communicate
            in everyday situations and introduces more complex grammatical
            structures.
          </p>

          {/* WHAT YOU WILL LEARN */}
          <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
            <li>
              <strong>Expanded Vocabulary:</strong> Topics include health,
              hobbies, shopping, transportation, and daily routines.
            </li>

            <li>
              <strong>Grammar Development:</strong>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>
                  <strong>Past Tense:</strong> Introduction to passé composé for
                  past actions.
                </li>
                <li>
                  <strong>Future Tense:</strong> Using aller + infinitive for
                  near future events.
                </li>
                <li>
                  <strong>Reflexive Verbs:</strong> Describing daily routines
                  and personal care.
                </li>
                <li>
                  <strong>Adjectives & Adverbs:</strong> Improving descriptive
                  expression.
                </li>
                <li>
                  <strong>Prepositions:</strong> Talking about time and place.
                </li>
              </ul>
            </li>

            <li>
              <strong>Communication Skills:</strong>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>
                  Participating in conversations about personal experiences and
                  future plans.
                </li>
                <li>Understanding longer and more complex spoken French.</li>
                <li>Reading short stories, articles, and dialogues.</li>
                <li>Writing personal letters, emails, and short narratives.</li>
              </ul>
            </li>

            <li>
              <strong>Cultural Exploration:</strong> Insight into
              French-speaking regions, festivals, and traditions.
            </li>
          </ul>

          {/* PREREQUISITES */}
          <h3 className="text-xl font-semibold mt-10 mb-2">Prerequisites</h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1 leading-relaxed">
            <li>Completion of Level A1 or equivalent knowledge.</li>
            <li>
              Basic understanding of present tense verbs, simple sentence
              construction, and elementary vocabulary.
            </li>
          </ul>

          {/* FINAL PARAGRAPH */}
          <p className="text-gray-700 mt-6 leading-relaxed">
            Join York-Center French Institute Beginner French Classes in Brampton,
            Ontario and take the first step toward mastering the French
            language. Our French classes for beginners in Brampton are designed
            to build your confidence in speaking, reading, writing, and
            listening. With engaging lessons, expert instructors, and a
            supportive atmosphere, learning French becomes easy and enjoyable.
            Whether you're starting for personal interest, travel, or career
            goals, our French classes for beginners in Brampton provide the
            perfect foundation. Enroll today and begin your exciting language
            journey!
          </p>
        </div>
      </div>

      {/* NEXT LEVEL BUTTON */}
      <div className="w-full flex justify-center my-8">
        <a
          href="/intermediate"
          className="bg-red-600 text-white px-6 py-3 rounded font-semibold tracking-wide hover:bg-red-700 transition"
        >
          ➤ NEXT LEVEL (B1 INTERMEDIATE)
        </a>
      </div>

      {/* CHAIR IMAGE */}
  

      {/* HEADING */}
      <h2 className="text-3xl font-bold text-center mb-8">Courses</h2>

      {/* COURSES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center">
          <img
                     src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1600"

            className="w-full rounded-xl mb-4"
          />
          <h3 className="text-lg font-semibold mb-1">A1 & A2</h3>
          <a href="/beginner" className="text-red-600 font-medium">
            READ MORE &gt;
          </a>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="w-full rounded-xl mb-4"
          />
          <h3 className="text-lg font-semibold mb-1">B1 & B2</h3>
          <a href="/intermediate" className="text-red-600 font-medium">
            READ MORE &gt;
          </a>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="w-full rounded-xl mb-4"
          />
          <h3 className="text-lg font-semibold mb-1">TEF & DELF Exam Prep</h3>
          <a href="/exam" className="text-red-600 font-medium">
            READ MORE &gt;
          </a>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="w-full rounded-xl mb-4"
          />
          <h3 className="text-lg font-semibold mb-1">Professional (C2)</h3>
          <a href="/professional" className="text-red-600 font-medium">
            READ MORE &gt;
          </a>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://images.pexels.com/photos/3184640/pexels-photo-3184640.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="w-full rounded-xl mb-4"
          />
          <h3 className="text-lg font-semibold mb-1">Group Classes</h3>
          <a href="/group" className="text-red-600 font-medium">
            READ MORE &gt;
          </a>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="w-full rounded-xl mb-4"
          />
          <h3 className="text-lg font-semibold mb-1">Private Tutoring</h3>
          <a href="/private" className="text-red-600 font-medium">
            READ MORE &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Beginner;
