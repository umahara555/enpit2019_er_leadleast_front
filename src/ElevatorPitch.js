import React, { Component } from 'react';
import { Header } from './Header.js';
import { GuideElevatorPitch, ShowGuide, NextButton, BackButton, AllMenu } from './Guide.js';
import './ElevatorPitch.css';

const API_URL = 'http://localhost:5000/api/v1';

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
    };
		this.handleChange = this.handleChange.bind(this);
		this.getBoardTexts();
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
		this.setState({board_texts: board_texts});

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
		        <Header className="header" title={'エレベーターピッチ'}/>
        <ShowGuide  onClick={() => this.guideFlagChange()} />
        <NextButton urlName={"/product/" + this.props.match.params.productID + "/userstorymap"} />
        <BackButton urlName={"/product/" + this.props.match.params.productID + "/leancanvas"} />     
        <AllMenu className="allmenu-user" Eflag={true} LurlName={"/product/" + this.props.match.params.productID + "/leancanvas"} EurlName={"/product/" + this.props.match.params.productID + "/elevatorpitch"} UurlName={"/product/" + this.props.match.params.productID + "/userstorymap"} PurlName={"/product/" + this.props.match.params.productID + "/productbacklog"}/>        
			<div className="low">
				<textarea id="txt1" value={this.state.board_texts.txt1.text} onChange={this.handleChange}/>
				<p>したい</p>
			</div>
			<div className="low">
				<textarea id="txt2" value={this.state.board_texts.txt2.text} onChange={this.handleChange}/>
				<p>向けの、</p>
			</div>
			<div className="low">
				<textarea id="txt3" value={this.state.board_texts.txt3.text} onChange={this.handleChange}/>
				<p>というプロダクトは、</p>
			</div>			
			<div className="low">
				<textarea id="txt4" value={this.state.board_texts.txt4.text} onChange={this.handleChange}/>
				<p>です。</p>
			</div>					
			<div className="low">
				<p>これは</p>
				<textarea id="txt5" value={this.state.board_texts.txt5.text} onChange={this.handleChange}/>
				<p>ができ、</p>
			</div>					
			<div className="low">
				<textarea id="txt6" value={this.state.board_texts.txt6.text} onChange={this.handleChange}/>
				<p>とは違って、</p>
			</div>		
			<div className="low">
				<textarea id="txt7" value={this.state.board_texts.txt7.text} onChange={this.handleChange}/>
				<p>が備わっています。</p>
			</div>				
			</div>		
		</div>			
		);
	}
}
