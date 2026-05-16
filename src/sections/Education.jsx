import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Engineering",
    college:
      "Rajarambapu Institute of Technology, Islampur ",

    year: "2022 - 2026",

    description:
      "Focused on full stack development, AI-powered systems, mobile applications, and modern software engineering.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen px-6 md:px-20 py-24 bg-[#070b1a]"
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
          Academic Journey
        </p>

        <h2 className="text-5xl md:text-6xl font-black">

          My{" "}

          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Education
          </span>

        </h2>

      </motion.div>

      {/* Education Card */}
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
        className="max-w-5xl mx-auto rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-16 neon-glow"
      >

        {education.map((item, index) => (

          <div key={index}>

            <p className="uppercase tracking-[5px] text-cyan-400 mb-4">

              {item.year}

            </p>

            <h3 className="text-4xl md:text-5xl font-black mb-6">

              {item.degree}

            </h3>

            <h4 className="text-2xl md:text-3xl text-purple-400 font-semibold mb-6">

              {item.field}

            </h4>

            <p className="text-xl text-gray-300 mb-8">

              {item.college}

            </p>

            <p className="text-gray-400 text-lg leading-9">

              {item.description}

            </p>

          </div>

        ))}

      </motion.div>

    </section>
  );
}