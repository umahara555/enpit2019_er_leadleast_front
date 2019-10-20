import React, {Component} from 'react';
import './tips.css';
import husen from './images/husen.png';
import husentuika from './images/husentuika.png';
import tehudahue from './images/tehudahue.png';
import tehudaex from './images/tehudaex.png';
import banidasu from './images/banidasu.png';

export class TipsUserStoryMap extends Component {
	render() {
		return(
			<div className="tips-wrapper">
				<div className="tips">
				<p>
					このページの使い方<br /> <br />
				</p>	
				<h1>
					1.「付箋追加ボタンをクリックして、手札に付箋を増やそう。」<br />
				</h1>
				<p>
					↓付箋追加ボタン
				</p>
				<img src={husentuika}  />
				<br /> 
				<p>↓付箋が4つ追加された手札</p>
				<img src={tehudahue}  />
				<br /> <br /> <br />
				<h1>
					2.「付箋をクリックして、付箋に欲しい機能を書き出そう。」<br />
				</h1>
				<p>	
					↓付箋 <br />
				</p>					
				<img src={husen}  />
			    <p>
			    	↓書き出し例
			    </p>
			    <img src={tehudaex}  />
				<br /> <br />
				<h1>
					3.「付箋をホワイトボードに貼り付けよう。」<br />
				</h1>
				<p>
				付箋の左上の矢印ボタンをクリックすればホワイトボードに付箋を貼り付けることができます。<br />
				↓貼り付けた例
				</p>
				<h2 className="uso">					
				<img src={banidasu}  height="0.5vh% "className="banidasu"/>
				</h2>
				<h1>
					4.「付箋を削除しよう」<br />
				</h1>
				<p>
				いらなくなった付箋は、付箋の右上に設置されている×ボタンをクリックすれば削除することができます。<br />
				</p>				
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
					           TIPS
			</button>
		);
	}
}
