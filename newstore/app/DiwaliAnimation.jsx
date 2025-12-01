
"use client";
import { useEffect, useRef } from "react";
import { Fireworks } from "fireworks-js";
import Image from "next/image";

export default function FireworksBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const fireworks = new Fireworks(containerRef.current, {
      autoresize: true,
      opacity: 0.4,
      acceleration: 1.02,
      friction: 0.98,
      gravity: 1.5,
      particles: 80,
      traceLength: 3,
      traceSpeed: 10,
      flickering: 50,
      explosion: 5,
      intensity: 25,
      hue: { min: 0, max: 360 },
      delay: { min: 40, max: 80 },
    });

    fireworks.start();

    return () => fireworks.stop();
  }, []);

  return (
    <>
      {/* Fireworks Background */}
      <div
        ref={containerRef}
        className="fixed inset-0 z-[9999] pointer-events-none"
      />

      {/* Lamp (Diya) - Always visible */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[10000] animate-float">
        <Image
          src="/images/diya1.png" // apni diya image ka path yahan den
          alt="Diya"
          width={100}
          height={100}
          className="drop-shadow-lg"
        />
      </div>

      {/* Floating animation style */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, -10px);
          }
          100% {
            transform: translate(-50%, 0);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
