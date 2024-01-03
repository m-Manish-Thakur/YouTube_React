import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { closeMenu } from "../../Utils/sideBarSlice";
import { useDispatch } from "react-redux";
import { API_KEY } from "../../Utils/constatnts";
import VideoDetails from "./VideoDetails";
import Shimmer_watch from "./Shimmer_watch";

const WatchPage = () => {
  const dispatch = useDispatch();
  const { id, likes } = useParams();
  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        // dispatch(closeMenu());
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${API_KEY}`
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
  }, [id, dispatch]);

  function formatLikes(likes) {
    if (likes >= 1000000) {
      return (likes / 1000000).toFixed(1) + "M";
    } else if (likes >= 1000) {
      return (likes / 1000).toFixed(1) + "K";
    } else {
      return likes.toString();
    }
  }

  // Example usage:
  const likesCount = likes;
  const formattedLikes = formatLikes(likesCount);

  return videoInfo ? (
    <div id="watchPage">
      <div id="video_watch">
        <iframe
          src={`https://www.youtube.com/embed/${id}?si=R2rTwUQ4SZXQiLO1&autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <VideoDetails videoInfo={videoInfo} likes={formattedLikes} id={id} />
      </div>
    </div>
  ) : (
    <Shimmer_watch />
  );
};

export default WatchPage;
