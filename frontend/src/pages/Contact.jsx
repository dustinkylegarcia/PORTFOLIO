import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "</>TIN | Contact";
  }, []);

  return (
    <section className="flex-1 w-full bg-slate-100 flex items-start justify-center">
      <div className="w-full max-w-6xl px-4 sm:px-6 py-6 sm:py-10 text-center">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
          Contact Me
        </h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
          Have a question or want to work together? Feel free to reach out.
        </p>

        <form className="mt-6 sm:mt-8 max-w-xl mx-auto
                         bg-white rounded-lg p-5 sm:p-6 shadow space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 text-sm sm:text-base rounded
                       border border-slate-300
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 text-sm sm:text-base rounded
                       border border-slate-300
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 text-sm sm:text-base rounded
                       border border-slate-300
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-3 rounded-lg
                       shadow-lg transition-all duration-300
                       hover:bg-amber-600 hover:scale-105 hover:-translate-y-0.5"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}
