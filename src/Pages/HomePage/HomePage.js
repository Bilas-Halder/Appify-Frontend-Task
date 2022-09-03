import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../../Components/Header/Header";
import "./HomePage.css";

const componentName = (props) => {
  return (
    <>
      <Header />
      <Container>
        <div className="grid-system-home">
          <div className="grid-column-home home-left">123</div>
          <div className="grid-column-home home-mid">456</div>
          <div className="grid-column-home home-right">789</div>
        </div>
      </Container>
    </>
  );
};

export default componentName;
