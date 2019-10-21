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
    this.props.history.push("/userstorymap");
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
               CLICK TO START
               </button>
          </div>
        </div>
        <div className='link'>
        Link list
          <Link to="/userstorymap">
            <p>・ホワイトボードへ</p>
          </Link>
          <Link to="/leancanvas">
            <p>・リーンキャンパスへ</p>
          </Link>
          <Link to="/login">
            <p>・ログイン画面へ</p>
          </Link>
        </div>
      </div>

    )
  }
}
