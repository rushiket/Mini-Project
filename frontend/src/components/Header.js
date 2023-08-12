import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand={'sm'} >
        <Container >
          <LinkContainer to="/">
            <Navbar.Brand>Indian Company Shares</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <LinkContainer to="/">
                <Nav.Link>
                  <i className="fa-solid fa-house-user"></i>
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Form className="d-flex" bg="dark" variant="dark">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
