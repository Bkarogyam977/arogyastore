'use client';
import Link from "next/link";
import Image from "next/image";

const images = [
  { src: "/images/imageBox/hopes/H_bg.png", alt: "Heart", link: "/homepage/HOPES/Heart" },
  { src: "/images/imageBox/hopes/O_bg.png", alt: "Obesity", link: "/homepage/HOPES/Obesity" },
  { src: "/images/imageBox/hopes/P_bg.png", alt: "Pain", link: "/homepage/HOPES/Pain" },
  { src: "/images/imageBox/hopes/E_bg.png", alt: "Every Kidney", link: "/homepage/HOPES/EveryKidney" },
  { src: "/images/imageBox/hopes/S_bg.png", alt: "Sugar", link: "/homepage/HOPES/Sugar" },
];

const HopesScroller = () => {
  return (
    <div className="w-full md:px-10 px-4 md:py-12 bg-transparent bg-white md:bg-gray-100">
      {/* Heading and Subheading */}
      <div className="mb-2">
        <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-2">
          Expert Care For H.O.P.E.S.
        </h2>
        <p className="text-sm md:text-lg text-black md:pl-10">
          -Heart, Obesity, Pain, Every Kidney Disease, and Sugar!
        </p>
      </div>

      <div className="relative">
        {/* Horizontal Scroller Container */}
        <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide snap-x snap-mandatory touch-pan-x">
          <div className="inline-flex gap-1 md:gap-2 py-4 w-max">
            {images.map((img, index) => (
              <Link 
                key={index} 
                href={img.link} 
                passHref
                className="inline-block snap-center"
              >
                <div className="flex items-center justify-center transition-transform hover:scale-105 active:scale-95 duration-300 ease-in-out">
                  <Image
                    quality={100}
                    src={img.src}
                    alt={img.alt}
                    width={300}
                    height={300}
                    className="rounded-xl object-cover 
                      w-[180px] h-[180px]
                      sm:w-[200px] sm:h-[200px]
                      md:w-[220px] md:h-[220px]
                      lg:w-[260px] lg:h-[260px]
                      xl:w-[300px] xl:h-[300px]
                      2xl:w-[340px] 2xl:h-[340px]"
                    sizes="(max-width: 640px) 180px,
                          (max-width: 768px) 220px,
                          (max-width: 1024px) 260px,
                          (max-width: 1280px) 300px,
                          (max-width: 1536px) 340px,
                          380px"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
    
        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10"></div>
      </div>
    </div>
  );
};

export default HopesScroller;