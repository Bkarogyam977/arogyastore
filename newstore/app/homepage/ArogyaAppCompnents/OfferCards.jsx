'use client';
import Image from "next/image";


const offers = [
  { src: "/images/imageBox/OfferCards/OfferCard3.png", alt: "Offer 3" },
  { src: "/images/imageBox/OfferCards/OfferCard1.png", alt: "Offer 1" },
  { src: "/images/imageBox/OfferCards/OfferCard2.png", alt: "Offer 2" },
];


const OfferCardScroller = () => {
  return (
    <div className="px-2 w-full overflow-x-auto whitespace-nowrap scrollbar-hide py-4 bg-gradient-to-b from-white to-white md:hidden">
      <div className="flex space-x-2 w-max pt-4">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-xl p-2 transition-transform transform hover:scale-105"
          >
            <Image
              src={offer.src}
              alt={offer.alt}
              width={350}
              height={180}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


export default OfferCardScroller;
