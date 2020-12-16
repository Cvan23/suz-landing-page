/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "react-bootstrap";

import Header from "./header";
import "./layout.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        <Container className="p-3">{children}</Container>
      </main>
      <footer className="footer py-3">
        <a class="btn btn-social-icon btn-google" href="https://www.facebook.com/possibilitylady/" target="-blank">
          <i class="fab fa-facebook-f fa-2x mr-3"></i>
        </a>
        <a class="btn btn-social-icon btn-google" href="https://www.facebook.com/susan.gilpin.12" target="-blank">
          <i class="fab fa-facebook fa-2x mr-3"></i>
        </a>
        <a class="btn btn-social-icon btn-google" href="https://www.instagram.com/skgpdx/" target="-blank">
          <i class="fab fa-instagram-square fa-2x mr-3"></i>
        </a>
        <div className="container mt-4" id="mail">
          <a class="btn btn-social-icon btn-google" href="mailto:2einportland@gmail.com">2einportland@gmail.com
            <i class="fas fa-envelope-open fa-2x ml-2"></i>
          </a>
        </div>
        <div className="container mt-4" id="koa">
          <h6>built by</h6> <a href="https://koa-script.netlify.app/" target="-blank">
            <i class="fas fa-code"></i><h6>KoaScript</h6><i class="fas fa-cat"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
