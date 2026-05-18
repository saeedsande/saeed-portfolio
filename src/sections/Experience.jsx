import { motion } from "framer-motion";

const experiences = [
  {
    company: "Keep Active Pro AI Solutions",

    role: "Developer",

    duration: "2025 - Present",

    description:
      "Worked on company website development and later contributed to MeterRide mobile application development. Focused on modern frontend development, mobile UI/UX, and scalable application architecture.",

    technologies: [
      "React.js",
      "React Native",
      "Firebase",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 md:px-20 py-24 bg-[#050816]"
    >

      {/* Heading */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="text-center mb-24"
      >

        <p className="uppercase tracking-[8px] text-cyan-400 mb-5">
          Professional Journey
        </p>

        <h2 className="text-5xl md:text-6xl font-black">

          Work{" "}

          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Experience
          </span>

        </h2>

      </motion.div>

      {/* Experience Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="max-w-6xl mx-auto rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-16 neon-glow"
      >

        {experiences.map((exp, index) => (

          <div key={index}>

            <p className="uppercase tracking-[5px] text-cyan-400 mb-4">

              {exp.duration}

            </p>

            <h3 className="text-4xl md:text-5xl font-black mb-6">

              {exp.role}

            </h3>

            <h4 className="text-2xl md:text-3xl text-purple-400 font-semibold mb-6">

              {exp.company}

            </h4>

            <p className="text-gray-400 text-lg leading-9 mb-10">

              {exp.description}

            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-4">

              {exp.technologies.map((tech, i) => (

                <div
                  key={i}
                  className="px-5 py-3 rounded-full border border-cyan-400 bg-cyan-400/10 text-cyan-300"
                >

                  {tech}

                </div>

              ))}

            </div>

          </div>

        ))}

      </motion.div>

    </section>
  );
}