import React, { Component } from 'react';
import { Header } from './Header.js';
import { GuideElevatorPitch, ShowGuide, NextButton, BackButton, AllMenu } from './Guide.js';
import './ElevatorPitch.css';

const API_URL = 'http://localhost:5000/api/v1';
const API_WS_URL = 'ws://localhost:5000/cable';

export class ElevatorPitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
			productID: this.props.match.params.productID,
      guideFlag: true,
			board_texts: {
				txt1: { text: '', } ,
				txt2: { text: '', } ,
				txt3: { text: '', } ,
				txt4: { text: '', } ,
				txt5: { text: '', } ,
				txt6: { text: '', } ,
				txt7: { text: '', } ,
			},
			ws: null,
			isChange: false,
    };
		this.handleChange = this.handleChange.bind(this);
		this.getBoardTexts();
  }

	componentDidMount() {
		const ws = new WebSocket(API_WS_URL);
		ws.onopen = () => {
			ws.send(
				JSON.stringify(
					{"command": "subscribe",
						"identifier":"{\"channel\":\"ElevatorPitchChannel\"}"}
				)
			);
		};
		ws.onmessage = this.handleBoard.bind(this);
		this.setState({ws: ws});
	}

	componentWillUnmount() {
		this.state.ws.close();
	}

	handleBoard(event) {
		const data = JSON.parse(event.data);
		if ('message' in data) {
			if (this.state.isChange === false) {
				const messageData = JSON.parse(data.message);
				if (typeof(messageData) == 'object' && 'board_texts' in messageData) {
					if (messageData.product_id === this.state.productID) {
						this.setState({
							board_texts: messageData.board_texts,
						});
						console.log(messageData.board_texts);
					}
				}
			}
			this.setState({isChange: false});
		}
	}
  
  guideFlagChange() {
      this.setState({guideFlag: !this.state.guideFlag});
  }

	getBoardTexts() {
		fetch(API_URL + '/elevator_pitch/' + this.props.match.params.productID)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					board_texts: responseJson.board_texts,
				});
				console.log(responseJson)
			})
			.catch((error) =>{
				console.error(error);
			});
	}

	handleChange(e){
		const board_texts = this.state.board_texts;
		board_texts[e.target.id].text = e.target.value;
		this.setState({board_texts: board_texts, isChange: true});

		const obj = { board_texts: board_texts };
		const method = "PATCH";
		const body = JSON.stringify(obj);
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		};
		fetch(API_URL+'/elevator_pitch/'+this.state.productID, {method, headers, body})
			.then((res)=> console.log(res.json()))
			.then(console.log)
			.catch(console.error);
	}
	
	render() {
		return(
		<div>
      { this.state.guideFlag && <GuideElevatorPitch onClick={() => this.guideFlagChange()} /> }
      <div className="Ele">
		        <Header className="header" title={'Step2 : エレベーターピッチ'}/>
        <ShowGuide  onClick={() => this.guideFlagChange()} />
        <NextButton urlName={"/product/" + this.props.match.params.productID + "/userstorymap"} />
        <BackButton urlName={"/product/" + this.props.match.params.productID + "/leancanvas"} />     
        <AllMenu className="allmenu-user" Eflag={true} TurlName={"/product/" + this.props.match.params.productID} LurlName={"/product/" + this.props.match.params.productID + "/leancanvas"} EurlName={"/product/" + this.props.match.params.productID + "/elevatorpitch"} UurlName={"/product/" + this.props.match.params.productID + "/userstorymap"} PurlName={"/product/" + this.props.match.params.productID + "/productbacklog"}/>        
			<div className="low">
			 <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
     						リーンキャンバスで取り上げた課題を<br/>「~を解決したい」という形式の文で書きましょう。<br/><br/>
              </div>    
              </div>

				<textarea id="txt1" value={this.state.board_texts.txt1.text} onChange={this.handleChange}/>
				<p>したい</p>
			</div>
			<div className="low">
			 <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                         上記の課題を抱えている顧客を書きましょう。<br/>
              </div>    
              </div>			
				<textarea id="txt2" value={this.state.board_texts.txt2.text} onChange={this.handleChange}/>
				<p>向けの、</p>
			</div>
			<div className="low">
			 <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                       サービスの名前を書きましょう。<br/>
              </div>    
              </div>			
				<textarea id="txt3" value={this.state.board_texts.txt3.text} onChange={this.handleChange}/>
				<p>というプロダクトは、</p>
			</div>			
			
			<div className="low">
			 <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                         サービスのカテゴリーを書きましょう。<br/>
              </div>    
              </div>			
				<textarea id="txt4" value={this.state.board_texts.txt4.text} onChange={this.handleChange}/>
				<p>です。</p>
			</div>				<br />
	
			<div className="low">
			 <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                         サービスの重要な利点を書きましょう。<br/>
              </div>    
              </div>			
				<p>これは</p>
				<textarea id="txt5" value={this.state.board_texts.txt5.text} onChange={this.handleChange}/>
				<p>ができ、</p>
			</div>					
			
			<div className="low">
			 <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                         既存の代替手段となりうるサービスを書きましょう。<br/>
              </div>    
              </div>			
				<textarea id="txt6" value={this.state.board_texts.txt6.text} onChange={this.handleChange}/>
				<p>とは違って、</p>
			</div>		
			
			<div className="low">
			 <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                         代替手段とこのサービスの決定的な違いを書きましょう。<br/>
              </div>    
              </div>			
				<textarea id="txt7" value={this.state.board_texts.txt7.text} onChange={this.handleChange}/>
				<p>が備わっています。</p>
			</div>				
			</div>		
		</div>			
		);
	}
}
