import React from "react";

const Shimmer_VideoCard = () => {
  return (
    <div id="shimmer_card">
      <div style={{ width: "100%", height: "200px", background: "var(--bg-shimmer)", borderRadius: "10px" }}></div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "5px 10px" }}>
        <div style={{ width: "40px", height: "40px", background: "var(--bg-shimmer)", borderRadius: "50%" }}></div>
        <div>
          <div
            style={{
              width: "210px",
              height: "15px",
              background: "var(--bg-shimmer)",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          ></div>
          <div
            style={{
              width: "200px",
              height: "15px",
              background: "var(--bg-shimmer)",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer_VideoCard;
