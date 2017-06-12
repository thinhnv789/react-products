import React, {Component} from 'react';
import Test from './Test';
// import { Link } from 'react-router-dom';


class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      phoneNumber: '0'
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleKeyDown = (event) => {
    event.preventDefault();
    this.setState({
      phoneNumber: this.state.phoneNumber.concat('1')
    });
  }
  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyDown);
  }
  render() {
    return (
      <div className="aboutpage">
        <Test data={this.state} />
        <h1>About Page</h1>
      </div>
    );
  }
}

export default About;