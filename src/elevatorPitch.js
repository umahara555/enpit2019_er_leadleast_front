import React, {Component} from 'react';
import './elevatorPitch.css';
import {Header} from './Header.js'

export class ElevatorPitch extends Component {
	
	render() {
		return(
		<div>
		        <Header className="header" title={'エレベーターピッチ'}/>
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