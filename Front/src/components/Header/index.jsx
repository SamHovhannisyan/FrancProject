import React from "react";
import "./Header.css";
import {Col, Container, Navbar, Nav} from "react-bootstrap";


const Header = () => {
  return (
    <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto links">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/service">Service</Nav.Link>
                            <Nav.Link href="/about"> About us</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/service">Service</Nav.Link>
                        </Nav>
                        <div>
                            <Nav className="me-auto div">
                                <Nav.Link href="/signIn" className='signIn'>Sign In</Nav.Link>
                                <Nav.Link href="/signUp" className='signUp'><span>Sign Up</span></Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
  );
};

export default Header;
