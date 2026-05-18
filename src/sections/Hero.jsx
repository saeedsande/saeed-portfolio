import { motion } from "framer-motion";

import {
  Brain,
  Rocket,
  GraduationCap,
  Download,
  Code2,
} from "lucide-react";

import HeroCanvas from "../components/HeroCanvas";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#030712] px-6 md:px-20 pt-36 pb-20"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-3xl"></div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="max-w-3xl"
        >

          {/* TOP TEXT */}
          <p className="uppercase tracking-[10px] text-cyan-400 text-sm mb-8">

            Welcome To My Portfolio

          </p>

          {/* NAME */}
          <h1 className="leading-none">

            <span className="block text-white text-7xl md:text-[110px] font-black">

              SAEED

            </span>

            <span className="block mt-3 text-7xl md:text-[110px] font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">

              SANDE

            </span>

          </h1>

          {/* ROLE */}
          <div className="mt-10">

            <div className="flex items-center gap-5 flex-wrap">

              <h2 className="text-cyan-400 text-3xl md:text-5xl font-black">

                AI DEVELOPER

              </h2>

              <div className="w-24 h-[2px] bg-cyan-400"></div>

            </div>

            <h2 className="text-white text-3xl md:text-5xl font-black mt-4">

              FULL STACK ENGINEER

            </h2>

          </div>

          {/* DESCRIPTION CARD */}
          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="mt-12 rounded-[35px] border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_30px_rgba(0,255,255,0.08)]"
          >

            <div className="flex gap-6">

              {/* ICON */}
              <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-400 flex items-center justify-center shrink-0">

                <Brain
                  size={38}
                  className="text-cyan-400"
                />

              </div>

              {/* TEXT */}
              <p className="text-gray-300 text-lg leading-10">

                I build intelligent, high-performance digital products
                that combine{" "}

                <span className="text-cyan-400 font-semibold">
                  AI
                </span>

                ,{" "}

                <span className="text-cyan-400 font-semibold">
                  clean design
                </span>

                , and{" "}

                <span className="text-cyan-400 font-semibold">
                  robust engineering
                </span>

                {" "}to deliver impactful and scalable digital experiences.

              </p>

            </div>

          </motion.div>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap gap-6">

            {/* PROJECTS BUTTON */}
            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href="#projects"
              className="flex items-center gap-3 px-10 py-5 rounded-full bg-cyan-500 text-white font-bold shadow-[0_0_30px_rgba(0,255,255,0.45)]"
            >

              <Rocket size={22} />

              View Projects

            </motion.a>

            {/* RESUME BUTTON */}
            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href="/resume.pdf"
              download
              className="flex items-center gap-3 px-10 py-5 rounded-full border border-cyan-400 text-white font-bold hover:bg-cyan-400 hover:text-black duration-300"
            >

              <Download size={22} />

              Download Resume

            </motion.a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="relative flex items-center justify-center h-[650px]"
        >

          {/* SOFT BACKGROUND GLOW */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-3xl"></div>

          {/* MINIMAL 3D BACKGROUND */}
          <div className="absolute inset-0 opacity-20 scale-90 z-0">

            <HeroCanvas />

          </div>

          {/* MAIN PROFILE CONTAINER */}
          <div className="relative z-20 flex items-center justify-center">

            {/* OUTER GLOW */}
            <div className="absolute w-[340px] h-[340px] rounded-full bg-cyan-500/20 blur-3xl"></div>

            {/* OUTER RING */}
            <div className="absolute w-[320px] h-[320px] rounded-full border-[2px] border-cyan-400/60"></div>

            {/* SECOND RING */}
            <div className="absolute w-[350px] h-[350px] rounded-full border border-cyan-400/20"></div>

            {/* PROFILE IMAGE */}
            <img
              src="/profile.jpeg"
              alt="Saeed Sande"
              className="relative w-[280px] h-[280px] object-cover rounded-full border-[4px] border-cyan-400 shadow-[0_0_40px_rgba(0,255,255,0.25)]"
            />

          </div>

        </motion.div>

      </div>

      {/* BOTTOM CARDS */}
      <div className="mt-24 grid lg:grid-cols-4 gap-6 relative z-10">

        {/* CARD 1 */}
        <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-7 flex items-center gap-5">

          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400 flex items-center justify-center">

            <GraduationCap
              size={30}
              className="text-cyan-400"
            />

          </div>

          <div>

            <h3 className="text-cyan-400 text-2xl font-black">

              Final Year

            </h3>

            <p className="text-gray-400 mt-1">

              Computer Engineering Student

            </p>

          </div>

        </div>

        {/* CARD 2 */}
        <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-7 flex items-center gap-5">

          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400 flex items-center justify-center">

            <Code2
              size={30}
              className="text-cyan-400"
            />

          </div>

          <div>

            <h3 className="text-cyan-400 text-2xl font-black">

              2+

            </h3>

            <p className="text-gray-400 mt-1">

              Major Projects Completed

            </p>

          </div>

        </div>

        {/* CARD 3 */}
        <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-7 flex items-center gap-5">

          <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-400 flex items-center justify-center">

            <Rocket
              size={30}
              className="text-purple-400"
            />

          </div>

          <div>

            <h3 className="text-purple-400 text-2xl font-black">

              1+

            </h3>

            <p className="text-gray-400 mt-1">

              Year Professional Experience

            </p>

          </div>

        </div>

        {/* CARD 4 */}
        <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-7 flex items-center gap-5">

          <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-400 flex items-center justify-center text-purple-400 text-2xl">

            ★

          </div>

          <div>

            <h3 className="text-purple-400 text-2xl font-black">

              Passionate

            </h3>

            <p className="text-gray-400 mt-1">

              About AI, Innovation & Impact

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}