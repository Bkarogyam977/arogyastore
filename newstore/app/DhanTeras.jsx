"use client";
import { useEffect, useRef, useState } from "react";
import { Fireworks } from "fireworks-js";

export default function DiwaliOverlay() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const fireworks = new Fireworks(containerRef.current, {
      autoresize: true,
      opacity: 0.4,
      acceleration: 1.05,
      friction: 0.97,
      gravity: 1.5,
      particles: 120,
      traceLength: 3,
      traceSpeed: 10,
      flickering: 50,
      explosion: 5,
      intensity: 30,
      hue: { min: 0, max: 360 },
      delay: { min: 15, max: 40 },
    });

    fireworks.start();

    const fadeTimer = setTimeout(() => setFadeOut(true), 9000);
    const stopTimer = setTimeout(() => {
      fireworks.stop();
      setVisible(false);
    }, 10000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(stopTimer);
      fireworks.stop();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/90 text-white transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Fireworks container */}
      <div
        ref={containerRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Text Layer */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-yellow-400 drop-shadow-lg animate-pulse">
          🎆 Happy Diwali 🎆
        </h1>
        <p className="mt-4 text-2xl md:text-3xl text-orange-300 animate-fadeIn">
          🪔 Wishing You a Prosperous Dhanteras 🪔
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}