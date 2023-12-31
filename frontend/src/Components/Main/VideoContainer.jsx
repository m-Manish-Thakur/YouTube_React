import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../../Utils/constatnts";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    const fetch_videos = async () => {
      const response = await fetch(YOUTUBE_API);
      const data = await response.json();
      setVideos(data.items);
    };
    fetch_videos();
  }, []);
  return videos ? (
    <div className="video_container">
      {videos.map((item) => (
        <VideoCard item={item} />
      ))}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default VideoContainer;
