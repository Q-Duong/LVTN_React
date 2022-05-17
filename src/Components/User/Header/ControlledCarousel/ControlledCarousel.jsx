import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

ControlledCarousel.propTypes = {
    
};

function ControlledCarousel(props) {
    

  return (
    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.thanhnien.vn/w1024/Uploaded/2022/yfrph/2022_05_16/tim-cook-5689.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://vnn-imgs-f.vgcloud.vn/2021/12/24/09/tiet-lo-moi-ve-man-hinh-khong-tai-tho-cua-iphone-14-pro-va-pro-max.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.tgdd.vn/Products/Images/42/236780/Slider/iphone-13mini-1020x570.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default ControlledCarousel;