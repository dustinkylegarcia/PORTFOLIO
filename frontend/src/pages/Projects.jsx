import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    document.title = "</>TIN | Projects";
  }, []);
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React, Tailwind, and Vite to showcase my skills and projects.",
      link: "#",
    },
    {
      title: "Task Manager",
      description:
        "A full-stack MERN app to create, update, and manage daily tasks with authentication.",
      link: "#",
    },
    {
      title: "E-commerce Store",
      description:
        "A demo online shop built with MongoDB, Express, React, and Node.js.",
      link: "#",
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
