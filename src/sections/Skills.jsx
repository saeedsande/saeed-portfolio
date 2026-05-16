const skills = [
  "React.js",
  "React Native",
  "JavaScript",
  "Firebase",
  "Python",
  "Machine Learning",
  "MySQL",
  "GitHub",
];

export default function Skills() {
  return (
    <section className="min-h-screen px-10 py-20">
      <h2 className="text-5xl font-bold text-center text-cyan-400 mb-20">
        Skills
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-cyan-500 hover:scale-110 duration-300 glow"
          >
            <h3 className="text-2xl font-semibold text-center">
              {skill}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}