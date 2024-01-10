import React from "react";
import { useParams } from "react-router-dom";
import LiveChat from "./LiveChat";

const WatchLive = () => {
  const { id } = useParams();
  return (
    <>
      <div id="watchLive">
        <iframe
          width="600"
          height="350"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="Live Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <LiveChat VIDEO_ID={id} />
      </div>
    </>
  );
};

export default WatchLive;
