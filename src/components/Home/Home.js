import React, {Component} from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
// import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="container">
          <div className="row">
            <div className="col-md-8 well">
              <ImageSlider items={[
                {src: 'slide1.jpeg', label: 'label1'},
                {src: 'slide2.jpeg', label: 'label2'},
                {src: 'slide3.jpeg', label: 'label3'},
                {src: 'slide4.jpeg', label: 'label4'},
                {src: 'slide5.jpeg', label: 'label5'},
                {src: 'slide6.jpeg', label: 'label6'},
              ]}/>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;