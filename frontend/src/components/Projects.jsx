import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal developer portfolio built with React and Tailwind CSS.",
      link: "#",
    },
    {
      title: "E-Commerce Store",
      desc: "Full-stack shopping platform with cart, payments, and admin dashboard.",
      link: "#",
    },
    {
      title: "Chat App",
      desc: "Real-time chat application using MERN + Socket.IO.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100 text-gray-900 px-6">
      <h2 className="text-3xl font-extrabold text-center mb-12">
        🚀 My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.desc}</p>
            <a
              href={project.link}
              className="text-blue-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
