import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "</>TIN | About";
  }, []);
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold text-blue-500">About Me</h1>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Hi, I'm Dustin! A passionate developer who loves creating modern web
        applications using the <span className="font-semibold">MERN stack</span>.
        I enjoy solving problems, designing clean user interfaces, and
        constantly learning new technologies.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold text-blue-500">Frontend</h2>
          <p className="text-gray-600 mt-2">
            React, Tailwind CSS, JavaScript, Vite
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold text-blue-500">Backend</h2>
          <p className="text-gray-600 mt-2">
            Node.js, Express, REST APIs, MongoDB
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold text-blue-500">Tools</h2>
          <p className="text-gray-600 mt-2">
            Git, GitHub, VS Code, Postman, Figma
          </p>
        </div>
      </div>
    </div>
  );
}
