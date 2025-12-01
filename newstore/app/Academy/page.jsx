"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ArogyaAcademy = () => {
  const [tags, setTags] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loadingTags, setLoadingTags] = useState(true);
  const [loadingGallery, setLoadingGallery] = useState(true);
  const router = useRouter();

  // Fetch tags
  const loadCategories = useCallback(async () => {
    try {
      const response = await fetch("https://healdiway.bkarogyam.com/erp-api/yt-subcategory", {
        method: "GET",
        headers: {
          Authorization: "Token 20216131373a790dfa22c49be6d0e42ef213a820",
        },
      });

      const data = await response.json();

      const academyTags = data
        .filter((item) => item.is_active && item.cat === "academy")
        .map((item) => ({
          id: item.id,
          name: item.name,
        }));

      setTags(academyTags);
      setLoadingTags(false);
    } catch (error) {
      console.error("Error fetching tags:", error);
      setLoadingTags(false);
    }
  }, []);

  // Fetch gallery
  const loadGallery = useCallback(async () => {
    try {
      const response = await fetch("https://healdiway.bkarogyam.com/erp-api/yt-gallery/", {
        method: "GET",
        headers: {
          Authorization: "Token 20216131373a790dfa22c49be6d0e42ef213a820",
        },
      });

      const data = await response.json();

      const academyGallery = data.results.filter((item) => item.is_active && item.category === "academy");

      setGallery(academyGallery);
      setLoadingGallery(false);
    } catch (error) {
      console.error("Error fetching gallery:", error);
      setLoadingGallery(false);
    }
  }, []);

  useEffect(() => {
    loadCategories();
    loadGallery();
  }, [loadCategories, loadGallery]);

  const handleTagClick = (tag) => {
    router.push(`/Academy/${tag.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div className="my-28 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800">Arogyam Academy</h1>

      {/* Tags Section */}
      {loadingTags ? (
        <div className="flex justify-center mt-6">
          <p className="text-gray-600">Loading tags...</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center mt-6 gap-4">
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => handleTagClick(tag.name)}
              className="px-4 py-2 text-sm font-medium text-yellow-500 bg-white border-full rounded-md hover:bg-teal-400 transition"
            >
              {tag.name}
            </button>
          ))}
        </div>
      )}

      {/* Divider */}
      <div className="border-b-2 border-gray-200 my-8"></div>

      {/* Gallery Section */}
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Top Trending Videos
        </h2>
        {loadingGallery ? (
          <div className="flex justify-center">
            <p className="text-gray-600">Loading videos...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <div className="flex gap-6 mx-8">
              {gallery.slice(0, 8).map((video) => (
                <div
                  key={video.id}
                  className="min-w-[400px] bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={`https://img.youtube.com/vi/${video.video_url}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      width={400}
                      height={225}
                      unoptimized // YouTube thumbnails don't need optimization
                    />
                  </div>

                  <div className="">
                    <h3 className="text-lg font-semibold text-gray-800 truncate px-4">
                      {video.title}
                    </h3>
                    <div className="px-4 py-2 flex flex-row justify-between">
                      <p className="text-sm text-gray-500 mb-4">
                        {video.subcategory_data.name}
                      </p>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.video_url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white bg-blue-500 hover:bg-blue-600 transition-colors rounded-md px-4 py-2 text-sm"
                      >
                        Watch Video
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArogyaAcademy;