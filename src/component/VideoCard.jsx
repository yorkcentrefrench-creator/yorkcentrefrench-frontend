import React from "react";

const VideoCard = ({ url }) => {
  // Extract video ID from URL
  const getVideoId = (link) => {
    const regex = /(?:v=|\.be\/)([^&\n?#]+)/;
    const match = link.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(url);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg bg-white border">
      {/* Thumbnail */}
      <div className="relative">
        <img src={thumbnail} alt="video thumbnail" className="w-full" />

        {/* Play Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex justify-center items-center"
        >
          <div className="bg-black bg-opacity-60 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653v12.694c0 .863.933 1.404 1.68.967l11.045-6.347a1.125 1.125 0 000-1.934L6.93 4.686a1.125 1.125 0 00-1.68.967z"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default VideoCard;
