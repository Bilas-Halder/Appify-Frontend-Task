import Offcanvas from "react-bootstrap/Offcanvas";
import LeftSection from "../LeftSection/LeftSection";
import logo from "../../Images/logo.png";
import RightSection from "../RightSection/RightSection";

const LeftAndRight = ({ show, handleClose }) => {
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ backgroundColor: "#e9ebee" }}
      >
        <Offcanvas.Header closeButton>
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <LeftSection />
          <RightSection />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default LeftAndRight;
