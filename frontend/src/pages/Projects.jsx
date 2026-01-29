export default function Projects() {
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
    <section className="w-full flex justify-center bg-slate-100">
      <div className="w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        {/* PAGE TITLE */}
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 text-center mb-10">
          Projects
        </h1>

        {/* PROJECT LIST */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm
                         transition-all duration-300
                         hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1
                           text-sm font-medium text-blue-600
                           hover:underline"
              >
                View Live Demo ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
