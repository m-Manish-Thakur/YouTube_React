import React, { useEffect, useState } from "react";
import { API_KEY } from "../../Utils/constatnts";

const VideoDetailsLive = ({ videoInfo, id }) => {
  const [channel, setChannel] = useState(null);
  const [showDes, setShowDes] = useState(false);

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const API_URL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${videoInfo.channelId}&key=${API_KEY}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        setChannel(data?.items[0]);
      } catch (error) {
        console.error("Error fetching channel data", error);
      }
    };

    fetchChannel();
  }, [id, videoInfo]);

  //   Subscribers ----------------------------------
  function formatSubscribersCount(subscribersCount) {
    if (subscribersCount >= 1e6) {
      // Convert to millions and round to one decimal place
      return (subscribersCount / 1e6).toFixed(1) + "M";
    } else if (subscribersCount >= 1e3) {
      // Convert to thousands and round to one decimal place
      return (subscribersCount / 1e3).toFixed(1) + "K";
    } else {
      return subscribersCount;
    }
  }

  const subscribersCount = channel?.statistics?.subscriberCount;
  const formattedCount = formatSubscribersCount(subscribersCount);

  return (
    <div id="videoDetailsLive">
      <h3 className="mt-1"> {videoInfo?.localized?.title}</h3>
      <div className="d-flex align-items-center" style={{ margin: "20px 10px" }}>
        <img
          src={channel?.snippet?.thumbnails?.high?.url}
          style={{ height: "40px", borderRadius: "50%", marginRight: "10px" }}
          alt="channel"
        />
        <div>
          <h4 style={{ fontSize: "16px", fontWeight: "700", fontFamily: "inter", color: "var(--text-color)" }}>
            {channel?.snippet?.localized?.title}
          </h4>
          <h4 style={{ fontSize: "14px", fontFamily: "inter", color: "var(--text-darkGray)", marginTop: "3px" }}>
            {formattedCount} Subscribers
          </h4>
        </div>
      </div>
      <div id="description">
        <p>{showDes ? videoInfo?.description.substring(0, 1000) : videoInfo?.description.substring(0, 70)}</p>
        <span onClick={() => setShowDes(!showDes)}>{showDes ? "Less More" : "Read More"}</span>
      </div>
    </div>
  );
};

export default VideoDetailsLive;
