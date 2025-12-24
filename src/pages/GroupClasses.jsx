import React ,{useState} from "react";

const GroupClasses = () => {
  const [openIdx, setOpenIdx] = useState(null);

    React.useEffect(() => {
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
        "The cost varies by level and duration. Please contact our admissions team for the latest fee details — we offer both one-time payment and monthly subscription plans.",
    },
    {
      question: "What is the duration of the classes?",
      answer:
        "Each class runs for 2 hours. We also offer flexible scheduling including evening and weekend batches to accommodate different time-tables.",
    },
  ];

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

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
          French Group Classes in Brampton
        </h1>
        <p className="text-lg md:text-4xl mt-2 font-medium">CLASS DETAIL</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <p className="text-lg md:text-4xl mt-2 mx-auto font-medium">
          Learn and Grow with French Group Classes in Brampton
        </p>
        <div className="max-w-4xl mx-auto flex justify-center ">
          <img
            src="https://frenchforpr.com/wp-content/uploads/2025/01/Intermediate-French-Classes-in-Brampton-.png"
            alt="French Teacher"
            className="w-full rounded shadow"
          />
        </div>
        {/* content */}
        <div className="max-w-6xl text-gray-700 leading-relaxed mx-auto">
          York-Center French Institute offers interactive and engaging French group
          classes in Brampton designed for learners of all levels. Whether you
          are a beginner or looking to enhance your fluency, our French group
          classes in Brampton provide a supportive and collaborative environment
          to improve your French skills. Join like-minded learners to practice
          speaking, listening, and writing while building confidence in
          real-life conversations. Our French group classes in Brampton are led
          by experienced instructors who use proven methods to make learning
          enjoyable and effective. With small group sizes, you’ll receive
          personalized attention while benefiting from group discussions and
          activities. Whether you’re preparing for exams, career opportunities,
          or personal goals, our French group classes in Brampton are tailored
          to meet your unique needs. Enrolling in our French group classes in
          Brampton means becoming part of a vibrant community passionate about
          learning French. Experience a dynamic mix of lessons, interactive
          exercises, and group collaboration. Start your language journey today
          with our highly-rated French group classes in Brampton and achieve
          your goals with confidence!
        </div>
        {/* ===================== GROUP FRENCH CLASSES SECTION ===================== */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Title */}
          <h2 className="text-center text-3xl font-bold mb-2">
            Group French Classes
          </h2>

          {/* Red Info Card */}
          <div className="flex justify-center mb-12">
            <div className="bg-red-600 text-white p-6 py-12  text-xl rounded-xl w-1/3 space-y-3 text-sm shadow-lg">
              <p className="font-semibold">
                📅 Class Day
                <br />
                <span className="font-normal">Every Thursday</span>
              </p>
              <p className="font-semibold">
                👥 Years Old
                <br />
                <span className="font-normal">18+ Years</span>
              </p>
              <p className="font-semibold">
                ⏳ Class Duration
                <br />
                <span className="font-normal">2 Hours</span>
              </p>
              <p className="font-semibold">
                👨‍🏫 Instructor
                <br />
                <span className="font-normal">Ahmeda Tames</span>
              </p>
            </div>
            <div>
              <p className="text-center max-w-3xl  mx-auto text-gray-600 py-10 leading-relaxed">
                Our dynamic Group French Classes in Brampton provide an
                immersive and interactive learning experience, allowing learners
                the opportunity to practice their language skills in a
                collaborative setting. With lessons tailored to specific
                proficiency levels, our group classes provide a supportive and
                stimulating environment to enhance your language learning
                experience.
              </p>
            </div>
          </div>

          {/* Two Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center mb-16">
            <img
              src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
              alt="Classroom 1"
              className="rounded-xl shadow-md w-[450px] h-[530px] object-cover"
            />
            <img
              src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
              alt="Classroom 2"
              className="rounded-xl shadow-md w-[450px] h-[530px] object-cover"
            />
          </div>

          {/* Class Goal Title */}
          <h3 className="text-xl font-semibold mb-4">Class Goal:</h3>

          {/* Goal Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 bg-white rounded-xl shadow-md border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-red-600 text-xl">🎯</span> TEF Canada Exam
                Preparation
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our TEF Canada Exam Preparation class is designed to help
                learners prepare for the TEF Canada exam, which is required for
                immigration, education, and employment in Quebec and other
                French-speaking regions. Our experienced instructors provide
                comprehensive exam preparation, including test-taking
                strategies, practice exams, and personalized feedback, ensuring
                you are well-prepared to achieve your desired results.
              </p>
              <a
                href="#"
                className="text-red-600 text-sm font-semibold mt-2 block"
              >
                EXPLORE →
              </a>
            </div>

            {/* Card 2 (Red Middle Card) */}
            <div className="p-6 bg-red-600 text-white rounded-xl shadow-md">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">🌍</span> Language and Cultural
                Immersion
              </h4>
              <p className="text-sm leading-relaxed">
                Our Cultural Immersion Programs offer learners the opportunity
                to immerse themselves in French language and culture, providing
                a unique and enriching language learning experience. From
                culinary tours to museum visits, these programs offer a fun and
                engaging way to experience French language and culture
                firsthand.
              </p>
              <a
                href="#"
                className="text-white underline text-sm font-semibold mt-2 block"
              >
                EXPLORE →
              </a>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-white rounded-xl shadow-md border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-red-600 text-xl">💼</span> Professional
                Development
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our Professional Classes are designed to cater specifically to
                those seeking to advance their career prospects. We focus on
                enhancing your language skills in a professional context,
                including business vocabulary, negotiation skills, and cultural
                awareness. Our B2 + TEF program offers a comprehensive approach
                to language learning, ensuring you are equipped to succeed in a
                professional environment.
              </p>
              <a
                href="#"
                className="text-red-600 text-sm font-semibold mt-2 block"
              >
                EXPLORE →
              </a>
            </div>
          </div>
        </div>
        {/* ===================== COMMUNITY SECTION ===================== */}
        <div className="bg-[#f5f6f8] py-20 mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <p className="text-red-600 uppercase text-sm font-semibold">
                Our Journey
              </p>
              <h2 className="text-3xl font-bold max-w-lg">
                Join Our Community of Successful Learners
              </h2>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              <div>
                <p className="text-3xl font-bold text-red-600">75 K+</p>
                <p className="text-gray-600 text-sm">Satisfied Students</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-red-600">100+</p>
                <p className="text-gray-600 text-sm">Expert Instructors</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-red-600">50+</p>
                <p className="text-gray-600 text-sm">Locations</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-red-600">15+</p>
                <p className="text-gray-600 text-sm">Selected Classes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== WHY CHOOSE SECTION ===================== */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Why Choose York-Center French Institute for French Group Classes in
          Brampton?
        </h2>

        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          {/* 1 */}
          <div>
            <p className="font-semibold text-xl">1. Expert Instructors</p>
            <p className="pl-6 text-gray-600">
              At TFA, our instructors are certified professionals with years of
              experience in teaching French. They use proven teaching
              methodologies to ensure learners grasp concepts effectively.
            </p>
          </div>

          {/* 2 */}
          <div>
            <p className="font-semibold text-xl">2. Tailored Curriculum</p>
            <p className="pl-6 text-gray-600">
              Our <strong>French group classes in Brampton</strong> are designed
              to suit learners of all levels. Whether you’re a beginner or
              advancing to upper-intermediate proficiency, our tailored lessons
              cater to your specific needs.
            </p>
          </div>

          {/* 3 */}
          <div>
            <p className="font-semibold text-xl">
              3. Interactive Learning Environment
            </p>
            <p className="pl-6 text-gray-600">
              The <em>group French classes in Brampton</em> at TFA emphasize
              collaboration and interaction. You’ll participate in discussions,
              role-playing, and group exercises, ensuring an engaging and
              practical learning experience.
            </p>
          </div>

          {/* 4 */}
          <div>
            <p className="font-semibold text-xl">4. Small Class Sizes</p>
            <p className="pl-6 text-gray-600">
              With smaller group sizes, our{" "}
              <strong>French group classes in Brampton</strong>
              ensure personalized attention and support for each student,
              helping you progress faster.
            </p>
          </div>

          {/* 5 */}
          <div>
            <p className="font-semibold text-xl">5. Flexible Scheduling</p>
            <p className="pl-6 text-gray-600">
              We offer morning, evening, and weekend{" "}
              <em>group French classes in Brampton</em>
              to accommodate your busy schedule, making it easier to balance
              learning with other commitments.
            </p>
          </div>

          {/* 6 */}
          <div>
            <p className="font-semibold text-xl">6. Proven Success Rate</p>
            <p className="pl-6 text-gray-600">
              Many of our students have achieved fluency and passed
              certifications like DELF and TEF after attending our{" "}
              <strong>French group classes in Brampton</strong>.
            </p>
          </div>

          {/* 7 */}
          <div>
            <p className="font-semibold text-xl">7. Community and Networking</p>
            <p className="pl-6 text-gray-600">
              Join a vibrant community of language enthusiasts in our
              <em> group French classes in Brampton</em>. Build connections and
              practice French with peers in a friendly, supportive environment.
            </p>
          </div>
        </div>
      </div>
  {/* FAQ / Client Questions Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-6  flex justify-between items-center"
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-xl">
                  {openIdx === idx ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-4 pt-4 p-2 text-gray-700 transition-all duration-300 ${
                  openIdx === idx ? "max-h-screen" : "max-h-0 overflow-hidden"
                }`}
              >
                {openIdx === idx && <p>{faq.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

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

export default GroupClasses;
