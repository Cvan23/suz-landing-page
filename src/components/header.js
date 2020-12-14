import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const Header = ({ siteTitle }) => (
  <Navbar className="sticky-top" expand="sm">
    <Navbar.Brand as={Link} href="/">
      <h3 className="ml-3">Home</h3>
    </Navbar.Brand>
      <Nav className="mr-auto">
        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/about">
            <h3 className="ml-3">About</h3>
          </Nav.Link>
        </NavItem>
      </Nav>
      <Nav className="ml-auto">
        <NavItem>
        <i class="fab fa-facebook-f mr-3"></i>
        <i class="fab fa-instagram-square mr-5"></i>
        </NavItem>
      </Nav>
    
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
