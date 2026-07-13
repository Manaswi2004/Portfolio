import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setPosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-0"
      style={{
        left: position.x - 180,
        top: position.y - 180,
      }}
    >
      <div className="w-[360px] h-[360px] rounded-full bg-indigo-500/10 blur-[120px]" />
    </div>
  );
}