import React, { Component } from 'react';
import { Header } from './Header.js';
import { GuideElevatorPitch, ShowGuide, MoveHomeButton, NextButton } from './Guide.js';
import './ElevatorPitch.css';

export class ElevatorPitch extends Component {

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
      { this.state.guideFlag && <GuideElevatorPitch onClick={() => this.guideFlagChange()} /> }
      <div className="Ele">
		        <Header className="header" title={'エレベーターピッチ'}/>
        <ShowGuide  onClick={() => this.guideFlagChange()} />
        <NextButton urlName="/product/0/userstorymap" />
			<div className="low">
				<textarea />
				<p>したい</p>
			</div>
			<div className="low">
				<textarea />
				<p>向けの、</p>
			</div>
			<div className="low">
				<textarea />
				<p>というプロダクトは、</p>
			</div>			
			<div className="low">
				<textarea />
				<p>です。</p>
			</div>					
			<div className="low">
				<p>これは</p>
				<textarea />
				<p>ができ、</p>
			</div>					
			<div className="low">
				<textarea />
				<p>とは違って、</p>
			</div>		
			<div className="low">
				<textarea />
				<p>が備わっています。</p>
			</div>				
			</div>		
		</div>			
		);
	}
}
