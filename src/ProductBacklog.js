import React, { Component } from 'react';
import { Header } from './Header.js';
import { GuideProductBacklog, ShowGuide, MoveHomeButton } from './Guide.js';
import './ProductBacklog.css';

export class ProductBacklog extends Component {
  constructor(props) {
    super(props);
    this.state = {
			productID: this.props.match.params.productID,
      guideFlag: true,
    };
  }
  
  guideFlagChange() {
      this.setState({guideFlag: !this.state.guideFlag});
  }
    	
	render() {
		return(
		<div>
      { this.state.guideFlag && <GuideProductBacklog onClick={() => this.guideFlagChange()} /> }
			
		        <Header className="header" title={'プロダクトバックログ'}/>
        <ShowGuide  onClick={() => this.guideFlagChange()} />
        <div className="backlog">
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
		</div>
		)
	}
}
