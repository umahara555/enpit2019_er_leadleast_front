import React, {Component} from 'react';
import './App.css';
import {UserStoryMap} from './UserStoryMap.js';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/userstorymap' component={UserStoryMap} />    
    </div>
  </BrowserRouter>
)

const Home = () =>(
    <div>
    <h1>Homeです</h1>
    <p>プロダクトデザインを支援するツールです</p>    
    </div>
)

export default App;