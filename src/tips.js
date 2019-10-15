import React, {Component} from 'react';
import './tips.css';
import tipsimage from './images/user.png';

export class Tips extends Component {
	render() {
		return(
			<div className="tips-wrapper">
				<div className="tips">
				<p>ユーザーストーリーマップを作ってみよう！</p>
				<img src={tipsimage}  />
				  <button className="closeButton"
					           onClick={() => this.props.onClick()}>
					           x
			      </button>
				</div>

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
