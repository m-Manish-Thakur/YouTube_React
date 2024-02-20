import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../../Utils/constatnts";
import VideoCard from "./VideoCard";
import Shimmer_VideoCard from "./Shimmer_VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { addVideos, GetVideos } from "../../Utils/videoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const getVideos = useSelector(GetVideos);
  const [loading, setLoading] = useState(true);

  const fetch_videos = async () => {
    const response = await fetch(`${YOUTUBE_API}`);
    const data = await response.json();
    dispatch(addVideos(data.items));
    setLoading(false);
  };

  useEffect(() => {
    fetch_videos();
  }, []);

  return (
    <div className="video_container">
      {loading
        ? Array.from({ length: 10 }).map((_, index) => <Shimmer_VideoCard key={index} />)
        : getVideos.videos.map((item) => <VideoCard item={item} key={item?.id} />)}
    </div>
  );
};

export default VideoContainer;
