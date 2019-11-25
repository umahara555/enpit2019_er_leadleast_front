import React, {Component} from 'react';
import './Guide.css';
import husen from './images/userstorymap-guide/husen.png';
import husentuika from './images/userstorymap-guide/husentuika.png';
import tehudahue from './images/userstorymap-guide/tehudahue.png';
import tehudaex from './images/userstorymap-guide/tehudaex.png';
import banidasu from './images/userstorymap-guide/banidasu.png';
import {Link} from 'react-router-dom';
import LeanCanvas from './images/leancanvas/leancanvas-example.png';


export class GuideUserStoryMap extends Component {
	render() {
		return(
			<div className="guide-container">
				<div className="guide-background" onClick={() => this.props.onClick()}></div>
					<div className="guide">
				      <div className="guide-header">
        <p>このページの使い方</p>
      </div>							

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
  constructor(props) {
    super(props);
    this.state = {
				pageGuideFlag:true,
				stepGuideFlag:false,
				ruleGuideFlag:false,
				exampleGuideFlage:false,
      }
    this.pageGuideFlagChange = this.pageGuideFlagChange.bind(this)     
    this.stepGuideFlagChange = this.stepGuideFlagChange.bind(this)    
    this.ruleGuideFlagChange = this.ruleGuideFlagChange.bind(this)                
    this.exampleGuideFlagChange = this.exampleGuideFlagChange.bind(this)  
              
    }


  pageGuideFlagChange() {
    this.setState({pageGuideFlag: true});
		this.setState({stepGuideFlag: false});
		this.setState({ruleGuideFlag: false});    
		this.setState({exampleGuideFlag: false});    
  }  
  
  stepGuideFlagChange() {
    this.setState({pageGuideFlag: false});
		this.setState({stepGuideFlag: true});   
		this.setState({ruleGuideFlag: false}); 
		this.setState({exampleGuideFlag: false});    		
  }    

  ruleGuideFlagChange() {
    this.setState({pageGuideFlag: false});
		this.setState({stepGuideFlag: false});
		this.setState({ruleGuideFlag: true});		    
		this.setState({exampleGuideFlag: false});    		
  }  

  exampleGuideFlagChange() {
    this.setState({pageGuideFlag: false});
		this.setState({stepGuideFlag: false});    
		this.setState({ruleGuideFlag: false});
		this.setState({exampleGuideFlag: true});    		
  }    
    
	render() {
		return(
			<div className="guide-container">
				<div className="guide-background" onClick={() => this.props.onClick()}></div>
			{ this.state.pageGuideFlag ? 
				<button className="page-button-select"
			    		onClick={this.pageGuideFlagChange}>
			  		           このページの使い方
			      </button>		
			      :
							<button className="page-button"
			    		onClick={this.pageGuideFlagChange}>
			  		           このページの使い方
			      </button>	}				
			      
			{ this.state.stepGuideFlag ? 			            	
				<button className="step-button-select"
			    		onClick={this.stepGuideFlagChange}>
			  		           リーンキャンバスとは
			      </button>	
			       :
						<button className="step-button"
			    		onClick={this.stepGuideFlagChange}>
			  		           リーンキャンバスとは
			      </button>			}
			      
			{ this.state.ruleGuideFlag ? 			            	
				<button className="rule-button-select"
			    		onClick={this.ruleGuideFlagChange}>
			  		           取り組み方と補足
			      </button>	
			       :
						<button className="rule-button"
			    		onClick={this.ruleGuideFlagChange}>
			  		           取り組み方と補足
			      </button>			}			      
			      
			     { this.state.exampleGuideFlag ? 
				<button className="example-button-select"
			    		onClick={this.exampleGuideFlagChange}>
			  		           記述の具体例
						 <div className="exampleGuide" >
            	<p>?</p>
              <div className="hidekadaiGuide">
									この具体例は「LeadLeast」を開発する際に書き上げたリーンキャンバスです。<br />
									「LeadLeast」は"アジャイル開発を学ぶ初学者が、プロダクトデザインをより円滑に行えるように"という考えから立ち上げられた企画です。
              </div>    
            </div>
			      </button>					      			      			      
			      :
				<button className="example-button"
			    		onClick={this.exampleGuideFlagChange}>
			  		           記述の具体例
						 <div className="exampleGuide" >
            	<p>?</p>
              <div className="hidekadaiGuide">
									この具体例は「LeadLeast」を開発する際に書き上げたリーンキャンバスです。<br />
									「LeadLeast」は"アジャイル開発を学ぶ初学者が、プロダクトデザインをより円滑に行えるように"という考えから立ち上げられた企画です。
              </div>    
            </div>		  		           
			      </button>	}				      			      			      			      	
			      { this.state.pageGuideFlag && 
							<div className="guide">
      <div className="guide-header">
        <p>このページの使い方</p>
      </div>										  
				<h1>
				<br/>  
				リーンキャンバスに取り組みましょう。<br/>  <br/>
				企画しているサービスを軸に、 
				それぞれの要素の枠の中に内容を書き込んでください。<br/>  
				取り組む順番は、要素名の左側に書いてある番号に沿ってください。<br/><br/>
        要素に書き込むべき内容がわからない場合は、要素名の右側に設置されている<div className="kadaiGuide">?</div>ボタンにカーソルを合わせる事でヒントを見ることができます。
        <br/><br/>
				<h1 className="alart">
				このガイドは右上にあるGUIDEボタンで再度表示することができます。
				</h1>
				</h1>
				  </div>
				  }
				  
 { this.state.stepGuideFlag && 
							<div className="guide">
      <div className="guide-header">
        <p>リーンキャンバスとは</p>
      </div>										  
				<h1>
				<br/>
	リーンキャンバスは、あなたが企画しているサービスの"ビジネスモデル"を簡潔にまとめる作業です。<br/>
ビジネルモデルとは"サービスの対象となる顧客"、"サービスの提供する価値"、"サービスの収益構造"といった要素を指し、サービスが発展していく根拠、戦略を明確にしたものです。<br/><br/>

リーンキャンバスを作成すると、あなたはビジョンの不安定な部分を把握することができ、またそれを人に見せることで企画に対する有用な提案をされやすくなります。<br/>
それはリーンキャンバスが複数の視点で企画を具体化しており、なにより簡潔であるからです。
				</h1>
				  </div>
				  }
				  
 { this.state.ruleGuideFlag && 
							<div className="guide">
      <div className="guide-header">
        <p>取り組み方と補足</p>
      </div>										  
				<h1>
				<br/>
「取り組み方」<br/>
あまり時間をかけずに、図を埋めてください。目安は15分以内です。埋める内容は簡潔なものにしてください。埋められない場所があれば、空欄でも構いません。<br/><br/>
「補足」<br/>
・空欄、または曖昧な記述となった欄は、あなたの企画にとって大きなリスクとなりうる要素です。企画を進める中で、検証していく必要があります。<br/>
・リーンキャンバスはプロダクトデザインの最初に行うものですが、企画が進行している最中も繰り返し更新していくものです。
				</h1>
				  </div>
				  }				  
				  
 { this.state.exampleGuideFlag && 
            <div >
              <img src={LeanCanvas} className="example-image"/>
            </div>
		
				  }				  
				  
				  
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
			{ this.props.Tflag ? 			
　　　	<Link to={this.props.TurlName} className="menu-bar-true-top">
            <p>トップ</p>
      </Link>  					 
      :
　　　	<Link to={this.props.TurlName} className="menu-bar-top">
            <p>トップ</p>
      </Link>  			      	
      }		
		
			{ this.props.Lflag ? 			
　　　	<Link to={this.props.LurlName} className="menu-bar-true">
            <p>リーンキャンバス</p>
      </Link>  					 
      :
　　　	<Link to={this.props.LurlName} className="menu-bar">
            <p>リーンキャンバス</p>
      </Link>  			      	
      }
      
			{ this.props.Eflag ? 
　　　	<Link to={this.props.EurlName} className="menu-bar-true">
            <p>エレベーターピッチ</p>
      </Link>  					 
      :
　　　	<Link to={this.props.EurlName} className="menu-bar">
            <p>エレベーターピッチ</p>
      </Link>  			      	
      }
      
      { this.props.Uflag ? 
　　　	<Link to={this.props.UurlName} className="menu-bar-true">
            <p>ユーザーストーリーマップ</p>
      </Link>  					 
      :
　　　	<Link to={this.props.UurlName} className="menu-bar">
            <p>ユーザーストーリーマップ</p>
      </Link>  			      	
      }
      
      { this.props.Pflag ? 
　　　	<Link to={this.props.PurlName} className="menu-bar-true">
            <p>プロダクトバックログ</p>
      </Link>  					 
      :
　　　	<Link to={this.props.PurlName} className="menu-bar">
            <p>プロダクトバックログ</p>
      </Link>  			      	
      }            
		</div>          
		);
	}
}
