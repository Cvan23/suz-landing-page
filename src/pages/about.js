import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import {graphql} from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";



const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    
    <Row>
      <Col md="6">
        <Card className="mt-5">
          <Card.Body>
            <Card.Header as="h5">My Favorite Letter: The Alphabet Comes Alive!</Card.Header>
            <Img 
              fluid={data.mfl3GatsbyImage.childImageSharp.fluid}
              alt="My Favorite Letter A"
              />
            <Card.Text className="mt-3">
              Do the letters of the alphabet have personalities? Do they make you feel a certain way? Why do you like some and not others? With wonderful illustrations for each letter, My Favorite Letter answers these questions and describes the alphabet in a fun, new way. Its playful language and delightful design bring the alphabet to life, enchanting children and adults alike. Put your hands in your pockets and take a peek at P, and find out why K is the funniest letter of all.
            </Card.Text>
            <a href="https://www.amazon.com/gp/product/0997094222" target="-blank">
            <Card.Footer className="btn btn-block" as="h3">
              Now available at Amazon!
            </Card.Footer>
            </a>
          </Card.Body>
        </Card>
      </Col>
      <Col md="6">
        <Card className="mt-5">
          <Card.Body>
            <Card.Header as="h5">About The Author</Card.Header>
            <Img 
              fluid={data.mfl4GatsbyImage.childImageSharp.fluid}
              alt="My Favorite Letter B"
              />
            <Card.Text className="mt-3">
              Susan Gilpin is a writer and imaginative entrepreneur, creator of Bespoke Bingo, the Perpetual Calendar of Endless Possibilities, and When I Retire at Night. She lives in Portland, Oregon with a cat named Casey.
            </Card.Text>
            <a href="https://www.thepossibilitylady.com/" target="-blank">
            <Card.Footer className="btn btn-block" as="h3">
              Visit THE POSSIBILITY LADY!
              <i class="fas fa-seedling ml-3"></i>
            </Card.Footer>
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Layout>
);

export default AboutPage;

export const query = graphql `
  query {
    mfl3GatsbyImage: file(relativePath: {eq: "mfl-3.jpg"}) {
      id
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mfl4GatsbyImage: file(relativePath: {eq: "mfl-4.jpg"}) {
      id
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
