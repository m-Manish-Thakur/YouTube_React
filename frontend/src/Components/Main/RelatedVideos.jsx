import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addVideos, GetVideos } from "../../Utils/videoSlice";
import { YOUTUBE_API } from "../../Utils/constatnts";
import { Link } from "react-router-dom";

const RelatedVideos = () => {
  const dispatch = useDispatch();
  const getVideos = useSelector(GetVideos);
  console.log(getVideos);

  const fetch_videos = async () => {
    const response = await fetch(`${YOUTUBE_API}`);
    const data = await response.json();
    dispatch(addVideos(data.items));
  };

  useEffect(() => {
    fetch_videos();
  }, []);

  return getVideos.videos.length != 0 ? (
    <div id="relatedVideos">
      {getVideos.videos
        .slice()
        .reverse()
        .map((item) => (
          <Link to={`/videos/watch/${item?.id}/${item?.statistics?.likeCount}`} style={{ textDecoration: "none" }}>
            <div id="relatedCard" key={item.id}>
              <img src={item?.snippet?.thumbnails?.medium?.url} alt="Images" />
              <div>
                <div>
                  <h2>{item?.snippet?.title.substring(0, 60)}</h2>
                  <div className="chennel">
                    <p>{item?.snippet?.channelTitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  ) : (
    <>
      <h1>Lodaing</h1>
    </>
  );
};

export default RelatedVideos;
