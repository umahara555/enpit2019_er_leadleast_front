import React, {Component} from 'react';
import './LeanCanvas.css'
import {Header} from './Header.js'

export class LeanCanvas extends Component {
  render(){
    return(
      <div>
        <Header className='header' />
        <div className='lean'>
          <h1>LeanCanvasです</h1>    
        </div>
      </div>  
    )
  }  
}