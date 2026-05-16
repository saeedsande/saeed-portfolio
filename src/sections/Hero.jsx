import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";

function AnimatedSphere() {
  return (
    <Float speed={2} rotationIntensity={2}>
      <Sphere args={[1.5, 64, 64]}>
        <meshStandardMaterial
          color="#00ffff"
          wireframe
        />
      </Sphere>
    </Float>
  );
}

export default function Hero() {
  return (
    <section className="h-screen w-full relative flex items-center justify-center">
      
      <Canvas className="absolute inset-0">
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 5]} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} />
      </Canvas>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold">
          SAEED
        </h1>

        <p className="text-cyan-400 text-xl mt-4">
          Full Stack & Mobile Developer
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-500 rounded-full hover:scale-110 duration-300"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black duration-300"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}