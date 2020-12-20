import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Pages from "../components/pages";
import {graphql} from "gatsby";
import Img from "gatsby-image";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <div className="col col-xl-10 m-auto">
      <Card className="mt-2">
        <Card.Body>
          <a href="https://www.amazon.com/gp/product/0997094222" target="-blank">
          <Card.Header className="btn btn-block" as="h2">
            Now available at Amazon!
          </Card.Header>
          </a>
        </Card.Body>
        <Img 
          fluid={data.mfl2GatsbyImage.childImageSharp.fluid}
          alt="My Favorite Letter"
          />
        <Card.Footer>
          <Pages></Pages>
        </Card.Footer>
      </Card>
      </div>
    </Container>
  </Layout>
);

export default IndexPage;

export const query = graphql `
  query {
    mfl2GatsbyImage: file(relativePath: {eq: "mfl-2.jpg"}) {
      id
      childImageSharp {
        fluid(maxWidth: 2500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
