import React from "react";

const Intermediate = () => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div
        className="w-full h-[260px] md:h-[360px] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <h1 className="text-3xl md:text-6xl font-bold">
          Intermediate French Classes in
        </h1>
        <p className="text-lg md:text-3xl mt-2 font-medium">
          Brampton, Ontario — Level B1 (Intermediate)
        </p>
      </div>

      {/* TOP IMAGE */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="w-full flex justify-center mb-10">
          <img
            src="https://frenchforpr.com/wp-content/uploads/2025/01/Intermediate-French-Classes-in-Brampton-.png"
            alt="French Teacher"
            className="w-full rounded shadow"
          />
        </div>

        {/* PAGE CONTENT */}
        <div className="max-w-4xl mx-auto">

          {/* MAIN HEADINGS */}
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-6">
            Master Your Language Skills with Intermediate French Classes in Brampton
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            York-Center French Institute offers expertly designed Intermediate French Classes in Brampton 
            to help you take your French proficiency to the next level. B1 Intermediate classes focus 
            on enhancing your speaking, writing, listening, and reading skills while building confidence 
            through real-world communication. Whether you're preparing for travel, education, your career, 
            or simply improving your language abilities, our Intermediate French Classes in Brampton provide 
            the perfect balance of structure and flexibility, with small class sizes and personalized attention 
            for every student.
          </p>

          <h3 className="text-2xl font-semibold mb-3">
            Why Choose Our Intermediate French Classes in Brampton?
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            At York-Center French Institute, we pride ourselves on delivering high-quality Intermediate French Classes 
            in Brampton that cater to the learning styles and daily lives of learners. Our experienced instructors 
            have years of teaching French to students from diverse backgrounds. Our easy-to-understand teaching 
            methods help each student master grammar, expand vocabulary, and improve fluency. By enrolling in our 
            Intermediate French Classes in Brampton, you’ll gain access to excellent study materials, group 
            discussions, and real-life scenarios designed to enhance your learning experience.
          </p>

          <h3 className="text-2xl font-semibold mb-3">
            Achieve Fluency with the Best Intermediate French Classes in Brampton
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you’re a student, professional, or language enthusiast, our Intermediate French Classes in
            Brampton are designed to help you achieve your goals. Our flexible schedules, both online and
            in-person options, and affordable pricing make learning accessible to everyone. Our Intermediate
            French Classes in Brampton not only prepare you for advanced language levels but also empower you
            to confidently communicate in French in any setting. Don’t wait—start your journey to fluency today
            with York-Center French Institute!
          </p>

          {/* INTERMEDIATE B1 SECTION */}
          <h2 className="text-3xl text-center font-bold my-10">
            Intermediate Classes (B1)
          </h2>

          <p className="text-red-600 text-sm font-semibold mb-6">
            Approximate Duration: 2 to 3 months
          </p>

          {/* COURSE SUMMARY */}
          <h3 className="text-xl font-semibold mb-2">
            B1 French Course in Brampton – Course Summary
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Level B1 is designed to refine your language skills, enabling you to communicate effectively in a
            variety of situations and understand more complex texts.
          </p>

          {/* WHAT YOU WILL LEARN */}
          <h3 className="text-xl font-semibold mb-3">What You’ll Learn</h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">

            <li><strong>Advanced Vocabulary:</strong> Topics covering education, work, environmental issues, and cultural discussions.</li>

            <li>
              <strong>Grammar Enhancement:</strong>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Indirect Speech (reported speech), subjunctive basics, and setting context.</li>
                <li>Conditional tenses (possibilities, polite requests, and polite responses).</li>
                <li>Subject–Verb Agreement in complex sentences.</li>
                <li>Subordinate clauses including expressions of doubt, emotion, and necessity.</li>
                <li>Advanced pronouns: Contractions, replacements, and accuracy.</li>
              </ul>
            </li>

            <li>
              <strong>Communication Skills:</strong>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Engaging in advanced discussions, expressing opinions, and debating topics.</li>
                <li>Listening Comprehension: Understanding detailed spoken French including media and presentations.</li>
                <li>Writing Skills: Crafting reports, emails, and short written essays.</li>
                <li>Interpersonal Communication: Giving explanations and defending views.</li>
              </ul>
            </li>

            <li><strong>Cultural Exploration:</strong> Exploring contemporary French society, politics, and global influences.</li>

          </ul>

          {/* PREREQUISITES */}
          <h3 className="text-xl font-semibold mt-10 mb-2">Prerequisites</h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1 leading-relaxed">
            <li>Completion of Level A2 or equivalent proficiency.</li>
            <li>Comfortable with past and future tenses, basic conversational skills, and foundational grammar.</li>
          </ul>

          {/* BUTTON */}
          <div className="mt-10 mb-16 flex justify-center">
            <button className="bg-red-600 text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition">
              ➤ Next Level: B2 (Professional)
            </button>
          </div>

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
      </div>
    </div>
  );
};

export default Intermediate;
