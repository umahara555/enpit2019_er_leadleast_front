import React, {Component} from 'react';
import './Home.css'
import {Header} from './Header.js'

export class Home extends Component {
  render(){
    return(
      <div>
        <Header className='header' title={'LeasLeast'} />
        <div className='home'>
          <h1>Homeです</h1>
       	  <p>プロダクトデザインを支援するツールです</p>    
        </div>
      </div>  
        
    )
  }  
}