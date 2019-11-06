import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header.js';
import bord from './images/title/bord.png';
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
              <h3>エレベーターピッチ</h3>
              <p>オンラインでアジャイルなプロダクトデザインしたい，<br/>
              教育関係者（生徒，教員）向けの,<br/>
              アジャイルなプロダクトデザイン支援を実現する，<br/>
              LeadLeastというサービスです．<br/>
              これは，オンラインでリーンキャンパスや<br/>
              ユーザーストーリマップが共同編集ができ，<br/>
              Googleスプレッドシートや<br/>
              オンラインホワイトボードとは違い，<br/>
              フォーマットが統一でき，<br/>
              初学者でも一連の流れを体系的にデザインできる.<br/>
              </p>
            </div>
            <div className='Explanation-image-wrapper'>
              <img src={bord} className="Explanation-image" />
            </div>
          </div>
        </div>
      </div>

    )
  }
}
