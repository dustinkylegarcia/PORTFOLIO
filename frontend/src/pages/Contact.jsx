import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "</>TIN | Contact";
  }, []);
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-navy">Contact Me</h1>
      <p className="mt-4 text-navy-600">
        Have a question or want to work together? Fill out the form below.
      </p>

      <form className="mt-8 max-w-xl mx-auto bg-white shadow-md shadow-blue-400 rounded-lg p-8 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-navy"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-navy"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-navy"
        ></textarea>
        <button
          type="submit"
          className="px-5 bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
