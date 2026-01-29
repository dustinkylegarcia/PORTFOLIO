import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  useEffect(() => {
    document.title = "</> TIN | Home";
  }, []);

  return (
    <section className="h-full w-full bg-slate-100 flex items-center justify-center">
      <div className="w-full max-w-6xl px-6 text-center">

        {/* ROLE BADGE — palette-safe (blue / neutral) */}
        <span
          className="inline-block mb-4 px-4 py-1 text-xs sm:text-sm font-medium
                     text-blue-700 bg-blue-100 rounded-full"
        >
          Entry-Level / Junior Web Developer
        </span>

        {/* MAIN TITLE — responsive */}
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-slate-700">Hi, I&apos;m </span>
          <span className="text-blue-700">
            <Typewriter
              words={["a Back-End Developer", "a Web Developer", "Dustin Kyle"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>


        {/* DESCRIPTION — shorter on mobile, richer on desktop */}
        <p
          className="mt-4 mx-auto text-slate-600
                     text-sm sm:text-base md:text-lg
                     max-w-xl md:max-w-2xl"
        >
          I build modern web applications using the tech stack I know,
          with a focus on clean APIs and scalable back-end systems.
        </p>

        {/* TECH STACK — subtle, responsive */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {["Node.js", "Express", "MySQL", "PostgreSQL", "React", "Tailwind"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs sm:text-sm
                   bg-blue-100 text-blue-700 rounded-full"
              >
                {tech}
              </span>
            )
          )}
        </div>


        {/* CTA BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/Garcia_CV.pdf"
            download
            className="inline-flex items-center justify-center
                       bg-amber-500 text-white px-6 py-3 rounded-lg
                       shadow-lg hover:bg-amber-600
                       hover:scale-105 transition-all duration-300 hover:-translate-y-0.5"
          >
            Download Resume
          </a>

          <a
            href="/projects"
            className="inline-flex items-center justify-center
                       border border-blue-600 text-blue-600 px-6 py-3 rounded-lg
                       hover:bg-blue-600 hover:text-white
                       transition-all duration-300 hover:-translate-y-0.5z"
          >
            View Projects
          </a>
        </div>

      </div>
    </section>
  );
}
