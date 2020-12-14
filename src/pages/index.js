import React from "react";
import { Button, Jumbotron, Card } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {graphql} from "gatsby";

import Img from "gatsby-image";




const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Card className="mt-5">
      <Card.Body>
        <a href="https://www.amazon.com/gp/product/0997094222" target="-blank">
        <Card.Header className="btn btn-outline-success" as="h5">
          Now available at Amazon!
        </Card.Header>
        </a>
      </Card.Body>
      <Img 
        fluid={data.mfl2GatsbyImage.childImageSharp.fluid}
        alt="My Favorite Letter"
        />
    </Card>
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
