import React, { Component } from 'react';
import { Header } from './Header.js';
import { guideProductBacklog, Showguide, MoveHomeButton } from './Guide.js';
import './ProductBacklog.css';

export class ProductBacklog extends Component {
  constructor(props) {
    super(props);
    this.state = {
			productID: this.props.match.params,
      guideFlag: true,
    };
  }
  
  guideFlagChange() {
      this.setState({guideFlag: !this.state.guideFlag});
  }
    	
	render() {
		return(
		<div>
      { this.state.guideFlag && <guideProductBacklog onClick={() => this.guideFlagChange()} /> }
			
		        <Header className="header" title={'プロダクトバックログ'}/>
        <Showguide  onClick={() => this.guideFlagChange()} />
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
