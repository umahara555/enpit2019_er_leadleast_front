import React, {Component} from 'react';
import './Login.css'
import {Header} from './Header.js'

export class Login extends Component {
  render(){
    return(
      <div>
        <Header className='header' title='ログイン'/>
        <div className='login'>
          <h1>Login画面です</h1> 
        </div>
      </div>  
    )
  }  
}