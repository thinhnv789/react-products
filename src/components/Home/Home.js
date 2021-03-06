import React, {Component} from 'react';
// import {Helmet} from "react-helmet";
import ImageSlider from '../ImageSlider/ImageSlider';
// import { Link } from 'react-router-dom';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDiv: false
    }
  }
  componentDidMount() {
    setTimeout(
      function() { this.setState({showDiv: true}); }.bind(this), 5000)
  }
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
            <div className="col-md-8 well">
              <p>
                I have successfully solved this problem with javascript files only.
                Try adding the async attribute in script tag or defer attribute
                For example
                I suggest you to use async, it loads the file only when needed. Defer attribute load the file at the end of the page, some time it will not perform its functionality required.
              </p>
              <p>
                I have successfully solved this problem with javascript files only.
                Try adding the async attribute in script tag or defer attribute
                For example
                I suggest you to use async, it loads the file only when needed. Defer attribute load the file at the end of the page, some time it will not perform its functionality required.
              </p>
              <p>
                I have successfully solved this problem with javascript files only.
                Try adding the async attribute in script tag or defer attribute
                For example
                I suggest you to use async, it loads the file only when needed. Defer attribute load the file at the end of the page, some time it will not perform its functionality required.
              </p>
              <p>
                I have successfully solved this problem with javascript files only.
                Try adding the async attribute in script tag or defer attribute
                For example
                I suggest you to use async, it loads the file only when needed. Defer attribute load the file at the end of the page, some time it will not perform its functionality required.
              </p>
              <p>
                I have successfully solved this problem with javascript files only.
                Try adding the async attribute in script tag or defer attribute
                For example
                I suggest you to use async, it loads the file only when needed. Defer attribute load the file at the end of the page, some time it will not perform its functionality required.
              </p>
            </div>
            {
              (this.state.showDiv) ? (
                <div className="col-md-8 well">
                  <p>
                    I have successfully solved this problem with javascript files only.
                    Try adding the async attribute in script tag or defer attribute
                    For example
                    I suggest you to use async, it loads the file only when needed. Defer attribute load the file at the end of the page, some time it will not perform its functionality required.
                  </p>
                  <p>
                    I have successfully solved this problem with javascript files only.
                    Try adding the async attribute in script tag or defer attribute
                    For example
                    I suggest you to use async, it loads the file only when needed. Defer attribute load the file at the end of the page, some time it will not perform its functionality required.
                  </p>
                  <p>
                    I have successfully solved this problem with javascript files only.
                    Try adding the async attribute in script tag or defer attribute
                    For example
                    I suggest you to use async, it loads the file only when needed. Defer attribute load the file at the end of the page, some time it will not perform its functionality required.
                  </p>
                  <p>
                    I have successfully solved this problem with javascript files only.
                    Try adding the async attribute in script tag or defer attribute
                    For example
                    I suggest you to use async, it loads the file only when needed. Defer attribute load the file at the end of the page, some time it will not perform its functionality required.
                  </p>
                  <p>
                    I have successfully solved this problem with javascript files only.
                    Try adding the async attribute in script tag or defer attribute
                    For example
                    I suggest you to use async, it loads the file only when needed. Defer attribute load the file at the end of the page, some time it will not perform its functionality required.
                  </p>
                </div>
              ) : null
            }
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;