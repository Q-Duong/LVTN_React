import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ControlledCarousel from './ControlledCarousel/ControlledCarousel';

import React from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas, Row } from 'react-bootstrap';
import './Header.scss'


Header.propTypes = {
    
};

function Header(props) {
    return (
      <div className="header">
        <div className="header__top">
          <Container>
            <Row >
              <Col className="header__top__left">1 of 2</Col>
              <Col className="header__top__right"> Tài khoản</Col>
            </Row>
          </Container>
        </div>
        <div className="bodyContainer">
          <Container>
            <Row >
              <Navbar  bg="light" expand="lg" className="mb-3">
                <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-lg`}
                  aria-labelledby={`offcanvasNavbarLabel`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel`}>
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">Link</Nav.Link>
                      <NavDropdown
                        title="Dropdown"
                        id={`offcanvasNavbarDropdown`}
                      >
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Navbar>
            </Row>
          </Container>
        </div>
        <ControlledCarousel />
      </div>
      
    );
}

export default Header;