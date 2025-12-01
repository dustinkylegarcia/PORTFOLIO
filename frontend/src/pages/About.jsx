import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "</>TIN | About";
  }, []);

  return (
    <div className="text-center p-10">

      {/* INLINE CSS FOR SCROLL ANIMATION */}
      <style>{`
        .scroll-x {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }
        .scroll-track {
          display: inline-flex;
          gap: 40px;
          animation: scroll-horizontal 10s linear infinite;
        }
        .logo {
          width: 50px;
          height: 50px;
          opacity: 0.9;
          transition: 0.3s;
        }
        .logo:hover {
          transform: scale(1.1);
          opacity: 1;
        }
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <h1 className="text-3xl font-bold text-blue-500">About Me</h1>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Hi, I'm Dustin! A passionate developer who loves creating modern web
        applications using the <span className="font-semibold">MERN stack</span>.
        I enjoy solving problems, designing clean UI, and learning new technologies.
      </p>

      {/* 3 SCROLLING CARDS */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">

        {/* FRONTEND */}
        <div className="p-6 bg-white shadow rounded-lg overflow-hidden">
          <h2 className="text-xl font-semibold text-blue-500 mb-4">Frontend</h2>

          <div className="scroll-x h-24 flex items-center">
            <div className="scroll-track">
              <img src="/logos/react.svg" className="logo" />
              <img src="/logos/tailwind.svg" className="logo" />
              <img src="/logos/js.svg" className="logo" />
              <img src="/logos/vite.svg" className="logo" />

              {/* Duplicate loop */}
              <img src="/logos/react.svg" className="logo" />
              <img src="/logos/tailwind.svg" className="logo" />
              <img src="/logos/js.svg" className="logo" />
              <img src="/logos/vite.svg" className="logo" />
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div className="p-6 bg-white shadow rounded-lg overflow-hidden">
          <h2 className="text-xl font-semibold text-blue-500 mb-4">Backend</h2>

          <div className="scroll-x h-24 flex items-center">
            <div className="scroll-track">
              <img src="/logos/node.svg" className="logo" />
              <img src="/logos/express.svg" className="logo" />
              <img src="/logos/api.svg" className="logo" />
              <img src="/logos/mongo.svg" className="logo" />

              {/* Duplicate loop */}
              <img src="/logos/node.svg" className="logo" />
              <img src="/logos/express.svg" className="logo" />
              <img src="/logos/api.svg" className="logo" />
              <img src="/logos/mongo.svg" className="logo" />
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="p-6 bg-white shadow rounded-lg overflow-hidden">
          <h2 className="text-xl font-semibold text-blue-500 mb-4">Tools</h2>

          <div className="scroll-x h-24 flex items-center">
            <div className="scroll-track">
              <img src="/logos/git.svg" className="logo" />
              <img src="/logos/github.svg" className="logo" />
              <img src="/logos/vscode.svg" className="logo" />
              <img src="/logos/postman.svg" className="logo" />
              <img src="/logos/figma.svg" className="logo" />

              {/* Duplicate loop */}
              <img src="/logos/git.svg" className="logo" />
              <img src="/logos/github.svg" className="logo" />
              <img src="/logos/vscode.svg" className="logo" />
              <img src="/logos/postman.svg" className="logo" />
              <img src="/logos/figma.svg" className="logo" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
