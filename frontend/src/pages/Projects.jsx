import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    document.title = "</>TIN | Projects";
  }, []);

  const projects = [
    {
      title: "My GitHub Portfolio",
      description: "A collection of my projects and experiments.",
      link: "https://dustinkylegarcia.github.io/",
    },
    {
      title: "Valorant Cards API",
      description: "A web app consuming a public API with JSON responses.",
      link: "https://dustinkylegarcia.github.io/API/",
    },
    {
      title: "Embed Video Page",
      description: "A page using YouTube embed API with structured content.",
      link: "https://dustinkylegarcia.github.io/MIDTERM/",
    },
    {
      title: "Japan Famous Places",
      description: "A static website showcasing popular destinations in Japan.",
      link: "https://dustinkylegarcia.github.io/Japan/",
    },
  ];

  return (
    <section className="flex-1 w-full bg-slate-100 flex items-start justify-center">
      <div className="w-full max-w-6xl px-4 sm:px-6 py-6 sm:py-10">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 text-center">
          Projects
        </h1>

        <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 sm:p-6 shadow
                         transition-all duration-300
                         hover:shadow-lg hover:-translate-y-1"
            >
              <h2 className="text-base sm:text-lg font-semibold text-blue-600">
                {project.title}
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-blue-600
                           hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
