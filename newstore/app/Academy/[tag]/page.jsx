"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const TagPage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { tag } = useParams();

  const fetchVideos = useCallback(async () => {
    try {
      const response = await fetch(
        "https://healdiway.bkarogyam.com/erp-api/yt-gallery/",
        {
          method: "GET",
          headers: {
            Authorization: "Token 20216131373a790dfa22c49be6d0e42ef213a820",
          },
        }
      );

      const data = await response.json();

      const relevantVideos = data.results.filter(
        (item) =>
          item.is_active &&
          item.subcategory_data.name.toLowerCase() === tag.replace(/-/g, " ")
      );

      setVideos(relevantVideos);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching videos:", error);
      setLoading(false);
    }
  }, [tag]);

  useEffect(() => {
    if (tag) {
      fetchVideos();
    }
  }, [tag, fetchVideos]);

  return (
    <div className="my-32 font-sans">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 capitalize">
        Explore Videos for {tag.replace(/-/g, " ")}
      </h1>
      <p className="text-center text-gray-600 mt-2">
        Learn, grow, and explore with our curated video collection!
      </p>

      {loading ? (
        <div className="flex justify-center mt-12">
          <div className="text-gray-600 animate-pulse text-lg">
            Loading videos, please wait...
          </div>
        </div>
      ) : videos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4 lg:px-20">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition transform duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={`https://img.youtube.com/vi/${video.video_url}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                  width={480}
                  height={360}
                  unoptimized
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
      ) : (
        <div className="flex justify-center mt-12">
          <p className="text-gray-600 text-lg">
            No videos found for this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default TagPage;