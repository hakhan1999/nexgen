"use client";

import { useState } from "react";

const FormCard = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    // For file upload example:
    // file: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("your-name", form.name);
      formData.append("your-email", form.email);
      formData.append("your-message", form.message);

      // These are required by CF7
      formData.append("_wpcf7_unit_tag", "wpcf7-f242-o1"); // your form's unit tag
      formData.append("_wpcf7_version", "5.8"); // optional, can match your CF7 version
      formData.append("_wpcf7_locale", "en_US"); // optional, locale

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WP_API_URL}/contact-form-7/v1/contact-forms/240/feedback`,
        {
          method: "POST",
          body: formData, // multipart/form-data
        }
      );

      const data = await res.json();

      if (data.status === "validation_failed") {
        const fieldErrors = {};
        for (const field of data.invalid_fields) {
          fieldErrors[field.field] = field.message;
        }
        setErrors(fieldErrors);
      } else if (data.status === "mail_sent") {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setErrors({ general: data.message || "Something went wrong." });
      }
    } catch (err) {
      setErrors({ general: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-15 rounded-2xl bg-[#1A1A1A]">
      <h4 className="pb-12.5 border-b border-[#262626] text-[1.5rem]!">
        Ask your question
      </h4>

      <form onSubmit={handleSubmit} className="mt-12.5 gap-5 flex flex-col">
        {/* Name */}
        <div className="flex flex-col">
          <label className="uppercase font-primary text-[#F3DFD8] mb-2.5">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="p-6 rounded-[0.625rem] bg-[#0F0F0F] text-[#F3DFD8] text-lg font-primary placeholder:text-[#676665]"
          />
          {errors["your-name"] && (
            <span className="text-red-500 text-sm mt-1">
              {errors["your-name"]}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="uppercase font-primary text-[#F3DFD8] mb-2.5">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="p-6 rounded-[0.625rem] bg-[#0F0F0F] text-[#F3DFD8] text-lg font-primary placeholder:text-[#676665]"
          />
          {errors["your-email"] && (
            <span className="text-red-500 text-sm mt-1">
              {errors["your-email"]}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="uppercase font-primary text-[#F3DFD8] mb-2.5">
            Your Question
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your question here ....."
            className="p-6 rounded-[0.625rem] bg-[#0F0F0F] text-[#F3DFD8] text-lg font-primary placeholder:text-[#676665] h-43"
          />
          {errors["your-message"] && (
            <span className="text-red-500 text-sm mt-1">
              {errors["your-message"]}
            </span>
          )}
        </div>

        {/* General error */}
        {errors.general && (
          <p className="text-red-600! text-md">{errors.general}</p>
        )}

        {/* Success */}
        {success && <p className="text-green-600! text-md">{success}</p>}

        <button
          type="submit"
          disabled={loading}
          className="text-lg uppercase text-[#0F0F0F] bg-[#CE7D63] rounded-xl w-full block py-4.5 font-medium hover:bg-white trns mt-7.5 disabled:opacity-60 cursor-pointer"
        >
          {loading ? "Sending..." : "Send Your Message"}
        </button>
      </form>
    </div>
  );
};

export default FormCard;
