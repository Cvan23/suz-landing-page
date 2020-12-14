import React from "react";
import { Col, Row, Card, ListGroup } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";
import mfl3 from "../images/mfl-3.jpg";
import mfl4 from "../images/mfl-4.jpg";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Row>
      <Col>
        
      </Col>
    </Row>
    <Row>
      <Col md="6">
        <Card className="mt-5">
          <Card.Body>
            <Card.Header as="h5">My Favorite Letter: The Alphabet Comes Alive!</Card.Header>
            <Card.Img variant="bottom" src={mfl3} />
            <Card.Text className="mt-3">
              Do the letters of the alphabet have personalities? Do they make you feel a certain way? Why do you like some and not others? With wonderful illustrations for each letter, My Favorite Letter answers these questions and describes the alphabet in a fun, new way. Its playful language and delightful design bring the alphabet to life, enchanting children and adults alike. Put your hands in your pockets and take a peek at P, and find out why K is the funniest letter of all.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md="6">
        <Card className="mt-5">
          <Card.Body>
            <Card.Header as="h5">About The Author</Card.Header>
            <Card.Img variant="bottom" src={mfl4} />
            <Card.Text className="mt-3">
              Susan Gilpin is a writer and imaginative entrepreneur, creator of Bespoke Bingo, the Perpetual Calendar of Endless Possibilities, and When I Retire at Night. She lives in Portland, Oregon with a cat named Casey.
            </Card.Text>
            <Card.Footer className="text-muted">
            <a href="https://www.thepossibilitylady.com/" target="-blank">Visit THE POSSIBILITY LADY!<i class="fas fa-seedling ml-2"></i></a>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Layout>
);

export default AboutPage;
