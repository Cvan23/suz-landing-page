import React from 'react'
import { Carousel, Container } from 'react-bootstrap';

import pag1 from "../images/pag1.png";
import pag2 from "../images/pag2.png";
import pag3 from "../images/pag3.png";

const Pics = ({ data }) => (
    <Container>
      <Carousel>
        <Carousel.Item interval={3000}>
            <img src={pag1} width="105%" alt="page 1"/>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img src={pag2} width="105%" alt="page 1"/>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img src={pag3} width="105%" alt="page 1"/>
        </Carousel.Item>
      </Carousel>
    </Container>
  );


export default Pics;

