import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import HeroCanvas from "../components/HeroCanvas";

export default function Hero() {

  const roles = [
    "Full Stack Developer",
    "AI Engineer",
    "Mobile App Developer",
    "Software Engineer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {

    const currentRole =
      roles[index];

    if (charIndex < currentRole.length) {

      const timeout = setTimeout(() => {

        setText(
          (prev) =>
            prev +
            currentRole[charIndex]
        );

        setCharIndex(
          (prev) => prev + 1
        );

      }, 100);

      return () => clearTimeout(timeout);

    } else {

      const timeout = setTimeout(() => {

        setText("");
        setCharIndex(0);

        setIndex(
          (prev) =>
            (prev + 1) %
            roles.length
        );

      }, 2000);

      return () => clearTimeout(timeout);

    }

  }, [charIndex, index]);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-20 overflow-hidden">

      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* Left */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >

          <p className="uppercase tracking-[8px] text-cyan-400 mb-6">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            SAEED <br />

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              SANDE
            </span>

          </h1>

          {/* Typing */}
          <h2 className="mt-8 text-2xl md:text-4xl font-bold text-cyan-400 min-h-[60px]">

            {text}
            <span className="animate-pulse">|</span>

          </h2>

          <p className="max-w-2xl mt-8 text-gray-300 text-lg leading-9">

            Passionate about building futuristic digital experiences,
            scalable applications, AI-powered systems,
            and modern mobile solutions.

          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">

            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-cyan-500 neon-glow hover:scale-105 duration-300 font-semibold"
            >

              View Projects

            </a>

            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 rounded-full border border-cyan-400 neon-glow hover:bg-cyan-400 hover:text-black duration-300 font-semibold"
            >

              Download Resume

            </a>

          </div>

        </motion.div>

        {/* Right */}
        <div className="h-[400px] md:h-[500px] w-full">

          <HeroCanvas />

        </div>

      </div>

    </section>
  );
}