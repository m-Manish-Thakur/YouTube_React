import React, { useEffect, useState } from "react";
import { API_KEY } from "../../Utils/constatnts";

const GetComments = ({ videoId }) => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    const fetch_comments = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=30&videoId=${videoId}&key=${API_KEY}`
      );
      const data = await response.json();
      setComments(data);
    };
    fetch_comments();
  }, [videoId]);

  return (
    <div id="comments">
      <h2>Comments</h2>
      {comments ? (
        <>
          {comments.items.map((item) => (
            <div className="comment" key={item?.id}>
              <img
                src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
                style={{ borderRadius: "50%", width: "40px" }}
                alt=""
              />
              <div>
                <h4>{item?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h4>
                <p>{item?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
                <div className="buttons">
                  <span class="material-symbols-outlined">thumb_up</span>
                  <span class="material-symbols-outlined">thumb_down</span>
                  <i>Reply</i>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h3>Loading..</h3>
      )}
    </div>
  );
};

export default GetComments;
