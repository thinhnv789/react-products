import React, { Component } from 'react';
import PropTypes from 'prop-types';
const Carousel = require('react-responsive-carousel').Carousel;

export default class ImageSlider extends Component {
  render() {
    const { items } = this.props;
    require('react-responsive-carousel/lib/styles/carousel.css');

    return (
      <Carousel
      dynamicHeight emulateTouch>
        {items && items.length &&
              items.map((item, key) =>
                <div key={key}>
                  <img src={require('./img/slide1.jpeg')} alt="img slider"/>
                  <p className="legend">{item.text}</p>
                </div>
              )
            }
      </Carousel>
    );
  }
}

ImageSlider.propTypes = {
  items: PropTypes.array
};

