import { useEffect } from "react";
import {
  Code,
  Layout,
  Server,
  Database,
  GitBranch,
  Wrench,
} from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "</>TIN | About";
  }, []);

  return (
    <section className="flex-1 w-full bg-slate-100 flex items-start justify-center">
      <div className="w-full max-w-6xl px-4 sm:px-6 py-6 sm:py-10">

        {/* PAGE TITLE */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12">
          About Me
        </h1>

        {/* PROFILE + ABOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fadeUp">

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="Dustin Kyle Garcia"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64
                         object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* TEXT */}
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600">
              Hi, I&apos;m Dustin Kyle
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600">
              Aspiring Full Stack Developer with hands-on experience building back-end
              systems using Node.js and PostgreSQL, and a strong interest in creating
              innovative technology solutions.
            </p>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600">
              A graduate of the Polytechnic University of the Philippines – Sto. Tomas Campus
              with a Bachelor’s degree in Information Technology, awarded <span className="font-medium">Cum Laude</span>.
              I bring a strong leadership background and a consistent record of academic
              excellence as a President’s Lister.
            </p>

          </div>
        </div>

        {/* TECH STACK */}
        <div className="mt-16 animate-fadeUp delay-200">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

            {/* FRONTEND */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="flex items-center justify-center gap-2
                             text-lg sm:text-xl font-semibold text-blue-600 mb-4">
                <Layout size={18} />
                Frontend
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: "React", icon: <Code size={14} /> },
                  { name: "Tailwind CSS", icon: <Layout size={14} /> },
                  { name: "JavaScript", icon: <Code size={14} /> },
                  { name: "HTML", icon: <Code size={14} /> },
                  { name: "CSS", icon: <Layout size={14} /> },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-2
                               px-4 py-2 text-xs sm:text-sm
                               bg-blue-100 text-blue-700
                               rounded-full"
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* BACKEND */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="flex items-center justify-center gap-2
                             text-lg sm:text-xl font-semibold text-blue-600 mb-4">
                <Server size={18} />
                Backend
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: "Node.js", icon: <Server size={14} /> },
                  { name: "Express", icon: <Server size={14} /> },
                  { name: "REST APIs", icon: <GitBranch size={14} /> },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-2
                               px-4 py-2 text-xs sm:text-sm
                               bg-blue-100 text-blue-700
                               rounded-full"
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* OTHER TOOLS */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="flex items-center justify-center gap-2
                             text-lg sm:text-xl font-semibold text-blue-600 mb-4">
                <Wrench size={18} />
                Other Tools
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: "MySQL", icon: <Database size={14} /> },
                  { name: "PostgreSQL", icon: <Database size={14} /> },
                  { name: "Git & GitHub", icon: <GitBranch size={14} /> },
                  { name: "Visual Studio Code", icon: <Code size={14} /> },
                  { name: "MongoDB", icon: <Database size={14} /> },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-2
                               px-4 py-2 text-xs sm:text-sm
                               bg-blue-100 text-blue-700
                               rounded-full"
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
