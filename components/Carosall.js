import React, { Component } from 'react';
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Carosall extends Component {
  render() {
    return (
      <>
         <Carousel fade interval={1000}>
          <Carousel.Item>
            <img
              className="w-full d-block"
              src="./assestmain/main30.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-full d-block"
              src="./assestmain/main31.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </>
    )
  }
}

export default Carosall
