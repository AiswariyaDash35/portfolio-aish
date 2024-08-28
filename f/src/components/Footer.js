import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6} className="pt-3.5">
            <img src={logo} alt="Logo" className="w-[80px] h-[100px] rounded-full" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/aiswariya-dash-22b276228/"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://github.com/AiswariyaDash35/"><img src={navIcon2} alt="GitHub" /></a>
                <a href="https://www.instagram.com/aish_dash_35?igsh=ZWE3eDRrbzNoNzNx"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
