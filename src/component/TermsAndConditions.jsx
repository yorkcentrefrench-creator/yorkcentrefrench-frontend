import React from "react";
import {
  FiFileText,
  FiCheckCircle,
  FiBookOpen,
  FiClock,
  FiShieldOff,
  FiMail,
} from "react-icons/fi";

const TermsAndConditions = () => {
  return (
    <div className="w-full">
      {/* TOP BANNER */}
      <div
        className="w-full h-[260px] md:h-[350px] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')",
        }}
      >
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold drop-shadow-lg"
        >
          Terms & Conditions
        </h1>
        <p data-aos="fade-up" className="mt-3 text-lg opacity-90">
          Please read our policies before enrolling
        </p>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <div
          data-aos="fade-up"
          className="bg-white shadow-xl rounded-xl p-8 border border-gray-200"
        >
          <p className="mb-6 text-gray-700 leading-relaxed">
            These Terms & Conditions govern your use of the services provided by
            <strong> York-Center French Institute</strong>. By accessing or using our
            website and enrolling in our courses, you agree to the terms below.
          </p>

          {/* SECTION 1 */}
          <div data-aos="fade-right" className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <FiCheckCircle className="text-red-600 text-3xl" />
              <h2 className="text-2xl font-semibold">
                1. Enrollment & Payments
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              By enrolling in a course, you agree to provide accurate
              information and complete the payment before classes begin. All
              payments are final unless covered under our refund policy.
            </p>
          </div>

          {/* SECTION 2 */}
          <div data-aos="fade-left" className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <FiBookOpen className="text-red-600 text-3xl" />
              <h2 className="text-2xl font-semibold">2. Use of Our Services</h2>
            </div>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>You agree not to misuse or disrupt online classes.</li>
              <li>
                Sharing class links, recordings, or teaching materials is
                prohibited.
              </li>
              <li>
                Respectful communication with tutors and students is mandatory.
              </li>
            </ul>
          </div>

          {/* SECTION 3 */}
          <div data-aos="fade-right" className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <FiFileText className="text-red-600 text-3xl" />
              <h2 className="text-2xl font-semibold">
                3. Intellectual Property
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              All course materials—notes, videos, worksheets, and resources—are
              the property of York-Center French Institute. You may not copy,
              distribute, or share them without written permission.
            </p>
          </div>

          {/* SECTION 4 */}
          <div data-aos="fade-left" className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <FiClock className="text-red-600 text-3xl" />
              <h2 className="text-2xl font-semibold">
                4. Class Attendance & Scheduling
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Students are expected to attend their scheduled classes on time.
              Missed classes may not be rescheduled unless approved by the
              academy.
            </p>
          </div>

          {/* SECTION 5 */}
          <div data-aos="fade-right" className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <FiShieldOff className="text-red-600 text-3xl" />
              <h2 className="text-2xl font-semibold">
                5. Termination of Access
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate student access if any
              policy or behavioral rule is violated.
            </p>
          </div>

          {/* SECTION 6 */}
          <div data-aos="fade-left" className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <FiFileText className="text-red-600 text-3xl" />
              <h2 className="text-2xl font-semibold">6. Changes to Terms</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              We may update these Terms & Conditions at any time. Continued use
              of our services means you accept the updated terms.
            </p>
          </div>

          {/* SECTION 7 */}
          <div data-aos="fade-right">
            <div className="flex items-center gap-3 mb-3">
              <FiMail className="text-red-600 text-3xl" />
              <h2 className="text-2xl font-semibold">7. Contact Us</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Email us with any questions at:
              <br />
              <strong>
yorkcentrefrench@gmail.com

              </strong>
            </p>
          </div>
        </div>

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

export default TermsAndConditions;
