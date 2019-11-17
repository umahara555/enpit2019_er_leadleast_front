import React, {Component} from 'react';
import './Guide.css';
import husen from './images/userstorymap-guide/husen.png';
import husentuika from './images/userstorymap-guide/husentuika.png';
import tehudahue from './images/userstorymap-guide/tehudahue.png';
import tehudaex from './images/userstorymap-guide/tehudaex.png';
import banidasu from './images/userstorymap-guide/banidasu.png';
import {Link} from 'react-router-dom';


export class GuideUserStoryMap extends Component {
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
				<br/><br/>
				<h1 className="alart">
				このガイドは右上にあるGUIDEボタンで再度表示することができます。				
				</h1>
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

export class GuideLeanCanvas extends Component {
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
				企画しているサービスを軸に、 
				それぞれの要素の枠の中に内容を書き込んでください。<br/>  
				取り組む順番は、要素名の左側に書いてある番号に沿ってください。<br/><br/>
        要素に書き揉むべき内容がわからない場合は、要素名の右側に設置されている<div className="kadaiGuide">?</div>ボタンにカーソルを合わせる事でヒントを見ることができます。
        <br/><br/>
				<h1 className="alart">
				このガイドは右上にあるGUIDEボタンで再度表示することができます。
				</h1>
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

export class GuideElevatorPitch extends Component {
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
					<h1 className="alart">
							このガイドは右上にあるGUIDEボタンで再度表示することができます。					
							</h1>
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

export class GuideProductBacklog extends Component {
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
				<br/><br/>
				<h1 className="alart">
				このガイドは右上にあるGUIDEボタンで再度表示することができます。				
				</h1>
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



export class ShowGuide extends Component {
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
            <p>Next→</p>
          </Link>  					           
		);
	}
}

export class BackButton extends Component {
	render() {
		return(
　　　<Link to={this.props.urlName} className="backButton">
            <p>←Back</p>
          </Link>  					           
		);
	}
}

export class AllMenu extends Component {
	render() {
		return(
		<div className="allmenu">
			{ this.props.Lflag ? 			
　　　	<Link to={this.props.LurlName} className="menu-bar-true">
            <p>LeanCanvas</p>
      </Link>  					 
      :
　　　	<Link to={this.props.LurlName} className="menu-bar">
            <p>LeanCanvas</p>
      </Link>  			      	
      }
      
			{ this.props.Eflag ? 
　　　	<Link to={this.props.EurlName} className="menu-bar-true">
            <p>ElevatorPitch</p>
      </Link>  					 
      :
　　　	<Link to={this.props.EurlName} className="menu-bar">
            <p>ElevatorPitch</p>
      </Link>  			      	
      }
      
      { this.props.Uflag ? 
　　　	<Link to={this.props.UurlName} className="menu-bar-true">
            <p>UserStoryMap</p>
      </Link>  					 
      :
　　　	<Link to={this.props.UurlName} className="menu-bar">
            <p>UserStoryMap</p>
      </Link>  			      	
      }
      
      { this.props.Pflag ? 
　　　	<Link to={this.props.PurlName} className="menu-bar-true">
            <p>ProductBacklog</p>
      </Link>  					 
      :
　　　	<Link to={this.props.PurlName} className="menu-bar">
            <p>ProductBacklog</p>
      </Link>  			      	
      }            
		</div>          
		);
	}
}
