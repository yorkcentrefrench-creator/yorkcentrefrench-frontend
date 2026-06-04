import React, {useState} from "react";
import {
  FaLaptopCode,
  FaBolt,
  FaUserFriends,
  FaChalkboardTeacher,
  FaClock,
  FaCertificate,
  FaStar,
  FaTrophy,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import TfaApproach from "../component/TfaApproach";
import ReviewCard from "../component/ReviewCard";
import FAQSection from "../component/FAQSection";
import DemoModal from "../component/DemoModal";
import HeroSlider from "../component/HeroSlider";
const reviews = [
  {
    initial: "M",
    name: "Marie Dubois",
    date: "15 February 2025",
    review:
      "The classes are very well-structured and easy to follow. The instructor explains French concepts clearly and with real-life examples.",
    color: "#f87171",
  },
  {
    initial: "L",
    name: "Lucas Martin",
    date: "3 August 2024",
    review:
      "I gained a lot of confidence in speaking French. The lessons are interactive, practical, and focused on correct pronunciation.",
    color: "#60a5fa",
  },
  {
    initial: "S",
    name: "Sophia Laurent",
    date: "21 May 2025",
    review:
      "Excellent learning environment! The teacher is patient, motivating, and ensures everyone understands before moving forward.",
    color: "#a78bfa",
  },
];

const AFFILIATION_MARQUEE_COPIES = 6;

const resultHighlights = [
  "2,000+ students trained globally",
  "90% success rate in TEF/TCF exams",
  "Hundreds of students boosted their PR scores",
];

const demoSessionTracks = [
  "Beginner to Advanced French DELF + DALF (A1-B2)",
  "TEF Canada / TCF Canada Preparation",
  "Fast-Track PR Booster Courses",
  "Interview & Job-Oriented French",
];

const demoSessionBenefits = [
  "Live interactive classes",
  "Speaking-focused training",
  "Real exam-level practice",
  "Personalized feedback",
  "Doubt-solving sessions",
];

const testimonialImages = [
  {
    src: "/class1.jpg",
    alt: "Online French class grammar lesson screenshot",
    label: "Live grammar practice",
    title: "Interactive French Lesson",
    description: "Students learn grammar through live examples and guided correction.",
  },
  {
    src: "/class2.jpg",
    alt: "Online French class pronunciation lesson screenshot",
    label: "Small group speaking drills",
    title: "Small Batch Doubt Solving",
    description: "Focused classroom time with tutor feedback and clear explanations.",
  },
  {
    src: "/class3.jpg",
    alt: "Online French class alphabet lesson screenshot",
    label: "TEF-ready foundations",
    title: "Pronunciation Foundations",
    description: "Sound-by-sound practice designed to build confident speaking.",
  },
];


const CourseInfo = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openDemo, setOpenDemo] = useState(false);
  const [activeClassSlide, setActiveClassSlide] = useState(0);

  React.useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveClassSlide((current) => (current + 1) % testimonialImages.length);
    }, 4500);

    return () => window.clearInterval(slideTimer);
  }, []);

  const activeTestimonial = testimonialImages[activeClassSlide];
  const goToPreviousClassSlide = () => {
    setActiveClassSlide(
      (activeClassSlide - 1 + testimonialImages.length) %
        testimonialImages.length
    );
  };
  const goToNextClassSlide = () => {
    setActiveClassSlide((activeClassSlide + 1) % testimonialImages.length);
  };

  return (
    <div className="w-full bg-white text-gray-800">
      {/* ================= SLIDE BANNER ================= */}
      <section className="w-full">
        <HeroSlider />
      </section>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-red-50 to-white py-8">
  <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
        Learn French from{" "}
        <span className="text-red-600">zero to B2</span>
        <br />
        within few months.
      </h1>

      {/* Paragraph */}
      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        Explore online French classes — including{" "}
        <strong>DELF, TEF, TCF Canada exam preparation.</strong>
      </p>

      {/* Highlight Line */}
      <p className="mt-5 text-lg font-semibold text-gray-900">
        Boost Your Future with French in Canada:
        <span className="text-red-500">
          {" "}TEF/TCF Prep, Travel & Career
        </span>
      </p>

      {/* Description */}
      <p className="mt-5 text-gray-600 leading-relaxed">
        Join our online French classes tailored to your needs, led by
        C1/C2 Certified French-speaking instructors. From beginner
        foundations to TEF/TCF exam preparation, we support students globally.
      </p>

      {/* Button */}
      <button
        onClick={() => setOpenDemo(true)}
        className="
          mt-8
          bg-red-500 hover:bg-red-600
          text-white font-semibold
          px-7 py-3.5 rounded-xl
          shadow-md hover:shadow-lg
          transition-all duration-300
        "
      >
        Book Free Demo
      </button>

    </div>

    {/* RIGHT IMAGE */}
    <div className="relative">

      <img
        src="./student.webp"
        alt="Students learning French"
        className="
          rounded-3xl
          shadow-xl
          w-full
          h-[720px]
          object-cover
        "
      />

      {/* Floating Card */}
      <div className="
        absolute bottom-5 left-5
        bg-white/95
        px-5 py-4
        rounded-2xl
        shadow-lg
        border border-gray-100
      ">

        <p className="text-sm text-gray-500">
          Success Rate
        </p>

        <p className="text-2xl font-bold text-red-600">
          92%
        </p>

        <p className="text-xs text-gray-500">
          CLB 7+ Achievers
        </p>

      </div>

    </div>

  </div>
</section>
      <DemoModal open={openDemo} onClose={() => setOpenDemo(false)} />


            {/* ================= AFFILIATIONS ================= */}
      <section className="py-10 bg-gradient-to-b from-white to-gray-50 overflow-hidden w-full">
  <div
    className="flex animate-scroll whitespace-nowrap gap-0"
    style={{ "--scroll-distance": `-${100 / AFFILIATION_MARQUEE_COPIES}%` }}
  >

  {Array.from({ length: AFFILIATION_MARQUEE_COPIES }).map((_, index) => (
    <React.Fragment key={index}>

      {/* Logo 1 */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 flex justify-center items-center h-[180px] min-w-[260px] mx-3">
        <img
          src="./af alliances.png"
          alt="Alliance Françaises Canada"
          className="max-h-24 object-contain"
        />
      </div>

      {/* Logo 2 */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 flex justify-center items-center h-[180px] min-w-[260px] mx-3">
        <img
          src="./tcf canada.png"
          alt="TCF Canada"
          className="max-h-28 object-contain"
        />
      </div>

      {/* Logo 3 */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 flex justify-center items-center h-[180px] min-w-[260px] mx-3">
        <img
          src="./tef canada.png"
          alt="TEF Canada"
          className="max-h-24 object-contain"
        />
      </div>

      {/* Logo 4 */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 flex justify-center items-center h-[180px] min-w-[260px] mx-3">
        <img
          src="./delf dalf.png"
          alt="DELF DALF"
          className="max-h-28 object-contain"
        />
      </div>

    </React.Fragment>
  ))}

</div>
</section>



<section className="py-24 bg-white relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-50 rounded-full blur-3xl opacity-60"></div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">

    {/* Heading */}
    <div className="text-center max-w-5xl mx-auto">

      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 whitespace-nowrap">
        Why French is a
        <span className="text-red-500"> Game-changer </span>
        in Canada?
      </h2>

    </div>

    {/* Benefits */}
    <div className="flex flex-wrap justify-center gap-4 mt-14">

      {[
        "Boost your CRS score for PR",
        "Qualify for French-specific immigration streams",
        "Access high-paying bilingual jobs",
        "Stand out in competitive job markets",
        "Build a future in provinces like Quebec & beyond",
      ].map((item, i) => (

        <div
          key={i}
          className="
            group
            bg-white/80 backdrop-blur-xl
            border border-gray-100
            rounded-2xl
            px-5 py-3
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-1
            transition-all duration-300
            flex items-center gap-3
          "
        >

          {/* Check Icon */}
          <div className="
            w-8 h-8 rounded-xl
            bg-gradient-to-br from-green-100 to-green-50
            text-green-600
            flex items-center justify-center
            font-bold
            text-sm
            shadow-sm
          ">
            ✓
          </div>

          {/* Text */}
          <p className="font-medium text-gray-700 text-sm md:text-base">
            {item}
          </p>

        </div>

      ))}

    </div>

    {/* Stats */}
    <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-14">

      {/* Stat 1 */}
      <div className="text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
          2000+
        </h3>

        <p className="mt-2 text-gray-500 font-medium text-xs md:text-sm uppercase tracking-[2px]">
          Students Trained
        </p>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px h-14 bg-gray-200"></div>

      {/* Stat 2 */}
      <div className="text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent">
          20+
        </h3>

        <p className="mt-2 text-gray-500 font-medium text-xs md:text-sm uppercase tracking-[2px]">
          Certified Tutors
        </p>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px h-14 bg-gray-200"></div>

      {/* Stat 3 */}
      <div className="text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
          4.8★
        </h3>

        <p className="mt-2 text-gray-500 font-medium text-xs md:text-sm uppercase tracking-[2px]">
          Average Rating
        </p>
      </div>

    </div>

  </div>
</section>






      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-20 bg-white relative overflow-hidden">

  {/* Background Effects */}
  <div className="absolute top-20 left-10 w-52 h-52 bg-red-100 blur-3xl rounded-full opacity-30"></div>
  <div className="absolute bottom-10 right-10 w-52 h-52 bg-indigo-100 blur-3xl rounded-full opacity-30"></div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="inline-block text-red-500 font-semibold tracking-[3px] uppercase text-sm mb-3">
        Why Choose Us
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        What We Offer
      </h2>
    </div>

    {/* Compact Modern Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

      {[
        {
          icon: <FaLaptopCode />,
          title: "TEF & TCF Prep",
        },

        {
          icon: <FaBolt />,
          title: "Fast-Track Learning",
        },

        {
          icon: <FaUserFriends />,
          title: "Small Live Batches",
        },

        {
          icon: <FaChalkboardTeacher />,
          title: "1:1 Mentorship",
        },

        {
          icon: <FaClock />,
          title: "Flexible Timings",
        },

        {
          icon: <FaCertificate />,
          title: "Certified Tutors",
        },

      ].map((item, i) => (

        <div
          key={i}
          className="group relative bg-white border border-gray-100 rounded-2xl px-6 py-5 flex items-center gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >

          {/* Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>

          {/* Icon */}
          <div className="
            w-14 h-14 rounded-2xl
            bg-gradient-to-br from-red-50 to-white
            border border-red-100
            flex items-center justify-center
            text-red-500 text-2xl
            shadow-sm
            group-hover:scale-110
            group-hover:rotate-3
            transition-all duration-300
          ">
            {item.icon}
          </div>

          {/* Text */}
          <div className="relative z-10">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-red-600 transition">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Interactive & practical learning
            </p>
          </div>

        </div>

      ))}

    </div>
  </div>
</section>

      {/* ================= DEMO SESSIONS ================= */}
      <section className="py-20 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[2px] text-amber-300">
                Live Demo Sessions
              </span>

              <h2 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight">
                View our full demo sessions from A1-B2 + TEF/TCF Prep
              </h2>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {demoSessionTracks.map((track) => (
                  <div
                    key={track}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                  >
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-red-400" />
                    <p className="font-semibold text-slate-100">{track}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <h3 className="text-2xl font-bold">What You Get</h3>
                  <ul className="mt-5 space-y-3">
                    {demoSessionBenefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-3 text-slate-300"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                          <FaStar className="text-xs" />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-2xl font-bold">
                    Learn from Experts & Get Real Results
                  </h3>
                  <p className="mt-4 leading-relaxed text-slate-300">
                    Our trainers focus on practical learning plus exam strategy,
                    so you do not just learn French. You score high in exams.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpenDemo(true)}
                className="mt-10 w-full rounded-xl bg-red-500 px-7 py-3.5 text-center font-semibold text-white shadow-lg transition hover:bg-red-600 sm:w-auto"
              >
                View our full demo sessions now - A1-B2 + TEF/TCF Prep
              </button>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[40px] bg-red-500/10 blur-3xl" />
              <div className="relative rounded-[34px] border border-white/10 bg-gradient-to-br from-white/15 to-white/5 p-4 shadow-2xl">
                <div className="flex items-center gap-2 rounded-t-3xl border border-white/10 bg-slate-900/80 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-3 truncate text-xs font-semibold uppercase tracking-[2px] text-slate-300">
                    Live doubt-solving session
                  </span>
                  <span className="ml-auto rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                    LIVE
                  </span>
                </div>

                <div className="overflow-hidden rounded-b-3xl border-x border-b border-white/10 bg-slate-900">
                  <img
                    src="/doubt session.jpg"
                    alt="Live online French doubt-solving session"
                    className="aspect-[756/305] w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    ["01", "Ask questions live"],
                    ["02", "Tutor feedback"],
                    ["03", "Exam-style practice"],
                  ].map(([number, text]) => (
                    <div
                      key={number}
                      className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4"
                    >
                      <p className="text-xs font-bold text-red-300">{number}</p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl bg-white px-5 py-4 text-slate-950">
                  <p className="text-sm font-semibold uppercase tracking-[2px] text-red-500">
                    Real doubt-solving support
                  </p>
                  <p className="mt-1 font-bold">
                    Practice, ask questions, and improve with live tutor
                    feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
<section className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-900 mb-4">
      Online French Class Plans
    </h2>

    <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
      Structured programs designed for Canadian immigration success & real-world fluency
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <PricingCard
        title="Group Classes"
        price="$270"
        name= "group"
        duration="10–12 Months"
        features={[
          "20 Classes / Month",
          "Mon–Fri (8–9 PM EST)",
          "4–5 Learners / Batch",
          "A1 to B2 Coverage",
        ]}
      />

      <PricingCard
        title="Individual"
        name ="individual"
        price="$320"
        duration="8–10 Months"
        highlight
        features={[
          "12 Classes / Month",
          "Flexible Timings",
          "Dedicated 1:1 Mentor",
          "A1 to B2 Coverage",
        ]}
      />

      <PricingCard
        title="Intensive 1:1"
        price="$430"
        name="intensive"
        duration="6–8 Months"
        features={[
          "20 Classes / Month",
          "Fast-Track Progress",
          "Daily Practice",
          "A1 to B2 Coverage",
        ]}
      />

      <PricingCard
        title="Speaking Booster"
        price="$150"
        name="speaking"
        duration="6–8 Months"
        features={[
          "8 Speaking Classes",
          "Pronunciation Focus",
          "Small Groups / 1:1",
          "Confidence Building",
        ]}
      />
    </div>
  </div>
</section>






      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#fff7ed_46%,#f8fafc_100%)] py-14 md:py-16">
        <div className="max-w-[1480px] mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-red-500 font-semibold tracking-[3px] uppercase text-sm mb-4">
                <FaTrophy className="text-amber-500" />
                Testimonials
              </span>

              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-950 leading-tight">
                Our Results Speak
              </h2>
            </div>

            <button
              onClick={() => setOpenDemo(true)}
              className="w-full sm:w-auto rounded-xl bg-red-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-red-600"
            >
              Join French demo session now
            </button>
          </div>

          <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)] xl:items-start">
            <div className="min-w-0">
              <div className="overflow-hidden rounded-[28px] bg-slate-950 p-3 shadow-2xl">
                <div className="flex h-10 items-center gap-2 px-3 text-xs text-slate-300">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-3 truncate font-medium">
                    York-Centre French live online class
                  </span>
                  <span className="ml-auto hidden rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold sm:inline-flex">
                    Slide {activeClassSlide + 1} / {testimonialImages.length}
                  </span>
                </div>

                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
                  {testimonialImages.map((image, index) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className={`absolute inset-0 h-full w-full object-contain transition-all duration-700 ${
                        index === activeClassSlide
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-[1.03]"
                      }`}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  ))}

                  <button
                    onClick={goToPreviousClassSlide}
                    className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-white"
                    aria-label="Previous online class slide"
                  >
                    <FaChevronLeft />
                  </button>

                  <button
                    onClick={goToNextClassSlide}
                    className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-white"
                    aria-label="Next online class slide"
                  >
                    <FaChevronRight />
                  </button>
                </div>

                <div className="grid gap-4 px-3 py-5 md:grid-cols-[1fr_auto] md:items-center md:px-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[2px] text-amber-300">
                      {activeTestimonial.label}
                    </p>
                    <h3 className="mt-1 text-2xl md:text-3xl font-bold text-white">
                      {activeTestimonial.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm md:text-base text-slate-300">
                      {activeTestimonial.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {testimonialImages.map((image, index) => (
                      <button
                        key={`${image.src}-dot`}
                        onClick={() => setActiveClassSlide(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          index === activeClassSlide
                            ? "w-9 bg-red-400"
                            : "w-2.5 bg-white/30 hover:bg-white/60"
                        }`}
                        aria-label={`Go to ${image.title}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <div className="flex flex-col gap-5">
              <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                {resultHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm"
                  >
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <FaStar className="text-sm" />
                    </span>
                    <p className="text-base font-bold leading-relaxed text-slate-800 md:text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-[28px] bg-slate-950 p-7 text-white shadow-xl md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[3px] text-amber-300">
                  Canada PR focused learning
                </p>
                <h3 className="mt-4 text-3xl font-extrabold leading-tight">
                  Your Future in Canada Starts with French
                </h3>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  Do not wait until opportunities pass you by. Start learning
                  French today and move one step closer to your dream life in
                  Canada.
                </p>
                <div className="mt-7 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-2xl bg-white/10 px-4 py-4">
                    <p className="text-3xl font-extrabold text-white">90%</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[2px] text-slate-400">
                      TEF/TCF Success
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 px-4 py-4">
                    <p className="text-3xl font-extrabold text-white">2000+</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[2px] text-slate-400">
                      Students Trained
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TfaApproach />

      {/* ================= REVIEWS ================= */}
      <section className="py-20">
        <h2 className="text-center text-3xl font-bold mb-12">
          Trusted by Learners Across Canada
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {reviews.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </section>

      <FAQSection />
    </div>
  );
};

/* ================= PRICING CARD ================= */


const PricingCard = ({ title, price, duration, features, highlight, name }) => {
  const [loading, setLoading] = useState(false);

  const handleEnroll = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://york-centre-api.onrender.com/payment/enroll",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ plan: name }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.payment_url) {
        throw new Error(data.message || "Unable to redirect");
      }

      window.open(data.payment_url, "_blank", "noopener,noreferrer");
    } catch (error) {
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative rounded-[28px] p-8 bg-white shadow-lg
      transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
      ${highlight ? "ring-2 ring-indigo-600 scale-105" : "ring-1 ring-slate-200"}`}
    >
      {/* Badge */}
      {highlight && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2
        bg-indigo-600 text-white text-xs font-semibold px-6 py-1.5 rounded-full shadow-md">
          Best Value
        </span>
      )}

      {/* Title */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500 mt-1">{duration}</p>
      </div>

      {/* Price */}
      <div className="text-center my-8">
        <p className="text-5xl font-extrabold text-indigo-700">{price}</p>
        <p className="text-sm text-slate-500 mt-1">per month</p>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />

      {/* Features */}
      <ul className="space-y-3 text-sm text-slate-700">
        {features.map((f, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={handleEnroll}
        disabled={loading}
        className={`mt-10 w-full py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2
        ${loading
          ? "bg-slate-400 cursor-not-allowed"
          : highlight
          ? "bg-indigo-600 text-white hover:bg-indigo-700"
          : "bg-slate-900 text-white hover:bg-black"
        }`}
      >
        {loading ? (
          <>
            <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Redirecting…
          </>
        ) : (
          "Enroll Now"
        )}
      </button>
    </div>
  );
};







export default CourseInfo;
