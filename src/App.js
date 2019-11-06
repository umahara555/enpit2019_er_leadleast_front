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

function Lean() {
  let { productID } = useParams();
  return <p>productID : {productID}</p>;
}

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/leancanvas' component={LeanCanvas} />
      <Route path='/elevatorpitch' component={ElevatorPitch} />
      <Route path='/userstorymap' component={UserStoryMap} />
      <Route path='/productbacklog' component={ProductBacklog} />
      <Route path='/login' component={Login} />
      <Route path='/nh' component={NH} />
      <Route path='/product/:productID/leancanvas' component={Lean} />
    </div>
  </BrowserRouter>
)

export default App;
