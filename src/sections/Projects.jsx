import { motion } from "framer-motion";

const projects = [
  {
    title: "VETMEDS",

    subtitle: "AI-Powered Veterinary Care Platform",

    image: "/projects/vetmeds.jpeg",

    description:
      "Developed an AI-powered veterinary healthcare platform featuring intelligent symptom analysis, pet profile management, emergency SOS support, appointment scheduling, vaccination tracking, and doctor discovery system.",

    technologies: [
      "React.js",
      "Firebase",
      "Python",
      "REST APIs",
      "AI Integration",
    ],

    features: [
      "AI Symptom Analysis",
      "Emergency SOS System",
      "Pet Health Records",
      "Vaccination Tracking",
      "Doctor Locator",
    ],

    type: "desktop",
  },

  {
    title: "MeterRide",

    subtitle: "Ride-Hailing Mobile Application",

    image: "/projects/meterride.jpeg",

    description:
      "Built a modern ride-hailing mobile application with real-time GPS tracking, live ride management, meter-based pricing system, and responsive mobile user experience.",

    technologies: [
      "React Native",
      "Firebase",
      "Google Maps API",
      "JavaScript",
    ],

    features: [
      "Live GPS Tracking",
      "Meter-Based Pricing",
      "Real-Time Ride Updates",
      "Modern Mobile UI",
      "Firebase Backend",
    ],

    type: "mobile",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
          Featured Projects
        </p>

        <h2 className="text-5xl md:text-6xl font-black">

          Project{" "}

          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Showcase
          </span>

        </h2>

      </motion.div>

      {/* Projects */}
      <div className="space-y-32">

        {projects.map((project, index) => (

          <motion.div
            key={index}
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
            className="grid lg:grid-cols-2 gap-20 items-center"
          >

            {/* Image */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="flex justify-center"
            >

              {project.type === "mobile" ? (

                /* Mobile Mockup */
                <div className="relative w-[280px] h-[560px] rounded-[45px] border-[10px] border-black bg-black shadow-[0_0_40px_rgba(0,255,255,0.3)] overflow-hidden">

                  {/* Camera */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20"></div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                </div>

              ) : (

                /* Desktop Preview */
                <div className="relative rounded-[35px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl neon-glow">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                </div>

              )}

            </motion.div>

            {/* Content */}
            <div>

              <p className="uppercase tracking-[6px] text-cyan-400 mb-4">
                {project.subtitle}
              </p>

              <h3 className="text-5xl font-black mb-8">

                {project.title}

              </h3>

              <p className="text-gray-400 text-lg leading-9 mb-10">

                {project.description}

              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-4 mb-10">

                {project.technologies.map((tech, i) => (

                  <div
                    key={i}
                    className="px-5 py-3 rounded-full border border-cyan-400 bg-cyan-400/10 text-cyan-300"
                  >

                    {tech}

                  </div>

                ))}

              </div>

              {/* Features */}
              <div className="mb-10">

                <h4 className="text-xl font-bold text-white mb-5">
                  Key Features
                </h4>

                <div className="flex flex-wrap gap-3">

                  {project.features.map((feature, i) => (

                    <div
                      key={i}
                      className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400 text-purple-300 text-sm"
                    >

                      {feature}

                    </div>

                  ))}

                </div>

              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5">

                <button className="px-8 py-4 rounded-full bg-cyan-500 neon-glow hover:scale-105 duration-300 font-semibold">

                  Live Demo

                </button>

                <button className="px-8 py-4 rounded-full border border-cyan-400 neon-glow hover:bg-cyan-400 hover:text-black duration-300 font-semibold">

                  GitHub

                </button>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}