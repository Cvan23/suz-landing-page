import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Button, Navbar, Nav, NavItem } from "react-bootstrap";

const Header = ({ siteTitle }) => (
  <Navbar className="sticky-top" expand="sm">
    <Navbar.Brand as={Link} href="/">
      <h2 className="ml-3">My Favorite Letter</h2>
    </Navbar.Brand>
    
    
      <Nav className="mr-auto">
        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/about">
            <h3 className="ml-3">About</h3>
          </Nav.Link>
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
