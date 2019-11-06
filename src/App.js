import React, {Component} from 'react';
import './App.css';
import {UserStoryMap} from './UserStoryMap.js';
import {Home} from './Home.js'
import {LeanCanvas} from './LeanCanvas.js'
import {Login} from './Login.js'
import {ElevatorPitch} from './elevatorPitch.js'
import {ProductBacklog} from './ProductBacklog.js'
import { BrowserRouter, Route, Link, useParams} from 'react-router-dom';

import { NewHeader } from './NewHeader.js'
const NH = () => (<NewHeader isLoggedin={true}/>)

class Lean extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params);
  }
  render() {
    return <p>productID : {this.props.match.params.productID}</p>;
  }
}

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/product/:productID/leancanvas' component={LeanCanvas} />
      <Route path='/product/:productID/elevatorpitch' component={ElevatorPitch} />
      <Route path='/product/:productID/userstorymap' component={UserStoryMap} />
      <Route path='/product/:productID/productbacklog' component={ProductBacklog} />
      <Route path='/login' component={Login} />
      <Route path='/nh' component={NH} />
      {/*<Route path='/product/:productID/leancanvas' component={Lean} />*/}
      {/*<Route path='/product/:productID/leancanvas'>*/}
      {/*  <Lean />*/}
      {/*</Route>*/}
    </div>
  </BrowserRouter>
)

export default App;
