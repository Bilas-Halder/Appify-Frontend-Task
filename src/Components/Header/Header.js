import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../../Images/logo.png";
import { BiSearch } from "react-icons/bi";
import { CgHome } from "react-icons/cg";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage, AiOutlineImport } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import "./Header.css";
import LeftAndRight from "../LeftAndRightSideOffCanvas/LeftAndRight";

const Header = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="w-100" style={{ backgroundColor: "#34465d" }}>
        <Container>
          <Navbar
            expand="lg"
            variant="dark"
            style={{ backgroundColor: "#34465d" }}
          >
            <Container fluid>
              <Navbar.Brand href="#home">
                <img
                  src={logo}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <div className="">
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Button
                  variant="outline-secondary"
                  className="d-inline-block d-lg-none ms-3 ms-sm-4 ms-md-5"
                  style={{
                    fontSize: "1.2rem",
                    color: "#ffffff8c",
                    borderColor: "#ffffff8c",
                    fontWeight: "bolder",
                  }}
                  onClick={handleShow}
                >
                  <AiOutlineImport />
                </Button>
              </div>
              <Navbar.Collapse id="navbarScroll">
                {/* search input */}
                <div className="searchBar mx-0 mx-md-auto">
                  <input className="search" type="text" placeholder="Search " />
                  <span className="searchBtn">
                    <BiSearch />
                  </span>
                </div>
                {/* search input */}
                <Nav
                  className="my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="#action1" className="custom-nav-link">
                    <CgHome />
                  </Nav.Link>
                  <Nav.Link href="#action2" className="custom-nav-link">
                    <HiOutlineUserGroup />
                  </Nav.Link>
                  <Nav.Link href="#action3" className="custom-nav-link">
                    <IoMdNotificationsOutline />
                  </Nav.Link>
                  <Nav.Link href="#action4" className="custom-nav-link">
                    <AiOutlineMessage />
                  </Nav.Link>
                  <Nav.Link href="#action5" className="custom-nav-link">
                    <FaUserCircle />
                    <span> Bilas Halder </span>
                    <BsChevronDown />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
      <LeftAndRight show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
