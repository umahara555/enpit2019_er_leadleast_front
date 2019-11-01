import React, {Component} from 'react';
import './Login.css'
import {Header} from './Header.js'
import { Link } from 'react-router-dom';
import {MoveHomeButton} from './tips.js'


export class Login extends Component {
  render(){
    return(
      <div>
        <Header className='header' title='ログイン'/>
        <MoveHomeButton />
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