

// // flashCards/FlashCard.jsx
// 'use client';
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const FlashCard = ({ cards, autoRotate = true, interval = 5000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   // Auto-rotation effect with pause on hover
//   useEffect(() => {
//     if (!autoRotate || isHovered) return;
    
//     const timer = setInterval(() => {
//       setCurrentIndex(prev => (prev === cards.length - 1 ? 0 : prev + 1));
//     }, interval);

//     return () => clearInterval(timer);
//   }, [currentIndex, isHovered, autoRotate, interval, cards.length]);

//   const goToNext = () => {
//     setCurrentIndex(prev => (prev === cards.length - 1 ? 0 : prev + 1));
//   };

//   const goToPrev = () => {
//     setCurrentIndex(prev => (prev === 0 ? cards.length - 1 : prev - 1));
//   };

//   // Portrait mode image sizing
//   const getImageHeightClass = () => {
//     if (cards.length <= 2) return 'h-[80vh]';
//     if (cards.length <= 4) return 'h-[70vh]';
//     return 'h-[60vh]';
//   };

//   return (
//     <div 
//       className="relative w-full max-w-md mx-auto"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Cards Container */}
//       <div className={`relative ${getImageHeightClass()} w-full rounded-xl overflow-hidden shadow-2xl`}>
//         {cards.map((card, index) => (
//           <div 
//             key={card.id}
//             className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//               index === currentIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <Image
//               src={card.imageUrl}
//               alt={card.title}
//               fill
//               className="object-contain"
//               style={{ objectPosition: 'center top' }}
//               priority={index < 2} // Preload first two images
//             />
//             {/* Title Overlay */}
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-4 text-center">
//               <h3 className="text-xl font-bold text-white drop-shadow-md">{card.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Controls */}
//       <div className="flex items-center justify-between mt-12">
//         <button
//           onClick={goToPrev}
//           className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md transition-all"
//           aria-label="Previous card"
//         >
//           <ChevronLeft className="h-6 w-6" />
//         </button>
        
//         {/* Pagination Dots */}
//         <div className="flex gap-2">
//           {cards.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`h-2 rounded-full transition-all ${
//                 index === currentIndex ? 'w-6 bg-primary' : 'w-3 bg-gray-300'
//               }`}
//               aria-label={`Go to card ${index + 1}`}
//             />
//           ))}
//         </div>
        
//         <button
//           onClick={goToNext}
//           className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md transition-all"
//           aria-label="Next card"
//         >
//           <ChevronRight className="h-6 w-6" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FlashCard;


// flashCards/FlashCard.jsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FlashCard = ({ cards, autoRotate = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const containerRef = useRef(null);

  // Auto-rotation with hover pause
  useEffect(() => {
    if (!autoRotate || isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev === cards.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, isHovered, autoRotate, interval, cards.length]);

  // Navigation functions
  const goToNext = () => setCurrentIndex(prev => (prev === cards.length - 1 ? 0 : prev + 1));
  const goToPrev = () => setCurrentIndex(prev => (prev === 0 ? cards.length - 1 : prev - 1));

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) goToNext(); // Swipe left
    if (diff < -50) goToPrev(); // Swipe right
    setTouchStart(null);
  };


  return (
    <div 
      className="relative w-full max-w-2xl mx-auto pt-4 md:pt-20" // Added pt-16 for navbar spacing
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container with Glass Morphism Effect */}
      <div 
        ref={containerRef}
        className="relative h-[65vh] w-full rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/10 border border-white/20"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {cards.map((card, index) => (
          <div 
            key={card.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <Image
              src={card.imageUrl}
              alt={card.title}
              fill
              className="object-contain"
              style={{ objectPosition: 'center top' }}
              priority={index < 2}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-600/60 via-green-200/20 to-transparent" />
            {/* Card Title */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              {/* <h3 className="text-2xl font-bold text-white drop-shadow-lg">{card.title}</h3> */}
            </div>
          </div>
        ))}

        {/* Desktop Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-xl transition-all transform hover:scale-110 z-10"
          aria-label="Previous card"
        >
          <ChevronLeft className="h-7 w-7" strokeWidth={2.5} />
        </button>
        <button
          onClick={goToNext}
          className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-xl transition-all transform hover:scale-110 z-10"
          aria-label="Next card"
        >
          <ChevronRight className="h-7 w-7" strokeWidth={2.5} />
        </button>
      </div>

      {/* Mobile Navigation (Bottom Center) */}
      <div className="md:hidden flex justify-center items-center mt-6 gap-4">
        <button
          onClick={goToPrev}
          className="p-3 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg transition-all"
          aria-label="Previous card"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        {/* Pagination Indicators */}
        <div className="flex gap-2 mx-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-500' 
                  : 'w-3 bg-gray-300/70'
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={goToNext}
          className="p-3 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg transition-all"
          aria-label="Next card"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Desktop Pagination (Bottom Center) */}
      <div className="hidden md:flex justify-center mt-6">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full mx-1.5 transition-all ${
              index === currentIndex 
                ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-500' 
                : 'w-3 bg-gray-300/70'
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};


export default FlashCard;