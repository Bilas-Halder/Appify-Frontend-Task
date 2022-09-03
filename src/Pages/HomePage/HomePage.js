import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../../Components/Header/Header";
import Explore from "../../Components/LeftSection/LeftSection";
import "./HomePage.css";

const componentName = (props) => {
  return (
    <div style={{ backgroundColor: "#e9ebee" }}>
      <Header />
      <Container>
        <div className="grid-system-home">
          <div className="grid-column-home home-left">
            <Explore />
          </div>
          <div className="grid-column-home home-mid">456</div>
          <div className="grid-column-home home-right">789</div>
        </div>
      </Container>
    </div>
  );
};

export default componentName;
