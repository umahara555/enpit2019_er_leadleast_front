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
                  リーンキャンバスを用いて、<br/>
                  12の視点から企画しているサービスの価値を掘り下げましょう。
                </p>
            </div>
            <div className='Explanation-image-wrapper'>
              <img src={LeanCanvas} className="Explanation-image" />
            </div>
          </div>
        </div>

        <div className='Explanation-container-wrapper2'>
          <div className='Explanation-image2'>
            <img src={ElevatorPitch} className="Explanation-image" />
          </div>
          <div className='Explanation-container2'>
            <div className='Explanation2'>
              <h3>エレベーターピッチ</h3>
              <p>
                エレベーターピッチを用いて、<br/>
                リーンキャンバスで明確にしたサービスの構造を<br/>
                端的に説明できる形にしましょう。
              </p>
            </div>
          </div>
        </div>

        <div className='Explanation-container-wrapper'>
          <div className='Explanation-container'>
            <div className='Explanation'>
              <h3>ユーザーストーリーマップ</h3>
              <p>
                ユーザーストーリーマップを用いて、<br/>
                ユーザーの体験を三段階構造、時系列順で挙げることで、<br/>
                プロダクトの全体像をつかみましょう。
              </p>
            </div>
            <div className='Explanation-image-wrapper'>
              <img src={UserStoryMap} className="Explanation-image" />
            </div>
          </div>
        </div>

        <div className='Explanation-container-wrapper2'>
          <div className='Explanation-image2'>
            <img src={ProductBacklog} className="Explanation-image" />
          </div>
          <div className='Explanation-container2'>
            <div className='Explanation2'>
              <h3>プロダクトバックログ</h3>
              <p>
                プロダクトバックログを用いて、<br/>
                ユーザーストーリーマップを参考に、<br/>
                提供するサービスの優先順位を定めましょう。
              </p>
            </div>
          </div>
        </div>

      </div>

    )
  }
}
