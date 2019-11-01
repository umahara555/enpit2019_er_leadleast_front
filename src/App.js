import React, {Component} from 'react';
import './App.css';
import {UserStoryMap} from './UserStoryMap.js';
import {Home} from './Home.js'
import {LeanCanvas} from './LeanCanvas.js'
import {Login} from './Login.js'
import {ElevatorPitch} from './elevatorPitch.js'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/userstorymap' component={UserStoryMap} /> 
      <Route path='/leancanvas' component={LeanCanvas} />    
      <Route path='/login' component={Login} /> 
      <Route path='/elevatorpitch' component={ElevatorPitch} /> 
    </div>
  </BrowserRouter>
)

export default App;