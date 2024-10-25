import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-black text-gray-400 min-h-screen p-6">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-200 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 text-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 text-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 text-gray-200"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
