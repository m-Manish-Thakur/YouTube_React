import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div id="buttonList">
      <Button btnName={"All"} />
      <Button btnName={"Mixes"} />
      <Button btnName={"Coding"} />
      <Button btnName={"Frontend"} />
      <Button btnName={"Backend"} />
      <Button btnName={"JavaScript"} />
      <Button btnName={"Cricket"} />
      <Button btnName={"Movies"} />
      <Button btnName={"Songs"} />
      <Button btnName={"News"} />
      <Button btnName={"Live"} />
      <Button btnName={"Gaming"} />
    </div>
  );
};

export default ButtonList;
