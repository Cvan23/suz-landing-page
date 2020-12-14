import React from "react";
import { Button, Jumbotron, Card } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import Image from "../components/image";
import mfl2 from "../images/mfl-2.jpg";




const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Card>
      <Card.Body>
        <a href="https://www.amazon.com/gp/product/0997094222" target="-blank">
        <Card.Header className="btn btn-outline-success" as="h5">
          Buy now on Amazon!
        </Card.Header>
        </a>
      </Card.Body>
      <Card.Img variant="bottom" src={mfl2} />
    </Card>
  </Layout>
);



export default IndexPage;


