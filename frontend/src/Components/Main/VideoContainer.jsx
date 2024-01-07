import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../../Utils/constatnts";
import VideoCard from "./VideoCard";
import Shimmer_VideoCard from "./Shimmer_VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { addVideos, GetVideos } from "../../Utils/videoSlice";

const VideoContainer = () => {
  // const [videos, setVideos] = useState(null);
  const dispatch = useDispatch();
  const getVideos = useSelector(GetVideos);

  const fetch_videos = async () => {
    const response = await fetch(`${YOUTUBE_API}`);
    const data = await response.json();
    dispatch(addVideos(data.items));
    // setVideos(data.items);
  };

  useEffect(() => {
    fetch_videos();
  }, []);

  console.log(getVideos);
  return getVideos.length != 0 ? (
    <div className="video_container">
      {getVideos.videos.map((item) => (
        <VideoCard item={item} key={item?.id} />
      ))}
    </div>
  ) : (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
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
