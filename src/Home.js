import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header.js';
import LeanCanvas from './images/title/LeanCanvas.png';
import ElevatorPitch from './images/title/ElevatorPitch.png';
import ProductBacklog from './images/title/ProductBacklog.png';
import UserStoryMap from './images/title/UserStoryMap.png';
import './Home.css';


export class Home extends Component {
  constructor(props){
      super(props);
   this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.history.push("/product/0/leancanvas");
  }
  render(){
    return(
      <div>
        <Header className='header' title={'LeadLeast'} />
        <div className='home'>
          <div className='target'>
       	    <h1>LeadLeast</h1>
            <p>- Begin Product Design -</p>
            <br />
              <button
              className='Button'
               onClick={this.handleClick}>
               CLICK TO START
               </button>
          </div>
        </div>
        {/*<div className='link'>
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
        </div>*/}
        <div className='Explanation-container-wrapper'>
          <div className='Explanation-container'>
            <div className='Explanation'>
              <h3>リーンキャンバス</h3>
                <p>
                  これはリーンキャンバスです。
                </p>
            </div>
            <div className='Explanation-image-wrapper'>
              <img src={LeanCanvas} className="Explanation-image" />
            </div>
          </div>
        </div>

        <div className='Explanation-container-wrapper'>
          <div className='Explanation-container'>
            <div className='Explanation'>
              <h3>エレベーターピッチ</h3>
              <p>
                これはエレベーターピッチです。
              </p>
            </div>
            <div className='Explanation-image-wrapper'>
              <img src={ElevatorPitch} className="Explanation-image" />
            </div>
          </div>
        </div>

        <div className='Explanation-container-wrapper'>
          <div className='Explanation-container'>
            <div className='Explanation'>
              <h3>プロダクトバックログ</h3>
              <p>
                これはプロダクトバックログです。
              </p>
            </div>
            <div className='Explanation-image-wrapper'>
              <img src={ProductBacklog} className="Explanation-image" />
            </div>
          </div>
        </div>

        <div className='Explanation-container-wrapper'>
          <div className='Explanation-container'>
            <div className='Explanation'>
              <h3>ユーザーストーリーマップ</h3>
              <p>
                これはユーザーストーリーマップです。
              </p>
            </div>
            <div className='Explanation-image-wrapper'>
              <img src={UserStoryMap} className="Explanation-image" />
            </div>
          </div>
        </div>

      </div>

    )
  }
}
