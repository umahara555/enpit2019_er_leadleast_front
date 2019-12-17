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
				txt19: { text: '', } ,
				txt20: { text: '', } ,
				txt21: { text: '', } ,
				txt22: { text: '', } ,
				txt23: { text: '', } ,
				txt24: { text: '', } ,
				txt25: { text: '', } ,
				txt26: { text: '', } ,
				txt27: { text: '', } ,				
				txt28: { text: '', } ,
				txt29: { text: '', } ,
				txt30: { text: '', } ,
				txt31: { text: '', } ,
				txt32: { text: '', } ,
				txt33: { text: '', } ,
				txt34: { text: '', } ,
				txt35: { text: '', } ,
				txt36: { text: '', } ,		
				txt37: { text: '', } ,
				txt38: { text: '', } ,
				txt39: { text: '', } ,
				txt40: { text: '', } ,
				txt41: { text: '', } ,
				txt42: { text: '', } ,
				txt43: { text: '', } ,
				txt44: { text: '', } ,
				txt45: { text: '', } ,				
				txt46: { text: '', } ,
				txt47: { text: '', } ,
				txt48: { text: '', } ,
				txt49: { text: '', } ,
				txt50: { text: '', } ,
				txt51: { text: '', } ,
				txt52: { text: '', } ,
				txt53: { text: '', } ,
				txt54: { text: '', } ,															
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
		        <div className="plow">
		        <p>19</p>
		        	<textarea id="txt19" value={this.state.board_texts.txt19.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>20</p>
		        	<textarea id="txt20" value={this.state.board_texts.txt20.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>21</p>
		        	<textarea id="txt21" value={this.state.board_texts.txt21.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>22</p>
		        	<textarea id="txt22" value={this.state.board_texts.txt22.text} onChange={this.handleChange} />
		        </div>			        		        		        
		        <div className="plow">
		        <p>23</p>
		        	<textarea id="txt23" value={this.state.board_texts.txt23.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>24</p>
		        	<textarea id="txt24" value={this.state.board_texts.txt24.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>25</p>
		        	<textarea id="txt25" value={this.state.board_texts.txt25.text} onChange={this.handleChange} />
		        </div>
		        <div className="plow">
		        <p>26</p>
		        	<textarea id="txt26" value={this.state.board_texts.txt26.text} onChange={this.handleChange} />
		        </div>		 
		        <div className="plow">
		        <p>27</p>
		        	<textarea id="txt27" value={this.state.board_texts.txt27.text} onChange={this.handleChange} />
		        </div>
		        <div className="plow">
		        <p>28</p>
		        	<textarea id="txt28" value={this.state.board_texts.txt28.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>29</p>
		        	<textarea id="txt29" value={this.state.board_texts.txt29.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>30</p>
		        	<textarea id="txt30" value={this.state.board_texts.txt30.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>31</p>
		        	<textarea id="txt31" value={this.state.board_texts.txt31.text} onChange={this.handleChange} />
		        </div>			        		        		        
		        <div className="plow">
		        <p>32</p>
		        	<textarea id="txt32" value={this.state.board_texts.txt32.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>33</p>
		        	<textarea id="txt33" value={this.state.board_texts.txt33.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>34</p>
		        	<textarea id="txt34" value={this.state.board_texts.txt34.text} onChange={this.handleChange} />
		        </div>
		        <div className="plow">
		        <p>35</p>
		        	<textarea id="txt35" value={this.state.board_texts.txt35.text} onChange={this.handleChange} />
		        </div>		 
		        <div className="plow">
		        <p>36</p>
		        	<textarea id="txt36" value={this.state.board_texts.txt36.text} onChange={this.handleChange} />
		        </div>		
		        <div className="plow">
		        <p>37</p>
		        	<textarea id="txt37" value={this.state.board_texts.txt37.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>38</p>
		        	<textarea id="txt38" value={this.state.board_texts.txt38.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>39</p>
		        	<textarea id="txt39" value={this.state.board_texts.txt39.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>40</p>
		        	<textarea id="txt40" value={this.state.board_texts.txt40.text} onChange={this.handleChange} />
		        </div>			        		        		        
		        <div className="plow">
		        <p>41</p>
		        	<textarea id="txt41" value={this.state.board_texts.txt41.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>42</p>
		        	<textarea id="txt42" value={this.state.board_texts.txt42.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>43</p>
		        	<textarea id="txt43" value={this.state.board_texts.txt43.text} onChange={this.handleChange} />
		        </div>
		        <div className="plow">
		        <p>44</p>
		        	<textarea id="txt44" value={this.state.board_texts.txt44.text} onChange={this.handleChange} />
		        </div>		 
		        <div className="plow">
		        <p>45</p>
		        	<textarea id="txt45" value={this.state.board_texts.txt45.text} onChange={this.handleChange} />
		        </div>
		        <div className="plow">
		        <p>46</p>
		        	<textarea id="txt46" value={this.state.board_texts.txt46.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>47</p>
		        	<textarea id="txt47" value={this.state.board_texts.txt47.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>48</p>
		        	<textarea id="txt48" value={this.state.board_texts.txt48.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>49</p>
		        	<textarea id="txt49" value={this.state.board_texts.txt49.text} onChange={this.handleChange} />
		        </div>			        		        		        
		        <div className="plow">
		        <p>50</p>
		        	<textarea id="txt50" value={this.state.board_texts.txt50.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>51</p>
		        	<textarea id="txt51" value={this.state.board_texts.txt51.text} onChange={this.handleChange} />
		        </div>	
		        <div className="plow">
		        <p>52</p>
		        	<textarea id="txt52" value={this.state.board_texts.txt52.text} onChange={this.handleChange} />
		        </div>
		        <div className="plow">
		        <p>53</p>
		        	<textarea id="txt53" value={this.state.board_texts.txt53.text} onChange={this.handleChange} />
		        </div>		 
		        <div className="plow">
		        <p>54</p>
		        	<textarea id="txt54" value={this.state.board_texts.txt54.text} onChange={this.handleChange} />
		        </div>				        		        				        				        
		    </div>    
		</div>
		)
	}
}
