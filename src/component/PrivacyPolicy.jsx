import React from "react";
import { FiFileText, FiShield, FiLock, FiMail } from "react-icons/fi";

const PrivacyPolicy = () => {
  return (
    <div className="w-full">
      {/* TOP BANNER */}
      <div
        className="w-full h-[260px] md:h-[350px] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg')",
        }}
      >
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold drop-shadow-lg"
        >
          Privacy Policy
        </h1>
        <p data-aos="fade-up" className="mt-3 text-lg opacity-90">
          Your privacy and trust matter to us
        </p>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        {/* CARD */}
        <div
          data-aos="fade-up"
          className="rounded-xl p-8 border border-gray-200"
        >
          <p className="mb-6 text-gray-700 leading-relaxed">
            At <strong>York-Center French Institute</strong>, we respect and value your
            privacy. This policy explains what data we collect, how we use it,
            and how we keep it secure.
          </p>

          {/* SECTION 1 */}
          <div data-aos="fade-left" className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <FiFileText className="text-red-600 text-3xl" />
              <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              We collect information such as your name, email, phone number, and
              details you provide when registering or contacting us.
            </p>
          </div>

          {/* SECTION 2 */}
          <div data-aos="fade-right" className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <FiShield className="text-red-600 text-3xl" />
              <h2 className="text-2xl font-semibold">
                2. How We Use Your Information
              </h2>
            </div>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To process course registrations</li>
              <li>To send updates, notifications & learning material</li>
              <li>To improve our services and website experience</li>
              <li>To provide customer support</li>
            </ul>
          </div>

          {/* SECTION 3 */}
          <div data-aos="fade-left" className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <FiLock className="text-red-600 text-3xl" />
              <h2 className="text-2xl font-semibold">3. Data Protection</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              We use industry-standard security practices to ensure your data is
              protected and not shared with unauthorized parties.
            </p>
          </div>

          {/* SECTION 4 */}
          <div data-aos="fade-right">
            <div className="flex items-center gap-3 mb-3">
              <FiMail className="text-red-600 text-3xl" />
              <h2 className="text-2xl font-semibold">4. Contact Us</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              For privacy-related questions, reach out to us at:
              <br />
              <strong>Email:</strong> 

yorkcentrefrench@gmail.com

            </p>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <p
          data-aos="fade-up"
          className="mt-8 text-center text-sm text-gray-500"
        >
          Last updated: {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
