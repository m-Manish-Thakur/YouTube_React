import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { closeMenu } from "../../Utils/sideBarSlice";
import { useDispatch } from "react-redux";
import { API_KEY } from "../../Utils/constatnts";
import VideoDetails from "./VideoDetails";
import ChannelDetails from "./ChannelDetails";

const WatchPage = () => {
  const dispatch = useDispatch();
  const { id, likes } = useParams();
  const [channelInfo, setChannelInfo] = useState(null);
  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        dispatch(closeMenu());
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

    const API_URL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${videoInfo?.channelId}&key=${API_KEY}`;

    const fetch_channel = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setChannelInfo(data?.items[0]);
    };
    fetch_channel();
    window.scrollTo(0, 0);
  }, [id]);

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
        <VideoDetails videoInfo={videoInfo} likes={formattedLikes} id={id} channelInfo={channelInfo} />
      </div>
      <div id="channelInfo">
        <ChannelDetails details={channelInfo} />
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default WatchPage;
