import { motion } from "framer-motion";

import {
  fadeInLeft,
  fadeInRight,
} from "../utils/animations";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-20 py-24 bg-[#070b1a]"
    >

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
        >

          <p className="uppercase tracking-[8px] text-cyan-400 mb-5">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">

            Building Modern <br />

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Digital Experiences
            </span>

          </h2>

          <p className="text-gray-400 text-lg leading-9">

            I am a Software Engineer specializing in Full Stack
            Development, Mobile Applications, and AI-powered systems.

            Passionate about building scalable and futuristic digital
            products using modern technologies such as React.js,
            React Native, Firebase, JavaScript, and Python.

          </p>

        </motion.div>

        {/* Right */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          className="relative"
        >

          <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-10">

            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-3xl"></div>

            <div className="relative z-10">

              <h3 className="text-3xl font-bold mb-10">
                Quick Info
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="text-gray-500 mb-2">
                    Experience
                  </p>

                  <h4 className="text-xl font-semibold">
                    Software Developer
                  </h4>
                </div>

                <div>
                  <p className="text-gray-500 mb-2">
                    Company
                  </p>

                  <h4 className="text-xl font-semibold">
                    Keep Active Pro AI Solutions
                  </h4>
                </div>

                <div>
                  <p className="text-gray-500 mb-2">
                    Specialization
                  </p>

                  <h4 className="text-xl font-semibold">
                    Full Stack & Mobile Development
                  </h4>
                </div>

                <div>
                  <p className="text-gray-500 mb-2">
                    Location
                  </p>

                  <h4 className="text-xl font-semibold">
                    Pune, Maharashtra
                  </h4>
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}