import React, { useState, useRef, useEffect } from 'react';
import './ProductPreview.css';
import Image from 'next/image';

const ProductPreview = ({ imageUrl }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isZoomVisible, setIsZoomVisible] = useState(false);
    const zoomContainerRef = useRef(null);
    const zoomCanvas = useRef(null);

    const handleMouseMove = (e) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    useEffect(() => {
        if (!zoomCanvas.current || !imageUrl) return;

        const ctx = zoomCanvas.current.getContext('2d');
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            const { x, y } = mousePosition;
            const ratio = zoomContainerRef.current.offsetWidth / img.width;
            const zoomX = x * ratio;
            const zoomY = y * ratio;
            const width = zoomContainerRef.current.offsetWidth;
            const height = zoomContainerRef.current.offsetHeight;

            ctx.clearRect(0, 0, zoomContainerRef.current.offsetWidth, zoomContainerRef.current.offsetHeight);
            ctx.drawImage(img, zoomX, zoomY, width, height, 0, 0, zoomContainerRef.current.offsetWidth, zoomContainerRef.current.offsetHeight);
        };
    }, [mousePosition, imageUrl]);

    const toggleZoomVisibility = () => {
        setIsZoomVisible(!isZoomVisible);
    };

    return (
        <div className="product-preview" onMouseMove={handleMouseMove} onMouseEnter={toggleZoomVisibility} onMouseLeave={toggleZoomVisibility}>
            <Image
                src={imageUrl}
                alt="Product"
                className="product-image"
                width={600}
                height={600}
                layout="intrinsic"
            />
            {isZoomVisible && (
                <div ref={zoomContainerRef} className="zoom-container">
                    <canvas ref={zoomCanvas} style={{ width: '100%', height: '100%' }}></canvas>
                </div>
            )}
        </div>
    );
};

export default ProductPreview;


export const ImageMagnifier = ({ image, position }) => {
    const magnifierSize = 150; // Adjust as necessary
    console.log(image);

    return (
        <div style={{
            position: 'absolute',
            top: position.y - magnifierSize / 2,
            left: position.x + 20, 
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            overflow: 'hidden',
            zIndex: 10,
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            pointerEvents: 'none'
        }}>
            <Image
                src={image}
                alt="Magnified"
                width={500}
                height={500}
                style={{
                    position: 'absolute',
                    transform: `translate(-${position.x * 2}px, -${position.y * 2}px)`,
                    transformOrigin: 'top left',
                }}
            />
        </div>
    );
};

