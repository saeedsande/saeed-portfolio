import { motion } from "framer-motion";

const projects = [
  {
    title: "VETMEDS",
    description:
      "AI-powered veterinary healthcare platform with symptom analysis and emergency support.",
  },

  {
    title: "MeterRide",
    description:
      "Ride-hailing mobile application with real-time pricing and GPS tracking.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-20 py-24 bg-[#070b1a]"
    >

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-20"
      >

        <p className="uppercase tracking-[8px] text-cyan-400 mb-5">
          Featured Projects
        </p>

        <h2 className="text-5xl md:text-6xl font-black">

          Project <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Showcase
          </span>

        </h2>

      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            whileHover={{
              y: -10,
            }}
            className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 hover:border-cyan-400 duration-300"
          >

            <h3 className="text-4xl font-bold mb-6">
              {project.title}
            </h3>

            <p className="text-gray-400 leading-8 text-lg">
              {project.description}
            </p>

            <div className="mt-10 flex gap-5">

              <button className="px-6 py-3 rounded-full bg-cyan-500 hover:scale-105 duration-300">

                Live Demo

              </button>

              <button className="px-6 py-3 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black duration-300">

                GitHub

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
