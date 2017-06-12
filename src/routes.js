import React, {Component} from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';

class AllRoutes extends Component{
  render(){
    return (
      <div>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    )
  }
}
export default AllRoutes;