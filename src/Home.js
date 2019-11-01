import React, {Component} from 'react';
import './Home.css'
import {Header} from './Header.js'
import { Link } from 'react-router-dom';


export class Home extends Component {
  render(){
    return(
      <div>
        <Header className='header' title={'LeadLeast'} />
        <div className='home'>
       	  <p>プロダクトデザインを支援するツール</p>
       	  <h1>
       	     のHome画面です<br />
       	     下記のリンクから目的のページへと移動できます。
       	  </h1>  
       	  <br /><br />
       	  <Link to="/userstorymap" className="serviseLink">
            <p>・ホワイトボードへ</p>
          </Link>  
          <Link to="/leancanvas" className="serviseLink">
            <p>・リーンキャンパスへ</p>
          </Link>   
          <Link to="/elevatorpitch" className="serviseLink">
            <p>・エレベーターピッチへ</p>
          </Link>  
          <Link to="/productbacklog" className="serviseLink">
            <p>・プロダクトバックログへ</p>
          </Link>  
          <Link to="/login" className="serviseLink">
            <p>・ログイン画面へ</p>
          </Link>            
          
          
          
        </div>
        <div>
        </div>
      </div>  
        
    )
  }  
}