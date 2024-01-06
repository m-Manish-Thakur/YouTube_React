import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { API_KEY } from "../../Utils/constatnts";
import { addVideos } from "../../Utils/videoSlice";

const Button = ({ categoryId, category, activeCategory, setActiveCategory }) => {
  const dispatch = useDispatch();

  const fetchVideos = async (categoryId) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&videoCategoryId=${categoryId}&maxResults=30&key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(`YouTube API error: ${data.error.message}`);
      }
      const fetchedVideos = data.items;
      setActiveCategory(categoryId);
      dispatch(addVideos(fetchedVideos));
    } catch (error) {
      console.error("Error fetching videos:", error.message);
    }
  };

  return (
    <div>
      <button
        style={
          activeCategory === categoryId
            ? { background: "var(--text-color)", color: "var(--bg-color)" }
            : { background: "var(--bg-gray)" }
        }
        onClick={() => {
          fetchVideos(categoryId);
        }}
      >
        {category}
      </button>
    </div>
  );
};

export default Button;
