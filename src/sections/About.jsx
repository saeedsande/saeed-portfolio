import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen px-10 py-20 flex items-center">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-cyan-400 mb-8">
          About Me
        </h2>

        <p className="text-lg leading-9 text-gray-300">
          Software Engineer specializing in Full Stack and Mobile
          Application Development with expertise in React.js,
          React Native, Firebase, JavaScript and AI-powered systems.
          Passionate about building futuristic digital experiences.
        </p>
      </motion.div>
    </section>
  );
}