const projects = [
  {
    title: "VETMEDS",
    description:
      "AI-powered veterinary healthcare platform.",
  },
  {
    title: "MeterRide",
    description:
      "Ride-hailing app with real-time pricing.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-10 py-20"
    >
      <h2 className="text-5xl font-bold text-center text-cyan-400 mb-20">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-10 rounded-3xl bg-white/5 border border-cyan-500 hover:-translate-y-4 duration-300 glow"
          >
            <h3 className="text-3xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}