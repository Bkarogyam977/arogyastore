'use client'
import { Carousel } from 'antd';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const banners = [
  {
    imageUrl: "/images/6.jpg",
    title: "Banner 3",
    practice: 5,
    category_id: 10
  },
  {
    imageUrl: "/images/hair product.jpg",
    title: "Banner 1",
    practice: 5,
    category_id: 3
  }
];


// Default banner data
const defaultBanner = {
  imageUrl: "/images/6.jpg",
  title: "Default Banner"
};

function MainCarousel() {
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

  const formatTitle = (title) => {
    return title.replace(/ /g, "_");
  };

  return (
    <div className="relative md:mt-28">
      {bannerstate ? (
        <Carousel autoplay>
          {banners.map((banner, index) => (
            <div key={index}>
              <Link href={`/e-store/allproducts/?practice=${banner.practice}&category_id=${banner.category_id}`}>
                <Image
                  className="cursor-pointer"
                  src={banner.imageUrl}
                  alt={banner.title}
                  width={1920}
                  height={360}
                  layout="responsive"
                />
              </Link>
            </div>
          ))}
        </Carousel>
      ) : (
        <div>
          <Link href={`/e-store/allproducts/?practice=5&category_id=default`}>
            <Image
              className="cursor-pointer"
              src={defaultBanner.imageUrl}
              alt={defaultBanner.title}
              width={1920}
              height={360}
              layout="responsive"
            />
          </Link>
        </div>
      )}

    </div>
  );
}

export default MainCarousel;
