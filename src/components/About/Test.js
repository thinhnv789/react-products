import React, {Component} from 'react';
// import { Link } from 'react-router-dom';


class Test extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props.data);
    return (
      <h1>Test</h1>
    );
  }
}

export default Test;