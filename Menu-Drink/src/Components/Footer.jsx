import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Style/Footer.css';
import Logo from '../assets/Logo.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaMailBulk } from 'react-icons/fa';

function Footer() {
  return (

    <>
      <Container fluid className="footer">
      <Row className="align-items-center text-center text-md-start  rox  py-5 ">
        <Col md={4} className="d-flex justify-content-center justify-content-md-start mb-5 mb-md-0">
          <div className="box text-center text-md-start">
            <h4 style={{ color: "rgb(0, 102, 255)" }}>Connect with Us</h4>
            <p style={{ color: "rgb(96, 96, 96)" }}>
              <FaPhoneAlt size={14} className="me-2 text-warning" />
              +91 9567843340</p>
            <p style={{ color: "rgb(96, 96, 96)" }}>
              <FaEnvelope size={14} className="me-2 text-warning" />
              info@deepnetsoft.com</p>
          </div>
        </Col>

        <Col md={4} className="d-flex justify-content-center justify-content-md-start mb-5 mb-md-0">
          <div className="box box2 ">
            <img
              alt="Logo"
              src={Logo}
              className="d-inline-block align-top"
            />
            <h2>
              <span style={{ color: "rgb(0, 102, 255)" }}>DEEP </span>
              <span className="text-white">NET </span>
              <span style={{ color: "rgb(96, 96, 96)" }}>SOFT</span>
            </h2>
            <p className="mb-0 d-flex justify-content-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#606060' }}>
                <FaFacebookF size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#606060' }}>
                <FaInstagram size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#606060' }}>
                <FaTwitter size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: '#606060' }}>
                <FaYoutube size={16} />
              </a>
            </p>
          </div>
        </Col>

        <Col md={4} className="d-flex justify-content-center justify-content-md-start mb-5 mb-md-0">
          <div className="box text-center text-md-start">
            <h4 style={{ color: "rgb(0, 102, 255)" }}>FIND US</h4>
            <p style={{ color: "rgb(96, 96, 96)" }} className="d-flex align-items-center mb-0 ms-5 me-5 text-center ">
              <FaMapMarkerAlt size={14} className="me-2 text-warning" />
              First floor, Geo Infopark, Infopark EXPY, Kakkanad
            </p>
          </div>
        </Col>
      </Row>

      <Row className="align-items-center bg-dark text-center text-md-between py-3 px-md-5 ">
        <Col md={6} className="text-white mb-2 mb-md-0">
          © 2024 Deepnetsoft Solutions. All rights reserved.
        </Col>
        <Col md={6} className="text-md-end">
          <a href="#" className="text-white text-decoration-none me-3">Terms of Service</a>
          <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
        </Col>
      </Row>
      </Container>

    </>

  );
}

export default Footer;
