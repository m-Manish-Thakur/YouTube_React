import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const categories = [
    { id: 10, name: "Music" },
    { id: 1, name: "Movies" },
    { id: 23, name: "Comedy" },
    { id: 17, name: "Sports" },
    { id: 28, name: "Coding" },
    { id: 25, name: "News" },
    { id: 20, name: "Gaming" },
    { id: 26, name: "Howto & Style" },
    { id: 15, name: "Animals" },
  ];
  return (
    <div id="buttonList">
      {categories.map((categories) => (
        <Button key={categories.id} categoryId={categories.id} category={categories.name} />
      ))}
    </div>
  );
};

export default ButtonList;
