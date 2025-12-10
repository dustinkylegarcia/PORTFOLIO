import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  useEffect(() => {
    document.title = "</>TIN | Home";
  }, []);
  
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold">
        Hi, I'm{" "}
        <span className="text-blue-500">
          <Typewriter
            words={["Dustin", "a Developer", "a Back-End Developer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
        I create modern web applications using the Techstack I know.
      </p>

      <a
        href="/src/resume/Garcia_Resume.pdf"
        download
        className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition animate-bounce"
      >
        Download Resume
      </a>
    </div>
  );
}
