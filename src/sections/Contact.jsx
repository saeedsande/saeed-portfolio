import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-20 py-24 bg-[#050816]"
    >

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-24"
      >

        <p className="uppercase tracking-[8px] text-cyan-400 mb-5">
          Contact Me
        </p>

        <h2 className="text-5xl md:text-6xl font-black">

          Let's{" "}

          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Connect
          </span>

        </h2>

      </motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-16"
      >

        <div className="space-y-10">

          {/* Email */}
          <div>

            <p className="text-gray-500 mb-2">
              Email
            </p>

            <h3 className="text-2xl font-semibold">
              saeedsande5117@gmail.com
            </h3>

          </div>

          {/* Phone */}
          <div>

            <p className="text-gray-500 mb-2">
              Phone
            </p>

            <h3 className="text-2xl font-semibold">
              +91 8625968424
            </h3>

          </div>

          {/* Location */}
          <div>

            <p className="text-gray-500 mb-2">
              Location
            </p>

            <h3 className="text-2xl font-semibold">
              Pune, Maharashtra
            </h3>

          </div>

          {/* Social Links */}
          <div className="pt-8 flex flex-wrap gap-6">

            <a
              href="https://github.com/saeedsande"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-cyan-500 neon-glow hover:scale-105 duration-300 font-semibold"
            >

              GitHub

            </a>

            <a
              href="https://linkedin.com/in/sae-ed-sande2843a31a6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-cyan-400 neon-glow hover:bg-cyan-400 hover:text-black duration-300 font-semibold"
            >

              LinkedIn

            </a>

            <a
              href="https://www.instagram.com/sxeed21_?igsh=YWV4N3o2aTBnYXJ4"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-pink-400 text-pink-300 neon-glow hover:bg-pink-500 hover:text-white duration-300 font-semibold"
            >

              Instagram

            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-blue-400 text-blue-300 neon-glow hover:bg-blue-500 hover:text-white duration-300 font-semibold"
            >

              Facebook

            </a>

          </div>

        </div>

      </motion.div>

      {/* Footer */}
      <div className="mt-24 text-center text-gray-500 border-t border-white/10 pt-10">

        © 2026 Saeed Sande. Built with React.js & Tailwind CSS.

      </div>

    </section>
  );
}
