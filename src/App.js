import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home.js';
import { LeanCanvas } from './LeanCanvas.js';
import { ElevatorPitch } from './ElevatorPitch.js';
import { UserStoryMap } from './UserStoryMap.js';
import { ProductBacklog } from './ProductBacklog.js';
import { Login } from './Login.js';
import { Tutorial } from './Tutorial.js'
import './App.css';

import { NewHeader } from './NewHeader.js'

const NH = () => (<NewHeader isLoggedin={true}/>);

const page404 = () => {
    return <p>404 Not Found</p>;
};

class App extends Component{
    render() {
      return (
          <Router>
              <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/product/:productID/' component={Tutorial}/>
                  <Route exact path='/product/:productID/leancanvas' component={LeanCanvas}/>
                  <Route exact path='/product/:productID/elevatorpitch' component={ElevatorPitch}/>
                  <Route exact path='/product/:productID/userstorymap' component={UserStoryMap}/>
                  <Route exact path='/product/:productID/productbacklog' component={ProductBacklog}/>
                  <Route exact path='/login' component={Login}/>
                  <Route exact path='/nh' component={NH}/>
                  <Route exact component={page404}/>
              </Switch>
          </Router>
      )
  };
}
export default App;
