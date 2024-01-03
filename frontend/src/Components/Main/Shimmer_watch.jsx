import React from "react";

const Shimmer_watch = () => {
  return (
    <div id="shimmer_watch">
      <div className="video"></div>
      <div
        style={{
          width: "80%",
          height: "20px",
          background: "var(--search-bg)",
          marginTop: "15px",
          borderRadius: "15px",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "100px",
          background: "var(--search-bg)",
          marginTop: "35px",
          borderRadius: "15px",
        }}
      ></div>
    </div>
  );
};

export default Shimmer_watch;
