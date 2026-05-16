import { useEffect, useState } from "react";

export default function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        transform: `translate(${position.x - 15}px, ${position.y - 15}px)`,
      }}
    >

      <div className="w-8 h-8 rounded-full border border-cyan-400 bg-cyan-400/10 backdrop-blur-md shadow-[0_0_20px_#00ffff]"></div>

    </div>
  );
}