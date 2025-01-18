import React from "react";

const VideoCard = ({ thumbnail, title, creator, views }) => {
  return (
    <div
      style={{
        width: "300px",
        margin: "10px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "10px",
      }}
    >
      <img
        src={thumbnail}
        alt={title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{title}</h3>
      <p style={{ color: "#555", margin: "4px 0" }}>Creator: {creator}</p>
      <p style={{ color: "#777", margin: "4px 0" }}>{views} views</p>
    </div>
  );
};

export default VideoCard;
