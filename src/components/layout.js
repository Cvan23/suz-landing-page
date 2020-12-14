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
        <i class="fab fa-facebook-f fa-2x mr-3"></i>
        <i class="fab fa-instagram-square fa-2x mr-3"></i>
        <i class="fas fa-envelope-open fa-2x"></i>
        <div className="container mt-4" id="koa">
          <h6>built by</h6> <a href="https://musing-lewin-5a9490.netlify.app/" target="-blank">
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
