import React, { useEffect, useState } from "react";
import { API_KEY } from "../../Utils/constatnts";

const LiveStream = () => {
  const [liveBroadcasts, setLiveBroadcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchLiveBroadcasts = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&eventType=live&regionCode=IN&key=${API_KEY}`
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
      <h2>Live Video Player</h2>
      {loading ? (
        <p>Loading...</p>
      ) : liveBroadcasts.length > 0 ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${liveBroadcasts[1].id.videoId}?autoplay=1`}
          title="Live Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No live broadcasts available</p>
      )}
    </div>
  );
};

export default LiveStream;
