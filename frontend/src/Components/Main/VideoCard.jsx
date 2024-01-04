import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ item }) => {
  //   Formate YOUTUBE Views -----------------------------------------------------
  function formatYouTubeViews(views) {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "m views";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "k views";
    } else {
      return views + " views";
    }
  }
  const views = item?.statistics?.viewCount;
  const formattedViews = formatYouTubeViews(views);

  //   Fromate Video upload Time    ----------------------------------------------

  function formatYouTubeDate(timestamp) {
    const now = new Date();
    const date = new Date(timestamp);
    const diffMs = now - date;

    // Convert milliseconds to seconds
    const diffSec = Math.floor(diffMs / 1000);

    // Convert seconds to minutes
    const diffMin = Math.floor(diffSec / 60);

    // Convert minutes to hours
    const diffHour = Math.floor(diffMin / 60);

    // Convert hours to days
    const diffDay = Math.floor(diffHour / 24);

    // Check if the timestamp is within the same year
    if (now.getFullYear() === date.getFullYear()) {
      // Display as "M days ago" if within the same year
      if (diffDay === 0) {
        return `${diffHour}h ago`;
      } else {
        return `${diffDay}d ago`;
      }
    } else {
      // Display as "YYYY-MM-DD" if not in the same year
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date
        .getDate()
        .toString()
        .padStart(2, "0")}`;
      return formattedDate;
    }
  }
  const formattedDate = formatYouTubeDate(item?.snippet?.publishedAt);

  return item ? (
    <Link to={`/videos/watch/${item?.id}/${item?.statistics?.likeCount}`} style={{ textDecoration: "none" }}>
      <div className="videoCard">
        {!item?.snippet?.thumbnails?.medium?.url ? (
          <div style={{ width: "100%", height: "200px", background: "var(--search-bg)", borderRadius: "10px" }}></div>
        ) : (
          <img src={item?.snippet?.thumbnails?.medium?.url} alt="Images" />
        )}

        <div className="video_info">
          <img
            src={item?.snippet?.thumbnails?.default?.url}
            style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
            alt="video"
          />
          <div>
            <h2>{item?.snippet?.title.substring(0, 60)}</h2>
            <div className="chennel">
              <p>{item?.snippet?.channelTitle}</p>
              <h3>
                {formattedViews} • {formattedDate}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <></>
  );
};

export default VideoCard;
