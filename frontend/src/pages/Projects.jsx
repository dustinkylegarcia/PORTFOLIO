import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    document.title = "</>TIN | Projects";
  }, []);
  const projects = [
    {
      title: "My GitHub Portfolio",
      description:
        "My GitHub page. This page will be the home page where your future works will be added.",
      link: "https://dustinkylegarcia.github.io/",
    },
    {
      title: "Valorant Cards API",
      description:
        "A HTML website that utilizes a free public API with JSON return. It can be about anything. It can have one or more pages.",
      link: "https://dustinkylegarcia.github.io/API/",
    },
    {
      title: "Embed Video Page",
      description:
        "A new page with a video feature by embedding using the YouTube embed API. Populate the page with relevant information. You can add as many videos as you want. You may apply other media as well.",
      link: "https://dustinkylegarcia.github.io/MIDTERM/",
    },
    {
      title: "Japan Famous Places",
      description:
        "A HTML website about a place in the world you would like to showcase.",
      link: "https://dustinkylegarcia.github.io/Japan/",
    },
  ];

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-blue-500">My Projects</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
