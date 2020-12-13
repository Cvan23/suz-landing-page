import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import Image from "../components/image";
import mfl from "../images/mfl-1.jpg";




const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron>
      <h1>Koa Bear!</h1>
      <p>
        This is an example of how great Koa Bear is!
      </p>
      <p>
        <Button as={Link} to="/about" variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
    <img className="fluid" src={mfl} alt="test"/>
  </Layout>
);



export default IndexPage;


