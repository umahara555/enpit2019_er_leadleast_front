import React, { Component } from 'react';
import { Header } from './Header.js';
import { GuideProductBacklog, ShowGuide, MoveHomeButton, BackButton, AllMenu } from './Guide.js';
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
        <BackButton urlName={"/product/" + this.props.match.params.productID + "/userstorymap"} />     
        <AllMenu className="allmenu-user" Pflag={true} LurlName={"/product/" + this.props.match.params.productID + "/leancanvas"} EurlName={"/product/" + this.props.match.params.productID + "/elevatorpitch"} UurlName={"/product/" + this.props.match.params.productID + "/userstorymap"} PurlName={"/product/" + this.props.match.params.productID + "/productbacklog"}/>        
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
