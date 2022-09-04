import React from "react";
import NewPost from "./NewPost/NewPost";
import Story from "./Story/Story";

const MidSection = (props) => {
  return (
    <>
      <Story />
      <NewPost />
    </>
  );
};

export default MidSection;
