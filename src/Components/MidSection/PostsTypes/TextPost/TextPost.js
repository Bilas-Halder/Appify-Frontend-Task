import React from "react";
import { FaRegSmileBeam, FaGlobe, FaChevronDown } from "react-icons/fa";
import { MdOutlineDirectionsRun } from "react-icons/md";
import UserIcon from "../../../UserIcon/UserIcon";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./TextPost.css";

const TextPost = ({ name, feeling, activity, description }) => {
  return (
    <>
      <div className="textPost my-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <UserIcon size={40} />
            <div className="username">
              <h5 className="mb-1">
                {name}
                <span>
                  {activity && (
                    <>
                      <MdOutlineDirectionsRun />
                      {" is doing " + activity}
                    </>
                  )}

                  {feeling && (
                    <>
                      <FaRegSmileBeam />
                      {" is feeling " + feeling}
                    </>
                  )}
                </span>
              </h5>
              <span>
                1 hour ago <FaGlobe />
              </span>
            </div>
          </div>
          <div className="post-menu-btn mb-auto">
            <DropdownButton
              title={
                <span>
                  <FaChevronDown />
                </span>
              }
              id="collasible-nav-dropdown"
              drop="down"
            >
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="description my-3">{description}</div>
      </div>
    </>
  );
};

export default TextPost;
