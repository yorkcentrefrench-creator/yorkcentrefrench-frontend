import React from "react";

const WhatsappCommunity = () => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="w-full bg-white text-black">

      {/* Top Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 leading-snug">
            Join the York-Center French Institute  Community on WhatsApp!
          </h1>

          <p className="mt-6 text-lg leading-relaxed">
            Are you ready to <span className="font-semibold">master French</span> 
            and unlock new opportunities?
          </p>

          <p className="mt-5 text-lg leading-relaxed">
            <span className="font-semibold">York-Center French Institute</span> has just launched an 
            exclusive <span className="font-semibold">French Learning Community on WhatsApp</span>, and 
            we want YOU to be a part of it!
          </p>

          <p className="mt-5 text-lg leading-relaxed">
            Gain access to <span className="font-semibold">1,000+ premium learning materials</span> and join 
            a vibrant community of over <span className="font-semibold">900 students!</span>
          </p>
        </div>

        {/* RIGHT IMAGE COLLAGE */}
        <div className="flex justify-center flex-wrap gap-6">
          <img src="https://frenchforpr.com/wp-content/uploads/2024/10/Untitled-design-35-768x768.png" className="w-68 h-68 object-contain" />
         
        </div>

      </section>

      {/* FORM SECTION */}
      <section className="bg-white py-20 border-t">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-red-600 mb-12">
          Join a Community of 1,000+ Students
        </h2>

        <div className="max-w-3xl mx-auto px-6">
          <form className="space-y-6">

            <div>
              <label className="font-semibold">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg mt-2"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="font-semibold">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg mt-2"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="font-semibold">
                WhatsApp Number <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg mt-2"
                placeholder="Enter your WhatsApp number"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
            >
              Join Community
            </button>

          </form>
        </div>
      </section>
{/* WHAT DO WE POST SECTION */}
<section className="bg-white py-20 border-t">
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      What do we post?
    </h2>

    <div className="space-y-6 text-left max-w-2xl mx-auto">
      <div className="flex items-start gap-3">
        <span className="text-red-600 text-xl">✔</span>
        <p className="text-lg">
          <strong>Daily Video Lectures:</strong> Learn from expert instructors with engaging video lessons.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="text-red-600 text-xl">✔</span>
        <p className="text-lg">
          <strong>Listening Activities:</strong> Improve your listening with audio exercises.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="text-red-600 text-xl">✔</span>
        <p className="text-lg">
          <strong>Writing Exercises:</strong> Practise writing skills with assignments and expert feedback.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="text-red-600 text-xl">✔</span>
        <p className="text-lg">
          <strong>TEF Exam Preparation:</strong> Get ready for TEF with specialized prep materials.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="text-red-600 text-xl">✔</span>
        <p className="text-lg">
          <strong>Live Sessions with Tutors:</strong> Interact in real-time with tutors during Q&A sessions.
        </p>
      </div>
    </div>
  </div>
</section>


{/* LOOKING FOR LIVE CLASSES SECTION */}
<section className="py-20">
  <div className="max-w-4xl mx-auto text-center px-6">

    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Looking for Live Classes?
    </h2>

    <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10">
      York-Center French Institute offers 
      <span className="font-semibold"> online one-on-one</span> 
      and small <span className="font-semibold">group classes</span> 
      specially designed for <span className="font-semibold">TEF Exam</span> preparation.
    </p>

    <button className="bg-red-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-red-700 transition">
      DISCOVER OUR COURSES
    </button>

  </div>
</section>

    </div>
  );
};

export default WhatsappCommunity;
