import React, { useEffect, useState } from "react";
import { API_KEY } from "../../Utils/constatnts";

const LiveChat = ({ VIDEO_ID }) => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    const fetch_comments = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=30&videoId=${VIDEO_ID}&key=${API_KEY}`
      );
      const data = await response.json();
      setComments(data);
    };
    fetch_comments();
  }, [VIDEO_ID]);

  return (
    <div id="liveChat">
      <h2>Live Chats</h2>
      <h1>{VIDEO_ID}</h1>
    </div>
  );
};

export default LiveChat;
