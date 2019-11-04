import React, {Component} from 'react';
import './elevatorPitch.css';
import {Header} from './Header.js'
import {TipsElevatorPitch,ShowTips, MoveHomeButton} from './tips.js'



export class ElevatorPitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tipsFlag: true,
    };
  }
  
  tipsFlagChange() {
      this.setState({tipsFlag: !this.state.tipsFlag});
  }  
	
	render() {
		return(
		<div>
      { this.state.tipsFlag && <TipsElevatorPitch onClick={() => this.tipsFlagChange()} /> }      		
		        <Header className="header" title={'エレベーターピッチ'}/>
        <ShowTips  onClick={() => this.tipsFlagChange()} />    		        
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
		);
	}
}
