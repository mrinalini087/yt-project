import React from "react";
import VideoList from "./components/videoList";

const App = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", padding: "20px", margin: 0 }}>
        YouTube Video Gallery
      </h1>
      <VideoList />
    </div>
  );
};

export default App;
