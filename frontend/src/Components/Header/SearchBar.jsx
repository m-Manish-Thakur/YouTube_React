import React, { useEffect, useState } from "react";
import { YOUTUBE_SERACH_API } from "../../Utils/constatnts";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    console.log(searchQuery);
    const timer = setTimeout(() => getSearchSuggetion(), 400);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggetion = async () => {
    const response = await fetch(YOUTUBE_SERACH_API + searchQuery);
    const data = await response.json();
    setSuggestion(data[1]);
    console.log(data[1]);
  };

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span class="material-symbols-outlined">search</span>
        {showSuggestion && suggestion.length > 0 ? (
          <div id="searchSuggetion">
            {suggestion.map((suggetion) => (
              <p>{suggetion}</p>
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
