import React from "react";
import { FaUser, FaUserCircle } from "react-icons/fa";

const UserIcon = ({
  size,
  xy = [],
  circle = 1,
  backgroundColor = "gray",
  color = "#bbbbbb",
  top,
  bottom,
  left,
  right,
  isImg = 0,
  src,
  scale = 4,
}) => {
  const width = xy.length === 0 ? size : xy[0];
  const height = xy.length === 0 ? size : xy[1];
  const fontSize = xy.length === 0 ? size + scale : xy[1] + scale;
  const borderRadius = circle === 1 ? "50%" : "7px";

  return isImg ? (
    <div
      style={{
        width,
        height,
        borderRadius: "50%",
      }}
    >
      <img
        src={src}
        alt="Users Img"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
        }}
      />
    </div>
  ) : (
    <div
      className=""
      style={{
        width,
        height,
        borderRadius,
        backgroundColor,
        color,
        fontSize,
        position: "relative",
      }}
    >
      {xy.length === 0 ? (
        <div
          className=""
          style={{
            position: "absolute",
            left: -1,
            top: "-47%",
          }}
        >
          <FaUserCircle />
        </div>
      ) : (
        <div
          className=""
          style={{
            position: "absolute",
            top: top ? top + "%" : top,
            bottom: bottom ? bottom + "%" : bottom,
            left: left ? left + "%" : left,
            right: right ? right + "%" : right,
          }}
        >
          <FaUser />
        </div>
      )}
    </div>
  );
};

export default UserIcon;
