import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSearchResults } from "../../Utils/searchSlice";

const SearchResultsPage = () => {
  const results = useSelector(getSearchResults);
  return (
    <div id="searchPage">
      {results.searchResults.length > 0 ? (
        results.searchResults.map((item) => (
          <Link to={`/videos/watch/${item?.id?.videoId}/1252`} style={{ textDecoration: "none" }}>
            <div className="card" key={item?.id?.videoId}>
              <img src={item?.snippet?.thumbnails?.medium?.url} alt="video" />
              <div>
                <h1>{item?.snippet?.title}</h1>
                <h3>{item?.snippet?.channelTitle}</h3>
                <h4>{item?.snippet?.description}</h4>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <>
          <h1 style={{ color: "--var(text-color)" }}>Loading..</h1>
        </>
      )}
    </div>
  );
};

export default SearchResultsPage;
