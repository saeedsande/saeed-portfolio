import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GithubStats() {

  const [repos, setRepos] = useState([]);

  useEffect(() => {

    fetch(
      "https://api.github.com/users/saeedsande/repos"
    )
      .then((res) => res.json())
      .then((data) => {

        const sorted =
          data.sort(
            (a, b) =>
              b.stargazers_count -
              a.stargazers_count
          );

        setRepos(sorted.slice(0, 6));

      });

  }, []);

  return (
    <section
      className="min-h-screen px-6 md:px-20 py-24 bg-[#070b1a]"
    >

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-24"
      >

        <p className="uppercase tracking-[8px] text-cyan-400 mb-5">
          GitHub Activity
        </p>

        <h2 className="text-5xl md:text-6xl font-black">

          Live{" "}

          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Repositories
          </span>

        </h2>

      </motion.div>

      {/* Repository Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {repos.map((repo, index) => (

          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -10,
            }}
            className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 duration-300"
          >

            {/* Repo Name */}
            <h3 className="text-2xl font-bold text-cyan-400 mb-5">

              {repo.name}

            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-8 min-h-[120px]">

              {repo.description ||
                "No description available."}

            </p>

            {/* Stats */}
            <div className="mt-8 flex items-center justify-between text-sm text-gray-400">

              <span>
                ⭐ {repo.stargazers_count}
              </span>

              <span>
                🍴 {repo.forks_count}
              </span>

              <span>
                {repo.language}
              </span>

            </div>

          </motion.a>

        ))}

      </div>

      {/* GitHub Button */}
      <div className="mt-20 text-center">

        <a
          href="https://github.com/saeedsande"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 rounded-full bg-cyan-500 neon-glow hover:scale-105 duration-300 text-lg font-semibold"
        >

          Visit GitHub

        </a>

      </div>

    </section>
  );
}