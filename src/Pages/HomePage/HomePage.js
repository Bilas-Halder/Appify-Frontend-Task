import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../../Components/Header/Header";
import Explore from "../../Components/LeftSection/LeftSection";
import MidSection from "../../Components/MidSection/MidSection";
import RightSection from "../../Components/RightSection/RightSection";
import "./HomePage.css";

const HomePage = (props) => {
  return (
    <div style={{ backgroundColor: "#e9ebee" }}>
      <Header />
      <Container>
        <div className="grid-system-home">
          <div className="grid-column-home home-left">
            <Explore />
          </div>
          <div className="grid-column-home home-mid">
            <MidSection />
          </div>
          <div className="grid-column-home home-right">
            <RightSection />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
