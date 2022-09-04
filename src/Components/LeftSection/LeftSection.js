import React from "react";
import { FiCalendar, FiSave, FiUser, FiUsers } from "react-icons/fi";
import { CgCalendarTwo } from "react-icons/cg";
import playStore from "../../Images/download play store.png";
import appStore from "../../Images/download app store.png";
import "./LeftSection.css";
import Button from "react-bootstrap/Button";

const LeftSection = (props) => {
  return (
    <>
      <div className="left-section explore">
        <h4>Explore</h4>
        <div className="explore-rows">
          <div className="explore-item">
            <FiSave /> <span> Saved Posts</span>
          </div>
          <div className="explore-item">
            <FiUser /> <span> People</span>
          </div>
          <div className="explore-item">
            <FiUsers /> <span> Groups</span>
          </div>
          <div className="explore-item">
            <CgCalendarTwo /> <span> Pages</span>
          </div>
          <div className="explore-item">
            <FiCalendar /> <span> Events</span>
          </div>
        </div>
      </div>

      <div className="left-section download-our-app">
        <h4>Download App</h4>
        <div className="d-flex justify-content-between mt-3">
          <div className="store-img app-store">
            <img src={appStore} alt="" />
          </div>
          <div className="store-img play-store">
            <img src={playStore} alt="" />
          </div>
        </div>
      </div>

      <div className="left-section suggested-people">
        <h4>Suggested People</h4>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="peoples-img">
            <img src={appStore} alt="" />
          </div>
          <div className="peoples-name">Sadek Hossian</div>

          <Button variant="outline-secondary">Add+</Button>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
