'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const products = [
    {
        id: 1,
        imgSrc: "/images/e-store/sugestion_banner.png",
    },
];

function LongBsnnerAdds(props) {
    const [slidesPerView, setSlidesPerView] = useState(1);
    const [practice, setPractice] = useState(null);

    useEffect(() => {
        setPractice(props.practice);
    }, [props.practice]);

    useEffect(() => {
        const calculateSlidesPerView = () => {
            const screenWidth = window.innerWidth;
            return screenWidth >= 768 ? 1 : 1;
        };

        setSlidesPerView(calculateSlidesPerView);

        const handleResize = () => {
            setSlidesPerView(calculateSlidesPerView);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        (practice !== null && practice !== undefined) && (
            <div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={15}
                    slidesPerView={slidesPerView}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className='mt-4 bg-orange-800 rounded-lg'>
                                <a
                                    href={`/e-store/allproducts?practice=${practice.id}&category_id=5`}
                                    target="_self"
                                >
                                    <Image
                                        src={product.imgSrc}
                                        alt="Banner"
                                        className="w-full"
                                        width={1200}
                                        height={360}
                                        layout="responsive"
                                    />
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )
    );
}

export { LongBsnnerAdds };
