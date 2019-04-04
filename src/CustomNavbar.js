import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class CustomNavbar extends Component {
  state = {};
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand className="brand-look">
          <Link to="/">Food and recipes</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="link-look">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link className="link-look">
              <Link to="/">Online shoping</Link>
            </Nav.Link>
            <Nav.Link className="link-look">
              <Link to="/recipes">Recipes</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
