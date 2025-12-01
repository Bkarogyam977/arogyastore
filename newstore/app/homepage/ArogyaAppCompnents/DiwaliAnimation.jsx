// "use client";
// import { useEffect } from "react";
// import confetti from "canvas-confetti";

// export default function DiwaliAnimation() {
//   useEffect(() => {
//     // Launch fireworks on page load
//     const duration = 3 * 1000; // 3 seconds
//     const animationEnd = Date.now() + duration;

//     const frame = () => {
//       const timeLeft = animationEnd - Date.now();

//       if (timeLeft <= 0) return;

//       const particleCount = 50 * (timeLeft / duration);
//       confetti({
//         particleCount,
//         startVelocity: 40,
//         spread: 80,
//         origin: {
//           x: Math.random(),
//           y: Math.random() - 0.2,
//         },
//         colors: ["#FFD700", "#FF6F00", "#FF4500", "#FFFFFF"],
//       });

//       requestAnimationFrame(frame);
//     };

//     frame();
//   }, []);

//   return null;
// }

// "use client";
// import { useEffect, useRef } from "react";
// import { Fireworks } from "fireworks-js";

// export default function FireworksBackground() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const fireworks = new Fireworks(containerRef.current, {
//       autoresize: true,
//       opacity: 0.4, // thoda bright effect
//       acceleration: 1.02,
//       friction: 0.98,
//       gravity: 1.5,
//       particles: 80,
//       traceLength: 3,
//       traceSpeed: 10,
//       flickering: 50,
//       explosion: 5,
//       intensity: 25,
//       hue: { min: 0, max: 360 },
//       delay: { min: 40, max: 80 },
//     });

//     fireworks.start();

//     return () => fireworks.stop();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 z-[9999] pointer-events-none"
//     />
//   );
// }



// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Fireworks } from "fireworks-js";

// export default function DiwaliFireworks() {
//   const containerRef = useRef(null);
//   const [showDhanteras, setShowDhanteras] = useState(false);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     // Initialize fireworks
//     const fireworks = new Fireworks(containerRef.current, {
//       autoresize: true,
//       opacity: 0.4,
//       acceleration: 1.05,
//       friction: 0.97,
//       gravity: 1.5,
//       particles: 120,
//       traceLength: 3,
//       traceSpeed: 8,
//       flickering: 50,
//       explosion: 5,
//       intensity: 30,
//       hue: { min: 0, max: 360 },
//       delay: { min: 20, max: 50 },
//     });

//     fireworks.start();

//     // After 3 seconds, show “Happy Dhanteras”
//     const timer = setTimeout(() => setShowDhanteras(true), 3000);

//     // Stop fireworks after 7 seconds
//     const stopTimer = setTimeout(() => fireworks.stop(), 7000);

//     return () => {
//       clearTimeout(timer);
//       clearTimeout(stopTimer);
//       fireworks.stop();
//     };
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black text-white">
//       {/* Fireworks background */}
//       <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />

//       {/* Text content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
//         <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 drop-shadow-lg animate-pulse">
//           🎆 Happy Diwali 🎆
//         </h1>

//         {showDhanteras && (
//           <p className="mt-6 text-3xl md:text-4xl text-orange-300 font-semibold animate-fadeIn">
//             🪔 Wishing You a Prosperous Dhanteras 🪔
//           </p>
//         )}
//       </div>

//       {/* Tailwind custom animation for smooth fade-in */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 2s ease-in-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Fireworks } from "fireworks-js";

// export default function DiwaliOverlay() {
//   const containerRef = useRef(null);
//   const [visible, setVisible] = useState(true);
//   const [fadeOut, setFadeOut] = useState(false);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const fireworks = new Fireworks(containerRef.current, {
//       autoresize: true,
//       opacity: 0.4,
//       acceleration: 1.05,
//       friction: 0.97,
//       gravity: 1.5,
//       particles: 120,
//       traceLength: 3,
//       traceSpeed: 10,
//       flickering: 50,
//       explosion: 5,
//       intensity: 30,
//       hue: { min: 0, max: 360 },
//       delay: { min: 15, max: 40 },
//     });

//     fireworks.start();

//     const fadeTimer = setTimeout(() => setFadeOut(true), 9000);
//     const stopTimer = setTimeout(() => {
//       fireworks.stop();
//       setVisible(false);
//     }, 10000);

//     return () => {
//       clearTimeout(fadeTimer);
//       clearTimeout(stopTimer);
//       fireworks.stop();
//     };
//   }, []);

//   if (!visible) return null;

//   return (
//     <div
//       className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/90 text-white transition-opacity duration-1000 ${
//         fadeOut ? "opacity-0" : "opacity-100"
//       }`}
//     >
//       {/* Fireworks container */}
//       <div
//         ref={containerRef}
//         className="absolute inset-0 pointer-events-none z-0"
//       />

//       {/* Text Layer */}
//       <div className="relative z-10 text-center">
//         <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 drop-shadow-lg animate-pulse">
//           🎆 Happy Diwali 🎆
//         </h1>
//         <p className="mt-4 text-2xl md:text-3xl text-orange-300 animate-fadeIn">
//           🪔 Wishing You a Prosperous Dhanteras 🪔
//         </p>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 2s ease-in-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// }

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
