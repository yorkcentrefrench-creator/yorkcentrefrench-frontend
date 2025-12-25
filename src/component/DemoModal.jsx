import { FaTimes } from "react-icons/fa";

export default function DemoModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-[#0f172a] max-w-md w-full rounded-xl p-6 relative animate-fadeIn border border-white/10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <FaTimes />
        </button>

        <h3 className="text-xl font-bold text-white mb-4">
          Book a Free Demo Class
        </h3>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 transition py-3 rounded font-semibold text-white"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
