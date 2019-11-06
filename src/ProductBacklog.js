import React, { Component } from 'react';
import { Header } from './Header.js';
import { TipsProductBacklog, ShowTips, MoveHomeButton } from './tips.js';
import './ProductBacklog.css';

export class ProductBacklog extends Component {
  constructor(props) {
    super(props);
    this.state = {
			productID: this.props.match.params,
      tipsFlag: true,
    };
  }
  
  tipsFlagChange() {
      this.setState({tipsFlag: !this.state.tipsFlag});
  }
    	
	render() {
		return(
		<div>
      { this.state.tipsFlag && <TipsProductBacklog onClick={() => this.tipsFlagChange()} /> }      		
			
		        <Header className="header" title={'プロダクトバックログ'}/>
        <ShowTips  onClick={() => this.tipsFlagChange()} />    		        
		        <div className="plow">
		        <p>●</p>
		        	<textarea />
		        </div>	
		        <div className="plow">
		        <p>●</p>
		        	<textarea />
		        </div>	
		        <div className="plow">
		        <p>●</p>
		        	<textarea />
		        </div>	
		        <div className="plow">
		        <p>●</p>
		        	<textarea />
		        </div>			        		        		        
		        <div className="plow">
		        <p>●</p>
		        	<textarea />
		        </div>	
		        <div className="plow">
		        <p>●</p>
		        	<textarea />
		        </div>	
		        <div className="plow">
		        <p>●</p>
		        	<textarea />
		        </div>
		        <div className="plow">
		        <p>●</p>
		        	<textarea />
		        </div>		 
		</div>
		)
	}
}
