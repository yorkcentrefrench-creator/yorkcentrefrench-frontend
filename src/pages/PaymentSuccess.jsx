import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md w-full">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-gray-800">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-600 mt-4">
          Thank you for enrolling with <strong>York Centre French</strong>.
          Our team will contact you shortly with next steps.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
