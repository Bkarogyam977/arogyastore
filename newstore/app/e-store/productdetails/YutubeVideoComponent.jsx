"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlay, FaExpand } from 'react-icons/fa';
import { Modal } from 'antd';

const YouTubeVideo = ({ videoIdOrUrl, thumbnailUrl, altText = "Video thumbnail" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Function to extract YouTube video ID from URL
  const getYouTubeId = (urlOrId) => {
    if (!urlOrId) return null;
    
    // If it's already just an ID (no special characters)
    if (!urlOrId.includes('/') && !urlOrId.includes('=') && !urlOrId.includes('.')) {
      return urlOrId;
    }

    // Regular URL patterns
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = urlOrId.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(videoIdOrUrl);

  if (!videoId) {
    console.error("Invalid YouTube URL or ID provided");
    return <div className="text-red-500">Invalid YouTube video URL or ID</div>;
  }

  const showModal = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  // Default thumbnail URL
  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackThumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="relative w-full">
      {/* Video Thumbnail with Play Button */}
      <div 
        className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg bg-gray-200"
        onClick={showModal}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* YouTube Thumbnail with error handling */}
        {!imgError ? (
          <Image
            src={thumbnailUrl || defaultThumbnail}
            alt={altText}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            onError={() => {
              if (!thumbnailUrl) {
                // Only try fallback if we're using default thumbnail
                setImgError(true);
              }
            }}
            unoptimized={true} // Bypass Next.js optimization for external images
          />
        ) : (
          <Image
            src={fallbackThumbnail}
            alt={altText}
            fill
            className="object-cover"
            unoptimized={true}
          />
        )}
        
        {/* Play Button Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
          <div className="bg-red-600 text-white p-4 rounded-full shadow-xl transform transition-all duration-300 hover:scale-110">
            <FaPlay className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <Modal
        open={isModalOpen}
        onCancel={handleClose}
        footer={null}
        width="90%"
        centered
        className="youtube-modal"
        styles={{
          body: { 
            padding: 0,
            height: '80vh'
          }
        }}
      >
        <div className="relative w-full h-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&controls=1&showinfo=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          />
          
          {/* Fullscreen Toggle Button */}
          <button 
            onClick={() => document.querySelector('iframe')?.requestFullscreen()}
            className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
          >
            <FaExpand className="w-5 h-5" />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default YouTubeVideo;