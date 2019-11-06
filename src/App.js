import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './Home.js';
import { LeanCanvas } from './LeanCanvas.js';
import { ElevatorPitch } from './elevatorPitch.js';
import { UserStoryMap } from './UserStoryMap.js';
import { ProductBacklog } from './ProductBacklog.js';
import { Login } from './Login.js';
import './App.css';

import { NewHeader } from './NewHeader.js'
const NH = () => (<NewHeader isLoggedin={true}/>);

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
    </div>
  </BrowserRouter>
);

export default App;
