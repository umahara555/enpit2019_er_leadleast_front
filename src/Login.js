import React, {Component} from 'react';
import './Login.css'
import {Header} from './Header.js'
import { Link } from 'react-router-dom';


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
       	  <Link to="/">
            <h1>・Homeへ</h1>
          </Link>  
            
             
        </div>
      </div>  
    )
  }  
}