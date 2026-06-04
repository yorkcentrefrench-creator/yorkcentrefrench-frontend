import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import { submitBookDemo } from "../utils/bookDemo";

const levelOptions = [
  "Level 1 (A0) - I am a complete beginner",
  "Level 2 (A1) - I can introduce myself",
  "Level 3 (A1+) - I can describe my daily life",
  "Level 4 (A2) - I know present and future tenses",
  "Level 5 (A2+) - I know past and future tenses",
  "Level 6 (B1) - I want to master subjonctive",
  "TEF Preparation - I already have a B1 level and I am ready to prepare for the TEF",
];

const initialFormData = {
  first_name: "",
  last_name: "",
  email: "",
  mobile_number: "",
  immigration_purpose: "",
  has_french: "",
  current_level: "",
  class_type: "",
  question: "",
};

export default function DemoModal({ open, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(null); // success | error

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setStep(1);
    setPopup(null);
    onClose();
  };

  const validateFirstStep = () => {
    if (
      !formData.first_name.trim() ||
      !formData.last_name.trim() ||
      !formData.email.trim() ||
      !formData.mobile_number.trim()
    ) {
      setPopup({
        type: "error",
        text: "First name, last name, email, and phone number are required.",
      });
      return false;
    }

    return true;
  };

  const validateSecondStep = () => {
    if (
      !formData.immigration_purpose ||
      !formData.has_french ||
      !formData.current_level ||
      !formData.class_type
    ) {
      setPopup({
        type: "error",
        text: "Please answer all required demo questions.",
      });
      return false;
    }

    return true;
  };

  const goToNextStep = () => {
    if (!validateFirstStep()) return;
    setPopup(null);
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateSecondStep()) return;

    const message = [
      `Learning French for immigration purposes: ${formData.immigration_purpose}`,
      `Already knows some French: ${formData.has_french}`,
      `Current level: ${formData.current_level}`,
      `Class type: ${formData.class_type}`,
      `Question: ${formData.question || "N/A"}`,
    ].join("\n");

    try {
      setLoading(true);

      await submitBookDemo({
        name: `${formData.first_name} ${formData.last_name}`.trim(),
        email: formData.email.trim(),
        mobile_number: formData.mobile_number.trim(),
        message,
      });

       toast.success(
      "Thank you for submitting! Our team will contact you shortly "
    );

      // setPopup({ type: "success", text: "Demo request submitted successfully!" });

      // Auto close after 2.5 seconds
      setTimeout(() => {
        setPopup(null);
        setStep(1);
        setFormData(initialFormData);
        onClose();
      }, 2500);

    } catch (error) {
      setPopup({ type: "error", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4 py-6">
      <div className="bg-[#0f172a] max-w-2xl w-full max-h-[92vh] overflow-y-auto rounded-2xl p-6 relative border border-white/10 animate-fadeIn">
        
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Close demo form"
        >
          <FaTimes />
        </button>

        <div className="mb-6 pr-8">
          <p className="text-sm font-semibold uppercase tracking-[2px] text-indigo-300">
            Step {step} of 2
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white">
            Join French demo session now
          </h3>
          <div className="mt-4 h-1.5 rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-indigo-500 transition-all"
              style={{ width: step === 1 ? "50%" : "100%" }}
            />
          </div>
        </div>

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
          {step === 1 ? (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="First Name *">
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white
                    focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </Field>

                <Field label="Last Name *">
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white
                    focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </Field>
              </div>

              <Field label="Email Address *">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white
                  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </Field>

              <Field label="Phone Number *">
                <input
                  type="tel"
                  name="mobile_number"
                  value={formData.mobile_number}
                  onChange={handleChange}
                  placeholder="+1..."
                  className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white
                  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </Field>

              <button
                type="button"
                onClick={goToNextStep}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600
                hover:opacity-90 transition py-3 rounded font-semibold text-white"
              >
                Next
              </button>
            </>
          ) : (
            <>
              <RadioGroup
                label="Are you learning French for immigration purposes? *"
                name="immigration_purpose"
                value={formData.immigration_purpose}
                onChange={handleChange}
              />

              <RadioGroup
                label="Do you already know some French? *"
                name="has_french"
                value={formData.has_french}
                onChange={handleChange}
              />

              <Field label="Which Course Best Matches Your Current Level? *">
                <select
                  name="current_level"
                  value={formData.current_level}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white
                  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option className="text-slate-900" value="">
                    Select your level
                  </option>
                  {levelOptions.map((level) => (
                    <option className="text-slate-900" key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="What type of classes are you interested in? *">
                <select
                  name="class_type"
                  value={formData.class_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white
                  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option className="text-slate-900" value="">
                    Select class type
                  </option>
                  <option
                    className="text-slate-900"
                    value="Group classes: Monday to Friday (8-9 PM EDT / 8-9 AM EDT)"
                  >
                    Group classes: Monday to Friday (8-9 PM EDT / 8-9 AM EDT)
                  </option>
                </select>
              </Field>

              <Field label="Do you have any question?">
                <textarea
                  rows="4"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="w-full px-4 py-3 bg-white/5 rounded text-sm text-white
                  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </Field>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => {
                    setPopup(null);
                    setStep(1);
                  }}
                  className="w-full bg-white/10 hover:bg-white/15 transition py-3 rounded font-semibold text-white"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600
                  hover:opacity-90 transition py-3 rounded font-semibold text-white
                  disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

const Field = ({ label, children }) => (
  <label className="block">
    <span className="mb-2 block text-sm font-medium text-slate-200">
      {label}
    </span>
    {children}
  </label>
);

const RadioGroup = ({ label, name, value, onChange }) => (
  <div>
    <p className="mb-2 text-sm font-medium text-slate-200">{label}</p>
    <div className="grid grid-cols-2 gap-3">
      {["Yes", "No"].map((option) => (
        <label
          key={option}
          className={`flex cursor-pointer items-center justify-center rounded border px-4 py-3 text-sm font-semibold transition
          ${
            value === option
              ? "border-indigo-400 bg-indigo-500/20 text-white"
              : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={onChange}
            className="sr-only"
          />
          {option}
        </label>
      ))}
    </div>
  </div>
);
