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
            <h3 className="ml-2">About</h3>
          </Nav.Link>
        </NavItem>
      </Nav>
      <Nav className="ml-auto">
        <NavItem>
          <a class="btn btn-social-icon btn-google" href="https://www.facebook.com/possibilitylady/" target="-blank">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a class="btn btn-social-icon btn-google" href="https://www.facebook.com/susan.gilpin.12" target="-blank">
            <i class="fab fa-facebook"></i>
          </a>
          <a class="btn btn-social-icon btn-google" href="https://www.instagram.com/skgpdx/" target="-blank">
            <i class="fab fa-instagram-square"></i>
          </a>
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
