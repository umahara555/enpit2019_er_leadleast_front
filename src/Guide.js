import React, {Component} from 'react';
import './Guide.css';
import husen from './images/userstorymap-guide/husen.png';
import husentuika from './images/userstorymap-guide/husentuika.png';
import tehudahue from './images/userstorymap-guide/tehudahue.png';
import tehudaex from './images/userstorymap-guide/tehudaex.png';
import banidasu from './images/userstorymap-guide/banidasu.png';
import {Link} from 'react-router-dom';


export class guideUserStoryMap extends Component {
	render() {
		return(
			<div className="guide-container">
				<div className="guide-background" onClick={() => this.props.onClick()}></div>
					<div className="guide">
				      <div className="guide-header">
        <p>このページの使い方</p>
      </div>							
	
{/*
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
				  */}
				  <h1>
				  <br /> ユーザーストーリーマップを書きましょう<br/>   <br/>  
				  	青の付箋にはユーザーストーリーの骨格<br/>  
				  	ピンクの付箋にはユーザーストーリーの流れ<br/>  
				  	黄の付箋にはユーザーストーリーの詳細<br/>  
				  	を書き起こしましょう。<br/> <br/>
				  					終了したら画面右上にあるNEXTボタンでプロダクトバックログに移動しましょう。<br/>
				 <h1 className="alart">			
				内容は保存されないので、スクリーンショット等で記録しておいてください。
				</h1>
				<br/><br/>
				このガイドは右上にあるGUIDEボタンで再度表示することができます。				
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

export class guideLeanCanvas extends Component {
	render() {
		return(
			<div className="guide-container">
				<div className="guide-background" onClick={() => this.props.onClick()}></div>				<div className="guide">
      <div className="guide-header">
        <p>このページの使い方</p>
      </div>										  
				<h1>
				<br/>  
				リーンキャンバスに取り組みましょう。<br/>  <br/>  
				それぞれの題にそって枠の中に内容を書き込んでください。<br/>  <br/>  
				終了したら画面右上にあるNEXTボタンでエレベーターピッチに移動しましょう。
				<h1 className="alart">			
				内容は保存されないので、スクリーンショット等で記録しておいてください。
				</h1>
				<br/><br/>
				このガイドは右上にあるGUIDEボタンで再度表示することができます。
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

export class guideElevatorPitch extends Component {
	render() {
		return(
			<div className="guide-container">
				<div className="guide-background" onClick={() => this.props.onClick()}></div>				<div className="guide">
				      <div className="guide-header">
        <p>このページの使い方</p>
      </div>									
				<h1>
					<br/>  エレベーターピッチに取り組みましょう<br/>  <br/>  
					枠内に対応の文を書き込んでください。<br/><br/>
									終了したら画面右上にあるNEXTボタンでユーザーストーリーマップに移動しましょう。<br/>
				<h1 className="alart">					
				内容は保存されないので、スクリーンショット等で記録しておいてください。
					</h1>
				<br/><br/>
				このガイドは右上にあるGUIDEボタンで再度表示することができます。					
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

export class guideProductBacklog extends Component {
	render() {
		return(
			<div className="guide-container">
				<div className="guide-background" onClick={() => this.props.onClick()}></div>				<div className="guide">
				      <div className="guide-header">
        <p>このページの使い方</p>
      </div>										
				<h1>
				<br/>  
				プロダクトバックログに取り組みましょう。<br/>  <br/>  
				枠内に対応の文を書き込んでください。  <br/><br/>
				<h1 className="alart">			
				内容は保存されないので、スクリーンショット等で記録しておいてください。
				</h1>
				<br/><br/>
				このガイドは右上にあるGUIDEボタンで再度表示することができます。				
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



export class Showguide extends Component {
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

export class NextButton extends Component {
	render() {
		return(
　　　<Link to={this.props.urlName} className="nextButton">
            <p>Next</p>
          </Link>  					           
		);
	}
}
