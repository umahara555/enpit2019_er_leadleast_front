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
				取り組む順番は、要素の左側に書いてある番号に沿ってください。<br/><br/>
				＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
				<h1 className="leantitle">
				[1]課題<br/>
				</h1>
         サービスの対象のユーザーが抱えている課題、<br/>
         または解決すべき課題を複数個あげてください。<br/><br/>
        <h1 className="leantitle">
        [2]既存の代替品<br/>
        </h1>
         [1]で挙げた課題をユーザーが解決しようとしている場合に、
         解決のために利用していると想定される既存のサービスを挙げてください。<br/><br/>
        <h1 className="leantitle"> 
        [3]顧客セグメント<br/>
        </h1>
         企画しているサービスの対象となる顧客の特徴を挙げてください。<br/>
         例えば、年齢、性別、職業、趣味等です。<br/>
         対象範囲は個人まで絞る必要はありません。<br/><br/>
        <h1 className="leantitle"> 
        [4]アーリーアダプタ<br/>
        </h1>
         企画しているサービスを一番初めに使用すると考えられる<br/>
         顧客の特徴を挙げてください。<br/><br/>   
        <h1 className="leantitle"> 
        [5]独自の価値提案<br/>
        </h1>
         企画しているサービスが持つ固有の利点を挙げてください。<br/>
         これは他のサービスにない利点に限ります。<br/><br/>
        <h1 className="leantitle">          
        [6]ハイレベルコンセプト<br/>
        </h1>
         顧客に端的にサービスを伝えるための「フレーズ」を挙げてください。<br/>
         例としてtwitterを顧客に伝える場合
         「匿名可のFacebook」となります。 <br/><br/>         
        <h1 className="leantitle"> 
        [7]ソリューション<br/>
        </h1>
         [1]で挙げた課題の解決策を具体的に挙げてください。<br/><br/>
        <h1 className="leantitle"> 
        [8]チャネル<br/>
        </h1>
         企画したサービスを顧客に知ってもらう経路を挙げてください。<br/>
         例えばSNS、広告など<br/><br/>
        <h1 className="leantitle"> 
        [9]収益の流れ<br/>
        </h1>
         収益となる要素を挙げ、どの程度の収入になるか書き込んでください。<br/>
         例：広告収入：100万円/月<br/><br/>
        <h1 className="leantitle"> 
        [10]コスト構造<br/>
        </h1>
         サービスを運用できるようになるまでの費用を書き込んでください。<br/>
         例：開発費用：100万円<br/><br/>
        <h1 className="leantitle">                   
        [11]圧倒的な優位性<br/>
        </h1>
         他者が簡単に真似できない技術、ノウハウ、サービスなどを挙げてください。 <br/><br/>  
        <h1 className="leantitle"> 
        [12]主要指標<br/>
        </h1>
         企画したサービスを完成させて実際にユーザーが使い始めた時、<br/>
         どの程度の規模までいけば成功なのかという指標を決めてください。<br/>
         例：顧客数:1万人　<br/>
         ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
         <br /><br />
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
            <p>Next</p>
          </Link>  					           
		);
	}
}
