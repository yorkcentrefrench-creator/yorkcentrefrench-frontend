import { FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function DemoModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    mobile_number:"",
  });
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(null); // success | error

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setPopup({ type: "error", text: "Name and Email are required" });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://york-centre-api.onrender.com/book-demo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setPopup({ type: "success", text: "Demo request submitted successfully!" });

      // Auto close after 2.5 seconds
      setTimeout(() => {
        setPopup(null);
        setFormData({ name: "", email: "", message: "",mobile_number:"" });
        onClose();
      }, 2500);

    } catch (error) {
      setPopup({ type: "error", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-[#0f172a] max-w-md w-full rounded-2xl p-6 relative border border-white/10 animate-fadeIn">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <FaTimes />
        </button>

        <h3 className="text-xl font-bold text-white mb-6">
          Book a Free Demo Class
        </h3>

        {/* POPUP MESSAGE */}
        {popup && (
          <div
            className={`mb-4 px-4 py-3 rounded text-sm font-medium
            ${
              popup.type === "success"
                ? "bg-emerald-500/20 text-emerald-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {popup.text}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white
            focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white
            focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
  type="tel"
  inputMode="numeric"
  pattern="[0-9]*"
  name="mobile_number"
  value={formData.mobile_number}
  onChange={handleChange}
  placeholder="Your Mobile Number"
  className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white
  focus:outline-none focus:ring-2 focus:ring-indigo-500"
/>


          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white
            focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600
            hover:opacity-90 transition py-3 rounded font-semibold text-white
            disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  );
}
