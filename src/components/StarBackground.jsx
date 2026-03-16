import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    // generate chip nodes
    const numberOfNodes = Math.floor(
      (window.innerWidth * window.innerHeight) / 14000
    );

    const newNodes = [];

    for (let i = 0; i < numberOfNodes; i++) {
      newNodes.push({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.3,
        animationDuration: Math.random() * 6 + 4,
      });
    }

    setStars(newNodes);
  };

  const generateMeteors = () => {
    // generate flowing traces
    const numberOfTraces = 8;
    const newTraces = [];

    for (let i = 0; i < numberOfTraces; i++) {
      newTraces.push({
        id: i,
        size: Math.random() * 1.5 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 8,
        animationDuration: Math.random() * 6 + 4,
        direction: Math.random() > 0.5 ? "horizontal" : "vertical",
      });
    }

    setMeteors(newTraces);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="chip-node animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((trace) => (
        <div
          key={trace.id}
          className={`chip-trace ${
            trace.direction === "horizontal"
              ? "chip-trace-horizontal"
              : "chip-trace-vertical"
          }`}
          style={{
            width:
              trace.direction === "horizontal"
                ? trace.size * 80 + "px"
                : trace.size * 2 + "px",
            height:
              trace.direction === "horizontal"
                ? trace.size * 2 + "px"
                : trace.size * 80 + "px",
            left: trace.x + "%",
            top: trace.y + "%",
            animationDelay: trace.delay + "s",
            animationDuration: trace.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
