import { useEffect, useState } from "react";

/** Soft floating bubbles with a gentle mouse parallax. Decorative only. */
export function Bubbles() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const bubbles = [
    { size: 320, top: "6%", left: "-6%", op: 0.14, depth: 14, delay: 0 },
    { size: 180, top: "48%", left: "84%", op: 0.12, depth: 22, delay: 2 },
    { size: 120, top: "76%", left: "12%", op: 0.1, depth: 30, delay: 4 },
    { size: 240, top: "22%", left: "68%", op: 0.08, depth: 10, delay: 1 },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="animate-float absolute rounded-full copper-gradient blur-[2px]"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            opacity: b.op,
            animationDelay: `${b.delay}s`,
            transform: `translate3d(${pos.x * b.depth}px, ${pos.y * b.depth}px, 0)`,
          }}
        />
      ))}
    </div>
  );
}
