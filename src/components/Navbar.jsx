import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  "about",
  "skills",
  "projects",
  "contact",
];

export default function Navbar() {

  const [active, setActive] =
    useState("");

  useEffect(() => {

    const handleScroll = () => {

      const sections =
        document.querySelectorAll("section");

      sections.forEach((section) => {

        const top =
          window.scrollY;

        const offset =
          section.offsetTop - 200;

        const height =
          section.offsetHeight;

        const id =
          section.getAttribute("id");

        if (
          top >= offset &&
          top < offset + height
        ) {
          setActive(id);
        }

      });

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -80,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[999] w-[95%] max-w-6xl"
    >

      <div className="flex items-center justify-between px-5 md:px-8 py-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.08)]">

        {/* Logo */}
        <a
          href="#"
          className="text-xl md:text-2xl font-black tracking-[4px] text-cyan-400"
        >

          SS

        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link, index) => (

            <a
              key={index}
              href={`#${link}`}
              className={`relative text-sm uppercase tracking-[2px] duration-300 ${
                active === link
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >

              {link}

              {active === link && (

                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-cyan-400"
                />

              )}

            </a>

          ))}

        </div>

        {/* Resume */}
        <a
          href="/resume.pdf"
          download
          className="px-5 py-2 rounded-full bg-cyan-500 neon-glow hover:scale-105 duration-300 text-sm font-semibold"
        >

          Resume

        </a>

      </div>

    </motion.nav>
  );
}