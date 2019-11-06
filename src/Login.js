import React, { Component } from 'react';
import { Header } from './Header.js';
import './Login.css';

export class Login extends Component {
  render(){
    return(
      <div>
        <Header className='header' title='ログイン'/>
        <div className='login'>
          <h1>
            ようこそ、ゲストさん。<br />
            ログインは完了しています
          </h1>     
        </div>
      </div>  
    )
  }  
}
