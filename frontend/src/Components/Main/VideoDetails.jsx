import React, { useEffect, useState } from "react";
import GetComments from "./GetComments";

const VideoDetails = ({ videoInfo, likes, id, channelInfo }) => {
  const [channel, setChannel] = useState(null);
  const [showDes, setShowDes] = useState(false);

  useEffect(() => {
    setChannel(channelInfo);
  }, []);

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
    <div>
      <h3 className="mt-1"> {videoInfo?.localized?.title}</h3>
      <div className="name_likes">
        <div className="d-flex align-items-center">
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
        <div className="likes">
          <p style={{ fontSize: "15px" }}>
            <span class="material-symbols-outlined">thumb_up</span> {likes}
          </p>
          <span class="material-symbols-outlined">thumb_down</span>
          <p>
            <span class="material-symbols-outlined">share</span>
            Share
          </p>
        </div>
      </div>
      <div id="description" onClick={() => setShowDes(!showDes)}>
        <p style={showDes ? { height: "100%" } : { height: "100px" }}>{videoInfo?.description}</p>
        <span class="material-symbols-outlined">keyboard_arrow_down</span>
      </div>
      <GetComments videoId={id} />
    </div>
  );
};

export default VideoDetails;
