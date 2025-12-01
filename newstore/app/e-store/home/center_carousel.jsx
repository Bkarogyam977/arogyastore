'use client';
import { Carousel } from 'antd';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const banners = [
  {
    imageUrl: "/images/6.jpg",
    title: "Banner 3",
    practice: 5,
    category_id: 5
  },
  {
    imageUrl: "/images/banner2.jpeg",
    title: "Banner 1",
    practice: 5,
    category_id: 10
  },
  {
    imageUrl: "/images/e-store/banner_product_category.png",
    title: "Banner 2",
    practice: 8,
    category_id: 3
  },
];

// Default banner data
const defaultBanner = {
  imageUrl: "/images/6.jpg",
  title: "Default Banner",
  practice: 1,
  category_id: 1
};

function Store_Center_Carousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [bannerstate, setBannerstate] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setTimeout(() => {
        setBannerstate(true);
      }, 1500);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative mt-10 md:mt-20">
      {bannerstate ? (
        <Carousel autoplay>
          {banners.map((banner, index) => (
            <div key={index}>
              <Link href={`/e-store/allproducts?practice=${banner.practice}&category_id=${banner.category_id}`}>
                <div className="relative w-full h-[40vh] cursor-pointer">
                  <Image
                    src={banner.imageUrl}
                    alt={banner.title}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      ) : (
        // Render the default banner until banners are loaded
        <div className="relative w-full h-[40vh] cursor-pointer">
          <Link href={`/e-store/allproducts?practice=${defaultBanner.practice}&category_id=${defaultBanner.category_id}`}>
            <Image
              src={defaultBanner.imageUrl}
              alt={defaultBanner.title}
              layout="fill"
              objectFit="cover"
              priority
            />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Store_Center_Carousel;
