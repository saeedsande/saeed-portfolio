import { motion } from "framer-motion";

const skills = [
  "React.js",
  "React Native",
  "Firebase",
  "Node.js",
  "MongoDB",
  "Python",
  "AI Integration",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
];

export default function Skills() {
  return (
    <section
      id="skills"
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
        className="text-center mb-20"
      >

        <p className="uppercase tracking-[8px] text-cyan-400 mb-5">
          Technical Skills
        </p>

        <h2 className="text-5xl md:text-6xl font-black">

          My{" "}

          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Expertise
          </span>

        </h2>

        <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg leading-9">

          Specialized in full stack development,
          cross-platform mobile applications,
          AI-powered systems,
          and futuristic UI engineering.

        </p>

      </motion.div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.05,
            }}
            className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 flex items-center justify-center text-center neon-glow"
          >

            <h3 className="text-xl md:text-2xl font-bold text-cyan-300">

              {skill}

            </h3>

          </motion.div>

        ))}

      </div>

    </section>
  );
}