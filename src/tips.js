import React, {Component} from 'react';
import './tips.css';
import {Header} from './Header.js'
import husen from './images/userstorymap-tips/husen.png';
import husentuika from './images/userstorymap-tips/husentuika.png';
import tehudahue from './images/userstorymap-tips/tehudahue.png';
import tehudaex from './images/userstorymap-tips/tehudaex.png';
import banidasu from './images/userstorymap-tips/banidasu.png';
import {Link} from 'react-router-dom';


export class TipsUserStoryMap extends Component {
	render() {
		return(
			<div className="tips-wrapper">
				<div className="tips">
				<Header className="header" title={'このページの使い方'}/>			
	

                  <br /><br />
				  <h1>
				    	1.「付箋追加ボタンをクリックして、手札に付箋を増やそう。」<br />
				  </h1>
  				  <p>
				    	↓付箋追加ボタン
				  </p>
				  <img src={husentuika} className="SImg" />
				  <br /> 
				  <p>↓付箋が4つ追加された手札</p>
				  <img src={tehudahue} className="SImg" />
				  <br /> <br /> <br />
				  <h1>
				    	2.「付箋をクリックして、付箋に欲しい機能を書き出そう。」<br />
				  </h1>
				  <p>	
					↓付箋 <br />
				  </p>					
				  <img src={husen} className="SImg" />
			      <p>
			        	↓書き出し例
			      </p>
			      <img src={tehudaex} className="SImg" />
				  <br /> <br />
				  <h1>
				    	3.「付箋をホワイトボードに貼り付けよう。」<br />
				  </h1>
				  <p>
         				  付箋の左上の矢印ボタンをクリックすればホワイトボードに付箋を貼り付けることができます。  <br />
				          ↓貼り付けた例
				  </p>
				  <img src={banidasu}  className="LImg"/>
				  <h1>
				    	4.「付箋を削除しよう」<br />
				  </h1>
				  <p>
				  いらなくなった付箋は、付箋の右上に設置されている×ボタンをクリックすれば削除することができます。<br />
				  </p>	
				  <br /><br />			
				  <h1>
				    	ex.このガイドは画面右上のGUIDEボタンをクリックで再表示されます。<br />
				  </h1>						  
				  </div>
				  <button className="closeButton"
			    		onClick={() => this.props.onClick()}>
			  		           x
			      </button>				
			</div>
		);
	}
}

export class ShowTips extends Component {
	render() {
		return(
			<button className="openButton"
					     onClick={() => this.props.onClick()}>
					           GUIDE
			</button>
		);
	}
}

export class MoveHomeButton extends Component {
	render() {
		return(
　　　<Link to="/" className="homeButton">
            <p>HOME</p>
          </Link>  					           
		);
	}
}
