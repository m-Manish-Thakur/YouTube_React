import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import VideoDetails from "../Main/VideoDetails";
import { API_KEY } from "../../Utils/constatnts";
import VideoDetailsLive from "./VideoDetailsLive";

const WatchLive = () => {
  const { id } = useParams();
  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${API_KEY}`
        );
        const data = await response.json();

        if (data?.items && data.items.length > 0 && data.items[0].snippet) {
          setVideoInfo(data.items[0]?.snippet);
        } else {
          console.error("Video data not found");
        }
      } catch (error) {
        console.error("Error fetching video data", error);
      }
    };
    fetchVideo();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <div id="watchLive">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="Live Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <VideoDetailsLive videoInfo={videoInfo} id={id} />
      </div>
    </>
  );
};

export default WatchLive;
