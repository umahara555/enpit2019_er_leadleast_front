import React, {Component} from 'react';
import './Home.css'
import {Header} from './Header.js'
import { Link } from 'react-router-dom';


export class Home extends Component {
  constructor(props){
      super(props);
   this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.history.push("/leancanvas");
  }
  
  render(){
    return(
      <div>
        <Header className='header' title={'LeadLeast'} />
        <div className='home'>
          <div className='terget'>
       	    <h1>LeadLeast</h1>
            <p>for beginner Agile team</p>
            <br />
              <button
              className='Button'
               onClick={this.handleClick}>
               クリックして<br/>プロダクトデザインを開始
               </button>
          </div>
        </div>
        <div className='link'>
        <p>・サービスのリンク</p>
          <Link to="/userstorymap">
          </Link>
          <Link to="/leancanvas" className="serviseLink">
            <p>・リーンキャンバスへ</p>
          </Link>          	  
          <Link to="/elevatorpitch" className="serviseLink">
            <p>・エレベーターピッチへ</p>
          </Link>  
       	  <Link to="/userstorymap" className="serviseLink">
            <p>・ユーザーストーリーマップへ</p>
          </Link>            
          <Link to="/productbacklog" className="serviseLink">
            <p>・プロダクトバックログへ</p>
          </Link>  
          <Link to="/login" className="serviseLink">
            <p>・ログイン画面へ</p>
          </Link>            
        </div>
      </div>  
        
    )
  }  
}