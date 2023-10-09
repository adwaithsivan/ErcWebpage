import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavbarLogo from "react-bootstrap/Navbar";
import "./logoname.css";

export default function Logoname() {
  return (
    <div className="logoname">
      <NavbarLogo className="main-logo">
        <div className="logo-bar" id="logo-bar">
          <NavbarLogo.Brand href="/" id="malayalam-text" className="malayalam-text">
            കേരള സ്റ്റേറ്റ് ഇലക്ട്രിസിറ്റി റെഗുലേറ്ററി കമ്മീഷൻ
          </NavbarLogo.Brand>

          <NavbarLogo.Brand href="/">
            <img
              className="logo-img" id="logo-img"
              src={require("../../../img/kserc_logo.png")}
            />
          </NavbarLogo.Brand>

          <NavbarLogo.Brand href="/" id="eng-text" className="eng-text">
            Kerala State Electricity Regulatory Commission
          </NavbarLogo.Brand>

          <NavbarLogo.Toggle />
        </div>
      </NavbarLogo>
    </div>
  );
}
