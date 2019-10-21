import React, {Component} from 'react';
import './LeanCanvas.css'
import {Header} from './Header.js'
import { Link } from 'react-router-dom';


export class LeanCanvas extends Component {
  render(){
    return(
      <div>
        <Header className='header' title='LeanCanvas' />
        <div className='lean'>
          <h1>LeanCanvasです</h1>    
        <Link to="/">
            <h1>・Homeへ</h1>
       </Link>  
       </div>
      </div>  
    )
  }  
}