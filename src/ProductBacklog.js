import React, { Component } from 'react';
import { Header } from './Header.js';
import { GuideProductBacklog, ShowGuide, MoveHomeButton, BackButton, AllMenu } from './Guide.js';
import './ProductBacklog.css';

const API_URL = 'http://localhost:5000/api/v1';

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
			},
    };
		this.handleChange = this.handleChange.bind(this);
		this.getBoardTexts();
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
		this.setState({board_texts: board_texts});

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
			
		        <Header className="header" title={'プロダクトバックログ'}/>
        <ShowGuide  onClick={() => this.guideFlagChange()} />
        <BackButton urlName={"/product/" + this.props.match.params.productID + "/userstorymap"} />     
        <AllMenu className="allmenu-user" Pflag={true} LurlName={"/product/" + this.props.match.params.productID + "/leancanvas"} EurlName={"/product/" + this.props.match.params.productID + "/elevatorpitch"} UurlName={"/product/" + this.props.match.params.productID + "/userstorymap"} PurlName={"/product/" + this.props.match.params.productID + "/productbacklog"}/>        
          <div className="backlog">
          <br/>
                    			 <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
								今後実装していく内容を挙げましょう。
              </div>    
              </div>
		        <div className="plow">
		        <p>●</p>
		        	<textarea id="txt1" value={this.state.board_texts.txt1.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>●</p>
		        	<textarea id="txt2" value={this.state.board_texts.txt2.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>●</p>
		        	<textarea id="txt3" value={this.state.board_texts.txt3.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>●</p>
		        	<textarea id="txt4" value={this.state.board_texts.txt4.text} onChange={this.handleChange} />
		        </div>			        		        		        
		        <div className="plow">
		        <p>●</p>
		        	<textarea id="txt5" value={this.state.board_texts.txt5.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>●</p>
		        	<textarea id="txt6" value={this.state.board_texts.txt6.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>●</p>
		        	<textarea id="txt7" value={this.state.board_texts.txt7.text} onChange={this.handleChange} />
		        </div>
		        <div className="plow">
		        <p>●</p>
		        	<textarea id="txt8" value={this.state.board_texts.txt8.text} onChange={this.handleChange} />
		        </div>		 
		    </div>    
		</div>
		)
	}
}
