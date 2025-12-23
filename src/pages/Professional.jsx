import React from "react";

const Professional = () => { 
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
          Upper Intermediate French Classes
          <br />
          in Brampton
        </h1>
        <p className="text-lg md:text-3xl mt-2 font-medium">
          Level B2 – Professional
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-5 py-10 leading-relaxed text-[#2c2c2c]">
        {/* IMAGE */}
        <div className="w-full flex justify-center mb-10">
          <img
            src="https://frenchforpr.com/wp-content/uploads/2025/01/Intermediate-French-Classes-in-Brampton-.png"
            alt="French Teacher"
            className="w-full rounded shadow"
          />
        </div>
        {/* CONTENT AFTER IMAGE */}
        <div className=" mx-auto text-center mt-10 leading-relaxed text-[17px] text-[#333]">
          <p className="mb-10">
            <strong>Toronto French Academy</strong> offers expertly tailored
            <strong> upper intermediate French classes in Brampton</strong>{" "}
            designed to refine your language skills and prepare you for advanced
            fluency. Our comprehensive
            <strong> curriculum</strong> focuses on strengthening grammar,
            expanding vocabulary, and enhancing conversational skills, ensuring
            you’re ready for complex communication scenarios. Whether you’re
            preparing for <strong>certifications</strong> or personal
            milestones, our{" "}
            <strong>upper intermediate French classes in Brampton</strong>{" "}
            provide the perfect learning environment with small class sizes and
            expert guidance.
          </p>

          {/* SECTION 1 */}
          <h2 className="text-3xl font-bold mb-4">
            Achieve Your Goals with Advanced Intermediate French
            <br />
            Classes in Brampton
          </h2>

          <p className="mb-10">
            Our <em>advanced intermediate French classes in Brampton</em> are
            perfect for students aiming to bridge the gap between intermediate
            and advanced proficiency. These classes focus on real-world
            applications, advanced reading comprehension, and writing exercises
            to boost your confidence. With interactive group discussions,
            practical scenarios, and personalized coaching, the
            <em> advanced intermediate French classes in Brampton</em> are ideal
            for anyone seeking to achieve greater command of the French
            language, whether for academics, travel, or career advancement.
          </p>

          {/* SECTION 2 */}
          <h2 className="text-3xl font-bold mb-4">
            Excel in Your Learning with a B2 French Course in Brampton
          </h2>

          <p className="mb-10">
            Take your skills to the next level with our
            <strong> B2 French course in Brampton</strong>, designed to meet
            international language standards. This course builds on previous
            knowledge and introduces advanced linguistic structures, helping you
            prepare for certifications like DELF B2. Our
            <strong> B2 French course in Brampton</strong> combines expert-led
            sessions with engaging activities to help you master both formal and
            informal communication.
            <strong> Enroll now</strong> to experience a unique blend of
            interactive learning and professional support with Toronto French
            Academy’s
            <strong> upper intermediate French classes in Brampton!</strong>
          </p>

          {/* SECTION 3 */}
          <h2 className="text-3xl font-bold mb-4">
            Advance Your French Skills with B2 French Course and TEF Preparation
          </h2>

          <p className="mb-10">
            <strong>Toronto French Academy</strong> offers a comprehensive
            <strong> B2 French course in Brampton</strong> combined with expert
            <strong> TEF preparation</strong> to help you achieve fluency and
            excel in language certifications. Our{" "}
            <strong>upper intermediate French classes in Brampton</strong> are
            tailored to refine your grammar, vocabulary, and conversational
            skills, ensuring you’re well-prepared for both the
            <strong> B2 French course in Brampton</strong> requirements and the
            TEF exam. With interactive lessons and experienced instructors, we
            provide the tools and support you need to reach your goals.
          </p>
        </div>

        {/* CONTENT AFTER IMAGE */}
        <h2 className="text-3xl font-semibold text-center mt-10 mb-6">
          Upper Intermediate Classes (B2)
        </h2>

        <p className="text-red-600 font-semibold mb-2">
          Approximate Duration: 3 to 4 months
        </p>

        <h3 className="text-2xl font-semibold mb-4">Course Summary</h3>

        <p className="mb-6">
          Level B2 aims to achieve a high level of fluency, preparing you for
          professional environments and academic pursuits in French.
        </p>

        {/* WHAT YOU WILL LEARN */}
        <h3 className="text-xl font-semibold mb-3">What You’ll Learn</h3>

        <ul className="list-disc pl-6 space-y-2 text-[15px]">
          <li>
            <strong>Specialized Vocabulary:</strong> Fields such as business,
            technology, science, and the arts.
          </li>
          <li>
            <strong>Grammar Mastery:</strong> Advanced structures. Complex
            expressions and nuances.
          </li>
          <li>
            <strong>Interpretation Skills:</strong> Interpreting conversations
            and formal content.
          </li>
          <li>
            <strong>Idiomatic Expressions:</strong> Using phrases that are
            culturally and contextually relevant.
          </li>
          <li>
            <strong>Communication Skills:</strong> Fluent conversation.
            Debating, persuading, and discussing abstract concepts.
          </li>
          <li>
            <strong>Reading Comprehension:</strong> Understanding complex texts
            including literary and technical documents.
          </li>
          <li>
            <strong>Writing Proficiency:</strong> Crafting advanced reports,
            formal summaries, and presentations.
          </li>
          <li>
            <strong>Cultural & Social Understanding:</strong> In-depth study of
            Francophone cultures, current events, and societal issues.
          </li>
        </ul>

        {/* PREREQUISITES */}
        <h3 className="text-xl font-semibold mt-10 mb-3">Prerequisites</h3>

        <ul className="list-disc pl-6 space-y-2 text-[15px]">
          <li>Completion of Level B1 or equivalent proficiency.</li>
          <li>
            Ability to discuss various topics, understand intermediate texts,
            and use complex grammar structures.
          </li>
        </ul>

        {/* BUTTON */}
        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition text-sm font-medium"
          >
            → ENROLL NOW (B2 PROFESSIONAL)
          </a>
        </div>

        <div className="text-center mt-14 text-gray-500 text-xs tracking-wider">
          OUR PROGRAM
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
  );
};

export default Professional;
