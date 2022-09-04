import React from "react";
import UserIcon from "../UserIcon/UserIcon";
import Button from "react-bootstrap/esm/Button";
import { BiSearch } from "react-icons/bi";
import appStore from "../../Images/download app store.png";

const RightSection = (props) => {
  return (
    <>
      <div className="left-section">
        <h4>You might like</h4>
        <hr color="#c9c9c9" className="my-4" />
        <div className="d-flex justify-content-start align-items-center mt-4">
          <UserIcon size={50} />
          <div className="peoples-name ms-4">
            <div style={{ fontWeight: 600 }}>Sadek Hossian</div>
            <div style={{ marginTop: -1 }}>asdasdasd</div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <Button style={{ width: "49%" }} variant="outline-secondary">
            Ignore
          </Button>
          <Button style={{ width: "49%" }} variant="danger">
            Follow
          </Button>
        </div>
      </div>

      <div className="left-section">
        <h4>Your Friends</h4>
        <div className="searchBar mt-4">
          <input
            className="search"
            type="text"
            style={{
              border: "none",
              backgroundColor: "#c9c9cd54",
            }}
          />
          <span className="searchBtn">
            <BiSearch />
          </span>
        </div>

        <div className="d-flex justify-content-start align-items-center mt-4">
          <UserIcon size={42} />
          <div className="peoples-name ms-4">
            <div style={{ fontWeight: 600 }}>Admin</div>
          </div>
        </div>

        <div className="d-flex justify-content-start align-items-center mt-4">
          <UserIcon isImg={1} src={appStore} size={42} />
          <div className="peoples-name ms-4">
            <div style={{ fontWeight: 600 }}>Ahsanur Rahman</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSection;
