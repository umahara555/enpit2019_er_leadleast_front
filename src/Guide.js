import React, {Component} from 'react';
import './Guide.css';
import husen from './images/userstorymap-guide/husen.png';
import husentuika from './images/userstorymap-guide/husentuika.png';
import tehudahue from './images/userstorymap-guide/tehudahue.png';
import tehudaex from './images/userstorymap-guide/tehudaex.png';
import banidasu from './images/userstorymap-guide/banidasu.png';
import {Link} from 'react-router-dom';
import LeanCanvas from './images/leancanvas/leancanvas-example.png';
import ElevatorPitch from './images/elevatorpitch/example-elevatorpitch.png';
import UserStoryMap from './images/userstorymap-guide/example.png';
import ProductBackLog from './images/example.png';

export class GuideUserStoryMap extends Component {
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
			  		           ユーザーストーリーマップとは
			      </button>	
			       :
						<button className="step-button"
			    		onClick={this.stepGuideFlagChange}>
			  		           ユーザーストーリーマップとは
			      </button>			}
			      
			{ this.state.ruleGuideFlag ? 			            	
				<button className="rule-button-select"
			    		onClick={this.ruleGuideFlagChange}>
			  		           取り組み方
			      </button>	
			       :
						<button className="rule-button"
			    		onClick={this.ruleGuideFlagChange}>
			  		           取り組み方
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
									この具体例は「LeadLeast」を開発する際に書き上げたユーザーストーリーマップです。<br />
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
				ユーザーストーリーマップに取り組みましょう。<br/>  <br/> 
				3色の付箋に内容を書き込んでください。<br/>  
				色ごとに書き込むべきな用は異なります<br/>
				書き込むべき内容がわからない場合は<div className="kadaiGuide"> ? </div>を参照してください。
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
        <p>ユーザーストーリーマップとは</p>
      </div>										  
				<h1>
				<br/>
				ユーザーストーリーマップは、ユーザーの一連のストーリーを基に、サービスに実装しなけれないけない機能を挙げます。<br />
				ユーザーストーリーマップを埋めていくと、チーム内でのサービスに対する共通認識が固まる共に、想定していなかった必要となる機能を見つけることができます。<br />
				これはユーザーストーリーマップが「ユーザーの行動」から「実装すべき機能」を査定していく作業という特性上、サービスの全体像が把握しやすいためです。<br />
				</h1>
				  </div>
				  }
				  
 { this.state.ruleGuideFlag && 
							<div className="guide">
      <div className="guide-header">
        <p>取り組み方</p>
      </div>										  
				<h1>
				<br/>
「取り組み方」<br/>
まずは"青色の付箋"を埋める作業に取り組みましょう。<br />
付箋には、ユーザーのサービスを利用する際の「ストーリーの骨格」をかきます。<br />
「ストーリーの骨格」とはユーザーがサービスを利用してできることの一番大きな単位です。<br />
次は"ピンクの付箋"を埋める作業です。<br />
付箋には、「ストーリーの骨格」をユーザーが行うために利用する「サービスの機能」を書きます。<br />
次は"黄色の付箋"を埋める作業です。<br />
付箋には「サービスの機能」の詳細部分を書きます。<br />
この詳細部分はサービスに実装すべき機能の小さな単位であるので<br />
詳細部分は開発においてプロダクトバックログとして利用します。

				</h1>
				  </div>
				  }				  
				  
 { this.state.exampleGuideFlag && 
            <div >
              <img src={UserStoryMap} className="example-image"/>
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
			  		           取り組み方
			      </button>	
			       :
						<button className="rule-button"
			    		onClick={this.ruleGuideFlagChange}>
			  		           取り組み方
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
        <p>取り組み方</p>
      </div>										  
				<h1>
				<br/>
「取り組み方」<br/>
あまり時間をかけずに、図を埋めてください。目安は15分以内です。埋める内容は簡潔なものにしてください。埋められない場所があれば、空欄でも構いません。<br/>
空欄、または曖昧な記述となった欄は、あなたの企画にとって大きなリスクとなりうる要素です。企画を進める中で、検証していく必要があります。<br/>
リーンキャンバスはプロダクトデザインの最初に行うものですが、企画が進行している最中も繰り返し更新していくものです。
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
			  		           エレベーターピッチとは
			      </button>	
			       :
						<button className="step-button"
			    		onClick={this.stepGuideFlagChange}>
			  		           エレベーターピッチとは
			      </button>			}
			      
			{ this.state.ruleGuideFlag ? 			            	
				<button className="rule-button-select"
			    		onClick={this.ruleGuideFlagChange}>
			  		           取り組み方
			      </button>	
			       :
						<button className="rule-button"
			    		onClick={this.ruleGuideFlagChange}>
			  		           取り組み方
			      </button>			}			      
			      
			     { this.state.exampleGuideFlag ? 
				<button className="example-button-select"
			    		onClick={this.exampleGuideFlagChange}>
			  		           記述の具体例
						 <div className="exampleGuide" >
            	<p>?</p>
              <div className="hidekadaiGuide">
									この具体例は「LeadLeast」を開発する際に書き上げたエレベーターピッチです。<br />
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
									この具体例は「LeadLeast」を開発する際に書き上げたエレベーターピッチです。<br />
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
				エレベーターピッチに取り組みましょう。<br />
				<div className="kadaiGuide"> ? </div>を参照すれば、書き込むべき内容を確認することができます。<br />
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
        <p>エレベーターピッチとは</p>
      </div>										  
				<h1>
				<br/>
				エレベーターピッチとは企画しているサービスの概要を、<br />
				簡潔に伝えることを目的とした文章のフォーマットです。<br /><br />
				エレベーターピッチを作る目的は、サービスに興味を持って欲しい相手に、<br />
				短時間(30秒以内)でサービスを理解させ、その魅力を伝えるためです。<br /><br />

				</h1>
				  </div>
				  }
				  
 { this.state.ruleGuideFlag && 
							<div className="guide">
      <div className="guide-header">
        <p>取り組み方</p>
      </div>										  
				<h1>
				<br/>
				行ごとに設置されている枠に、対応する文章を埋めてください。<br />
				リーンキャンンバスに書いた内容が、エレベーターピッチの内容に対応するので<br />
				リーンキャンバスを参照しながら取り組んでください。<br />

				フォーマットであるので、文末の文章を変更することはできません。<br /><br />

				「30秒以内に相手に理解させ魅力を伝える」ことを意識して書き込んでください。<br />
				</h1>
				  </div>
				  }				  
				  
 { this.state.exampleGuideFlag && 
            <div >
              <img src={ElevatorPitch} className="example-image"/>
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

export class GuideProductBacklog extends Component {
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
			  		           プロダクトバックログとは
			      </button>	
			       :
						<button className="step-button"
			    		onClick={this.stepGuideFlagChange}>
			  		           プロダクトバックログとは
			      </button>			}
			      
			{ this.state.ruleGuideFlag ? 			            	
				<button className="rule-button-select"
			    		onClick={this.ruleGuideFlagChange}>
			  		           取り組み方
			      </button>	
			       :
						<button className="rule-button"
			    		onClick={this.ruleGuideFlagChange}>
			  		           取り組み方
			      </button>			}			      
			      
			     { this.state.exampleGuideFlag ? 
				<button className="example-button-select"
			    		onClick={this.exampleGuideFlagChange}>
			  		           記述の具体例
						 <div className="exampleGuide" >
            	<p>?</p>
              <div className="hidekadaiGuide">
									この具体例は「LeadLeast」を開発する際に書き上げたプロダクトバックログです。<br />
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
									この具体例は「LeadLeast」を開発する際に書き上げたプロダクトバックログです。<br />
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
				プロダクトバックログに取り組みましょう。<br />
				枠に対応するものを書き込んでください。<br /><br />

								<h1 className="alart">
				このガイドは右上にあるGUIDEボタンで再度表示することができます。
				</h1>
				</h1>
				  </div>
				  }
				  
 { this.state.stepGuideFlag && 
							<div className="guide">
      <div className="guide-header">
        <p>プロダクトバックログとは</p>
      </div>										  
				<h1>
				<br/>
				サービスに欲しい,追加したい機能を挙げたものを、プロダクトバックログと呼びます。<br />
				プロダクトバックログは実際の開発における作業項目となります。<br />
				これを完成させることで、プロダクトデザインの行程は終了となります。<br />
				</h1>
				  </div>
				  }
				  
 { this.state.ruleGuideFlag && 
							<div className="guide">
      <div className="guide-header">
        <p>取り組み方</p>
      </div>										  
				<h1>
				プロダクトバックログはユーザーストーリーマップで挙げた実装する機能を、実装する順番に並び替える作業が主となります。<br />
				ファーストリリースや設計計画を立てながら、実装の優先順位をつけてください。
				</h1>
				  </div>
				  }				  
				  
 { this.state.exampleGuideFlag && 
            <div >
              <img src={ProductBackLog} className="example-image"/>
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
            <p>Step1 : リーンキャンバス</p>
      </Link>  					 
      :
　　　	<Link to={this.props.LurlName} className="menu-bar">
            <p>Step1 : リーンキャンバス</p>
      </Link>  			      	
      }
      
			{ this.props.Eflag ? 
　　　	<Link to={this.props.EurlName} className="menu-bar-true">
            <p>Step2 : エレベーターピッチ</p>
      </Link>  					 
      :
　　　	<Link to={this.props.EurlName} className="menu-bar">
            <p>Step2 : エレベーターピッチ</p>
      </Link>  			      	
      }
      
      { this.props.Uflag ? 
　　　	<Link to={this.props.UurlName} className="menu-bar-true">
            <p>Step3 : ユーザーストーリーマップ</p>
      </Link>  					 
      :
　　　	<Link to={this.props.UurlName} className="menu-bar">
            <p>Step3 : ユーザーストーリーマップ</p>
      </Link>  			      	
      }
      
      { this.props.Pflag ? 
　　　	<Link to={this.props.PurlName} className="menu-bar-true">
            <p>Step4 : プロダクトバックログ</p>
      </Link>  					 
      :
　　　	<Link to={this.props.PurlName} className="menu-bar">
            <p>Step4 : プロダクトバックログ</p>
      </Link>  			      	
      }            
		</div>          
		);
	}
}
