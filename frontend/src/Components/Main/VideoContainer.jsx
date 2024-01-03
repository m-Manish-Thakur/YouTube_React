import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../../Utils/constatnts";
import VideoCard from "./VideoCard";
import Shimmer_VideoCard from "./Shimmer_VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [loading, setLoading] = useState(true);

  const fetch_videos = async () => {
    setLoading(true);
    const response = await fetch(`${YOUTUBE_API}&pageToken=${pageToken}`);
    const data = await response.json();

    setVideos((prevVideos) => [...prevVideos, ...data.items]);
    setPageToken(data.nextPageToken);
    setLoading(false);
  };
  useEffect(() => {
    fetch_videos();
  }, []);

  const handleLoadMore = () => {
    fetch_videos();
  };

  return videos ? (
    <div className="video_container">
      {videos.map((item) => (
        <VideoCard item={item} />
      ))}
      {!loading && pageToken && (
        <button onClick={handleLoadMore} disabled={loading}>
          Load More
        </button>
      )}
    </div>
  ) : (
    <div style={{ display: "flex", justifyContent: "space-around", gap: "10px", flexWrap: "wrap" }}>
      <Shimmer_VideoCard />
      <Shimmer_VideoCard />
      <Shimmer_VideoCard />
      <Shimmer_VideoCard />
      <Shimmer_VideoCard />
      <Shimmer_VideoCard />
      <Shimmer_VideoCard />
      <Shimmer_VideoCard />
      <Shimmer_VideoCard />
      <Shimmer_VideoCard />
    </div>
  );
};

export default VideoContainer;
