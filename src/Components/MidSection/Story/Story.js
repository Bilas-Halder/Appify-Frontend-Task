import React from "react";
import "./Story.css";
import UserIcon from "../../UserIcon/UserIcon";
import { BsPlusLg } from "react-icons/bs";
import bilasHalder from "../../../Images/Bilas Halder.png";

const Story = (props) => {
  return (
    <>
      <div className="storyWrapper">
        <div className="addStory">
          <UserIcon
            xy={[140, 200]}
            circle={0}
            bottom={13}
            left={5.5}
            scale={-75}
            backgroundColor={"#8c8a8a"}
            color={"#5f5f5f"}
          />

          <div className="darkLayer">
            <div className="addIconWrapper">
              <div className="addIcon">
                <BsPlusLg />
              </div>
            </div>
          </div>
        </div>
        <div className="otherStories ms-3">
          <div className="storyImg">
            <img src={bilasHalder} alt="" />
          </div>
          <div className="storyName">Bilas Halder</div>
          <div className="storyUserIcon">
            <UserIcon size={25} color="#dadada" />
          </div>
          <div className="storyTransparentLayer"></div>
        </div>
      </div>
    </>
  );
};

export default Story;
