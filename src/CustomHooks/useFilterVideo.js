import React from "react";

export default function useFilterVideo(searchVideo, videos) {
  return videos.filter((item) => {
    return searchVideo.toLowerCase() === ""
      ? item
      : item.title.toLowerCase().includes(searchVideo.toLowerCase());
  });
}
