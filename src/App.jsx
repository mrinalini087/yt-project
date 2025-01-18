import React from "react";
import VideoList from "./components/VideoList";

const App = () => {
  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", padding: "20px", margin: 0 }}></h1>
      <VideoList />
    </div>
  );
};

export default App;
