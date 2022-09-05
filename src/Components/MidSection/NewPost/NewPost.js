import React from "react";
import { BsCircleHalf, BsEmojiSmile } from "react-icons/bs";
import { GoDeviceCamera } from "react-icons/go";
import UserIcon from "../../UserIcon/UserIcon";
import "./NewPost.css";

const NewPost = (props) => {
  return (
    <>
      <div className="newPostWrapper my-3">
        <div className="d-flex">
          <UserIcon size={40} />

          <div className="searchBar ps-4" style={{ width: "90%" }}>
            <input
              className="search ps-3 me-auto w-100"
              type="text"
              placeholder="Create a new post..."
              style={{
                border: "none",
                backgroundColor: "#c9c9cd54",
              }}
            />
          </div>
        </div>
        <hr color="#b5b5b5" />
        <div className="d-flex justify-content-around mb-2 postTopics">
          <div className="d-flex justify-content-center align-items-center">
            <BsCircleHalf />
            <div className="ms-2">Background</div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <GoDeviceCamera />
            <div className="ms-2">Photo / Video</div>
          </div>
          <div className="d-flex justify-content-center align-items-center feelingOrActivity">
            <BsEmojiSmile />
            <div className="ms-2">Feeling / Activity</div>
          </div>
        </div>
      </div>

      <div className="publicPost">
        <span>Public Post</span>
        Friend Post
      </div>
    </>
  );
};

export default NewPost;
