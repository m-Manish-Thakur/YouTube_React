import React, { useEffect, useState } from "react";
import { API_KEY, YOUTUBE_SERACH_API } from "../../Utils/constatnts";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSearchResults } from "../../Utils/searchSlice";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggetion(), 400);
    console.log(searchQuery);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggetion = async () => {
    const response = await fetch(YOUTUBE_SERACH_API + searchQuery);
    const data = await response.json();
    setSuggestion(data[1]);
  };

  const searchVideos = async (query) => {
    try {
      const params = new URLSearchParams({
        q: query,
        part: "snippet",
        type: "video",
        maxResults: 10,
        key: API_KEY,
      });

      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?${params}`);
      const data = await response.json();
      dispatch(addSearchResults(data.items));
      console.log(data.items);
      navigate("/search/results");
      setSearchQuery("");
    } catch (error) {
      console.error("Error searching videos:", error);
    }
  };

  const handleClick = (selectedSuggestion) => {
    console.log("called");
    setSearchQuery(selectedSuggestion);
    setShowSuggestion(false);
    searchVideos(selectedSuggestion);
  };

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setTimeout(() => setShowSuggestion(false), 200)}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span class="material-symbols-outlined">search</span>
        {showSuggestion && suggestion.length > 0 ? (
          <div id="searchSuggetion">
            {suggestion.map((item, index) => (
              <p key={index} onClick={() => handleClick(item)}>
                {item}
              </p>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      <span class="material-symbols-outlined" id="mic">
        mic
      </span>
    </>
  );
};

export default SearchBar;
