import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/Logo.jpg';
import '../Style/Header.css';
import MenuModal from '../Model/Menus';
import MenuItem from '../Model/Menuitem';

function Header({ onMenuAdded, onItemAdded }) {
    const [showModal, setShowModal] = useState(false);
    const [showItem, setShowItem] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const itemShow = () => setShowItem(true);
    const itemClose = () => setShowItem(false);

    return (
        <div>
            <div className="header-container position-relative">
                <div className="heading d-flex align-items-center justify-content-center justify-content-md-start w-100">
                    <img src={Logo} alt="Logo" width="60" height="60" className="me-2" />
                    <div className="text-container d-none d-md-flex">
                        <div>
                            <span style={{ color: "rgb(0, 102, 255)" }}>Fresh </span>
                            <span className="text-white">Hot</span>
                        </div>
                        <div style={{ color: "rgb(96, 96, 96)" }}>Spice</div>
                    </div>
                </div>

                <Navbar expand="lg" className="bg-black text pt-5 pb-2 mb-0 navbar-fixed" variant="dark">
                    <Container>
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto mt-3 text-white">
                                <Nav.Link href="#home">HOME</Nav.Link>
                                <NavDropdown title="MENU" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={handleShow}>New Menu</NavDropdown.Item>
                                    <NavDropdown.Item onClick={itemShow}>New Item</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div className="menu-heading text-center mt-0 pt-3">
                    <h1>MENU</h1>
                    <p>
                        Please take a look at our menu featuring food, drinks, and brunch.
                        If you'd like to place an order, use the "Order Online" button located below the menu.
                    </p>
                </div>
            </div>

            <MenuModal show={showModal} handleClose={handleClose} onMenuAdded={onMenuAdded} />
            <MenuItem show={showItem} handleClose={itemClose} onItemAdded={onItemAdded} />
        </div>
    );
}

export default Header;
