import { Canvas } from "@react-three/fiber";

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>

      {/* Light */}
      <ambientLight intensity={1} />

      {/* 3D Box */}
      <mesh rotation={[0.4, 0.4, 0]}>

        <boxGeometry args={[2, 2, 2]} />

        <meshStandardMaterial
          color="#00ffff"
          wireframe
        />

      </mesh>

    </Canvas>
  );
}