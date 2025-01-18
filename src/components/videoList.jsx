import React from "react";
import VideoCard from "./VideoCard";
import videos from "../data/videos";

const VideoList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          thumbnail={video.thumbnail}
          title={video.title}
          creator={video.creator}
          views={video.views}
        />
      ))}
    </div>
  );
};

export default videoList;
