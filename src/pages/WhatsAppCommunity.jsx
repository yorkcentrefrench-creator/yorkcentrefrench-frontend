import React from "react";

const WhatsAppCommunity = () => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-white min-h-screen px-6 lg:px-20 py-16">
      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4 leading-snug">
            aJoin the TFA French Learning Community on WhatsApp!
          </h1>

          <p className="text-gray-600 mb-4">
            Are you ready to <strong>master French</strong> and unlock new opportunities?
          </p>

          <p className="text-gray-600 mb-4">
            <strong>York-Center French Institute</strong> has just launched an exclusive <strong>French Learning Community on WhatsApp</strong>, and we want YOU to be a part of it!
          </p>

          <p className="text-gray-600">
            Gain access to <strong>1,000+ premium learning materials</strong> and join a vibrant community of over <strong>900 students!</strong>
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex justify-center">
          <img
            src="/whatsapp-community.png"
            alt="Community Collage"
            className="w-[320px] md:w-[420px] object-contain"
          />
        </div>
      </div>

      {/* WHAT WE POST DAILY */}
      <div className="max-w-4xl mx-auto mt-16 p-8 bg-red-50 rounded-xl shadow">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 mb-6">
          What We Post Daily in WhatsApp Community
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
          <li>• Daily French Vocabulary</li>
          <li>• Audio Lessons for Pronunciation</li>
          <li>• Grammar Tips & Rules</li>
          <li>• Sample TEF/TCF Test Questions</li>
          <li>• French Conversation Practice</li>
          <li>• Short Reading Exercises</li>
          <li>• Weekly Quizzes & Challenges</li>
          <li>• Community Doubt Clearing Support</li>
        </ul>
      </div>

      {/* FORM SECTION */}
      <div className="max-w-3xl mx-auto mt-20">
        <h2 className="text-3xl font-semibold text-center text-red-600 mb-10">
          Join a Community of 1,000+ Students
        </h2>

        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block mb-2 font-medium">Full Name *</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Email Address *</label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium">Phone *</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block mb-2 font-medium">
              What's your current status with French? *
            </label>
            <select className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-red-400 outline-none">
              <option>Choose</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          {/* More Info */}
          <div>
            <label className="block mb-2 font-medium">
              Would you like to receive more info about French classes? *
            </label>
            <select className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-red-400 outline-none">
              <option>Choose</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-red-600 text-white py-3 text-lg rounded-full hover:bg-red-700 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default WhatsAppCommunity;
