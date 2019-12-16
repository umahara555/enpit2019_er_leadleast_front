import React, { Component } from 'react';
import { Header } from './Header.js';
import { GuideProductBacklog, ShowGuide, BackButton, AllMenu } from './Guide.js';
import './ProductBacklog.css';

const API_URL = 'http://localhost:5000/api/v1';
const API_WS_URL = 'ws://localhost:5000/cable';

export class ProductBacklog extends Component {
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
				txt8: { text: '', } ,
				txt9: { text: '', } ,				
				txt10: { text: '', } ,
				txt11: { text: '', } ,
				txt12: { text: '', } ,
				txt13: { text: '', } ,
				txt14: { text: '', } ,
				txt15: { text: '', } ,
				txt16: { text: '', } ,
				txt17: { text: '', } ,
				txt18: { text: '', } ,							
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
					{
						"command": "subscribe",
						"identifier":`{\"channel\":\"ProductBacklogChannel\", \"product_id\": \"${this.props.match.params.productID}\"}`,
					}
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
		fetch(API_URL + '/product_backlog/' + this.props.match.params.productID)
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
		fetch(API_URL+'/product_backlog/'+this.state.productID, {method, headers, body})
			.then((res)=> console.log(res.json()))
			.then(console.log)
			.catch(console.error);
	}
    	
	render() {
		return(
		<div>
      { this.state.guideFlag && <GuideProductBacklog onClick={() => this.guideFlagChange()} /> }
			
		        <Header className="header" title={'Step4 : プロダクトバックログ'}/>
        <ShowGuide  onClick={() => this.guideFlagChange()} />
        <BackButton urlName={"/product/" + this.props.match.params.productID + "/userstorymap"} />     
        <AllMenu className="allmenu-user" Pflag={true} TurlName={"/product/" + this.props.match.params.productID} LurlName={"/product/" + this.props.match.params.productID + "/leancanvas"} EurlName={"/product/" + this.props.match.params.productID + "/elevatorpitch"} UurlName={"/product/" + this.props.match.params.productID + "/userstorymap"} PurlName={"/product/" + this.props.match.params.productID + "/productbacklog"}/>        
          <div className="backlog">
          <br/>
                    			 <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
								今後実装していく内容を挙げましょう。
              </div>    
              </div>
		        <div className="plow">
		        <p>1</p>
		        	<textarea id="txt1" value={this.state.board_texts.txt1.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>2</p>
		        	<textarea id="txt2" value={this.state.board_texts.txt2.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>3</p>
		        	<textarea id="txt3" value={this.state.board_texts.txt3.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>4</p>
		        	<textarea id="txt4" value={this.state.board_texts.txt4.text} onChange={this.handleChange} />
		        </div>			        		        		        
		        <div className="plow">
		        <p>5</p>
		        	<textarea id="txt5" value={this.state.board_texts.txt5.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>6</p>
		        	<textarea id="txt6" value={this.state.board_texts.txt6.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>7</p>
		        	<textarea id="txt7" value={this.state.board_texts.txt7.text} onChange={this.handleChange} />
		        </div>
		        <div className="plow">
		        <p>8</p>
		        	<textarea id="txt8" value={this.state.board_texts.txt8.text} onChange={this.handleChange} />
		        </div>		 
		        <div className="plow">
		        <p>9</p>
		        	<textarea id="txt9" value={this.state.board_texts.txt9.text} onChange={this.handleChange} />
		        </div>
		        <div className="plow">
		        <p>10</p>
		        	<textarea id="txt10" value={this.state.board_texts.txt10.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>11</p>
		        	<textarea id="txt11" value={this.state.board_texts.txt11.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>12</p>
		        	<textarea id="txt12" value={this.state.board_texts.txt12.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>13</p>
		        	<textarea id="txt13" value={this.state.board_texts.txt13.text} onChange={this.handleChange} />
		        </div>			        		        		        
		        <div className="plow">
		        <p>14</p>
		        	<textarea id="txt14" value={this.state.board_texts.txt14.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>15</p>
		        	<textarea id="txt15" value={this.state.board_texts.txt15.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>16</p>
		        	<textarea id="txt16" value={this.state.board_texts.txt16.text} onChange={this.handleChange} />
		        </div>
		        <div className="plow">
		        <p>17</p>
		        	<textarea id="txt17" value={this.state.board_texts.txt17.text} onChange={this.handleChange} />
		        </div>		 
		        <div className="plow">
		        <p>18</p>
		        	<textarea id="txt18" value={this.state.board_texts.txt18.text} onChange={this.handleChange} />
		        </div>					        				        
		    </div>    
		</div>
		)
	}
}
