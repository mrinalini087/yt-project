import React from "react";

const VideoCard = ({ thumbnail, title, creator, views, channelProfilePic }) => {
  return (
    <div
      style={{
        width: "300px",
        margin: "10px",
        backgroundColor: "#000000",
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
      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <img
          src={channelProfilePic}
          alt={creator}
          style={{ width: "30px", height: "30px", borderRadius: "50%" }}
        />
        <div style={{ marginLeft: "10px" }}>
          <h3 style={{ fontSize: "16px", color: "#fff", margin: "0" }}>
            {title}
          </h3>
          <p style={{ color: "#fff", margin: "4px 0" }}>{creator}</p>
          <p style={{ color: "#fff", margin: "4px 0" }}>{views}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
