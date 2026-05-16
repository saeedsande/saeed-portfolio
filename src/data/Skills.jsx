import { motion } from "framer-motion";
import { skills } from "../data/skillsData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen px-6 md:px-20 py-24 overflow-hidden bg-[#050816]"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-24"
      >

        <p className="uppercase tracking-[8px] text-cyan-400 mb-5">
          Technical Skills
        </p>

        <h2 className="text-5xl md:text-6xl font-black">

          My <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Tech Stack
          </span>

        </h2>

      </motion.div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 group"
          >

            {/* Hover Glow */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r ${skill.color} blur-3xl`}
            ></div>

            {/* Content */}
            <div className="relative z-10">

              {/* Top Circle */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-2xl font-black mb-8`}
              >

                {skill.title.charAt(0)}

              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">
                {skill.title}
              </h3>

              {/* Level */}
              <p className="text-gray-400 mb-8">
                {skill.level}
              </p>

              {/* Progress */}
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width:
                      skill.level === "Advanced"
                        ? "90%"
                        : "75%",
                  }}
                  transition={{
                    duration: 1.5,
                  }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                ></motion.div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}