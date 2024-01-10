import React, { useEffect, useState } from "react";
import { API_KEY } from "../../Utils/constatnts";
import { Link } from "react-router-dom";

const LiveStream = () => {
  const [liveBroadcasts, setLiveBroadcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchLiveBroadcasts = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&eventType=live&maxResults=30&regionCode=IN&key=${API_KEY}`
        );
        const data = await response.json();
        console.log(data.items);
        setLiveBroadcasts(data.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching live broadcasts", error);
      }
    };

    fetchLiveBroadcasts();
  }, []);
  return (
    <div id="liveStreamPage">
      {liveBroadcasts.length > 0 ? (
        liveBroadcasts.map((video) => (
          <Link to={`/live/videos/watch/${video?.id?.videoId}`} style={{ textDecoration: "none" }}>
            <div className="card" key={video?.id?.videoId}>
              <img src={video?.snippet?.thumbnails?.medium?.url} alt="video" />
              <h3>{video?.snippet?.title}</h3>
              <h4>{video?.snippet?.channelTitle}</h4>
            </div>
          </Link>
        ))
      ) : (
        <>
          <h1 style={{ color: "var(--text-color)", marginTop: "50px" }}>Loading...</h1>
        </>
      )}
    </div>
  );
};

export default LiveStream;
